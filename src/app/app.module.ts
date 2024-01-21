import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoPipe } from './todo.pipe';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'signin', component: TodoReactiveFormComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeadBarComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoTemplateDrivenFormComponent,
    TodoReactiveFormComponent,
    TodoPipe,
    HeadBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
