import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataService } from './data.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationGuardService } from './navigation-guard.service';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, AppRoutingModule, MatDialogModule ],
  declarations: [ AppComponent, HelloComponent, ConfirmationDialogComponent, AboutComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService, NavigationGuardService, ConfirmationDialogService]
})
export class AppModule { }
