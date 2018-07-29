import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { CONFIG } from '../environments/config'

@Directive({
    selector: '[featureToggle]'
})
export class FeatureToggleDirective implements OnInit {
    @Input() featureToggle: string;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {}

    ngOnInit() {
        if (this.isEnabled()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

    isEnabled() {
        const { features } = CONFIG;
        if (features['*']) {
            return true;
        }
console.log(`feature: ${this.featureToggle}`);
        return features[this.featureToggle];
    }
}