import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})

export class AgregarComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  
  MarcasLista = 
  [
    {
      id: 1, 
      name: 'Amazon'
    }, 
    {
    id: 2,
    name: 'Acer'
    }, 
    {
    id: 3,
    name: 'AT&T'
    }, 
    {
    id: 4,
    name: 'DELL'
    }
  ];
  Modelos: any[] = [
    {
      id:1, name:'Fire HD 7'
    }, 
    {
      id:2, name:'Fire HD 8'
    }, 
    {
      id:3, name:'Iconia 7'
    }, 
    {
      id:4, name:'Iconia 8'
    }, 
    {
      id:5, name:'Vue'
    },
    {
      id:6, name:'Trek HD 8'
    }, 
    {
      id:7, name:'Trek HD2 8'
    }
  ];

  Categorias: any[] = [
    {
      id:1, name:'Smartphone'
    }, 
    {
      id:2, name:'Smart TV'
    }, 
    {
      id:3, name:'Tablet'
    }, 
    {
      id:4, name:'Monitor'
    }, 
    {
      id:5, name:'Mouse'
    },
    {
      id:6, name:'Audifonos'
    }, 
    {
      id:7, name:'Bocinas'
    }
  ];

  Caracteristicas: any[] = [
    {
      id:1, name:'Bluetooh'
    }, 
    {
      id:2, name:'Memoria'
    }, 
    {
      id:3, name:'NFC'
    }, 
    {
      id:4, name:'GSM'
    }, 
    {
      id:5, name:'Wifi'
    },
    {
      id:6, name:'Fingerprint'
    }, 
    {
      id:7, name:'USB'
    }
  ];

  Rom: any[] = [
    {
      id:1, name:'8'
    }, 
    {
      id:2, name:'16'
    }, 
    {
      id:3, name:'32'
    }, 
    {
      id:4, name:'64'
    }, 
    {
      id:5, name:'128'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.uploader);
  }

  Mostrar() {    
    this.uploader.queue.forEach(i => {
      console.log(i._file.name + ' ' + i._file.size);
    });
  }
}
