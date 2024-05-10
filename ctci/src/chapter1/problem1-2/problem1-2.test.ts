import { isSameStringRearranged } from './problem1-2';

describe('answer', () => {
    test('test1', () => {
        expect(isSameStringRearranged("str1", "1rts")).toBe(true);
    });

    test('test2', () => {
        expect(isSameStringRearranged("str1", "str2")).toBe(false);
    });

    test('test3', () => {
        expect(isSameStringRearranged("aaa", "aaa")).toBe(true);
    });

    test('test4', () => {
        expect(isSameStringRearranged("aa", "aaaa")).toBe(false);
    });
});