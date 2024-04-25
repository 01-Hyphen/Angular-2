import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy{

  @Output() close:EventEmitter<any>=new EventEmitter()
    constructor(private el:ElementRef){}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  onCloseClick(){
    this.close.emit();
  }

  ngOnDestroy(){
    this.el.nativeElement.remove()
  }

}
