import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DeviationListComponent } from './deviation-list/deviation-list.component';
import { DeviationComponent } from './deviation/deviation.component';
import { HeaderTopicComponent } from './header-topic/header-topic.component';
import { DeviationDetailsComponent } from './deviation-details/deviation-details.component';
import { DeviationContainerComponent } from './deviation-container/deviation-container.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DeviationListComponent,
    DeviationComponent,
    HeaderTopicComponent,
    DeviationDetailsComponent,
    DeviationContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
