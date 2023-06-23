import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SohoContextualActionPanelService, SohoDataGridComponent } from 'ids-enterprise-ng';
import { ApprovalTagCreateComponent } from '../../Safran/approval-tag/approval-tag-create.component';

@Component({
  selector: 'app-approval-tag-main',
  template: `
  <div class="main-container">
    <soho-accordion class="header-filter">
      <soho-accordion-header [isExpanded]="true">Filter Options</soho-accordion-header>
      <soho-accordion-pane>
        <div class="accordion-content">
          <div class="row-clear-fix">
            <div class="twelve columns">
              <div class="m3-field">
                <div class="field" style="justify-content: flex-end;">
                  <label class="label">Sorting order</label>
                  <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'" [(ngModel)]="sortingOrder" (change)="onViewChanged(); locked = true; onProgress = false" >
                    <option value="1">1 - Cert ref no</option>
                    <option value="2">2 - Delivery number</option>
                    <option value="3">3 - Ref order cat</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
      
          <div class="row-clear-fix margin-top-xl margin-bottom-md" style="min-height: 200px">
            <div class="twelve columns">
              <div class="m3-field">
                <ng-container *ngIf="+sortingOrder !== 2">
                  <div class="field">
                      <label class="label">Facility</label>
                      <input type="text" soho-lookup class="input-xs text-uppercase" name="FACI" />
                  </div>
                </ng-container>
                <ng-container *ngIf="+sortingOrder === 2">
                  <div class="field">
                      <label class="label">Warehouse</label>
                      <input type="text" soho-lookup class="input-xs text-uppercase" name="WHLO" />
                  </div>
                </ng-container>
                <ng-container *ngIf="+sortingOrder === 3">
                  <div class="field">
                      <label class="label">Ref order cat</label>
                      <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'">
                        <option></option>
                        <option>RORC</option>
                      </select>
                  </div>
                </ng-container>
                <div class="field">
                    <label class="label">Certificate</label>
                    <input type="text" soho-lookup class="input-sm text-uppercase" name="CERT" />
                </div>
                <div class="field">
                    <label class="label">Customer</label>
                    <input type="text" soho-lookup class="input-sm text-uppercase" name="CONA" />
                </div>
                <div class="field">
                    <label class="label">Item number</label>
                    <input type="text" soho-lookup class="input-sm text-uppercase" name="ITNO" />
                </div>
                <div class="field">
                    <label class="label">Cert status</label>
                    <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'">
                      <option></option>
                      <option>FCES</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
                    <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'">
                      <option></option>
                      <option>TCES</option>
                    </select>
                    <ng-container *ngTemplateOutlet="ApplyBtn"></ng-container>
                </div>
              </div>
              <ng-template #ApplyBtn>
                <div class="field-short margin-left-xl">
                  <button soho-button="secondary" style="padding: 0 16px; margin-bottom: 0"> Apply</button>
                </div>
              </ng-template>
            </div>
          </div>
        </div>
    </soho-accordion-pane>
  </soho-accordion>
    
    <div class="row-clear-fix list-detail-container">
      <div class="twelve columns data-container">
        <div class="list-datagrid-container">
          <soho-toolbar [hasMoreButton]="true" [maxVisibleButtons]="6" [rightAligned]="true">
            <soho-toolbar-button-set>
              <!-- buttons -->
              <button soho-button="icon" icon="add" title="Add" [disabled]="onProgress" (click)="showCreateInit()"></button>
              <button soho-button="icon" icon="edit" title="Edit" [disabled]="onProgress" (click)="showDetail('edit')"></button>
              <button soho-button="icon" icon="copy" title="Copy" [disabled]="onProgress" (click)="showCopy()"></button>
              <button soho-button="icon" icon="display" title="Display" [disabled]="onProgress" (click)="showDetail('display')"></button>
              <button soho-button="icon" icon="delete" title="Delete" [disabled]="onProgress"></button>
              <button soho-button="icon" icon="refresh" title="Refresh" [disabled]="onProgress"></button>
            </soho-toolbar-button-set>
            <soho-toolbar-more-button>
              <div class="popupmenu-wrapper">
                <ul soho-popupmenu id="my-popupmenu-element" class="popupmenu">
                  <li soho-popupmenu-item>
                    <a soho-popupmenu-label>Draft print</a>
                  </li>
                  <li soho-popupmenu-item>
                    <a soho-popupmenu-label>Draft validated</a>
                  </li>
                  <li soho-popupmenu-item>
                    <a soho-popupmenu-label>Reprint document</a>
                  </li>
                  <li soho-popupmenu-item>
                    <a soho-popupmenu-label>Print duplicate</a>
                  </li>
                </ul>
              </div>
            </soho-toolbar-more-button>
          </soho-toolbar>
          <div soho-datagrid="auto" [gridOptions]="gridOptions" [columns]="columns"></div>
        </div>
      </div>
    </div>

  </div>
  `,
  styles: []
})
export class ApprovalTagMainComponent implements OnInit {
  sortingOrder = 1;
  gridOptions = {} as SohoDataGridOptions;
  columns = [] as SohoDataGridColumn[];
  data = [] as any;
  action = 'Display';
  onProgress = false;

  locked = true;

  column1 = [];
  column2 = [];
  column3 = [];
  
  @ViewChild(SohoDataGridComponent) dataGrid: SohoDataGridComponent;
  constructor(private route: ActivatedRoute, private router: Router,
              private panelService: SohoContextualActionPanelService, private vcf: ViewContainerRef) { }

  ngOnInit() {
    console.log('navigated back');
    this.action = 'Display';

    this.column1 = [
      { id: 'COL1', field: 'COL1', name: 'Cert no', filterType: 'text', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'St', sortable: false },
      { id: 'COL3', field: 'COL3', name: 'Dely no', sortable: false },
      { id: 'COL4', field: 'COL4', name: 'Roc', sortable: false },
      { id: 'COL5', field: 'COL5', name: 'Order no', sortable: false },
      { id: 'COL6', field: 'COL6', name: 'Line', sortable: false },
      { id: 'COL7', field: 'COL7', name: 'Certif', sortable: false },
      { id: 'COL8', field: 'COL8', name: 'Item number', sortable: false },
      { id: 'COL9', field: 'COL9', name: 'Customer', sortable: false },
    ];

    this.column2 = [
      { id: 'COL1', field: 'COL1', name: 'Dely no', filterType: 'text', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'Cert no', sortable: false },
      { id: 'COL3', field: 'COL3', name: 'St', sortable: false },
      { id: 'COL4', field: 'COL4', name: 'Roc', sortable: false },
      { id: 'COL5', field: 'COL5', name: 'Order no', sortable: false },
      { id: 'COL6', field: 'COL6', name: 'Line', sortable: false },
      { id: 'COL7', field: 'COL7', name: 'Certif', sortable: false },
      { id: 'COL8', field: 'COL8', name: 'Item number', sortable: false },
      { id: 'COL9', field: 'COL9', name: 'Customer', sortable: false },
    ];

    this.column3 = [
      { id: 'COL1', field: 'COL1', name: 'Order no', filterType: 'text', sortable: false },
      { id: 'COL6', field: 'COL6', name: 'Line', sortable: false },
      { id: 'COL3', field: 'COL3', name: 'Cert no', sortable: false },
      { id: 'COL3', field: 'COL3', name: 'St', sortable: false },
      { id: 'COL4', field: 'COL4', name: 'Dely no', sortable: false },
      { id: 'COL9', field: 'COL9', name: 'Customer', sortable: false },
      { id: 'COL9', field: 'COL9', name: 'Whs', sortable: false },
      { id: 'COL7', field: 'COL7', name: 'Certif', sortable: false },
      { id: 'COL8', field: 'COL8', name: 'Item number', sortable: false },
    ];
    this.columns = this.column1;

    this.data = [
      { COL1: 'AAAA', COL2: 'Pweis awag', COL3: 'Puasdf asdasdfa asdf g', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'BBBB', COL2: 'Oasdfa asfd', COL3: 'Hsafasi hsaodf aosd', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'CCCC', COL2: 'Jskqiap ads ajjt he', COL3: 'Yasidfa i daf', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'DDDD', COL2: 'Geiiapq aosdo a', COL3: 'Luuopoq a osdi aosdf', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
    ]

    this.gridOptions = {
      selectable: 'mixed',
      filterable: true,
      paging: true,
      pagesize: 50,
      hidePagerOnOnePage: true,
      disableRowDeactivation: true,
      rowHeight: 'small',
      editable: true,
      columns: this.columns,
      dataset: [],
      spacerColumn: true
    }

  }

  showCreateInit(): void {
    this.router.navigate(['/approval-tag/main/create'], {});
    return;
    const currentPanel = this.panelService
       .contextualactionpanel(ApprovalTagCreateComponent, this.vcf)
       .modalSettings({
          buttons: [
             {
                text: Soho.Locale.translate('Close'),
                cssClass: 'btn',
                icon: '#icon-close',
                click: (e: any, panel: any) => {
                    panel.close(true);
                },
                isDefault: true
             },
          ],
          fullsize: 'responsive',
          breakpoint: 'phablet',
       })
       .title('Create Approval tag')
       .apply(() => {
       })
       .open();
  }

  showCopy(): void {
    this.router.navigate(['/approval-tag/main/copy'], {});
  }

  showDetail(action: string): void {
    this.router.navigate([`/approval-tag/main/detail/${action}`]);
  }
  
  onViewChanged(): void {
    switch (+this.sortingOrder) {
      case 1:
        this.columns = this.column1;
         break;
      case 2:
        this.columns = this.column2;
         break;
      case 3:
        this.columns = this.column3;
         break;
    }
  }
}