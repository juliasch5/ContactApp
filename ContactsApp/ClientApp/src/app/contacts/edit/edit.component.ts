import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from "../contact";
import { ContactsService } from "../contacts.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  contact: Contact;
  editForm;

  constructor(
    public contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      password: [''],
      category: [''],
      phone: [''],
      dateOfBirth: ['']
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['contactId'];

    this.contactsService.getContact(this.id).subscribe((data: Contact) => {
      this.contact = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    console.log(formData.value);
    this.contactsService.updateContact(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('contact/list');
    });
  }
}
