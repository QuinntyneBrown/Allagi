import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentDto, ContentService } from '@api';
import { combine } from '@core';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentsComponent {

  private readonly _saveSubject: Subject<ContentDto> = new Subject();
  private readonly _selectSubject: Subject<ContentDto> = new Subject();
  private readonly _createSubject: Subject<void> = new Subject();
  private readonly _deleteSubject: Subject<ContentDto> = new Subject();
  private readonly _refreshSubject: BehaviorSubject<null> = new BehaviorSubject(null);

  readonly vm$ = this._refreshSubject
  .pipe(
    switchMap(_ => combine([
      this._contentService.getContents(),
      this._selected$,
      this._createSubject.pipe(switchMap(_ => this._handleCreate())),
      this._saveSubject.pipe(switchMap(content => this._handleSave(content))),
      this._selectSubject.pipe(switchMap(content => this._handleSelect(content))),
      this._deleteSubject.pipe(switchMap(content => this._handleDelete(content)))
    ])),
    map(([contents, selected]) => ({ contents, selected }))
  );

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _contentService: ContentService,
    private readonly _router: Router,  
  ) { }

  private _handleSelect(content: ContentDto): Observable<boolean> {
    return from(this._router.navigate(["/","workspace","contents","edit", content.contentId]));
  }

  private _handleCreate(): Observable<boolean> {
    return from(this._router.navigate(["/","workspace","contents","create"]));
  }

  private _handleSave(content: ContentDto): Observable<boolean> {
    return (content.contentId ? this._contentService.updateContent({ content }) : this._contentService.createContent({ content }))
    .pipe(      
      switchMap(_ => this._router.navigate(["/","workspace","contents"])),
      tap(_ => this._refreshSubject.next(null))
      );    
  }

  private _handleDelete(content: ContentDto): Observable<boolean> {
    return this._contentService.removeContent(content.contentId)
    .pipe(
      switchMap(_ => this._router.navigate(["/","workspace","contents"])),
      tap(_ => this._refreshSubject.next(null))
    );
  }

  private _selected$: Observable<any> = this._activatedRoute
  .paramMap
  .pipe(
    map(x => x.get("contentId")),
    switchMap((contentId: string) => contentId ? this._contentService.getContentById(contentId) : of({} as ContentDto)));

  onSave(content: ContentDto) {
    this._saveSubject.next(content);
  }

  onSelect(content: ContentDto) {
    this._selectSubject.next(content);
  }

  onCreate() {
    this._createSubject.next();
  }

  onDelete(content: ContentDto) {
    this._deleteSubject.next(content);
  }
}
