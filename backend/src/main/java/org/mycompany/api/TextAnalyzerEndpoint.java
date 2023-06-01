package org.mycompany.api;

import io.javalin.http.Context;
import org.mycompany.models.AnalyzerOutput;
import org.mycompany.models.UserInput;
import org.mycompany.services.TextAnalyzer;

public class TextAnalyzerEndpoint {

    public static void getResult(Context ctx) {
        UserInput userInput = ctx.bodyAsClass(UserInput.class);
        TextAnalyzer textAnalyzer = new TextAnalyzer();
        AnalyzerOutput analyzerOutput = textAnalyzer.analyzer(userInput);
        ctx.contentType("application/json");
        ctx.json(analyzerOutput);
    }
}
