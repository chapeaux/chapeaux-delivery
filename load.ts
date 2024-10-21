import { TextLineStream, toText } from "jsr:@std/streams";

const store = 'http://127.0.0.1:7878';
const mimeTypeRegExp = /(?<mimetype>[\w\d]+\/[\w\d]+)[\t\s]+/g;
const extRegExp = /\w+[ ?\w+]+$/g;
const decoder = new TextDecoder('utf-8');
const mimetypes = new Map();
const mimeTypeStream = await fetch('https://svn.apache.org/viewvc/httpd/httpd/trunk/docs/conf/mime.types?view=co');
// const mimeTypeStream = ReadableStream.from([
//     "# text/grammar-ref-list\n",
//     "text/html					html htm\n",
//     "text/javascript					js mjs\n",
//     "# text/jcr-cnd\n",
//     "# text/markdown\n",
//     "# text/mizar\n",
//     "text/n3						n3"
//   ]);
const mimes = await mimeTypeStream.text();
mimes.split('\n').map(m => {
    if (m[0] !== "#") {
        console.log(m.match(mimeTypeRegExp)?.groups);
        // const mime = m.match(mimeTypeRegExp)?.groups?.mimetype;
        // const exts = m.match(extRegExp)[0].split(' ');
        // exts.map(t=>mimetypes.set(t,mime));
    }
    
});
    // //.pipeThrough(new TextLineStream())    
    // //.pipeThrough(new TextEncoderStream())    
    // .pipeTo(new WritableStream({
    //     write(chunk) {
    //         new Promise((resolve,reject) => {
    //             decoder.decode(chunk));
    //             // try {
    //             //     if (chunk[0] !== "#") {
    //             //         const mime = chunk.match(mimeTypeRegExp).groups.mimetype;
    //             //         const exts = chunk.match(extRegExp)[0].split(' ');
    //             //         exts.map(t=>mimetypes.set(t,mime));
    //             //     }
    //             // } catch(err) {
    //             //     console.log(err, " | CHUNK:",chunk);
    //             // }
    //             resolve();
    //         });
    //     },
    //     close() {
    //         console.log([...mimetypes])
    //     },
    //     abort(err) {
    //         console.log("Sink error:",err);
    //     }
    // }))

console.log([...mimetypes])
/*
query - 
    method: POST
    Content-Type: application/sparql-query
    body: 'SELECT * WHERE { ?s ?p ?o } LIMIT 10'
    Accept: application/sparql-results+json
update - 
    method: POST
    Content-Type: application/sparql-update
    body: 
        Graph Operations - CREATE, DROP, COPY, MOVE, ADD
        Data Operations - 
            INSERT DATA
            DELETE DATA
            
*/

//const data = await Deno.readTextFile('static/hello.js');
// const data = await Deno.lstat('static/hello.js');

//console.log([...mimetypes]);
/*
const insert = await fetch(`${store}/query`, {
    method: 'POST',
    headers: {
        "Content-Type": 'application/sparql-update'
    },
    body: `INSERT DATA {  }`
});
*/