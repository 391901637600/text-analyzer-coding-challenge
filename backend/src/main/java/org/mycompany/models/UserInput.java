package org.mycompany.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UserInput {
    private String character;
    private String text;


    @JsonCreator
    public UserInput(@JsonProperty("character") String character, @JsonProperty("text") String text) {
        this.character = character;
        this.text = text;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
