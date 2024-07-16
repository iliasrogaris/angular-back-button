import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export class ConfirmationDialogData {
  title: string;
  content?: string;
  cancelButtonCaption?: string;
  confirmButtonCaption?: string;
  showCancelButton?: boolean;
}

@Component({
  selector: "app-confirmation-dialog",
  templateUrl: "./confirmation-dialog.component.html",
  styleUrls: ["./confirmation-dialog.component.css"]
})
export class ConfirmationDialogComponent implements OnInit {
  content = "Are you sure?";
  cancelButtonCaption = "No";
  confirmButtonCaption = "Yes";
  defaultDialogData: ConfirmationDialogData = {
    title: "",
    content: "Are you sure?",
    cancelButtonCaption: "No",
    confirmButtonCaption: "Yes",
    showCancelButton: true
  };

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {}

  ngOnInit(): void {
    this.data = { ...this.defaultDialogData, ...this.data };
  }

  cancel(): void {
    console.log("clicked No");
    this.dialogRef.close(false);
  }

  confirm(): void {
    console.log("clicked Yes");
    this.dialogRef.close(true);
  }
}
