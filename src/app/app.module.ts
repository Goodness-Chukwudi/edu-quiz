import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetQuizComponent } from './components/get-quiz/get-quiz.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { ResultListComponent } from './pages/result-list/result-list.component';
import { TakeQuizComponent } from './pages/take-quiz/take-quiz.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GetQuizComponent,
    CreateQuizComponent,
    QuizListComponent,
    ResultListComponent,
    TakeQuizComponent,
    PageHeadingComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
