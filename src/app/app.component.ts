import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IosPageComponent } from './ios-page/ios-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, IosPageComponent],
  template: `<app-ios-page></app-ios-page>`,
  styleUrls: []
})
export class AppComponent {}
