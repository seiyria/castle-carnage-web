
import { Component } from 'angular2/core';
import template from './toolbar.html';
import { ProjectComponent } from '../project.component';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/components/dropdown';

@Component({
  selector: 'toolbar',
  directives: [DROPDOWN_DIRECTIVES],
  inputs: ['project', 'api'],
  template
})
export class ToolbarComponent extends ProjectComponent {

  save() {
    console.log('save', this.internalProject);
  }

}