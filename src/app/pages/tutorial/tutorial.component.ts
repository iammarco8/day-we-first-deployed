import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {
  name: string = "Marco Duhaney";
  students: string[] =["Kalil", "Kimanie", "Akoni"];
  
  myEvent="";
  newClass="";
  headingClass="";
  boolVal:boolean =false;
  isHidden = false;
  
  studentInfo():string{
    let newName:string = "Jack";
    return newName;
  }
  
  // studentInfo2(nVal: boolean): string{
  //   if(nVal == true){
  //     return 'your a student';
  //   }else{
  //     'Your a Teacher';
  //   }
  // }
  
  buttonClick():void{
    this.myEvent = "button Clicked"
  }
  
  mouseOver():void{
    this.newClass = "mouseOver";
    this.headingClass = "heading";
    this.isHidden = true;
    this.boolVal = true;
  }
  
  mouseOut():void{
    this.headingClass ="";
    this.newClass = "";
    this.isHidden = false;
    this.boolVal = false;
  }
}
