
const fs = require('fs');
const querystring = require('querystring');
const unirest = require('unirest');

if (process.argv.length < 3 ) {
    console.log('Minimum 3: node runner.js scripts/simple.js who="jim"')
    return
}

fs.readFile(process.argv[2], function(err, raw) {

    var argParams = process.argv.slice(3,process.argv.length);
    var queryKeyValue = {};
    argParams.forEach(function(element) {
        var keyValue = element.split('=');
        if (keyValue.length === 2)
            queryKeyValue[keyValue[0]] = keyValue[1];
    }, this);
    const queryParams = querystring.stringify(queryKeyValue);
    
    unirest.post('http://127.0.0.1:3001/run?' + queryParams)
        .headers({
            'Content-Type': 'text/plain;charset=UTF-8',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.gHR70RJsym-H6-b0ebw5ozTYNztVDvQRS_GjTJ2ZMd4'})
        .send(raw)
        .end(function (response) {
        console.log(response.body);
    });
});
