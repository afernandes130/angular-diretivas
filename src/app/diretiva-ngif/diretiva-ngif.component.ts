import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {
  
  visible : boolean = false;


  ListCurso(){
    this.visible = !this.visible;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
