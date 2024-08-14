import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistRoutingModule } from './assist-routing.module';
import { FaqComponent } from './pages/faq/faq.component';
import { ChatWithBrainiacComponent } from './pages/chat-with-brainiac/chat-with-brainiac.component';


@NgModule({
  declarations: [
    ChatWithBrainiacComponent,
    FaqComponent,
  ],
  imports: [
    CommonModule,
    AssistRoutingModule,
  ]
})
export class AssistModule { }
