import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { UsuariosComponent } from './features/usuarios/usuarios.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'usuarios',
                component: UsuariosComponent
            }
        ]
    }
];
