import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoiceRoutingModule } from './voice-routing.module';
import { CreateVoiceComponent } from './components/create-voice/create-voice.component';


@NgModule({
  declarations: [
    CreateVoiceComponent,
  ],
  imports: [
    CommonModule,
    VoiceRoutingModule
  ]
})
export class VoiceModule { }
