import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firebase: AngularFireAuth) {}

  async auth(email: string, password: string) {
    const request = await this.firebase.signInWithEmailAndPassword(
      email,
      password
    );
    return request;
  }

  async registro(gEmail: string, gPassword: string) {
    const request = await this.firebase.createUserWithEmailAndPassword(
      gEmail,
      gPassword
    );
    return request;
  }

  async recuperar(gEmail: string) {
    const request = await this.firebase.sendPasswordResetEmail(gEmail);
    return request;
  }

  async logout(){
    await this.firebase.signOut();
  }
}
