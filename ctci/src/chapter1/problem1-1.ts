// 重複のない文字列

// setを使用できる場合
export function isUniqueChars(str: string): boolean {
    const charSet = new Set<string>();

    for (const char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

// 追加のデータ構造を使うことができない場合
export function isUniqueCharsBruteForce (str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        for (let j = i + 1; j < str.length; j++) {
            if (char == str[j]){
                return false
            }
        }
    }
    return true;
}
