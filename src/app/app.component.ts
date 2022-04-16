import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numId: number = 0;
  currentTasks: Array<Item> = [
    {id: this.numId++, description: "eat"}
  ]

  completedTasks: Array<string> = ['sleap'];

  addTask(myForm: NgForm): void{
    this.currentTasks.push({id: this.numId++, description: myForm.value.task});
  }

  onDelete(workId: number): void{
    this.currentTasks = this.currentTasks.filter(task => task.id != workId);
  }

  onComleted(workId: number): void{
    this.currentTasks.forEach(task => {
      if (task.id == workId){
        this.completedTasks.push(task.description);
        this.currentTasks.splice(this.currentTasks.indexOf(task), 1);
      }
    });
  }
}
