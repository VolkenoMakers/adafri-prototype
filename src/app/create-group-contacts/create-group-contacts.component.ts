import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-group-contacts',
  templateUrl: './create-group-contacts.component.html',
  styleUrls: ['./create-group-contacts.component.scss']
})

export class CreateGroupContactsComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateGroupContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public contacts: ContactElement[],
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface ContactElement {
  position: number;
  firstname: string;
  lastname: string;
  phone_number:string;
}
