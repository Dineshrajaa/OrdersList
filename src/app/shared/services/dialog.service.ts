import { Injectable } from '@angular/core';

import { MatDialog, MatDialogConfig } from '@angular/material';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  public openDialog(component, dialogConfig?: MatDialogConfig) {
    const defaultDialogConfig: MatDialogConfig = {
      height: '300px',
      width: '300px'
    };
    const customDialogConfig = _.extend(defaultDialogConfig, dialogConfig);
    this.matDialog.open(component, customDialogConfig);
  }

  public closeDialog() {
    this.matDialog.closeAll(); // Caution: this closes all the instances of dialogs which are open
  }
}
