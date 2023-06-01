package org.mycompany.utils;

public class CharacterUtils {
    public static boolean isVowel(char c) {
        return String.valueOf(c).toLowerCase().matches("[aeiou]");
    }

    public static boolean isConsonant(char c) {
        return String.valueOf(c).toLowerCase().matches("[bcdfghjklmnpqrstvwxyz]");
    }

}
