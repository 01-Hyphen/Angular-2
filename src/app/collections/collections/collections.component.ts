import { Component } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

  data=[
    {name:'James',age:'24',job:'Designer',employed:true},
    {name:'Jill',age:'26',job:'Enineer',employed:false},
    {name:'Elyse',age:'25',job:'Enineer',employed:true}
  ]

  headers=[
    {key:'employed',label:'Have a job?'},
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'}
  ]

  classNames='celled'
}
