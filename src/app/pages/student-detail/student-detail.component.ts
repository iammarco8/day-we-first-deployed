import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute){}

  nIndex:number= 0;

  ngOnInit(): void {
    this.nIndex = this.route.snapshot.params['id'];
    this
  }
  studentObject = [
    {name: 'Rebecca', phone:'555-555-5555', city:'ville'},
    {name: 'Veronica', phone:'987-654-3210', city:'town'},
    {name: 'Jenny', phone:'012-365-4987', city:'village'}
  ];
}
