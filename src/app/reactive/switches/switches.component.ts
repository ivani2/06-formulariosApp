import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup =  this.fb.group({
    genero: [ 'M', Validators.required ],
    notificaciones: [ true, Validators.required ],
    condiciones: [ false, Validators.requiredTrue ],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset( {
      ...this.persona,
      condiciones: false
    } );

    // this.miFormulario.get( "condiciones" )?.valueChanges.subscribe( newValue => {
    //   console.log( newValue );
    // } );

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      // console.log( form );
      // delete form.condiciones;
      this.persona = rest;
    } );



  }


  guardar(): void {
    const formValue =  { ...this.miFormulario.value };
    delete formValue.condiciones;
    this.persona =  formValue;
    console.log( formValue );
  }

}
