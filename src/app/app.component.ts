import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api'

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
    this.showSuccess()
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted', sticky: true, life: 20000 });
  }
}
