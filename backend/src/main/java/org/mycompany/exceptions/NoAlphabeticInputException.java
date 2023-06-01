package org.mycompany.exceptions;

public class NoAlphabeticInputException extends RuntimeException {
    public NoAlphabeticInputException(String message) {
        super(message);
    }
}
