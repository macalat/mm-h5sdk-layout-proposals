import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoDataGridComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-do-mashup',
  templateUrl: './do-mashup.component.html',
  styleUrls: ['./do-mashup.component.css']
})
export class DoMashupComponent implements OnInit {

  constructor() { }
  gridOptions = {} as SohoDataGridOptions;
  columns = [];

  materialGridOptions = {} as SohoDataGridOptions;
  materialColumns = [];

  @ViewChild(SohoDataGridComponent) dataGrid: SohoDataGridComponent;

  hideMaterialGrid = true;
  
  ngOnInit() {
    this.setPlannedDOGrid();
    this.setMaterialGrid();
  }

  /**
   * Set Grid options for planned DO
   */
  setPlannedDOGrid(): void {
    this.columns = [
      { id: 'COL1', field: 'COL1', name: 'Date to use' },
      { id: 'COL2', field: 'COL2', name: 'Status' },
      { id: 'COL3', field: 'COL3', name: 'Ort' },
      { id: 'COL4', field: 'COL4', name: 'Plan qty', align: 'right',
        formatter: Soho.Formatters.Input, editor: Soho.Editors.Input,
        inlineEditor: true 
      },
      { id: 'COL5', field: 'COL5', name: 'Twh' },
      { id: 'COL6', field: 'COL6', name: 'Fwh' },
      { id: 'COL7', field: 'COL7', name: 'Item number' },
      { id: 'COL8', field: 'COL8', name: 'Name' },
      { id: 'COL9', field: 'COL9', name: 'Ttm', align: 'right' },
      { id: 'COL10', field: 'COL10', name: 'Planned order no' },
      {
        id: 'FILLER', field: 'FILLER', name: ''
      }
    ];


    this.gridOptions = {
      selectable: 'multiple',
      filterable: false,
      paging: true,
      pagesize: 50,
      hidePagerOnOnePage: true,
      rowHeight: 'small',
      editable: true,
      columns: this.columns,
      dataset: [
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419092'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '800', COL5: '1FA', COL6: 'KTM', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '2', COL10: '419093'  },
        { COL1: '260423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'CHF', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '1', COL10: '419094'  },
        { COL1: '270423', COL2: '10', COL3: 'DI9', COL4: '743', COL5: '1FA', COL6: 'KTM', COL7: '6400809', COL8: 'ONION RED DICED 10MM IQG', COL9: '2', COL10: '419095'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419096'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '1250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419097'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419092'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '800', COL5: '1FA', COL6: 'KTM', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '2', COL10: '419093'  },
        { COL1: '260423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'CHF', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '1', COL10: '419094'  },
        { COL1: '270423', COL2: '10', COL3: 'DI9', COL4: '743', COL5: '1FA', COL6: 'KTM', COL7: '6400809', COL8: 'ONION RED DICED 10MM IQG', COL9: '2', COL10: '419095'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419096'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '1250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419097'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419092'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '800', COL5: '1FA', COL6: 'KTM', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '2', COL10: '419093'  },
        { COL1: '260423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'CHF', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '1', COL10: '419094'  },
        { COL1: '270423', COL2: '10', COL3: 'DI9', COL4: '743', COL5: '1FA', COL6: 'KTM', COL7: '6400809', COL8: 'ONION RED DICED 10MM IQG', COL9: '2', COL10: '419095'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419096'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '1250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419097'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419092'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '800', COL5: '1FA', COL6: 'KTM', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '2', COL10: '419093'  },
        { COL1: '260423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'CHF', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '1', COL10: '419094'  },
        { COL1: '270423', COL2: '10', COL3: 'DI9', COL4: '743', COL5: '1FA', COL6: 'KTM', COL7: '6400809', COL8: 'ONION RED DICED 10MM IQG', COL9: '2', COL10: '419095'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419096'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '1250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419097'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419092'  },
        { COL1: '250423', COL2: '10', COL3: 'SRC', COL4: '800', COL5: '1FA', COL6: 'KTM', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '2', COL10: '419093'  },
        { COL1: '260423', COL2: '10', COL3: 'SRC', COL4: '1000', COL5: '1FA', COL6: 'CHF', COL7: '6406077', COL8: 'ARCON SOYA', COL9: '1', COL10: '419094'  },
        { COL1: '270423', COL2: '10', COL3: 'DI9', COL4: '743', COL5: '1FA', COL6: 'KTM', COL7: '6400809', COL8: 'ONION RED DICED 10MM IQG', COL9: '2', COL10: '419095'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419096'  },
        { COL1: '270423', COL2: '10', COL3: 'SRC', COL4: '1250', COL5: '1FA', COL6: 'KTM', COL7: '6405202', COL8: 'TEXTURED SOYA', COL9: '2', COL10: '419097'  },
      ],
      stretchColumn: 'FILLER',
      cellNavigation: false
    }
  }

  /**
   * Set Grid options for material
   */
   setMaterialGrid(): void {
    this.materialColumns = [
      { id: 'COL1', field: 'COL1', name: 'Whs',
        filterType: 'text' },
      { id: 'COL2', field: 'COL2', name: 'Oct',
        filterType: 'text' },
      { id: 'COL3', field: 'COL3', name: 'Pl dt',
        filterType: 'text' },
      { id: 'COL4', field: 'COL4', name: 'Item Number',
        filterType: 'text' },
      { id: 'COL5', field: 'COL5', name: 'Time',
        filterType: 'text' },
      { id: 'COL6', field: 'COL6', name: 'Order no',
        filterType: 'text' },
      { id: 'COL7', field: 'COL7', name: 'Trans qty bU/M', align: 'right' },
      { id: 'COL8', field: 'COL8', name: 'Reference text' },
      { id: 'COL9', field: 'COL9', name: 'Attribute value' },
      { id: 'COL10', field: 'COL10', name: 'Location' },
      { id: 'COL11', field: 'COL11', name: 'To loc' },
      { id: 'COL12', field: 'COL12', name: 'Name' },
      {
        id: 'FILLER', field: 'FILLER', name: ''
      }
    ];


    this.materialGridOptions = {
      selectable: false,
      filterable: true,
      paging: true,
      pagesize: 50,
      hidePagerOnOnePage: true,
      rowHeight: 'small',
      columns: this.columns,
      dataset: [
        { COL1: '1FA', COL2: '961', COL3: '170323', COL4: '1400113', COL5: '1453', COL6: '1049100', COL7: '360', COL8: '2310000140    FG', COL9: '', COL10: '', COL11: '', COL12: 'LMCF STHRN STYLE WINGS 8/230' },
        { COL1: '1FA', COL2: '960', COL3: '300424', COL4: '1400113', COL5: '', COL6: '', COL7: '200-', COL8: '2210074954', COL9: '', COL10: '', COL11: '', COL12: 'LMCF STHRN STYLE WINGS 8/230'  },
        { COL1: '1FA', COL2: '100', COL3: '160123', COL4: '1401234', COL5: '2359', COL6: '7854081', COL7: '559.000', COL8: '', COL9: '', COL10: '', COL11: '', COL12: 'ALDI SAUS 36/300G'  },
        { COL1: '1FA', COL2: '100', COL3: '190123', COL4: '1401236', COL5: '2359', COL6: '7854082', COL7: '560.000', COL8: '', COL9: '', COL10: '', COL11: '', COL12: 'ALDI MF MEATBALLS 304G'  },
        { COL1: '1FA', COL2: '101', COL3: '130223', COL4: '1401236', COL5: '816', COL6: '0008052962', COL7: '560.000', COL8: '0 1000115014 00000000', COL9: '', COL10: '', COL11: '', COL12: 'ALDI MF MEATBALLS 304G'  },
      ],
      stretchColumn: 'FILLER',
      cellNavigation: false
    }
  }

  rowClicked(): void {
    this.toggleHideMaterialGrid(true);
  }

  toggleHideMaterialGrid(hide = false): void {
    this.hideMaterialGrid = hide;
  }

}