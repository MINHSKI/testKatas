

function wrap (str, col) {
    let curpos = 0;
    let expectedVal = (str.length % col) ? Math.floor(str.length/col) + 1 : Math.floor(str.length/col);
    console.log('Length: '+ str.length +' Expected lines are: '+expectedVal)
    while(curpos + col < str.length){
        if(str[curpos + col] === ' '){
            str[curpos+col] = '\n';
            curpos = curpos + col + 1;
        } else {
            for(let i=curpos+col; i > 0; i--){
                if(str[i] === ' '){
                    str[i] = '\n';
                    curpos = curpos+col - i + 1;
                }
            }
        }
    }
    return str;
}

module.exports = wrap



// loop thru the string at the str[col] 
// if a space, then replace 'space' with ' '\n' at str[col]
// else if str[col] find the next space on the left side, then replace str[space] with '\n'

// then then starting point is now at index = last space position