function processRecords(callback){
    let input = [1,2,3,4,5,6,7,8,9,10];
    for (const num of input) {
        if(num%2 === 0){
            callback(num)
        }
    }
}


processRecords(function(num){
    console.log(num);
})