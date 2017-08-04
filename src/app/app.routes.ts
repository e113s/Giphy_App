import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*
    Para agregar soporte de enrutamiento a la aplicación, necesitamos hacer tres cosas:
    1. Crear las rutas necesarias.
    2. Configurar @NgModule.
    3. Decirle a Angular dónde cargar el contenido de estas rutas.
*/

export const ROUTES = [
    {path: '', component: HomeComponent},
    {path: 'trending', component: TrendingComponent},
    {path: 'search', component: SearchComponent},
    {path: '**', component: PageNotFoundComponent}
];