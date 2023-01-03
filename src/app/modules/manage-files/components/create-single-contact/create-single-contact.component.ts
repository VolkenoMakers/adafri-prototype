import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-single-contact',
  templateUrl: './create-single-contact.component.html',
  styleUrls: ['./create-single-contact.component.scss']
})

export class CreateSingleContactComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateSingleContactComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}