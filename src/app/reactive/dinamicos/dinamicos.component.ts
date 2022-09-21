import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array([
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding',Validators.required  ],
      [ 'Silent Hills',Validators.required  ],
    ], Validators.required )
  });


  nuevoFavorito: FormControl = this.fb.control('', [ Validators.required, Validators.minLength(3) ]);

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { console.log( this.miFormulario.value ); }

  // ngOnInit(): void {
  //   this.miFormulario.reset({
  //     nombre: 'Oklamar',
  //   })
  // }

  validarCampo(campo: string){
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched;
  }
  validarNuevoFavorito(){
    return this.nuevoFavorito.errors
           && this.nuevoFavorito.touched;
  }
  agregarFavorito() {
    if ( this.nuevoFavorito.invalid ) { return; }

    // this.favoritosArray.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.favoritosArray.push( this.fb.control(this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();

  }

  borrar( cual: number ) {
    console.log("CUAL A BORRAR: ", cual);
    this.favoritosArray.removeAt(cual);
  }

  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    // imprimir el valor del formulario, sólo si es válido
    console.log(this.miFormulario.value);
  }

}
