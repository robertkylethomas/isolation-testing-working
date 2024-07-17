import { Component } from '@angular/core';

type Llama = {
  name: string;
  imageFile: string;
};

@Component({
  selector: 'ld-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent {
  llamas: Llama[] = [
    { name: 'Richard', imageFile: '1.jpg' },
    { name: 'Bonnie', imageFile: '2.jpg' }
  ];

  isListVisible(): boolean {
    return this.llamas.length > 0;
  }
}
