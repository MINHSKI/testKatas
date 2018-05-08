function wrap( str, col){
    let curpos = 0;
    let outstr = '';
    console.log('Length: ' + str.length);
    debugger;
    while( curpos < str.length ){
        // are we almost at the end?
        // console.log('Current Pos: ' + curpos);
        if((str.length - curpos) <= col ){
            outstr += str.slice(curpos);
            break;
        } 
        if(str.charAt(curpos + col) === ' '){
            outstr += str.slice(curpos, curpos+col) + '\n';
            curpos += col + 1;
        } else {
            let lastSpace = findLastSpace(str, curpos + col);
            outstr += str.slice(curpos, lastSpace) + '\n';
            curpos += lastSpace + 1;
            // console.log('lastSpace Pos: ' + lastSpace);
        }
    }
    // console.log(outstr);
    return outstr;
}

function findLastSpace(str, index){
    return str.lastIndexOf(' ', index);
}

module.exports = wrap



// loop thru the string at the str[col] 
// if a space, then replace 'space' with ' '\n' at str[col]
// else if str[col] find the next space on the left side, then replace str[space] with '\n'

// then then starting point is now at index = last space position