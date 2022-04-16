import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currented-item',
  templateUrl: './currented-item.component.html',
  styleUrls: ['./currented-item.component.css']
})
export class CurrentedItemComponent{

  @Input() text!: string;
  @Input() workId!: number;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onComletedTask = new EventEmitter();

  delete(): void{
    this.onDeleteTask.emit(this.workId as number)
  }

  completed(): void{
    this.onComletedTask.emit(this.workId as number)
  }

}
