import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.page.html',
  styleUrls: ['./create-contact.page.scss'],
})
export class CreateContactPage implements OnInit {
  contactForm: FormGroup;

  constructor(
    private crudService: CrudService,
    public formBuilder: FormBuilder,
    private router: Router,
	private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      address: ['']
    })
  }

	onSubmit() {
    if (!this.contactForm.valid) {
      return false;
    } else {
      this.crudService.create(this.contactForm.value)
        .then(() => {
			
          this.contactForm.reset();
          this.router.navigate(['/contact-list']);
        }).catch((err) => {
          console.log(err)
        });
    }
  }
  
 /* async presentToast() {
  let toast = await this.toastCtrl.create({
    message: 'User was added successfully',
    duration: 3000,
    position: 'top'
  });
  
  return await toast.present();

}*/
  

}
