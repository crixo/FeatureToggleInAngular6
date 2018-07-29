

import { Component } from '@angular/core';
const route = 
    {
        path: 'zoo'
    };
  

@Component({
  selector: 'footer-nav',
  template: `
  <h2>footer</h2>
      <ul>
              <li>
                here: <a *featureToggle="route.path">Zoo</a>
              </li>
      </ul>
  `
})
export class FooterNav {
    route = route;
}
