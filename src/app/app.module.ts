import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommitListComponent } from './commit-list/commit-list.component';
import { CommitListFooterComponent } from './commit-list-footer/commit-list-footer.component';
import { CommitListHeaderComponent } from './commit-list-header/commit-list-header.component';
import { CommitDataService } from './commit-data.service';
import { CommitListItemComponent } from './commit-list-item/commit-list-item.component';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommitsComponent } from './commits/commits.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    CommitListComponent,
    CommitListFooterComponent,
    CommitListHeaderComponent,
    CommitListItemComponent,
    PageNotFoundComponent,
    CommitsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommitDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
