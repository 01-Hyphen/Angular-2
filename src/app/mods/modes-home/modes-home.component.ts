import { Component } from '@angular/core';

@Component({
  selector: 'app-modes-home',
  templateUrl: './modes-home.component.html',
  styleUrl: './modes-home.component.css'
})
export class ModesHomeComponent {
  isOpen=false;
  onClick(){
    this.isOpen=!this.isOpen
  }

  items=[
    {que:'What is a dog?',ans:'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'},
    {que:'What kinds of dogs are there?',ans:'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'},
    {que:' How do you acquire a dog?',ans:'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'}
  ]

}
