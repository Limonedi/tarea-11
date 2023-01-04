import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public formLogin!: FormGroup;
  correo!:string;

  constructor(private formBuilder:FormBuilder){

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      password:['', 
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      term:['',
        [
          Validators.required,
          Validators.requiredTrue
        ]
      ]
    })

    this.loadAPI()
  }

  //function para simular la carga de un API
  loadAPI():any{
    const response = {
      email: 'docente@gmail.com',
      password: 'secret',
      term: true
    };

    this.formLogin.patchValue(response);
    
    
    /*
    this.formLogin.patchValue(
      {
        email:response.email,
        password: response.password,
        term: response.term
      }
    )
     */
    
  }


  send(): any{
    console.log(this.formLogin.value)
  }
  /*constructor() { }

  ngOnInit(): void {
  }*/

}
