import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {TextAnalyzerComponent} from "./components/text-analyer/text-analyzer.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule, FormsModule],
    declarations: [AppComponent, TextAnalyzerComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'text-analyzer-fe'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Text Analyzer');
  });
});
