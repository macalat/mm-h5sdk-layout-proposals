import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoDataGridComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-certificate-connect-product',
  template: `
  <div class="main-container">
    <div class="row-clear-fix">
      <div class="twelve columns">
        <div class="m3-field">
          <div class="field" style="justify-content: flex-end;">
            <label class="label align-right">Sorting order</label>
            <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'" [(ngModel)]="sortingOrder" (change)="onViewChanged(); locked = true; onProgress = false" >
              <option value="1">1 - Item</option>
              <option value="2">2 - Component</option>
              <option value="3">3 - Article/Certificate</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="row-clear-fix margin-top-xl margin-bottom-md" style="min-height: 104px">
      <div class="twelve columns">
        <div class="m3-field">
          <ng-container *ngIf="+sortingOrder !== 3">
            <div class="field" fieldHelp [helpInfo]="{title: 'Facility', message: 'FACI_help'}">
                <label class="label required">Facility</label>
                <input soho-lookup type="text" class="input-xs" name="FACI"  />
            </div>
            <div class="field">
                <label class="label required">Certificate</label>
                <input soho-lookup type="text" class="input-sm" />
                <ng-container *ngIf="+sortingOrder === 1">
                  <ng-container *ngTemplateOutlet="ApplyBtn"></ng-container>
                </ng-container>
            </div>
          </ng-container>
          <div class="field" *ngIf="+sortingOrder === 2">
              <label class="label required">Product</label>
              <input type="text" soho-lookup class="input-mm text-uppercase" name="PRNO" />
              <ng-container *ngTemplateOutlet="ApplyBtn"></ng-container>
          </div>
          <ng-container *ngIf="+sortingOrder === 3">
            <div class="field">
                <label class="label">Facility</label>
                <input soho-lookup type="text" class="input-xs" />
                <span class="margin-left-md margin-right-md">-</span>
                <input soho-lookup type="text" class="input-xs" />
            </div>
            <div class="field">
                <label class="label">Product</label>
                <input type="text" soho-lookup class="input-sm text-uppercase" name="ITNO" />
                <span class="margin-left-md margin-right-md">-</span>
                <input type="text" soho-lookup class="input-sm text-uppercase" name="ITNO" />
            </div>
            <div class="field">
                <label class="label">Component</label>
                <input type="text" soho-lookup class="input-sm text-uppercase" name="ITNO" />
                <span class="margin-left-md margin-right-md">-</span>
                <input type="text" soho-lookup class="input-sm text-uppercase" name="ITNO" />
                <ng-container *ngTemplateOutlet="ApplyBtn"></ng-container>
            </div>
          </ng-container>
        </div>

        <ng-template #ApplyBtn>
          <div class="field-short margin-left-xl">
            <button soho-button="secondary" style="padding: 0 16px; margin-bottom: 0"> Apply</button>
          </div>
        </ng-template>
      </div>
    </div>

    <div class="row-clear-fix list-detail-container">
      <div class="seven columns data-container">
        <div class="list-datagrid-container">
          <soho-toolbar [maxVisibleButtons]="6" [rightAligned]="true">
            <soho-toolbar-button-set>
              <!-- buttons -->
              <button *ngIf="!viewOnly" soho-button="icon" icon="add" title="Add" [disabled]="onProgress" (click)="locked = false; action = 'Add'; onProgress = true"></button>
              <button *ngIf="!viewOnly" soho-button="icon" icon="edit" title="Edit" [disabled]="onProgress" (click)="locked = false; action = 'Edit'; onProgress = true"></button>
              <button *ngIf="!viewOnly" soho-button="icon" icon="copy" title="Copy" [disabled]="onProgress" (click)="locked = false; action = 'Copy'; onProgress = true"></button>
              <button *ngIf="!viewOnly" soho-button="icon" icon="delete" title="Delete" [disabled]="onProgress" (click)="onProgress = true"></button>
              <button soho-button="icon" icon="refresh" title="Refresh" [disabled]="onProgress"></button>
            </soho-toolbar-button-set>
          </soho-toolbar>
          <div soho-datagrid="auto" [gridOptions]="gridOptions" [columns]="columns"></div>
        </div>
      </div>
      <div class="five columns data-container">
        <div class="detail-form-container">
          <form #f="ngForm" class="detail-form">
            <h2 class="title">Detail ({{ action }})</h2>
            <section class="detail-head">
              <div class="m3-field">
                <div class="field">
                  <label class="label required">Facility</label>
                  <input soho-lookup type="text" class="input-xs" [readonly]="locked" [disabled]="locked" value="FACI" />
                </div>
                <div class="field">
                  <label class="label required">Certificate</label>
                  <input soho-lookup type="text" class="input-sm text-uppercase" name="view1STAT" [readonly]="locked" [disabled]="locked" value="CERT" />
                </div>
                <div class="field">
                  <label class="label required">Product no</label>
                  <input soho-lookup type="text" class="input-mm text-uppercase" name="view1NAME" [readonly]="locked" [disabled]="locked" value="PRNO" />
                </div>
              </div>
            </section>
            <section class="detail-body">
              <div class="m3-field">
                <div class="field">
                  <label style="width: auto" class="label">Text for approval tag remarks</label>
                </div>
                <textarea style="width: 100%" rows="8" [readonly]="locked"></textarea>

                <div class="field">
                  <label class="label" style="width: 100">Internal texts</label>
                </div>
                <textarea style="width: 100%" rows="20" [readonly]="locked"></textarea>
              </div>
            </section>
            <div class="navigation-buttons">
              <ng-container *ngIf="!viewOnly">
                <button soho-button="tertiary" icon="cancel" [disabled]="locked"
                  (click)="action = 'Cancel'; onProgress = false; locked = true">Cancel</button>
                <button soho-button="primary" icon="save" [disabled]="locked"
                  (click)="action = 'Save'; onProgress = false; locked = true" [isSubmit]="true">Save</button>
              </ng-container>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
  `,
  styles: []
})
export class CertificateConnectProductComponent implements OnInit {
  sortingOrder = 1;
  gridOptions = {} as SohoDataGridOptions;
  columns = [] as SohoDataGridColumn[];
  data = [] as any;
  action = 'Display';
  onProgress = false;

  viewOnly = false;
  locked = true;

  // column1 = [];
  // column2 = [];
  column1 = [];
  column2 = [];
  column3 = [];
  
  @ViewChild(SohoDataGridComponent) dataGrid: SohoDataGridComponent;
  constructor() { }

  ngOnInit() {
    this.action = 'Display';

    this.column1 = [
      { id: 'COL1', field: 'COL1', name: 'Product', filterType: 'text', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'Name', sortable: false },
      { id: 'COL3', field: 'COL3', name: 'Alias number', sortable: false },
      { id: 'COL4', field: 'COL4', name: 'Certificate', sortable: false },
      { id: 'COL5', field: 'COL5', name: 'Specification 2', sortable: false },
    ];

    this.column2 = [
      { id: 'COL1', field: 'COL1', name: 'Component', filterType: 'text', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'Name', sortable: false },
      { id: 'COL3', field: 'COL3', name: 'Alias number', sortable: false },
      { id: 'COL4', field: 'COL4', name: 'Certificate', sortable: false },
    ];

    this.column3 = [
      { id: 'COL1', field: 'COL1', name: 'Fac', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'Certificate', sortable: false },
      { id: 'COL3', field: 'COL3', name: 'Product', sortable: false },
      { id: 'COL4', field: 'COL4', name: 'Alias number', sortable: false },
      { id: 'COL5', field: 'COL5', name: 'Name', sortable: false },
      { id: 'COL6', field: 'COL6', name: 'Component no', sortable: false },
      { id: 'COL7', field: 'COL7', name: 'Alias number', sortable: false },
      { id: 'COL8', field: 'COL8', name: 'Name', sortable: false },
    ];

    this.columns = this.column1;

    this.data = [
      { COL1: 'AAAA', COL2: 'Pweis awag', COL3: 'Puasdf asdasdfa asdf g', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'BBBB', COL2: 'Oasdfa asfd', COL3: 'Hsafasi hsaodf aosd', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'CCCC', COL2: 'Jskqiap ads ajjt he', COL3: 'Yasidfa i daf', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'DDDD', COL2: 'Geiiapq aosdo a', COL3: 'Luuopoq a osdi aosdf', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'AAAA', COL2: 'Pweis awag', COL3: 'Puasdf asdasdfa asdf g', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'BBBB', COL2: 'Oasdfa asfd', COL3: 'Hsafasi hsaodf aosd', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'CCCC', COL2: 'Jskqiap ads ajjt he', COL3: 'Yasidfa i daf', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'DDDD', COL2: 'Geiiapq aosdo a', COL3: 'Luuopoq a osdi aosdf', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'AAAA', COL2: 'Pweis awag', COL3: 'Puasdf asdasdfa asdf g', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'BBBB', COL2: 'Oasdfa asfd', COL3: 'Hsafasi hsaodf aosd', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      { COL1: 'CCCC', COL2: 'Jskqiap ads ajjt he', COL3: 'Yasidfa i daf', COL4: '10', COL5: 'FR.21G.0005', COL6: 'Jasd aaiojs', COL7: 'OOPWIASJ' },
      
    ]

    this.gridOptions = {
      selectable: 'mixed',
      filterable: true,
      disableRowDeactivation: true,
      rowHeight: 'small',
      editable: true,
      columns: this.columns,
      dataset: [],
      spacerColumn: true
    }
  }
  
  onViewChanged(): void {
    this.viewOnly = false;
    switch (+this.sortingOrder) {
      case 1:
        this.columns = this.column1;
         break;
      case 2:
        this.columns = this.column2;
        this.viewOnly = true;
         break;
      case 3:
        this.columns = this.column3;
        this.viewOnly = true;
         break;
    }
  }
}