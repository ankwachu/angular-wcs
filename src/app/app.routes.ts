import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';


const ROUTES: Routes = [
{ path: '', component: UserProfileComponent },
{ path: 'user', component: UserProfileComponent },
{ path: 'signup', component: SignUpComponent },   
{ path: 'searchmovie', component: SearchMovieComponent },   
];

export { ROUTES };