import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  base;
  altura;
  rest;
  
  getArea(){
    return this.rest = `El Area de su rectangulo es: ${this.base*this.altura}`;
   }
}
