import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContentDto } from '@api/models';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {

  readonly form: FormGroup = new FormGroup({
    contentId: new FormControl(null, []),
    name: new FormControl(null, [Validators.required])
  });

  get content(): ContentDto { return this.form.value as ContentDto; }

  @Input("content") set content(value: ContentDto) {
    if(!value?.contentId) {
      this.form.reset({
        name: null
      })
    } else {
      this.form.patchValue(value);
    }
  }

  @Output() save: EventEmitter<ContentDto> = new EventEmitter();

}

@NgModule({
  declarations: [
    ContentDetailComponent
  ],
  exports: [
    ContentDetailComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ContentDetailModule { }
