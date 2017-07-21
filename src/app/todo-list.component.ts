import {Component} from '@angular/core';
/*import {TODOS} from './todos';*/

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodolistComponent {
    items: Todoitem[] =    [ {id: 1, userid: 1, title: 'todo item 1, belong to user 1', completed: false},
    {id: 2, userid: 1, title: 'todo item 2, belong to user 1', completed: false},
    {id: 3, userid: 1, title: 'todo item 3, belong to user 1', completed: false},
    {id: 4, userid: 2, title: 'todo item 4, belong to user 2', completed: false}];

    setItemComplete(item: Todoitem) {
        item.completed = true;
        /* do some call */
    }

    setItemIncomplete(item: Todoitem) {
        item.completed = false;
        /* call here */
    }
}

class Todoitem {
    id: number;
    userid: number;
    title: string;
    completed: boolean;
}
