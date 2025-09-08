import { Routes } from '@angular/router';
<<<<<<< HEAD
import { KanbanBoardComponent } from './books/kanban/kanban-board.component';
import { BookCreateComponent } from './books/management/book-create.component';
import { BookDetailComponent } from './books/management/book-detail.component';
import { BookEditComponent } from './books/management/book-edit.component';
import { BookListComponent } from './books/management/book-list.component';
=======
import { BookDetailComponent } from './books/book-detail.component';
import { BookEditComponent } from './books/book-edit.component';
import { BookListComponent } from './books/book-list.component';
>>>>>>> 0efb669 (solution--rules-for-angular)

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/create', component: BookCreateComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: 'book/:id/edit', component: BookEditComponent },
<<<<<<< HEAD
  { path: 'kanban', component: KanbanBoardComponent },
=======
>>>>>>> 0efb669 (solution--rules-for-angular)
  { path: '**', redirectTo: '' }
];
