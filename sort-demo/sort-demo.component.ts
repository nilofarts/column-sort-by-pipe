import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {SortByColumnPipe} from './sort-by-column.pipe';

@Component({
  selector: 'app-sort-demo',
  templateUrl: './sort-demo.component.html',
  styleUrls: ['./sort-demo.component.css'],
  providers: [SortByColumnPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortDemoComponent implements OnInit {
  constructor() { }
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'Name';
  direction: number;
  ngOnInit() {
    this.records = [
      { Id:'1',Name: 'Senior', Description: 50 },
    { Id:'2',Name: 'Senior', Description: 10 },
    { Id:'3',Name: 'Adult', Description: 75 },
    {Id:'4', Name: 'Child', Description: 75 },
    { Id:'5',Name: 'Infant', Description: 25 },
    { Id:'6',Name: 'Adult', Description: 50 }
     ];
  }

  sort(property){
    // debugger;
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };

}
