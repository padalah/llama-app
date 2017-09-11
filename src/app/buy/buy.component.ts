import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styles: []
})
export class BuyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = ["Chris Evan, yarn","Marcus Romeo, beans","Harry Potter, wool","Hermoine Granger, yarn-2 wool-1" ]
  newName = "";
  newAddress = "";
  newEmail = "";
  newProd = "";
  newItem;

  pushItem = function(){
    if(this.newName != "" && this.newAddress != "" && this.newEmail != "" && this.newProd != ""){
      this.newItem= this.newName + ", " + this.newProd;
      this.items.push(this.newItem);
      this.newName = "";
      this.newAddress = "";
      this.newEmail = "";
      this.newProd = "";
    }
  }

  removeItem = function(index){
    if(index>3){
      this.items.splice(index, 1); //removes 1 item starting from index
    }
  }
}


