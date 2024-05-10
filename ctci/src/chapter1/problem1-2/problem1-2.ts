// 順列チェック

function sortString(str: string): string {
    return str.split('').sort().join('');
}

export function isSameStringRearranged (str1: string, str2: string): boolean {
    if (str1.length != str2.length) return false
    return sortString(str1) == sortString(str2);
}