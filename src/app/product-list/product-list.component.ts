import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { allowedNodeEnvironmentFlags } from 'process';
import { ProductToCompare } from '../models/product-to-compare';
import { products } from '../products';
import { ConfigService } from '../config/config.service';
import { Product } from '../models/product';
import { Compare } from '../models/compare';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];
  productsToCompare : ProductToCompare [] = [];
  availability = [
    {
      description: 'Disponibili',
      checked : true,
      indeterminate : false,
      labelPosition : 'before',
      disabled : false,
      color : 'black',
      number: 24,    
    },
    {
      description: 'In promozione',
      checked : true,
      indeterminate : false,
      labelPosition : 'before',
      disabled : false,
      color : 'black',
      number: 13,    
    },

  ]

  allFilters : Filter [] = [
    { 
      id: 1,
      type : "SCEGLI PER", 
      filters : [
          {
            subId : 1,
            checked : false,
            indeterminate : false,
            labelPosition : 'after',
            disabled : false,
            span: 'Disponibili',
            numberOf : 24, 
        },
        {
            subId : 1,
            checked : false,
            indeterminate : false,
            labelPosition : 'after',
            disabled : false,
            span: 'In promozione',
            numberOf : 13, 
        },
      ]   
    },
    { 
      id: 2,
      type : "MARCHE", 
      filters : [
          {
            subId : 1,
            checked : false,
            indeterminate : false,
            labelPosition : 'after',
            disabled : false,
            span: 'Ariston',
            numberOf : 4, 
        },
        {
            subId : 2,
            checked : true,
            indeterminate : false,
            labelPosition : 'after',
            disabled : false,
            span: 'Baxi',
            numberOf : 8, 
        },
        {
          subId : 3,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Ariston',
          numberOf : 12, 
      },
      ]   
    },
    { 
      id: 2,
      type : "TIPOLOGIA", 
      filters : [
          {
            subId : 1,
            checked : false,
            indeterminate : false,
            labelPosition : 'after',
            disabled : false,
            span: 'A condensazione',
            numberOf : 3, 
        },
        {
          subId : 2,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Camera Aperta',
          numberOf : 8, 
        },
        {
          subId : 3,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Camera Stagna',
          numberOf : 4, 
      },
      ]   
    },
    { 
      id: 4,
      type : "ALIMENTAZIONE", 
      filters : [
        {
          subId : 1,
          checked : false,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Elettrica',
          numberOf : 11, 
        },
        {
          subId : 2,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Metano',
          numberOf : 1, 
        },
       
      ]   
    },
    { 
      id: 5,
      type : "POTENZA NOMINALE (kW)", 
      filters : [
        {
          subId : 1,
          checked : false,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: '19.5',
          numberOf : 1, 
        },
        {
          subId : 2,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: '24',
          numberOf : 5, 
        },
        {
          subId : 3,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: '25',
          numberOf : 2, 
        },
      ]   
    },
    { 
      id: 5,
      type : "POTENZA NOMINALE (kW)", 
      filters : [
        {
          subId : 1,
          checked : false,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Esterno',
          numberOf : 1, 
        },
        {
          subId : 2,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Interno',
          numberOf : 5, 
        },
        {
          subId : 3,
          checked : true,
          indeterminate : false,
          labelPosition : 'after',
          disabled : false,
          span: 'Interno / Esterno',
          numberOf : 2, 
        },
      ]   
    },
  ];
 

 
  allComplete: boolean = false;
  showFiller = false;
  showCompareModal: boolean;
  showCompareBanner: boolean;

  constructor(private configService :ConfigService) { }

  ngOnInit(): void {
    // let newProduct = new Product(0, 'ARISTON', 'prova', 499, 'prova', 4, 799 );
    // this.configService.addProduct(newProduct).subscribe(product => this.products.push(product))
    
    this.configService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }


  onNotify(productToCompare : ProductToCompare) {
    let temp = [];
    if(productToCompare.compare){
        this.productsToCompare.push(productToCompare)
        if(this.productsToCompare.length >= 1 )   this.showCompareBanner = true;
    }
    else{
      this.productsToCompare.forEach(element => 
        {
        if(element.product !== productToCompare.product)
        temp.push(element);
        }
      );
      this.productsToCompare = temp;
      if (this.productsToCompare.length == 0 )  this.showCompareBanner = false;
    }
  }

  setAll(event, product){
    //this.typeFilters = event;
  }
}
