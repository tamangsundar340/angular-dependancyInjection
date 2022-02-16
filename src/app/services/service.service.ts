import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  product = "Laptop";

  messageAlert(){
    alert("Thanks for subscribe")
  }
}
