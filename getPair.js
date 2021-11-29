#Get number of Pairs for the given number of items and array for color of each items
function getPairs(n, arr) {
    let itemSet = [...new Set(ar)];
    console.log(itemSet);
    let pairs = 0;
    for(let i=0;i<itemSet.length; i++){
        let count = 0;
        ar.filter((x)=>{
            if(x === itemSet[i]){
                count++
            }  
        })
        pairs+= count/2 >= 1 ? Math.trunc(count/2) : 0;  //Math.trunc() function returns the integer part of a number by removing any fractional digits.
    }
    return pairs;
}


// Jumping on Clouds
function jumpingOnClouds(c) {
    // Write your code here
    let jumps = [];
    for (let i=0; i< c.length +1; i+=2 ){
        if(c[i] === 1) {
            i-=1;
        }
        jumps.push(c[i]);
    }
    return jumps.length-1;
}
