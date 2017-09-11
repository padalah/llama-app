import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { LlamaComponent } from './llama/llama.component';
import { MeComponent } from './me/me.component';
import { BuyComponent } from './buy/buy.component';
import { FactsComponent } from './facts/facts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LlamaComponent,
    MeComponent,
    BuyComponent,
    FactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/llama',
        pathMatch: 'full'
      },
      {
        path: 'llama',
        component: LlamaComponent
      },
      {
        path: 'facts',
        component: FactsComponent
      },
      {
        path: 'me',
        component: MeComponent
      },
      {
        path: 'buy',
        component: BuyComponent
      },
      {
        path: '**',
        redirectTo: '/llama',
        pathMatch: 'full'
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
