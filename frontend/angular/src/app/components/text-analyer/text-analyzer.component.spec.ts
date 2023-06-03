import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextAnalyzerComponent} from './text-analyzer.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AnalyzerOutput} from "../../models/analyzer-output";
import {TextAnalyzerApiService} from "../../services/text-analyzer-api.service";
import {TextAnalyzerLogicService} from "../../services/text-analyzer-logic.service";

describe('TextAnalyerComponent', () => {
  let component: TextAnalyzerComponent;
  let fixture: ComponentFixture<TextAnalyzerComponent>;
  let textAnalyzerApiService: TextAnalyzerApiService;
  let textAnalyzerLogicService: TextAnalyzerLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAnalyzerComponent],
      imports: [HttpClientTestingModule, HttpClientModule, FormsModule],
      providers: [
        TextAnalyzerApiService,
        TextAnalyzerLogicService
      ]
    });
    fixture = TestBed.createComponent(TextAnalyzerComponent);
    component = fixture.componentInstance;
    textAnalyzerApiService = TestBed.inject(TextAnalyzerApiService);
    textAnalyzerLogicService = TestBed.inject(TextAnalyzerLogicService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleMode', () => {
    it('should toggle the online mode and update the mode', () => {
      component.onlineMode = true;
      component.mode = 'Online';

      component.toggleMode();

      expect(component.onlineMode).toBeFalse();
      expect(component.mode).toEqual('Offline');

      component.toggleMode();

      expect(component.onlineMode).toBeTrue();
      expect(component.mode).toEqual('Online');
    });
  });

  describe('removeSingleOutputHistory', () => {
    it('should remove the previous output at the specified index', () => {
      const output1: AnalyzerOutput = { inputText: 'UserInput 1', outputText: ['AnalyzerOutput 1'] };
      const output2: AnalyzerOutput = { inputText: 'UserInput 2', outputText: ['AnalyzerOutput 2'] };
      const output3: AnalyzerOutput = { inputText: 'UserInput 3', outputText: ['AnalyzerOutput 3'] };
      component.outputHistory = [output1, output2, output3];

      component.removeSingleOutputHistory(1);

      expect(component.outputHistory.length).toEqual(2);
      expect(component.outputHistory).toEqual([output1, output3]);
    });
  });


  describe('validateCharInput', () => {
    it('should return true when charInput is not alphabetic', () => {
      component.charInput = '1';

      const result = component.validateCharInput();

      expect(result).toBeTrue();
    });

    it('should return false when charInput is alphabetic', () => {
      component.charInput = 'a';

      const result = component.validateCharInput();

      expect(result).toBeFalse();
    });
  });

  describe('validateTextInput', () => {
    it('should return true when textInput does not contain any alphabetic characters', () => {
      component.textInput = '!';

      const result = component.validateTextInput();

      expect(result).toBeTrue();
    });

    it('should return false when textInput contains at least one alphabetic character', () => {
      component.textInput = 'a!';

      const result = component.validateTextInput();

      expect(result).toBeFalse();
    });
  });
});
