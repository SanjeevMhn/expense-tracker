import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spendings-log';

  @ViewChild('dialog',{static: true}) dialog !: ElementRef<HTMLDialogElement>

  showDialog(){
    if(this.dialog){
      this.dialog.nativeElement.showModal()
    }
  }
  closeDialog(){
    this.dialog.nativeElement.close();
  }
}
