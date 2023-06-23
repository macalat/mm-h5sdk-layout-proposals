import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WoReportingPortalComponent } from './LMM/wo-reporting-portal/wo-reporting-portal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WoReportingPortal2Component } from './LMM/wo-reporting-portal-2/wo-reporting-portal-2.component';
import { PlannedPoComponent } from './LMM/planned-po/planned-po.component';
import { PpoAggregatedComponent } from './LMM/planned-po/ppo-aggregated/ppo-aggregated.component';
import { ReleaseOrdersComponent } from './Dorel/release-orders/release-orders.component';
import { ItemMaintenanceComponent } from './LMM/item-maintenance/item-maintenance.component';
import { PartnerSettingsComponent } from './Safran/partner-settings/partner-settings.component';
import { ApprovalTagComponent } from './Safran/approval-tag/approval-tag.component';
import { CertificateComponent } from './Safran/approval-tag/certificate.component';
import { ApprovalTagMainComponent } from './Safran/approval-tag/approval-tag-main.component';
import { CertificateConnectResponsibleComponent } from './Safran/approval-tag/certificate-connect-responsible.component';
import { CertificateConnectProductComponent } from './Safran/approval-tag/certificate-connect-product.component';
import { ApprovalTagCreateComponent } from './Safran/approval-tag/approval-tag-create.component';
import { ApprovalTagDetailComponent } from './Safran/approval-tag/approval-tag-detail.component';
import { ApprovalTagDetailTextComponent } from './Safran/approval-tag/approval-tag-detail-text.component';
import { ApprovalTagCopyComponent } from './Safran/approval-tag/approval-tag-copy.component';
import { CustomerOrderComponent } from './Safran/customer-order/customer-order.component';
import { MainComponent } from './main/main.component';
import { PickAndPackComponent } from './SMC/pick-and-pack/pick-and-pack.component';
import { DoMashupComponent } from './Daniels/do-mashup/do-mashup.component';
import { FieldHelpDirective } from './field-help.directive';
import { DraggableTableDirective } from './drag-cell-directive';

@NgModule({
  imports: [BrowserModule, FormsModule, SohoComponentsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    WoReportingPortalComponent,
    NotFoundComponent,
    WoReportingPortal2Component,
    PlannedPoComponent,
    PpoAggregatedComponent,
    ReleaseOrdersComponent,
    ItemMaintenanceComponent,
    PartnerSettingsComponent,
    ApprovalTagComponent,
    CertificateComponent,
    ApprovalTagMainComponent,
    CertificateConnectResponsibleComponent,
    CertificateConnectProductComponent,
    ApprovalTagCreateComponent,
    ApprovalTagDetailComponent,
    ApprovalTagDetailTextComponent,
    ApprovalTagCopyComponent,
    CustomerOrderComponent,
    PickAndPackComponent,
    DoMashupComponent,
    FieldHelpDirective,
    DraggableTableDirective,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US'
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (locale: string) => () => {
        Soho.Locale.culturesPath = 'assets/ids-enterprise/js/cultures/';
        return Soho.Locale.set(locale);
      },
      deps: [LOCALE_ID]
    }
  ],
  entryComponents: [
    ApprovalTagCreateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
