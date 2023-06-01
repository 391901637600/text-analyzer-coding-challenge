package org.mycompany;

import io.javalin.Javalin;
import org.mycompany.api.TextAnalyzerEndpoint;

public class TextAnalyzerApp {

    public static void main(String[] args) {

        Javalin app = Javalin.create(config -> {
            config.plugins.enableCors(cors -> {
                cors.add(it -> {
                    //Host might be different for other developer
                    it.allowHost("http://localhost:4200");
                });
            });
        }).start(8080);

        app.post("/api/result", TextAnalyzerEndpoint::getResult);
    }
}