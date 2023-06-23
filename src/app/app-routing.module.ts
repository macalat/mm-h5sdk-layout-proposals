import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReleaseOrdersComponent } from './Dorel/release-orders/release-orders.component';
import { ItemMaintenanceComponent } from './LMM/item-maintenance/item-maintenance.component';
import { PlannedPoComponent } from './LMM/planned-po/planned-po.component';
import { PpoAggregatedComponent } from './LMM/planned-po/ppo-aggregated/ppo-aggregated.component';
import { WoReportingPortal2Component } from './LMM/wo-reporting-portal-2/wo-reporting-portal-2.component';
import { WoReportingPortalComponent } from './LMM/wo-reporting-portal/wo-reporting-portal.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApprovalTagCreateComponent } from './Safran/approval-tag/approval-tag-create.component';
import { ApprovalTagDetailComponent } from './Safran/approval-tag/approval-tag-detail.component';
import { ApprovalTagDetailTextComponent } from './Safran/approval-tag/approval-tag-detail-text.component';
import { ApprovalTagCopyComponent } from './Safran/approval-tag/approval-tag-copy.component';
import { ApprovalTagMainComponent } from './Safran/approval-tag/approval-tag-main.component';
import { ApprovalTagComponent } from './Safran/approval-tag/approval-tag.component';
import { CertificateConnectResponsibleComponent } from './Safran/approval-tag/certificate-connect-responsible.component';
import { CertificateConnectProductComponent } from './Safran/approval-tag/certificate-connect-product.component';
import { CertificateComponent } from './Safran/approval-tag/certificate.component';
import { CustomerOrderComponent } from './Safran/customer-order/customer-order.component';
import { PartnerSettingsComponent } from './Safran/partner-settings/partner-settings.component';
import { PickAndPackComponent } from './SMC/pick-and-pack/pick-and-pack.component';
import { DoMashupComponent } from './Daniels/do-mashup/do-mashup.component';

const routes: Routes = [
  { path: '', component: NotFoundComponent },
  { path: 'dashboard', component: MainComponent },
  { path: 'wo-reporting', component: WoReportingPortalComponent },
  { path: 'wo-reporting-2', component: WoReportingPortal2Component },
  { path: 'planned-po', component: PlannedPoComponent },
  { path: 'planned-po/aggregated', component: PpoAggregatedComponent },
  { path: 'item-maintenance', component: ItemMaintenanceComponent },
  { path: 'release-orders', component: ReleaseOrdersComponent },
  { path: 'partner-settings', component: PartnerSettingsComponent },
  { 
    path: 'approval-tag', 
    component: ApprovalTagComponent,
    children: [
      { path: 'certificate', component: CertificateComponent },
      { path: 'certificate-connect-responsible', component: CertificateConnectResponsibleComponent },
      { path: 'certificate-connect-product', component: CertificateConnectProductComponent },
      { path: 'main', component: ApprovalTagMainComponent },
      { path: 'main/create', component: ApprovalTagCreateComponent },
      { path: 'main/detail', component: ApprovalTagDetailComponent },
      { path: 'main/detail-text', component: ApprovalTagDetailTextComponent },
      { path: 'main/copy', component: ApprovalTagCopyComponent },
      { path: 'main/detail/:action', component: ApprovalTagDetailComponent },
      { path: '', component: ApprovalTagMainComponent },
    ],
  },
  { path: 'com', component: CustomerOrderComponent },
  { path: 'pick-and-pack', component: PickAndPackComponent },
  { path: 'do-daniels', component: DoMashupComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
