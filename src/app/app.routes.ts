import { Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { FormularioComponent } from './formulario/formulario.component';

export const routes: Routes = [
    {path: 'calendario', component: CalendarioComponent},
    {path: 'formulario', component: FormularioComponent},
    //Ruta por defecto
    {path: '', pathMatch:'full', redirectTo: 'calendario'}
];
