import { CocktailService } from './cocktail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ShowMoviesDirective } from './show-movies.directive';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { DevelopperComponent } from './components/developper/developper.component';
import { SkillComponent } from './components/skill/skill.component';
import { OnomatopiaComponent } from './components/onomatopia/onomatopia.component';
import { HomeComponent } from './components/home/home.component';
import { OnomatopiaListComponent } from './components/onomatopia-list/onomatopia-list.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShowMoviesDirective,
    SignUpComponent,
    UserProfileComponent,
    MenuComponent,
    SearchMovieComponent,
    DevelopperComponent,
    SkillComponent,
    OnomatopiaComponent,
    HomeComponent,
    OnomatopiaListComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
