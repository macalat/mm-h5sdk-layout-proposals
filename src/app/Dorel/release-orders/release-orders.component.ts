import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release-orders',
  templateUrl: './release-orders.component.html',
  styleUrls: ['./release-orders.component.css']
})
export class ReleaseOrdersComponent implements OnInit {
  constructor() {}

  gridOptions = {} as SohoDataGridOptions;
  columns = [] as SohoDataGridColumn[];
  data = [] as any;

  ngOnInit() {
    this.columns = [
      { id: 'COL1', field: 'COL1', name: 'Deliver no' },
      { id: 'COL2', field: 'COL2', name: 'Total amount',
        align: 'right', formatter: Soho.Formatters.Decimal },
      { id: 'COL3', field: 'COL3', name: 'Volume', 
        align: 'right', formatter: Soho.Formatters.Decimal },
      { id: 'COL4', field: 'COL4', name: 'Gross weight',
        align: 'right', formatter: Soho.Formatters.Decimal },
      { id: 'COL5', field: 'COL5', name: 'Amount',
        align: 'right', formatter: Soho.Formatters.Decimal },
      { id: 'COL6', field: 'COL6', name: 'Route' },
      { id: 'COL7', field: 'COL7', name: 'Route dep' },
      { id: 'COL8', field: 'COL8', name: 'Consignee' },
      { id: 'COL9', field: 'COL9', name: 'For rel',
        align: 'center', formatter: Soho.Formatters.Checkbox,
        editor: Soho.Editors.Checkbox,
        width: 60, maxWidth: 70
      },
      { id: 'COL10', field: 'COL10', name: '',
        align: 'center', formatter: Soho.Formatters.Button,
        sortable: false,
        width: 220, minWidth: 220,
        click: (e, a) => {
          console.log(e);
          console.log(a);
        }
      },
    ]

    this.data = [
      { COL1: '124', COL2: '881', COL3: '123', COL4: '100', COL5: '91', COL6: 'POW', COL7: 'JJDM', COL8: '0029199', COL9: '0', COL10: 'View delivery lines'},
    ]


    this.gridOptions = {
      selectable: 'mixed',
      disableRowDeactivation: true,
      rowHeight: 'medium',
      editable: true,
      columns: this.columns,
      dataset: this.data,
      spacerColumn: true,
    }
  }
}
