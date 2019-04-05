import { Routes } from '@angular/router';
import { Error404Component } from './error/404.component';

import {CreateSessionComponent} from './events/event-detail/create-session.component';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver    
} from './events/index'

export const appRoutes:Routes =[
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events:EventListResolver}},
  {path: 'events/:id', component: EventDetailsComponent,
    canActivate:[EventRouteActivator]},
  {path: 'events/new', component: CreateEventComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}, 
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'events/session/new', component: CreateSessionComponent}
]