import { answer } from './problem1-3';

describe('answer', () => {
    test('test1', () => {
        expect(answer("Mr John Smith ", 13)).toMatch("Mr%20John%20Smith");
    });

    test('test2', () => {
        expect(answer("Hello  World ", 12)).toMatch("Hello%20%20World");
    });

    test('test3', () => {
        expect(answer("abc", 3)).toMatch("abc");
    });
});