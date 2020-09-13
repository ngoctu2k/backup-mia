import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-region-dialog',
  templateUrl: './region-dialog.component.html',
  styleUrls: ['./region-dialog.component.scss']
})
export class RegionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialog,
    ) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.closeAll();
  }
}
