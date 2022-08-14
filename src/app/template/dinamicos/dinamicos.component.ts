import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  persona: Persona ={
    nombre: 'Ivani2',
    favoritos: [
      { id: 1, nombre: 'Metal Gear V: Phantom Pain' },
      { id: 2, nombre: 'Silent Hills'},
      { id: 3, nombre: 'Death Stranding'},
    ]
  }

  nuevoFavorito: string = "";

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log( "Persona guardada" );
    this.miFormulario.resetForm({
      nombre: "Nombre Ejemplo"
    });
  }

  nombreValido(): boolean{
    // return miFomulario
    return this.miFormulario?.controls['nombre']?.invalid &&
    this.miFormulario?.controls['nombre']?.touched;
  }

  agregarFavorito(){

    const nuevoJuegoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    };

    this.persona.favoritos.push({ ...nuevoJuegoFavorito });

    console.log( nuevoJuegoFavorito );

    this.nuevoFavorito = "";
  }

  eliminarFavorito( cual: number ){
    this.persona.favoritos.splice(cual, 1);
  }
}
