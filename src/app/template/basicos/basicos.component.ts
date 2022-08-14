import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initialFormValue = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

  // guardar( miFormulario: NgForm ): void{

  guardar(): void{
    // console.log( this.miFormulario );
    console.log( "Posteo correcto" );
    this.miFormulario.resetForm({
      producto: "Nombre de Producto",
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid &&
    this.miFormulario?.controls['producto']?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls['precio']?.value<=1 &&
    this.miFormulario?.controls['precio']?.touched
  }
}
