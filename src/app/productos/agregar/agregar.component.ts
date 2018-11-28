import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

ProductoForm: FormGroup;

  MarcasLista: any[] =
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
      id:1, name:'Bluetooh', idname: 'bluetooh'
    },
    {
      id:2, name:'Memoria Expandible', idname: 'memoriasd'
    },
    {
      id:3, name:'NFC', idname: 'nfc'
    },
    {
      id:4, name:'Redes Moviles', idname: 'redesmoviles', source: [
        {id: 1, name: 'GSM',idname: 'gsm'},
        {id: 2, name: '3G',idname: '3G'},
        {id: 3, name: '4G',idname: '4G'},
        {id: 5, name: 'LTE',idname: 'lte'},
        {id: 6, name: 'CDMA',idname: 'cdma'}
      ]
    },
    {
      id:5, name:'Wifi', idname: 'wifi'
    },
    {
      id:6, name:'Fingerprint', idname: 'redesmoviles'
    },
    {
      id:7, name:'USB', idname: 'usb'
    },
    {
      id: 8, name: 'Radio FM', idname: 'radiofm'
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

  OS: any [] =
  [
    {
      id: 1, name: 'Android'
    },
    {
      id: 2, name: 'IOS'
    },
    {
      id: 3, name: 'Windows'
    }
  ];

  isCollapsed = false;

  constructor() { }

  ngOnInit() {
    console.log(this.uploader);
  }

  CrearFormulario() {
    this.ProductoForm = new FormGroup({
      producto_numero: new FormControl(0),
      marca_numero: new FormControl(0),
      categoria_numero: new FormControl(0),
      imei: new FormControl(0, Validators.max(15)),
      serie: new FormControl(''),
      capacidad_numero: new FormControl(0),
      os_numero: new FormControl(0),
      comentarios: new FormControl(''),
      age: new FormControl(''),

    })
  }

  Mostrar() {
    this.uploader.queue.forEach(i => {
      console.log(i._file.name + ' ' + i._file.type);
    });
  }
}
