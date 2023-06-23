import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-item-maintenance',
  templateUrl: './item-maintenance.component.html',
  styleUrls: ['./item-maintenance.component.css']
})
export class ItemMaintenanceComponent implements OnInit {
  columns: SohoDataGridColumn[] = [];
  itemSelected = false;

  constructor() { }
  
  ngOnInit() {
    this.columns = [
      { id: 'WHLO', field: 'WHLO', name: 'Whs', filterType: 'text', },
      { id: 'WHNM', field: 'WHNM', name: 'Name', },
      { id: 'WHSL', field: 'WHSL', name: 'Location', },
      { id: 'STQT', field: 'STQT', name: 'On-hand approve', align: 'right', formatter: Soho.Formatters.Decimal, },
      { id: 'ALQT', field: 'ALQT', name: 'Allocated qty', align: 'right', formatter: Soho.Formatters.Decimal, },
      { id: 'REQT', field: 'REQT', name: 'Reserved qty', align: 'right', formatter: Soho.Formatters.Decimal, },
      { id: 'AV01', field: 'AV01', name: 'Allocated net', align: 'right', formatter: Soho.Formatters.Decimal, },
      { id: 'ORQT', field: 'ORQT', name: 'Ordered qty', align: 'right', formatter: Soho.Formatters.Decimal, },
      { id: 'USYE', field: 'USYE', name: 'Annual usage', align: 'right', formatter: Soho.Formatters.Decimal, },
    ]
  }
  
  toggleSearchPanel() {
    this.itemSelected = !this.itemSelected;
  }

  /*
    { WHLO: 'A01', WHNM: 'Main Warehouse', WHSL: 'STOCK', STQT: '150', ALQT: '12.5', REQT: '10', AV01: '0', ORQT: '10', USYE: '320.15' },
    { WHLO: 'B01', WHNM: 'Local Branch', WHSL: 'STOCK', STQT: '123', ALQT: '50', REQT: '20', AV01: '10', ORQT: '10', USYE: '390' },
    { WHLO: 'BLL', WHNM: 'Regional DC', WHSL: 'STOCK', STQT: '3315', ALQT: '22', REQT: '30', AV01: '5', ORQT: '21', USYE: '511.0' },
    { WHLO: 'L01', WHNM: 'Mobile WHS for Service', WHSL: 'STOCK', STQT: '9900', ALQT: '0', REQT: '20', AV01: '0', ORQT: '10', USYE: '1000' },
    { WHLO: 'S02', WHNM: 'Consolidated Warehouse', WHSL: 'STOCK', STQT: '200', ALQT: '91', REQT: '15', AV01: '0', ORQT: '10', USYE: '351' }
  */

}