import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number
  title: string
  cost: number
  descrition: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appTitle = 'Shop application'


  ngOnInit(): void {
  }


  openForm() {
    document.getElementById("myForm").style.display = "grid";
    document.getElementById("btnClose").style.display = "grid";
    document.getElementById("btnOpen").style.display = "none";
    console.log('Привет от JavaScript!');
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("btnClose").style.display = "none";
    document.getElementById("btnOpen").style.display = "grid";
    console.log('зщлф от JavaScript!');
  }
}


