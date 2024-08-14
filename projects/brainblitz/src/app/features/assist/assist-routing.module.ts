import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatWithBrainiacComponent } from './pages/chat-with-brainiac/chat-with-brainiac.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', component: ChatWithBrainiacComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistRoutingModule { }
