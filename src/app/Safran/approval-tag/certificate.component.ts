import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certicate',
  template: `
  <div class="main-container">
    <div class="row-clear-fix">
      <div class="twelve columns">
        <div class="m3-field">
          <div class="field" style="justify-content: flex-end;">
            <label class="label align-right">Sorting order</label>
            <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'" [(ngModel)]="sortingOrder" (change)="onViewChanged(); locked = true; onProgress = false" >
              <option value="1">1 - Certification</option>
              <option value="2">2 - Status</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="row-clear-fix margin-top-xl filter-head" style="min-height: 40px">
      <div class="twelve columns">
        <div class="m3-field">
          <div class="field" *ngIf="+sortingOrder === 2">
              <label class="label">Certification</label>
              <input soho-lookup type="text" class="input-sm" />
              <div class="field-short margin-left-xl margin-right-xl">
                <button soho-button="secondary" style="padding: 0 16px; margin-bottom: 0"> Apply</button>
              </div>
          </div>
        </div>
      </div>
    </div>
      
    <div class="row-clear-fix list-detail-container">
      <div class="seven columns data-container">
        <div class="list-datagrid-container">
          <soho-toolbar [maxVisibleButtons]="6" [rightAligned]="true">
            <soho-toolbar-button-set>
              <!-- buttons -->
              <button soho-button="icon" icon="add" title="Add" [disabled]="onProgress" (click)="locked = false; action = 'Add'; onProgress = true"></button>
              <button soho-button="icon" icon="edit" title="Edit" [disabled]="onProgress" (click)="locked = false; action = 'Edit'; onProgress = true"></button>
              <button soho-button="icon" icon="copy" title="Copy" [disabled]="onProgress" (click)="locked = false; action = 'Copy'; onProgress = true"></button>
              <button soho-button="icon" icon="delete" title="Delete" [disabled]="onProgress" (click)="onProgress = true"></button>
              <button soho-button="icon" icon="refresh" title="Refresh" [disabled]="onProgress"></button>
            </soho-toolbar-button-set>
          </soho-toolbar>
          <div soho-datagrid="auto" [gridOptions]="gridOptions" [columns]="columns"></div>
        </div>
      </div>
      <div class="five columns data-container">
        <div class="detail-form-container">
          <form #f="ngForm" class="detail-form">
            <h2 class="margin-left-lg margin-top-md margin-bottom-md" style="font-size: 2rem;">Detail ({{ action }})</h2>

            <div *ngIf="+sortingOrder === 1">
              <section class="detail-head padding-bottom-lg margin-bottom-lg" style="border-bottom: 1px solid #b3b3b3">
                <div class="m3-field">
                  <div class="field hide-required">
                    <label class="label required">Certification</label>
                    <input soho-lookup type="text" class="input-sm text-uppercase" name="CERT" [readonly]="locked" [disabled]="locked" value="CERT" />
                  </div>
                  <div class="field hide-required">
                    <label class="label required">Description</label>
                    <input type="text" class="input-xl text-uppercase" name="CERT" [readonly]="locked" [disabled]="locked" value="TX40" />
                  </div>
                </div>
              </section>
            </div>

            <section class="detail-body">
              <ng-container *ngIf="+sortingOrder === 1">
                <div class="m3-field">
                  <div class="field">
                      <label class="label">Approval type</label>
                      <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'"  [readonly]="locked">
                        <option>APPT</option>
                      </select>
                  </div>
                  <div class="field">
                      <label class="label">Doc variant</label>
                      <input type="text" class="input-xs" [readonly]="locked" [disabled]="locked" value="DOVA" />
                  </div>
                  <div class="field">
                      <label class="label">Apr comp auth</label>
                      <input type="text" class="input-xl" [readonly]="locked" [disabled]="locked" value="ACAU" />
                  </div>
                  <div class="field">
                      <label class="label">Authority country</label>
                      <input type="text" [readonly]="locked" [disabled]="locked" value="CSCD" />
                  </div>
                  <div class="field">
                      <label class="label">Authorization no</label>
                      <input type="text" [readonly]="locked" [disabled]="locked" value="APNO" />
                  </div>
                  <div class="field">
                      <label class="label">Organization address</label>
                      <input soho-lookup type="text" class="input-sm" [readonly]="locked" [disabled]="locked" value="ADK1" />
                  </div>
                  <div class="field">
                    <label class="label">Disable agreement</label>
                    <input soho-checkbox type="checkbox" id="RFL2" name="RFL2" [readonly]="locked" [disabled]="locked" />
                    <label soho-label for="RFL2" [forCheckBox]="true" style="margin-top: 5px"></label>
                    <p>BLCE</p>
                  </div>
                  <div class="field">
                    <label class="label">Number series type</label>
                    <input soho-lookup type="text" class="input-xs" [readonly]="locked" [disabled]="locked" value="NBTY" />
                  </div>
                  <div class="field">
                    <label class="label">Number series</label>
                    <input soho-lookup type="text" class="input-xs" [readonly]="locked" [disabled]="locked" value="NBID" />
                  </div>
                  <div class="field">
                    <label class="label">Approval tag remarks</label>
                  </div>
                  <textarea style="width: 100%" rows="8" [readonly]="locked" value="TEXT"></textarea>
                </div>
              </ng-container>

              <div *ngIf="+sortingOrder === 2">
                <div class="m3-field">
                  <div class="field">
                    <label class="label">Status</label>
                    <input type="text" class="input-sm text-uppercase" name="view1STAT" [readonly]="locked" [disabled]="locked" value="STAT" />
                  </div>
                  <div class="field">
                    <label class="label">Description</label>
                    <input type="text" class="input-xl text-uppercase" name="view1DESC" [readonly]="locked" [disabled]="locked" value="TX40" />
                  </div>
                </div>
              </div>
            </section>
            <div class="navigation-buttons">
              <button soho-button="tertiary" icon="cancel" [disabled]="locked"
                (click)="action = 'Cancel'; onProgress = false; locked = true">Cancel</button>
              <button soho-button="primary" icon="save" [disabled]="locked"
                (click)="action = 'Save'; onProgress = false; locked = true" [isSubmit]="true">Save</button>
            </div>
          </form>
        </div>
       
      </div>
    </div>

  </div>
  `,
  styles: []
})
export class CertificateComponent implements OnInit {
  sortingOrder = 1;
  gridOptions = {} as SohoDataGridOptions;
  columns = [] as SohoDataGridColumn[];
  column1 = [] as SohoDataGridColumn[];
  column2 = [] as SohoDataGridColumn[];
  data = [] as any;
  action = 'Display';
  onProgress = false;
  locked = true;
  protected = false;

  constructor() { }

  ngOnInit() {
    this.action = 'Display';
    this.column1 = [
      { id: 'COL1', field: 'COL1', name: 'Certification', filterType: 'text', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'Description', sortable: false  },
      { id: 'COL3', field: 'COL3', name: 'Doc variant', sortable: false  },
      { id: 'COL4', field: 'COL4', name: 'Approval no', sortable: false  },
      { id: 'COL5', field: 'COL5', name: 'Disable agr', sortable: false  },
    ];

    this.column2 = [
      { id: 'COL1', field: 'COL1', name: 'Status', filterType: 'text', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'Description', sortable: false },
    ];

    this.columns = this.column1;

    this.data = [
      { COL1: 'EASA', COL2: 'EASA-Donnees Approuvees', COL3: '10', COL4: 'FR.21G.0005' },
      { COL1: 'EASAC1', COL2: 'EASA Non approved - Pending Type Certif.', COL3: '10', COL4: 'FR.21G.0005' },
      { COL1: 'EASAC2', COL2: 'EASA Non approved - For test only', COL3: '10', COL4: 'FR.21G.0005' },
      { COL1: 'EASAC3', COL2: 'EASA Non approved - Pending SADD', COL3: '10', COL4: 'FR.21G.0005' },
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
    console.log(this.sortingOrder);
    switch (+this.sortingOrder) {
      case 1:
        this.columns = this.column1;
         break;
      case 2:
        this.columns = this.column2;
         break;
    }
  }
}