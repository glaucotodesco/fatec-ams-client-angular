import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  client: Client = {} as Client;
  isEditing: boolean = false;
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      {
        next: data => this.clients = data
      }
    );

  }

  onCancelEvent() {
    this.client = {} as Client;
  }

  onSaveEvent(client: Client) {
    if (this.isEditing) {
      this.clientService.update(client).subscribe(
        {
          next: () => {
            this.loadClients();
            this.isEditing = false;
          }
        }
      )
    }
    else {
      this.clientService.save(client).subscribe(
        {
          next: data => {
            this.clients.push(data);
          }
        }
      );
    }
  }


  edit(client: Client) {
    this.client = client;
    this.isEditing = true;
  }

  delete(client: Client) {
    this.clientService.delete(client).subscribe({
      next: () => this.loadClients()
    })
  }




}




