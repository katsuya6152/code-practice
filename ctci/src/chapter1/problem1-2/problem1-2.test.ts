import { answer } from './problem1-2';

describe('answer', () => {
    test('test1', () => {
        expect(answer("arg")).toBe(true);
    });

    test('test2', () => {
        expect(answer("arg")).toBe(false);
    });

    test('test3', () => {
        expect(answer("arg")).toBe(true);
    });
});