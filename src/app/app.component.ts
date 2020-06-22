import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notepad';

  colors = ['red','green','blue'];
  fonts = ['arial','consolas','tahoma'];
  sizes = ['12px','14px','30px'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  setColor(value:string){
    this.selectedColor = value;
  }

  setFont(value:string){
    this.selectedFont = value;
  }

  setSize(value:string){
    this.selectedSize = value;
  }
}
