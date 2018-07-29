import { Component } from '@angular/core';

//https://medium.com/@amcdnl/feature-toggling-with-angular-and-the-angular-cli-eccf38369b3f

const routes = [
  {
      path: 'zoo',
      loadChildren: './zoo/zoo.module#ZooModule',
      data: { title: 'Zoo' }
  }
]

@Component({
  selector: 'header-nav',
  template: `
      <ul>
          <ng-container *ngFor="let route of routes">
              <li>
                 <a *featureToggle="route.path">{{route.data.title}}</a>
              </li>
          </ng-container>
      </ul>
  `
})
export class HeaderNav {
  routes = routes;
}