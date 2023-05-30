import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../client';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnChanges {

  submitted: boolean = false;
  
  @Input()
  client : Client = {} as Client;

  @Output()
  cancelEvent = new EventEmitter<void>();

  @Output()
  saveEvent = new EventEmitter<Client>();

  formGroupClient: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroupClient = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupClient.setValue(this.client);
  }

  clean() {
    this.formGroupClient.reset();
    this.submitted = false;
    this.cancelEvent.emit();
  }


  save() {
      this.submitted=true;
      if(this.formGroupClient.valid){
        this.saveEvent.emit(this.formGroupClient.value);
        this.formGroupClient.reset();
        this.submitted = false;
      }
  }

  get name() : any {
    return this.formGroupClient.get("name");
  }

  get email() : any {
    return this.formGroupClient.get("email");
  }

}
