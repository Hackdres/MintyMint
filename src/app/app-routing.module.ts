import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componets
import { CalendarComponent } from './pages/calendar/calendar.component';
import { InstructorsComponent } from './pages/instructors/instructors.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: 'instructors', component: InstructorsComponent},
  { path: 'instructors/:id', component: DetailComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'subjects/:id', component: DetailComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: '', redirectTo: 'instructors', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }