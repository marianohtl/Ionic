import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  //Usando recurso do Angular

// 0º verificar modulos em shared > ReactiveFormsModule,

  // 1º criar prop FormGroup
  authForm: FormGroup

  // 2º - criar prop privada
  constructor(private fb: FormBuilder) {}
  //formBuilder - facilitador para construir instâncias de formscontrols, formgroup ou formarrays

  ngOnInit(): void {
  // 3º - chamada no ciclo de vida
     this.createForm();
  }

  //4º - Criar método com formGroup e validadores
  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  //5º  - Ir ao template Login

  // fb.group -> dois parâmetros (1º objeto, onde key > nome form control , 2ª valor inicial + validador ;)
  // Ex - validador , valor obrigatório && valor formato e-mail   _   validador , valor obrigatório && quantidade mínima de caracteres


  //10º submit para mostrar os dados captados após validação
  onSubmit(): void{
    event.preventDefault();
    console.log('AuthForm: ', this.authForm.value );
}


//  Métodos para acessar os formControls e aparecer msg de erro validação

// 1.1 - Métodos gets
get email() : FormControl{
  return <FormControl>this.authForm.get('email') //esse método retorna abstract control, por isso devemos fazer um casting com <formControl>
}
get senha() : FormControl{
  return <FormControl>this.authForm.get('password')
}
}