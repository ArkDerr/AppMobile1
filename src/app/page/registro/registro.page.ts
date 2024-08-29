import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email=""
  password=""
  constructor(private firebase:FirebaseService, private router:Router) { }

  ngOnInit() {
  }

  async registro(){
    let usuario=await this.firebase.registro(this.email,this.password);
    console.log(usuario);
    this.router.navigateByUrl("login");
  }

}
