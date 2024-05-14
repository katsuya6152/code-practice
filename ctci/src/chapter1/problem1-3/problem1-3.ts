// URLify

export function answer(str: string, trueLength: number): string {
    // 文字列を配列に変換する
    let strArr = str.split('');
    
    let spaceCount = 0;
    for (let i = 0; i < trueLength; i++) {
        if (strArr[i] === " ") {
            spaceCount++;
        }
    }
    
    let index = trueLength + spaceCount*2;
    
    if (trueLength < str.length) strArr[trueLength] = "\0"
    // 逆順に文字を処理していく(空白文字を置き換える際に文字列を上書きしないように)
    for (let i = trueLength; i >= 0; i--) {
        if (strArr[i] === ' ') {
            // 空白を見つけた場合は'%20'に置き換える
            strArr[index] = '0';
            strArr[index - 1] = '2';
            strArr[index - 2] = '%';
            index -= 3;
        } else {
            // 空白でない場合はそのままコピー
            strArr[index] = strArr[i];
            index--;
        }
    }
    
    return strArr.join('');
}
