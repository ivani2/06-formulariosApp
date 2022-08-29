import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup =  new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(4),
  // })

  miFormulario: FormGroup =  this.formBuilder.group({
    nombre: [ , [Validators.required, Validators.minLength(3)],   ],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(0)] ],
  })

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'DAMN CD',
      precio: 250,
    })
  }


  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors
           && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log( this.miFormulario.value );
    this.miFormulario.reset();
  }

}
