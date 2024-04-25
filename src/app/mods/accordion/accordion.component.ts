import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {

  @Input() itemList:any[]=[];
  currentQue=0;

  onClick(index:number){
    if(this.currentQue==index){
      this.currentQue=-1;
    }else{
      this.currentQue=index;
    }
    
  }


}
