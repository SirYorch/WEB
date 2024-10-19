import { Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { FormAgregarComponent } from './form-agregar/form-agregar.component';
import { CursosComponent } from './cursos/cursos.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'cursos',
        component: CursosComponent
    },
    {
        path: 'form-agregar',
        component: FormAgregarComponent
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
];
