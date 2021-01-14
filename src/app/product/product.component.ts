import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductToCompare } from '../models/product-to-compare';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter<ProductToCompare>();


  checked = false;
  indeterminate = false;
  labelPosition = 'before';
  disabled = false;
 


  constructor(){}

  ngOnInit(): void {
  }

  setAll(event, product){
    this.checked=event;
    let productToCompare = new ProductToCompare(this.checked, product);
    this.notify.emit(productToCompare);
  }

  share(){}

}
