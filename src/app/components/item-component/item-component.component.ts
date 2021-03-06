import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent implements OnInit {
  imagenSubir:File;
  imagenTemp:string;
  constructor() { }

  ngOnInit() {
  }

  seleccionImagen(archivo:File){
    if(!archivo){
      this.imagenSubir =  null;
      return;
    }
    if(archivo.type.indexOf('image')<0){
      // swal('Solo Imagenes','El archivo seleccionado debe ser una imagen','error');
      this.imagenSubir =  null;
      return;
    }
    this.imagenSubir =  archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result.toString();
  }
  cambiarImagen(){
    // this._us.cambiarImagen(this.imagenSubir,this.usuario._id);
  }

}
