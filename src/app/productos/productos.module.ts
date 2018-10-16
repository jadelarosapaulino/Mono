import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProductosRouting } from './productos.routing';
import { FileUploadModule } from 'ng2-file-upload';

// Componentes
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    ProductosRouting,
    Ng2SmartTableModule,
    FileUploadModule,
    NgbModule
  ],
  declarations: [
    AgregarComponent,
    ListaComponent
  ]
})
export class ProductosModule { }
