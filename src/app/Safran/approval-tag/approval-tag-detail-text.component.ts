import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-approval-tag-detail-text',
  template: `
  <div class="main-container">
    <div class="row-clear-fix margin-top-xl margin-bottom-md">
      <div class="twelve columns">
        <div class="m3-field">
          <div class="field">
            <label class="label">Certification no</label>
            <input type="text" class="input-sm" readonly disabled />
          </div>
          <div class="field">
            <label class="label">Certification</label>
            <input type="text" class="input-sm" readonly disabled />
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
          <div class="list-datagrid-container">
            <div soho-datagrid="auto" [gridOptions]="gridOptions"></div>
          </div>
        </div>
      </div>
      <div class="five columns data-container">
        <div class="detail-form-container">
          <form #f="ngForm" class="detail-form">
            <h2 class="margin-left-lg margin-top-md margin-bottom-md" style="font-size: 2rem;">Detail ({{ action }})</h2>

            <section class="detail-body">
              <div class="m3-field">
                <div class="field">
                  <label class="label">Serial number</label>
                  <input type="text" name="CERT" [readonly]="locked" [disabled]="locked" />
                </div>
                <div class="field">
                  <label class="label">Text</label>
                </div>
                <textarea style="width: 100%" rows="8" [readonly]="locked" value="TEXT"></textarea>
                <div class="field" style="justify-content: flex-end;">
                  <button soho-button="tertiary" icon="cancel" [disabled]="locked">Cancel</button>
                  <button soho-button="primary" icon="save" [disabled]="locked" [isSubmit]="true">Save</button>
                </div>
              </div>
            </section>
            <div class="navigation-buttons">
              <button soho-button="tertiary" icon="previous-page" (click)="onBack()">Back</button>
              <button soho-button="primary" icon="next-page" (click)="onConfirm()" [isSubmit]="true">Confirm</button>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class ApprovalTagDetailTextComponent implements OnInit {
  action = 'Display';
  onProgress = false;
  locked = true;
  protected = false;

  sortingOrder = 1;
  gridOptions = {} as SohoDataGridOptions;
  columns = [] as SohoDataGridColumn[];
  column1 = [] as SohoDataGridColumn[];
  column2 = [] as SohoDataGridColumn[];
  data = [] as any;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.columns = [
      { id: 'COL1', field: 'COL1', name: 'Serial no', filterType: 'text', sortable: false },
      { id: 'COL2', field: 'COL2', name: 'Text', sortable: false, width: 450,
        formatter: Soho.Formatters.Textarea },
    ];

    this.data = [
      { COL1: '0', COL2: 'Drawing number AAAA\nAcceptance test procedure BBBB' },
      { COL1: '3188659001', COL2: 'Valide to 31/12/2023\nValve assembly P/N XXXX' },
      { COL1: '3188659002', COL2: 'Valide to 15/01/2024\nValve assembly P/N YYYY' },
    ]

    this.gridOptions = {
      selectable: 'mixed',
      filterable: true,
      // disableRowDeactivation: true,
      rowHeight: 'small',
      editable: true,
      columns: this.columns,
      dataset: this.data,
      spacerColumn: true
    }
  }

  onBack(): void {
    this.location.back();
  }

  onConfirm(): void {
    this.router.navigate(['/approval-tag/main']);
  }
}