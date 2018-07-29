import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {ZooRoutingModule} from './zoo-routing.module';

import { ZooComponent } from "./zoo.component";


@NgModule({
    imports:[
        CommonModule,
        ZooRoutingModule
    ],
    declarations:[ZooComponent]

})

export class ZooModule{}