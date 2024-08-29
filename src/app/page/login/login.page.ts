import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email=""
  password=""

  constructor(private firebase:FirebaseService, private router:Router, private alertcontroller:AlertController) { }

  ngOnInit() {
  }

async popAlert(){
  const alert = await this.alertcontroller.create({
    header:'Error',
    message:'Usuario o Contrasema incorrecta',
    buttons:['OK']
  })
  await alert.present();
}

  async login(){
    try {
      let usuario=await this.firebase.auth(this.email,this.password);
      console.log(usuario);
      this.router.navigateByUrl("principal");
    } catch (error) {
      console.log(error);
      this.popAlert();
    }
  }

  async recuperar(){
    let usuario=await this.firebase.recuperar(this.email);
    console.log(usuario);
  }

async registro(){
    let usuario=await this.firebase.registro(this.email,this.password);
    console.log(usuario); 
  }
}
