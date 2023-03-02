import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-c',
  templateUrl: './image-c.component.html',
  styleUrls: ['./image-c.component.css']
})
export class ImageCComponent {

  @Input() gastos_1: string = "";
  @Input() gastos_2: string = "";

  @Input() h3: string = "";
  @Input() text: string = "";

  @Input() url: string = "";
}
