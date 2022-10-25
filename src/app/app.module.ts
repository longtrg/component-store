import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BreedStore } from './services/breed.store';
import { BreedSidebarComponent } from './components/breed-sidebar/breed-sidebar.component';
import { BreedInformationComponent } from './components/breed-information/breed-information.component';
import { BreedSidebarItemComponent } from './components/breed-sidebar-item/breed-sidebar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BreedSidebarComponent,
    BreedInformationComponent,
    BreedSidebarItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [BreedStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
