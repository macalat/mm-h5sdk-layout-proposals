import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoDataGridComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-certificate-connect-responsible',
  template: `
  <div class="main-container">
    <div class="row-clear-fix">
      <div class="twelve columns">
        <div class="m3-field">
          <div class="field" style="justify-content: flex-end;">
            <label class="label align-right">Sorting order</label>
            <select soho-dropdown class="input-mm" [cssClass]="'dropdown-short'" [(ngModel)]="sortingOrder" (change)="onViewChanged(); locked = true; onProgress = false" >
              <option value="1">1 - Facility</option>
              <option value="2">2 - Responsible</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="row-clear-fix filter-head" style="min-height: 40px">
      <div class="twelve columns">
        <div class="m3-field">
          <ng-container *ngIf="+sortingOrder === 1">
            <div class="field">
                <label class="label">Facility</label>
                <input soho-lookup type="text" class="input-xs" />
                <ng-container *ngTemplateOutlet="ApplyBtn"></ng-container>
            </div>
          </ng-container>
          <ng-container *ngIf="+sortingOrder === 2">
            <div class="field">
                <label class="label">Responsible</label>
                <input soho-lookup type="text" class="input-sm" />
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
            <h2 class="title">Detail ({{ action }})</h2>
            <section class="detail-head">
              <div class="m3-field">
                <div class="field">
                  <label class="label">Facility</label>
                  <input soho-lookup type="text" class="input-xs" [readonly]="locked" [disabled]="locked" value="FACI" />
                </div>
                <div class="field">
                  <label class="label">Certification</label>
                  <input soho-lookup type="text" class="input-sm text-uppercase" name="view1STAT" [readonly]="locked" [disabled]="locked" value="CERT" />
                </div>
                <div class="field">
                  <label class="label">Responsible</label>
                  <input soho-lookup type="text" class="input-sm text-uppercase" name="view1NAME" [readonly]="locked" [disabled]="locked" value="USID" />
                </div>
              </div>
            </section>
            <section class="detail-body">
              <div class="m3-field">
                <div class="field">
                  <label class="label">Authorization number</label>
                  <input type="text" class="text-uppercase" name="view1STAT" [readonly]="locked" [disabled]="locked" value="APNO" />
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
export class CertificateConnectResponsibleComponent implements OnInit {
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
      { id: 'COL1', field: 'COL1', name: 'Certification', filterType: 'text' },
      { id: 'COL2', field: 'COL2', name: 'Responsible', filterType: 'text' },
      { id: 'COL3', field: 'COL3', name: 'Authorization no' },
    ];

    this.column2 = [
      { id: 'COL1', field: 'COL1', name: 'Facility', filterType: 'text' },
      { id: 'COL2', field: 'COL2', name: 'Certification', filterType: 'text' },
      { id: 'COL3', field: 'COL3', name: 'Authorization no' },
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
    }
  }
}