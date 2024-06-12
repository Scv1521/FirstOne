import { Component } from '@angular/core';
import { EmployeeServices } from '../employee-services.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddEditEmployeeComponent } from '../add-edit-employee/add-edit-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  title = 'Employee';
  products: any[] = [];
  displayedColumns: String[] = [];
  maxHeight: number = 0;
  dataSource: any;

  animal: string = "Cow";
  name: string = "Shivam";

  constructor(private dataService: EmployeeServices, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = ['Id', 'Name', 'Gender', 'Email','Status'];

    const windowHeight = window.innerHeight;
    this.maxHeight = windowHeight * 0.8;
    for (let index = 0; index <= 3; index++) {
      this.getData()
    }
    this.dataSource = new MatTableDataSource(this.products);
  }

   async getData(){
    await this.dataService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.dataSource = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEditEmployeeComponent,{
      data: {name: this.name, animal: this.animal},
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      if(result != null){
        this.name = result.name;
        this.animal = result.animal;
      }else{
        this.name = "Kansara";
        this.animal = "Goat";
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    if(filterValue.trim() == ""){
      this.getData()
    }
    else{
      return this.dataSource = this.dataSource.filter((item: { name: string; email: string; gender: string; status: string; }) =>
        item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.email.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.gender.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.status.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
