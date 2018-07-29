import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import {ZooComponent} from './zoo.component';

const routes:Routes=[
    {path:'',component:ZooComponent}
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ZooRoutingModule{}