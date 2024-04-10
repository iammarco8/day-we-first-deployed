import { Component } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  sampleText ='';

  students = ["marco", "jessica", "jasmin"];

  studentObject = [
    {name: 'Rebecca', phone:'555-555-5555', city:'ville'},
    {name: 'Veronica', phone:'987-654-3210', city:'town'},
    {name: 'Jenny', phone:'012-365-4987', city:'village'}
  ];
}
