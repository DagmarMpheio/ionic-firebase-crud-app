import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';


export class Contact {
  $key: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
  Contacts: Contact[];

  constructor(
  private crudService: CrudService,
  ) { }

  ngOnInit() {
    this.crudService.getContacts().subscribe((res) => {
      this.Contacts = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...t.payload.doc.data() as Contact
        };
      })
    });
  }

  contactList() {
    this.crudService.getContacts()
      .subscribe((data) => {
        console.log(data);
      })
  }

  remove(id) {
    console.log(id);
    if (window.confirm('Tem a certeza que deseja excluir?')) {
      this.crudService.delete(id);
    }
  }
  

}
