package org.mycompany;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mycompany.exceptions.NoAlphabeticInputException;
import org.mycompany.models.UserInput;
import org.mycompany.models.AnalyzerOutput;
import org.mycompany.services.TextAnalyzer;

import java.util.Arrays;
import java.util.List;

class TextAnalyzerTest {

    private TextAnalyzer textAnalyzer;

    @BeforeEach
    void setup() {
        textAnalyzer = new TextAnalyzer();
    }

    @Test
    void testAnalyzerWithVowelInput() {
        UserInput userInput = new UserInput("a", "Alextraza");
        AnalyzerOutput analyzerOutput = textAnalyzer.analyzer(userInput);

        Assertions.assertEquals("Alextraza", analyzerOutput.getInputText());
        List<String> outputList = Arrays.asList(analyzerOutput.getOutputText());
        Assertions.assertTrue(outputList.contains("Letter 'A' appears 3 times"));
        Assertions.assertTrue(outputList.contains("Letter 'E' appears 1 times"));
    }


    @Test
    void testAnalyzerWithConsonantInput() {
        UserInput userInput = new UserInput("d", "Dedalus");
        AnalyzerOutput analyzerOutput = textAnalyzer.analyzer(userInput);

        Assertions.assertEquals("Dedalus", analyzerOutput.getInputText());
        List<String> outputList = Arrays.asList(analyzerOutput.getOutputText());
        Assertions.assertTrue(outputList.contains("Letter 'D' appears 2 times"));
        Assertions.assertTrue(outputList.contains("Letter 'L' appears 1 times"));
        Assertions.assertTrue(outputList.contains("Letter 'S' appears 1 times"));
    }

    @Test
    void testAnalyzerWithInvalidInput() {
        UserInput userInput = new UserInput("1", "Java");

        Assertions.assertThrows(NoAlphabeticInputException.class, () -> {
            textAnalyzer.analyzer(userInput);
        });
    }
}
