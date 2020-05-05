import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { DevelopperComponent } from './components/developper/developper.component';
import { HomeComponent } from './components/home/home.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

const ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'user', component: UserProfileComponent },
{ path: 'signup', component: SignUpComponent },   
{ path: 'searchmovie', component: SearchMovieComponent },   
{ path: 'developper', component: DevelopperComponent },   
{ path: 'cocktails', component: CocktailListComponent },   
];

export { ROUTES };