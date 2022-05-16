import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { ResultListComponent } from './pages/result-list/result-list.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { TakeQuizComponent } from './pages/take-quiz/take-quiz.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quizzes/take', component: TakeQuizComponent },
  { path: 'quizzes/create', component: CreateQuizComponent },
  { path: 'results', component: ResultListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
