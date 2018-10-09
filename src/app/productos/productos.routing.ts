import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [{
    path: '',
    children: [
        {
            path: 'nuevo',
            component: AgregarComponent,
            data: {
                title: 'Agregar/Editar'
            }
        },
        {
            path: 'lista',
            component: ListaComponent,
            data: {
                title: 'Lista de productos'
            }
        }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductosRouting { }