import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  base;
  altura;
  rest;
  
  getPerimeter(){
    return this.rest = `El perimetro de su rectangulo es: ${(this.base*2)+(this.altura*2)}`;
   }
}
