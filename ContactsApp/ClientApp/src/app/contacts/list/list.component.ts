import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { ContactsService } from "../contacts.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    });
  }

  deleteContact(id) {
    this.contactsService.deleteContact(id).subscribe(res => {
      this.contacts = this.contacts.filter(item => item.id !== id);
    });
  }
}
