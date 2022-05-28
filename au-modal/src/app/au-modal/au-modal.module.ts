import { CustommodalopenDirective } from './custommodalopen.directive';




import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuModalComponent } from './au-modal.component';
import { ModalserviceService } from './modalservice.service';



@NgModule({
  declarations: [AuModalComponent,CustommodalopenDirective],
  imports: [
    CommonModule
  ],
  exports: [AuModalComponent,CustommodalopenDirective]
})
export class AuModalModule {



static forRoot(): ModuleWithProviders{

  return {
    ngModule: AuModalModule,
    providers : [ModalserviceService]
  }
}





}



