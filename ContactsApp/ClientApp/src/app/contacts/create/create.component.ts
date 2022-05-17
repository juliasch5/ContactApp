import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactsService } from "../contacts.service";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm;

  constructor(
    public conatctsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [''],
      password: [''],
      category: [''],
      phone: [''],
      dateOfBirth: ['']
    });
  }

  ngOnInit() { }

  onSubmit(formData) {
    console.log(formData.value);
    this.conatctsService.createContact(formData.value).subscribe(res => {
      this.router.navigateByUrl('contact/list');
    });
  }
}
