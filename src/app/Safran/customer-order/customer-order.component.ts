import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  mms025_gridOptions = {} as SohoDataGridOptions;
  mms002_gridOptions = {} as SohoDataGridOptions;
  mms080_gridOptions = {} as SohoDataGridOptions;

  fields = [];

  inputClasses = ['', 'input-xs', 'input-xs', 'input-sm', 'input-sm', 'input-mm', 'input-mm', 'input-lg', 'input-xl'];

  constructor() { }

  ngOnInit() {
    const baseGridOptions = {
      selectable: 'mixed',
      filterable: true,
      disableRowDeactivation: true,
      rowHeight: 'small',
      dataset: [],
    } as SohoDataGridOptions;

    this.mms025_gridOptions = { ...baseGridOptions };
    this.mms025_gridOptions.columns = [
      { id: 'COL1', field: 'COL1', name: 'Field 1', filterType: 'text' , filterConditions: ['start-with']},
      { id: 'COL2', field: 'COL2', name: 'Field 2' },
      { id: 'COL3', field: 'COL3', name: 'Field 3' },
      { id: 'COL4', field: 'COL4', name: 'Field 4' },
      { id: 'COL5', field: 'COL5', name: 'Field 5' },
    ],

    this.mms002_gridOptions = { ...baseGridOptions };
    this.mms002_gridOptions.columns = [
      { id: 'COL1', field: 'COL1', name: 'Field 1', filterType: 'text' },
      { id: 'COL2', field: 'COL2', name: 'Field 2' },
      { id: 'COL3', field: 'COL3', name: 'Field 3' },
    ];

    this.mms080_gridOptions = { ...baseGridOptions };
    this.mms080_gridOptions.columns = [
      { id: 'COL1', field: 'COL1', name: 'Field 1', filterType: 'text' },
      { id: 'COL2', field: 'COL2', name: 'Field 2' },
      { id: 'COL3', field: 'COL3', name: 'Field 3' },
      { id: 'COL4', field: 'COL4', name: 'Field 4' },
      { id: 'COL5', field: 'COL5', name: 'Field 5', filterType: 'text' },
      { id: 'COL6', field: 'COL6', name: 'Field 6', filterType: 'text' },
      { id: 'COL7', field: 'COL7', name: 'Field 7' },
      { id: 'COL8', field: 'COL8', name: 'Field 8' },
      { id: 'COL9', field: 'COL9', name: 'Field 9' },
      { id: 'COL10', field: 'COL10', name: 'Field 10' },
      { id: 'COL11', field: 'COL11', name: 'Field 11' },
      { id: 'COL12', field: 'COL12', name: 'Field 12' },
      { id: 'COL13', field: 'COL13', name: 'Field 13' },
      { id: 'COL14', field: 'COL14', name: 'Field 14' },
      { id: 'COL15', field: 'COL15', name: 'Field 15' },
      { id: 'COL16', field: 'COL16', name: 'Field 16' },
      { id: 'COL17', field: 'COL17', name: 'Field 17' },
    ];


    for (let i = 1; i <= 20; i++) {
      this.fields.push({
        name: `Field label ${i}`,
        value: `Value ${i}`,
        class: this.inputClasses[Math.ceil(Math.random() * 8)]
      })
    }
  }

}