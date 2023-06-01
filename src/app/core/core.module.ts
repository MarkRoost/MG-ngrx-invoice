import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterState, StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      auth: ()=>({token: 123}),
      profile: ()=> 'Mario Rossi',
      router: ()=> routerReducer,
    },
    {
      runtimeChecks: {
         strictStateImmutability: true,
         strictActionImmutability: true,
         strictStateSerializability: false,
         strictActionSerializability: true,
      }
    }
    ),
    StoreDevtoolsModule.instrument(
      { maxAge: 25},
    ),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }

    ),
  ]
})
export class CoreModule { }
