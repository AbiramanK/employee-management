import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { 
  TreeGridModule,
  PageService,
  SortService,
  FilterService,
  FreezeService,
  ResizeService,
  ReorderService,
  SelectionService,
  ToolbarService,
  EditService,
  ColumnMenuService,
  ContextMenuService,
  RowDDService
} from "@syncfusion/ej2-angular-treegrid";
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule,
    ButtonModule,
    DropDownListAllModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    FreezeService,
    ResizeService,
    ReorderService,
    SelectionService,
    ToolbarService,
    EditService,
    ColumnMenuService,
    ContextMenuService,
    RowDDService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
