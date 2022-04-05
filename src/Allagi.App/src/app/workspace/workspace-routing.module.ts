import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
  { 
    path: '', component: WorkspaceComponent,
    children: [
      { path: '', loadChildren: () => import('./contents/contents.module').then(m => m.ContentsModule) }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
