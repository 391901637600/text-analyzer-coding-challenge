import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TextAnalyzerComponent} from "./components/text-analyer/text-analyzer.component";

@NgModule({
  declarations: [
    AppComponent,
    TextAnalyzerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
