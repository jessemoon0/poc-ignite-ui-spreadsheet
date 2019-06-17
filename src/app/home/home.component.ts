import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component';
import { ExcelUtilityService } from '../excel-utility.service';
import { Workbook } from 'igniteui-angular-excel/ES5/excel.core';
import { SpreadsheetActivePaneChangedEventArgs } from 'igniteui-angular-spreadsheet/ES5/igx-spreadsheet-active-pane-changed-event-args';
// tslint:disable-next-line:max-line-length
import { SpreadsheetActiveWorksheetChangedEventArgs } from 'igniteui-angular-spreadsheet/ES5/igx-spreadsheet-active-worksheet-changed-event-args';
import { SpreadsheetSelectionChangedEventArgs } from 'igniteui-angular-spreadsheet/ES5/igx-spreadsheet-selection-changed-event-args';
import { SpreadsheetActiveCellChangedEventArgs } from 'igniteui-angular-spreadsheet/ES5/igx-spreadsheet-active-cell-changed-event-args';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('spreadsheet', { read: IgxSpreadsheetComponent })
  public spreadsheet: IgxSpreadsheetComponent;

  // Hierarchy of objects:
  // WorkSheet > SpreadsheetPane > Worksheet[] (You can select multiple worksheets)

  constructor(private excelUtilityService: ExcelUtilityService) {}

  ngOnInit(): void {
    if (this.spreadsheet) {
      this.configureSheet();
      const excelFile = '../../assets/Sample1.xlsx';
      this.excelUtilityService.loadFromUrl(excelFile).then((w: Workbook) => {
        if (this.spreadsheet) {
          this.spreadsheet.workbook = w;
          this.spreadsheet.activeWorksheet.protect();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.spreadsheet.destroy();
  }

  onProtecting(): void {
    this.spreadsheet.activeWorksheet.protect();
  }

  onRightClick(event) {
    console.log(event);
  }

  public openFile(input: HTMLInputElement): void {
    if (input.files == null || input.files.length === 0) {
      return;
    }

    console.log('Files:' + input.files[0].name);

    this.excelUtilityService.load(input.files[0]).then((w: Workbook) => {
      console.log('Loaded Workbook: ');
      console.log(w);
      this.spreadsheet.workbook = w;
      console.log('Worksheets for a workbook');
      console.log(this.spreadsheet.workbook.worksheets());
      console.log('Spreadsheet: ');
      console.log(this.spreadsheet);
      this.spreadsheet.activeWorksheet.protect();
    }, (e) => {
      console.error('Workbook Load Error:' + e);
    });
  }

  private configureSheet() {
    // Hides header
    this.spreadsheet.isFormulaBarVisible = false;
    // Hides add a worksheet
    this.spreadsheet.allowAddWorksheet = false;
    // Enter key navigation enabled
    this.spreadsheet.isEnterKeyNavigationEnabled = true;
  }

  // SPREADSHEET EVENTS

  // this.spreadsheet.executeAction() has a lot of actions we can execute on the document

  // When we change sheets
  // Fires when we execute ExcelUtilityService.loadFromUrl and when we change sheets by tabs
  onActivePaneChanged(event: { sender: any, args: SpreadsheetActivePaneChangedEventArgs }) {
    console.log(event);
  }

  // When we load a document
  // Fires when we execute ExcelUtilityService.loadFromUrl and when we change sheets by tabs
  onActiveWorksheetChanged(event: { sender: any, args: SpreadsheetActiveWorksheetChangedEventArgs}) {
    console.log(event);
  }

  // Fires every time we click a new cell
  // Also when we are selecting an area of cells
  onSelectionChanged(event: { sender: any, args: SpreadsheetSelectionChangedEventArgs }) {
    // console.log(event);
  }

  // Same as onSelectionChanged but doesnt activate when we select an area of cells
  // Also when we execute ExcelUtilityService.loadFromUrl
  onActiveCellChanged(event: { sender: any, args: SpreadsheetActiveCellChangedEventArgs }) {
    // console.log(event);
  }

  onActionExecuted(event) {
    console.log('onActionExecuted');
    console.log(event);
  }

  onActiveTableChanged(event) {
    console.log('onActiveTableChanged');
    console.log(event);
  }

}
