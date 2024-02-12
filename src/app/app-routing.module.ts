import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetzgrafikApplicationComponent } from './netzgrafik-application/netzgrafik-application.component';
import { ProjectsViewComponent } from './view/project/projects-view/projects-view.component';
import { VariantsViewComponent } from './view/variant/variants-view/variants-view.component';
import { ErrorViewComponent } from './view/error-view/error-view.component';

// Use the AuthGuard in routes that should require a logged in user.
// Do NOT use it for the root route. If the user should always be logged in,
// see comment in the AppComponent constructor.
const routes: Routes = [
  { path: '', component: ProjectsViewComponent },
  {
    path: 'projects',
    children: [
      { path: '', component: ProjectsViewComponent },
      { path: ':projectId', component: VariantsViewComponent },
      {
        path: ':projectId/variants/:variantId',
        component: NetzgrafikApplicationComponent,
      },
    ],
  },
  {
    path: '404',
    component: ErrorViewComponent,
    data: { error: 'Die gesuchte Seite wurde nicht gefunden.' },
  },
  {
    path: '401',
    component: ErrorViewComponent,
    data: {
      error: 'Sie sind nicht autorisiert, bitte laden Sie die Seite neu.',
    },
  },
  {
    path: '403',
    component: ErrorViewComponent,
    data: { error: 'Sie sind nicht berechtigt diese Aktion durchzuführen.' },
  },
  {
    path: '409',
    component: ErrorViewComponent,
    data: {
      error:
        'Es gab einen Konflikt bei der Ausführung Ihrer Aktion, bitte versuchen Sie es erneut.',
    },
  },
  {
    path: 'error',
    component: ErrorViewComponent,
    data: { error: 'Es ist ein Fehler aufgetreten.' },
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
