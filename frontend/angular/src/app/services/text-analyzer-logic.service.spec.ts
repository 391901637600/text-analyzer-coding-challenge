import {TestBed} from '@angular/core/testing';

import {TextAnalyzerLogicService} from './text-analyzer-logic.service';
import {UserInput} from "../models/user-input";
import {AnalyzerOutput} from "../models/analyzer-output";

describe('TextAnalyzerLogicService', () => {
  let textAnalyzerLogicService: TextAnalyzerLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    textAnalyzerLogicService = TestBed.inject(TextAnalyzerLogicService);
  });

  it('should be created', () => {
    expect(textAnalyzerLogicService).toBeTruthy();
  });

  it('should analyze input text and return the output', () => {
    const input: UserInput = {
      character: 'a',
      text: 'Alextraza',
    };

    const expectedOutput: AnalyzerOutput = {
      inputText: 'Alextraza',
      outputText: ["Letter 'A' appears 3 times", "Letter 'E' appears 1 times"],
    };

    const output: AnalyzerOutput = textAnalyzerLogicService.analyzer(input);

    expect(output).toEqual(expectedOutput);
  });
});
