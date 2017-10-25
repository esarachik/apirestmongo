import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stock;
  name = null;
  constructor(private _stockService: StockService) { }
  ngOnInit() {
    this.stock = [
      {
        name : "Item 1"
      },
      {
        name : "Item 2"
      },
    ]
  }

  addItem(){
    this.stock.push({
      name: this.name
    })
  }

  deleteItem(name){
    debugger;
    for(var i = 0 ; i<this.stock.length; i++)
    {
      if(this.stock[i].name==name)
      {
        this.stock.splice(i,1);        
      }
    }
  }
}
