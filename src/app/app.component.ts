import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MessageService, DomHandler } from 'primeng/api'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'omitHubUser';

  constructor(private messageService: MessageService) { }
  ngOnInit() {  
  }


}
