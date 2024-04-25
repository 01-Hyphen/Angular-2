import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {

  statistics=[
    {value:'22',label:'Favorites'},
    {value:'967',label:'Page Views'},
    {value:'30',label:'Users'}
  ]

  imagesList=[
    {
      path:'https://images.unsplash.com/photo-1713877561507-881bf3b1c310?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title:'Everest'
    },
    {
      path:'https://images.unsplash.com/photo-1713453054079-7231d9c7d521?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title:'Green Room'
    },
    {
      path:'https://images.unsplash.com/photo-1713815540987-0324b70c33cc?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title:'Painting'
    }
  ]

}
