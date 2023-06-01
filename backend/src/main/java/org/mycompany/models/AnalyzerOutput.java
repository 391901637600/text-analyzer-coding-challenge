package org.mycompany.models;

import java.util.List;

public class AnalyzerOutput {
    private String inputText;
    private String[] outputText;

    public AnalyzerOutput(String inputText, String[] outputText) {
        this.inputText = inputText;
        this.outputText = outputText;
    }

    public AnalyzerOutput() {
    }

    public String getInputText() {
        return inputText;
    }

    public void setInputText(String inputText) {
        this.inputText = inputText;
    }

    public String[] getOutputText() {
        return outputText;
    }

    public void setOutputText(List<String> outputText) {
        this.outputText = outputText.toArray(new String[0]);
    }
}
