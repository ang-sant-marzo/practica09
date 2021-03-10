import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  proveedor: any = {
    nombre: '',
    cif: ''
  }

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
  }

  addProveedor() {
    this.proveedoresService.addProveedor(this.proveedor);
  }

}
