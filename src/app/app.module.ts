import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';

import { Ng2SearchPipeModule } from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    Ng2SearchPipeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
