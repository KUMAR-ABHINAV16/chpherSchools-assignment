let http = require('http')
let fs = require('fs')
const { ReadStream } = require('tty')

let server = http.createServer((request, response)=> {

    if(request.url === '/' || request.url === '/home')
    {
        response.writeHead(200, {'contentType': 'text/html'})

        ReadStream.pipeline(response)
    }
    else if(request.url === '/data')
    {
        response.writeHead(200, {'contentType':  'application/json'})
        let data = [
            {name: "pizza hut", description: "bext pizza", id:1},
            {name: "dominos", description: "bext pizza in town", id:2}
        ]
    }
})


app.listen(5000,()=>{
    console.log('listening on port')
})