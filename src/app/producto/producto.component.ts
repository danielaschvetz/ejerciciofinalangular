import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {
 productos: Array<Producto> = [
    { nombre: 'camisa', costo: '100' },
    { nombre: 'vestido', costo: '200' },
    { nombre: 'pantalon', costo: '300' },
    { nombre: 'pollera', costo: '150' },
  ];
esvisible:boolean=true;

public ocultarlista() {
  this.esvisible= !this.esvisible;
}


}
