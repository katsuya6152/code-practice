import { isUniqueChars, isUniqueCharsBruteForce } from './problem1-1';

describe('isUniqueChars', () => {
    test('returns true for string with all unique characters', () => {
        expect(isUniqueChars("abcdef")).toBe(true);
    });

    test('returns false for string with duplicated characters', () => {
        expect(isUniqueChars("hello")).toBe(false);
    });

    test('returns true for an empty string', () => {
        expect(isUniqueChars("")).toBe(true);
    });

    test('returns true for string with one character', () => {
        expect(isUniqueChars("a")).toBe(true);
    });

    test('returns false for string with all same characters', () => {
        expect(isUniqueChars("aaaaa")).toBe(false);
    });
});

describe('isUniqueCharsBruteForce', () => {
    test('returns true for string with all unique characters', () => {
        expect(isUniqueCharsBruteForce("abcdef")).toBe(true);
    });

    test('returns false for string with duplicated characters', () => {
        expect(isUniqueCharsBruteForce("hello")).toBe(false);
    });

    test('returns true for an empty string', () => {
        expect(isUniqueCharsBruteForce("")).toBe(true);
    });

    test('returns true for string with one character', () => {
        expect(isUniqueCharsBruteForce("a")).toBe(true);
    });

    test('returns false for string with all same characters', () => {
        expect(isUniqueCharsBruteForce("aaaaa")).toBe(false);
    });
});