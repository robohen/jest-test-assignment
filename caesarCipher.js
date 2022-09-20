function letters(char){
    return(/[a-zA-Z]/).test(char);
}

function caesarCipher(str, shift){
    let arr = str.split('');
    let result = [];
    for(let i=0; i <arr.length; i++){
        if(letters(arr[i])){
            let code =arr[i].charCodeAt(0);
            let swappedCode = (((code - 97 + shift) % 26) + 97);
            result.push(String.fromCharCode(swappedCode))
        } else {
            result.push(arr[i]);
        }
    }
    return result.join('');
}

export default caesarCipher;