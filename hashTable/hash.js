// simple hash for strings only
function hash(key, arraylen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let val = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arraylen;
    }
    return total;
}