import { Routes } from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import { EventDetailsComponent } from './events/event-detail/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-detail/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver';

export const appRoutes:Routes =[
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
  {path: 'events/:id', component: EventDetailsComponent,
    canActivate:[EventRouteActivator]},
  {path: 'events/new', component: CreateEventComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}, 
]