import { Injectable } from "@angular/core";
import { MatDialogConfig } from "@angular/material/dialog";
import { CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { ConfirmationDialogService } from "./confirmation-dialog.service";

@Injectable()
export class NavigationGuardService implements CanDeactivate<any> {
  constructor(private confirmationDialogService: ConfirmationDialogService) {}

  canDeactivate(component: any): Observable<boolean> {
    // will prevent user from going back
    const dialogConfig: MatDialogConfig = {
			data: {
				title: '',
				content: `Go Back?`
			}
		};
    const afterClosed = result => {
      if (!result) {
        history.pushState(null, null, location.href);
      }
    };

    this.confirmationDialogService.openDialog(dialogConfig, afterClosed)

    return this.confirmationDialogService.back$;
  }
}
