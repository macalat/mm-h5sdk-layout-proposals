import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-settings',
  templateUrl: './partner-settings.component.html',
  styleUrls: ['./partner-settings.component.css']
})
export class PartnerSettingsComponent implements OnInit {
  gridOptions = {} as SohoDataGridOptions;
  columns = [] as SohoDataGridColumn[];
  data = [] as any;

  protected: boolean;
  onProgress: boolean;
  action = '';
  isEditMode: boolean;

  locked = false;
  
  constructor() { }

  ngOnInit() {
    this.protected = false;
    this.onProgress = false;
    this.isEditMode = false;
    this.action = 'Display';
    this.columns = [
      { id: 'COL1', field: 'COL1', name: 'Consignee', sortable: false, filterType: 'text' },
      { id: 'COL2', field: 'COL2', name: 'Sender message', sortable: false, filterType: 'text' },
    ];

    for (let i = 1; i <= 10; i++) {
       this.data.push(
        { COL1: `XXXXXXXXXX ${i}`, COL2: `YYYYYYYYYY ${i}` }
       );
    }

    this.gridOptions = {
      selectable: 'mixed',
      filterable: true,
      disableRowDeactivation: true,
      rowHeight: 'small',
      editable: true,
      columns: this.columns,
      dataset: this.data,
    }
  }
}