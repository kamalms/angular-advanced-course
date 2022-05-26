import { TabComponent } from './../tab/tab.component';
import { Component, ContentChildren, Input, OnInit, QueryList, TemplateRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./../tab-panel.component.scss']
})
export class TabsComponent implements OnInit {

  @ContentChildren(TabComponent) tabs : QueryList<TabComponent>
  @Input() tabstemplate : TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log('content', this.tabs);
    let seleted = this.tabs.find(tab => tab.selected)
    if(!seleted) {
      this.tabs.first.selected = true;
    }
  }

  tabSelection(tab : TabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return  {
      tabs : this.tabs
    }
  }

}
