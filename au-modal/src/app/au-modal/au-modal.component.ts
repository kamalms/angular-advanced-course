import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { ModalserviceService } from './modalservice.service';

@Component({
  selector: 'au-modal',
  templateUrl: './au-modal.component.html',
  styleUrls: ['./au-modal.component.scss']
})
export class AuModalComponent implements OnInit {

  @Input()
  body : TemplateRef<any>;

  @Input()
  hideonesc : boolean = true;

  @Input()
  outsideclickdontclose : boolean = false;

  @Input()
  context : any;

  constructor(private modalservice : ModalserviceService, private eventmanager : EventManager) { }

  ngOnInit() {
    this.eventmanager.addGlobalEventListener("window", "keyup.esc", () =>{
      if (this.hideonesc)
      this.detectOutsideClick();
    })
  }
  detectOutsideClick() {
    this.modalservice.close();
  }

  dontcloseoninnerClick(e : KeyboardEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  outsideclickEvent() {
    if(!this.outsideclickdontclose) {
      this.detectOutsideClick();
    }
  }
}
