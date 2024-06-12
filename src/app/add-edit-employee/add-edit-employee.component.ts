import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { DialogData } from '../employee/employee.component';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,MatFormFieldModule,FormsModule],
})
export class AddEditEmployeeComponent {

  constructor(
    public dialogRef: MatDialogRef<AddEditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(btnValue: string) {
    if(btnValue == "Ok"){
      this.dialogRef.close({
        animal:'From Ok',
        name:'Ok Button Click'
      });
    }
    else{
      this.dialogRef.close({
        animal:'From No Thanks',
        name:'No Thanks Button click'
      });
    }
  }
}
