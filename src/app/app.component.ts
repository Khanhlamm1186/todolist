import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Todo[] = [];
  newTodo:string;
//hàm lưu công việc khi thêm vào
  saveTodo(){

    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true
      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert('please Enter Todo');
    }
  }
//hàm đánh dấu công việc đã hoàn thành
  done(id:number){

    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
//hàm xóa công việc
  remove(id:number){

    this.todos = this.todos.filter((v,i) => i !== id);
  }
}
