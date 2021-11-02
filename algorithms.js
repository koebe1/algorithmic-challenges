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