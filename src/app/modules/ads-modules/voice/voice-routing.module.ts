import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVoiceComponent } from './components/create-voice/create-voice.component';

const routes: Routes = [
  { path: 'create',component: CreateVoiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoiceRoutingModule { }
 