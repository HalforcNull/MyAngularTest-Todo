import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  todos: TodoItem[];
}

class TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

