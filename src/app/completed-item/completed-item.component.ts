import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-completed-item',
  templateUrl: './completed-item.component.html',
  styleUrls: ['./completed-item.component.css']
})
export class CompletedItemComponent {

  @Input() text!: string;
}
