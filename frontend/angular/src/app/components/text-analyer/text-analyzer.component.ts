import {Component} from '@angular/core';
import {TextAnalyzerApiService} from "../../services/text-analyzer-api.service";
import {NgForm} from "@angular/forms";
import {AnalyzerOutput} from "../../models/analyzer-output";
import {UserInput} from "../../models/user-input";
import {TextAnalyzerLogicService} from "../../services/text-analyzer-logic.service";

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent {

  output!: AnalyzerOutput;
  outputHistory: AnalyzerOutput[] = [];
  charInput!: string;
  textInput!: string;

  onlineMode: boolean = true;
  mode: string = 'Online';
  onlineModeError: boolean = false;


  constructor(private textAnalyerApiService: TextAnalyzerApiService,
              private textAnalyerService: TextAnalyzerLogicService) {
  }

  submitForm(form: NgForm): void {

    const data: UserInput = {
      character: form.value['char-user-input'],
      text: form.value['text-user-input']
    };

    if (this.onlineMode) {
      console.log('Using Online Mode');
      this.textAnalyerApiService.getProcessedData(data).subscribe(
        (response) => {
          console.log(response);
          this.output = response;
          this.outputHistory.push(response);
        },
        (error) => {
          console.error(error);
          this.showOnlineModeError();
        }
      );
    } else {
      console.log('Using Offline Mode');
      this.output = this.textAnalyerService.analyzer(data);
      this.outputHistory.push(this.output);
    }
  }

  toggleMode(): void {
    this.onlineMode = !this.onlineMode;
    this.mode = this.onlineMode ? 'Online' : 'Offline';
    if(this.mode == 'Offline'){
      this.onlineModeError = false;
    }
  }


  removeSingleOutputHistory(index: number): void {
    this.outputHistory.splice(index, 1);
  }

  showOnlineModeError(): void {
    this.onlineModeError = true;
  }


  // Validation to prevent invalid input to the backend
  validateCharInput(): boolean {
    return !!this.charInput && !this.charInput.match(/^[a-zA-Z]+$/);
    console.log();
  }

  validateTextInput(): boolean {
    return !/[a-zA-Z]/.test(this.textInput);
  }
}
