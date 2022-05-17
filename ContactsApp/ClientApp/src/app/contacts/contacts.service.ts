import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contact } from "./contact";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiURL = "http://localhost:44453";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.apiURL + '/contact')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getContact(id): Observable<Contact> {
    return this.httpClient.get<Contact>(this.apiURL + '/contact/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(this.apiURL + '/contact', JSON.stringify(contact), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateContact(id, contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(this.apiURL + '/contact/' + id, JSON.stringify(contact), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteContact(id) {
    return this.httpClient.delete<Contact>(this.apiURL + '/contact/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
