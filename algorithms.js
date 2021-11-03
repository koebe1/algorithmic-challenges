// algorithmic challenges from the hackerrank 1 Month interview prep
// week 2

// grid challenge 
function gridChallenge(grid) {
    // Write your code here
    let arr = [];
    let result = "YES";
    grid.forEach(str => arr.push([...str]));
    
    arr.forEach(array => array.sort());
    
    for(let i=0; i <arr.length-1; i++) {
        
        for(let j=0; j< arr[i].length; j++) {
            
            if( arr[i][j].charCodeAt() > arr[i+1][j].charCodeAt()) {
                result ="NO"
            }
        }
    }
    
    return result;

}

// sherlock and array
function balancedSums(arr) {
    // Write your code here
    let sum = arr.reduce((prev, curr) => prev+curr);
    let leftSum = 0;
    for(let i = 0; i < arr.length; i++){
        sum -= arr[i];
        if(sum === leftSum){
            return 'YES';
        };
        leftSum += arr[i];
    };
    return 'NO';
}

// recursiv digit sum
function superDigit(n, k) {
    // Write your code here
    
    if(n.length === 1) {
        return n;
    }
    
    let arr = [...n];
    let sum = arr.reduce((a,b) => parseInt(a) + parseInt(b)).toString()*k;
    
    return superDigit(sum.toString(),1)
    
}

// counter game
function counterGame(n) {
    // Write your code here

    function powerOfTwo(n){
        // & -> bitwise operator 
        // sets each bit to 1 of both bits are 1
        // n -> 1 0 0 0...   n-1 -> 0 1 1 1...
        // n & n-1 === 0 for powers of 2
        return (n !== 0) && (n & (n - 1)) === 0;
    }
    
    let counter = 0;
    
    if (n===1) {
        return "Richard";
    } while ( n > 1) {
        if(powerOfTwo(n)) {
            n=n/2;
            counter++;
        } else {
            let num = 2;
            let temp =2;
            while (num < n) {
                num *= temp;
            }
            n = n -(num/2);
            counter ++;
        }   
    }
        
    return counter % 2 === 0 ? "Richard" : "Louise";
    
}

// sum vs xor
function sumXor(n) {
    
    /* WORKS BUT TOO SLOW FOR BIG NUMBERS
    // Write your code here
    let counter = 0;
    
    // 0 <= x <= n
    for (let i=0; i <= n; i++) {

        if (n+i == (n^i)) {
            counter++;
        }        
    }
    return counter;
    */
 
    
    // numbers that meet criteria have a zeros 
    // where there are ones in n in the binary representation
    // ---> see bitwise operator ^ for criteria
    // 10010
    // 0**0* -> 2 of the power of 3 
    const binary = n.toString(2);
    const zeros = binary.split("0").length-1;
    
    // special case 0
    // 0+0 === 0 and 0^0 === 0
    if (n === 0) {
        return 1;
    } else {
        return 2**zeros;
    }
}
