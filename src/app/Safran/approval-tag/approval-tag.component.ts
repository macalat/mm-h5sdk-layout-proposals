import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-tag',
  template: `
  <nav soho-application-menu class="is-personalizable" [openOnLarge]="true" [dismissOnClickMobile]="true" data-options="{rerouteOnLinkClick: false}" >
    <div class="accordion" data-options="{allowOnePane: false, rerouteOnLinkClick: false}">
      <div class="accordion-header">
        <a [routerLink]="['certificate']" (click)="changeTitle('Certificate. Open')"><svg soho-icon icon="notes"></svg><span>MWZ204</span></a>
      </div>
      <div class="accordion-header">
        <a [routerLink]="['certificate-connect-responsible']" (click)="changeTitle('Certificate. Connect Responsible')"><svg soho-icon icon="settings"></svg><span>MWZ206</span></a>
      </div>
      <div class="accordion-header">
        <a [routerLink]="['certificate-connect-product']" (click)="changeTitle('Certificate. Connect Product')"><svg soho-icon icon="settings"></svg><span>MWZ205</span></a>
      </div>
      <div class="accordion-header">
        <a [routerLink]="['main']" (click)="changeTitle('Approval Tag. Open')"><svg soho-icon icon="home"></svg><span>MMZ210</span></a>
      </div>
      
      <!-- <div class="accordion-header">
        <a [routerLink]="['explode-bom']" (click)="changeTitle('Explode Bom')"><svg soho-icon icon="ledger"></svg><span>MWZ210</span></a>
      </div> -->
      <!-- <div class="accordion-header">
        <a [routerLink]="['main']" (click)="changeTitle('Approval Tag. Open')"><svg soho-icon icon="home"></svg><span>Approval Tag. Open</span></a>
      </div>
      
      <div class="accordion-header"><a href="javascript:void(0);"><svg soho-icon icon="settings"></svg><span>Settings</span></a></div>
      <div class="accordion-pane">
        <div class="accordion-header list-item"><a [routerLink]="['certificate']" (click)="changeTitle('Certificate Settings')"><span>Certificate</span></a></div>
        <div class="accordion-header list-item"><a [routerLink]="['status']" (click)="changeTitle('Status Settings')"><span>Status</span></a></div>
        <div class="accordion-header list-item"><a [routerLink]="['signer']" (click)="changeTitle('Signer Settings')"><span>Signer</span></a></div>
        <div class="accordion-header list-item"><a [routerLink]="['item']" (click)="changeTitle('Item Settings')"><span>Item</span></a></div>
        <div class="accordion-header list-item"><a [routerLink]="['component']" (click)="changeTitle('Components Settings')"><span>Component</span></a></div>
        <div class="accordion-header list-item"><a [routerLink]="['item-certificate']" (click)="changeTitle('Item/Certificate Settings')"><span>Item Certificate</span></a></div>
      </div> -->
    </div>
  </nav>
  <div class="page-container no-scroll">
  <soho-header>

  <soho-toolbar-flex>
    <button soho-toolbar-flex-nav-button></button>
    <soho-toolbar-flex-section [isTitle]="true">
      <h2>
        <span soho-toolbar-flex-page-title>{{ title }}</span>
      </h2>
    </soho-toolbar-flex-section>
    <soho-toolbar-flex-more-button [isPageChanger]="true">
    </soho-toolbar-flex-more-button>
  </soho-toolbar-flex>

  </soho-header>
  <div soho-personalize [colors]="'#0066D4'"></div>

    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class ApprovalTagComponent implements OnInit {
  title = "Approval Tag. Open";
  constructor() { }

  ngOnInit() {
  }

  changeTitle(title: string): void {
    this.title = title;
  }

}