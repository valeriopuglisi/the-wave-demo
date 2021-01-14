import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductToCompare } from '../models/product-to-compare';
import { CompareDialogComponent } from '../compare-dialog/compare-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Compare } from '../models/compare';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-compare-banner',
  templateUrl: './compare-banner.component.html',
  styleUrls: ['./compare-banner.component.scss']
})
export class CompareBannerComponent implements OnInit, OnChanges {

  @Input() productsToCompare;

  productToCheckForCompare = 3;

  productToCheck: number;

  disabledCompareButton = true;



  constructor(public dialog: MatDialog, private configService: ConfigService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  openDialog() {
    let compare = new Compare(
      0,
      this.productsToCompare[0].product, 
      this.productsToCompare[1].product,
      this.productsToCompare[2].product
      );  

    this.configService.addCompare(compare).subscribe(compare => console.log(compare))
    this.dialog.open(CompareDialogComponent);
  }
  



  

}
