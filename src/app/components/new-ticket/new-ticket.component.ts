import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {

  selectedPriority: string = "";
  priorities: string[] = ['Bajo', 'Medio', 'Alto'];

  constructor() { }

  ngOnInit(): void {
  }

}
