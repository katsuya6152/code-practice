import { answer } from './problem1-2';

describe('answer', () => {
    test('test1', () => {
        expect(answer()).toBe(true);
    });

    test('test2', () => {
        expect(answer()).toBe(false);
    });

    test('test3', () => {
        expect(answer()).toBe(true);
    });
});