import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import {EventDetailsComponent} from './events/event-detail/event-details.component'
import {CreateEventComponent} from './events/create-event.component';
import {appRoutes} from './routes';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-detail/event-route-activator.service';
import { EventListResolver } from './events/events-list-resolver';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent,
    
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}
