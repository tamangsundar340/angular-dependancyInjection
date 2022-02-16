import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {


  product = "";

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.product = this.service.product;
  }

  clickButton(){
    this.service.messageAlert();
  }

}
