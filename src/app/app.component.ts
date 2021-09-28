import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { sampleData } from './datasource';
import {
  TreeGridComponent,
  SortSettingsModel,
  SelectionSettingsModel
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-management';

  public data: Object[] = [];
  public sortSettings: SortSettingsModel = {};
  public filterSettings: Object;
  public rowDrop: Object;
  public selectionSettings: Object;
  public selectionOptions: SelectionSettingsModel;

  @ViewChild('treegrid')
  public treeGridObj: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
    this.sortSettings = { columns: [{ field: 'name', direction: 'Ascending' }, { field: 'country', direction: 'Descending' }] };
    this.filterSettings = { type: 'Menu'};
    this.selectionOptions = { type: 'Multiple', mode: 'Both' };
  }
  onDataBound() {
    'use strict';
    this.treeGridObj.autoFitColumns();
  }
}
