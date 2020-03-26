let readOnlyArray: ReadonlyArray<string>;

readOnlyArray = ["","mr"];

readOnlyArray = ["Hey"];

console.log(readOnlyArray[0]);

console.log(readOnlyArray.length);

interface DownloadDocument {
    (url)
}

let doc: DownloadDocument = function(url){
    console.log(url);
    console.log("No params, no return value");
}


doc("hello");