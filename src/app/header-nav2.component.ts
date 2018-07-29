import { Component } from '@angular/core';
import { CONFIG } from '../environments/config'

//https://github.com/willmendesneto/ngx-feature-toggle

@Component({
  selector: 'header-nav2',
  template: `
<feature-toggle-provider [features]="featureToggleData">
    <feature-toggle [featureName]="'zoo'">
        <div><a routerLink="/zoo" routerLinkActive="active">Zoo</a></div>
    </feature-toggle>
    <feature-toggle [featureName]="'farm'">
      <p>condition is false and "featureToggle" is disabled. In that case this content should not be rendered.</p>
    </feature-toggle>
    <feature-toggle [featureName]="'farm'" showWhenDisabled >
      <p>condition is false and "featureToggle" is disabled <b>and it has "showWhenDisabled" attribute.</b> 
      In that case this content should be rendered.</p>
    </feature-toggle>
   
</feature-toggle-provider>
`
})
export class HeaderNav2 {
/*     public featureToggleData: any = {
        enableFirstText: false,
        enableSecondText: true
      }; */
      public featureToggleData: any = CONFIG.features;

      constructor(){
        console.log(this.featureToggleData);
      }
      
      
}