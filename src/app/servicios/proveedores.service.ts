import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  proveedores: any = [
    {nombre: 'Iberdrola', cif: 'A12345678'},
    {nombre: 'Gas Natural', cif: 'A87654321'},
    {nombre: 'Vodafone', cif: 'A6789543'}
  ];

  constructor() { }

  getProveedores() {
    return this.proveedores;
  }

  addProveedor(proveedor: any) {
    this.proveedores.push(proveedor);
  }


}
