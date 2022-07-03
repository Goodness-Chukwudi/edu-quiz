import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetQuizComponent } from './components/get-quiz/get-quiz.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { TakeQuizComponent } from './pages/take-quiz/take-quiz.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { QuestionComponent } from './components/question/question.component';
import { RecordsComponent } from './pages/records/records.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ResultComponent } from './pages/result/result.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileSetupComponent } from './pages/profile-setup/profile-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GetQuizComponent,
    CreateQuizComponent,
    TakeQuizComponent,
    PageHeadingComponent,
    QuestionComponent,
    RecordsComponent,
    QuizComponent,
    ResultComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    ProfileSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
