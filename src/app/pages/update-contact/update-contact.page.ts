import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.page.html',
  styleUrls: ['./update-contact.page.scss'],
})
export class UpdateContactPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public toast: ToastController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.getContact(this.id).subscribe((data) => {
      this.editForm = this.formBuilder.group({
        firstName: [data['firstName']],
        lastName: [data['lastName']],
        email: [data['email']],
        phone: [data['phone']],
        address: [data['address']]
      })
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      address: ['']
    })
  }

  onSubmit() {
    this.crudService.update(this.id, this.editForm.value);
    
  }

}
