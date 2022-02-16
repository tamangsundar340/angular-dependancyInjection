import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }


  clickButton(){
    this.service.messageAlert();
  }

}
