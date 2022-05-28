import { ModalserviceService } from './modalservice.service';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[custommodalopen]'
})
export class CustommodalopenDirective {
   elements : HTMLBaseElement[];
  constructor(private templateref : TemplateRef<any>, private viewcontainer: ViewContainerRef, private modalservice : ModalserviceService) {

  }
  @Input()
  set custommodalopen(el){



    if (el.length) {
      this.elements = el;
    } else {
      this.elements = [el];
    }

    this.elements.forEach(el =>{
      el.addEventListener('click', this.clickhandler);
    })

  }

  clickhandler =  ( () => {
    this.viewcontainer.clear();
    this.viewcontainer.createEmbeddedView(this.templateref);
  }).bind(this)

  ngOnInit() {
    this.modalservice.close$.subscribe((d : any) =>{
      this.viewcontainer.clear();
    });
  }
  ngOnDestory() {
    this.elements.forEach(el => el.removeEventListener('click', this.clickhandler))
  }


}
