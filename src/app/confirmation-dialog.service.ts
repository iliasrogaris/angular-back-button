import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ConfirmationDialogComponent, ConfirmationDialogData } from './confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

	readonly defaultDialogConfig: MatDialogConfig<ConfirmationDialogData> = {
		panelClass: 'confirmation-dialog',
		autoFocus: false,
		data: {
			title: ''
		},
    hasBackdrop: true,
		backdropClass: 'cdk-overlay-transparent-backdrop'
	};
  back$ = new Subject<boolean>();

	constructor(private dialog: MatDialog) { }

	openDialog(dialogConfig: MatDialogConfig<ConfirmationDialogData>, afterClosed?: (confirmed: boolean) => void): void {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, { ...this.defaultDialogConfig, ...dialogConfig });

		dialogRef.afterClosed().subscribe(confirmed => {
      this.back$.next(confirmed);
      console.log('confirmed?', confirmed);
			if (afterClosed) {
				afterClosed(confirmed);
			}
		});
	}

}