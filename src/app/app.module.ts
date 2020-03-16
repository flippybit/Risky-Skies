import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Bootsrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Agm Maps
import { AgmCoreModule } from "@agm/core";

// Auto imports del proyecto
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BasicTableComponent } from "./basic-table/basic-table.component";
import { MapsComponent } from "./maps/maps.component";
import { TableFilteringComponent } from "./table-filtering/table-filtering.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//material imports

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule, MatButton } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatChipsModule } from "@angular/material/chips";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRadioModule } from "@angular/material/radio";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule, MatStepperModule, MatNativeDateModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { GoogleMapsModule } from "@angular/google-maps";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// FIREBASE 
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//ENVIRONMENT VARIABLE 
import { environment } from 'src/environments/environment';
import { ModoCrearComponent } from './modo-crear/modo-crear.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { TableCreatorComponent } from './table-creator/table-creator.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    MapsComponent,
    TableFilteringComponent,
    ModoCrearComponent,
    LandingViewComponent,
    TableCreatorComponent
  ],
  imports: [
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    GoogleMapsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    MatTabsModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: "AIzaSyD3n2DyjkFCIMAxsvTqWpSY8WbIw2W4D1M"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
