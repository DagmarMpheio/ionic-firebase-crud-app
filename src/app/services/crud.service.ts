import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

export class Contact {
  $key: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  //criar um contacto
  create(contact: Contact) {
    return this.ngFirestore.collection('contacts').add(contact);
  }

  //pegar todos os contactos
  getContacts() {
    return this.ngFirestore.collection('contacts').snapshotChanges();
  }

  //pegar contacto pelo id
  getContact(id) {
    return this.ngFirestore.collection('contacts').doc(id).valueChanges();
  }

  //actualizar contacto
  update(id, contact: Contact) {
    this.ngFirestore.collection('contacts').doc(id).update(contact)
      .then(() => {
        this.router.navigate(['/contact-list']);
      }).catch(error => console.log(error));
  }

  //excluir um contacto
  delete(id: string) {
    this.ngFirestore.doc('contacts/' + id).delete();
  }
}


