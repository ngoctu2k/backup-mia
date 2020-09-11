import { NgModule } from '@angular/core';
import { NoStraightBrick } from './pipe.custom';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
})

export class CustomPipeModule {

    static forRoot() {
        return {
            ngModule: CustomPipeModule,
            providers: [],
        };
    }
} 