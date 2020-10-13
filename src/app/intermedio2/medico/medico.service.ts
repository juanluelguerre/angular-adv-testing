import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(public http: HttpClient) { }

  getMedicos() {

    // Just an example. We supose the service return a list of medicos.
    return this.http.get('...');
  }

}
