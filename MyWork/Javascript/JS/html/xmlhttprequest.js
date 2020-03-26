var xhr = new XMLHttpRequest();

xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees");
xhr.responseType = 'json';
xhr.send();

xhr.onload = function(response) {
    console.log("Response Headers");
    xhr.getAllResponseHeaders()
        .split('\r\n')
        .reduce((result, current, index) => {
            console.log(`${index} : ${current}`);
            let [key, value] = current.split(':');
            result[key] = value;
            return result;
        });

    console.log("Response from API");
    console.log(xhr.response);

}

xhr.onerror = function(error) {
    console.log(`Error:${error}`);
}

xhr.onprogress = function(event) {
    console.log(`${event.loaded} of ${event.total}`);
}

