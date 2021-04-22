import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { InstructorCardComponent } from './pages/components/instructor-card/instructor-card.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    InstructorsComponent,
    HeaderComponent,
    SidebarComponent,
    SubjectsComponent,
    CalendarComponent,
    InstructorCardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
