import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-sassy-app';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer
    ){
      this.matIconRegistry.addSvgIcon("heart", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/heart.svg"));
      this.matIconRegistry.addSvgIcon("heart_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/heart_gray.svg"));
      this.matIconRegistry.addSvgIcon("star", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/star.svg"));
      this.matIconRegistry.addSvgIcon("star_white", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/star_white.svg"));
      
    }
}
