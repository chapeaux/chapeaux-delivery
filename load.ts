import { TextLineStream, toText } from "jsr:@std/streams";

const store = 'http://127.0.0.1:7878';
/*
const mimeTypeRegExp = /(?<mimetype>[\w\d\-\+\.]+\/[\w\d\-\s\+\.]+)[\t\s]+(?<exts>[\w\d\-\s]+)/g;
const extRegExp = /\w+[ ?\w+]+$/g;
const decoder = new TextDecoder('utf-8');
const mimetypes = new Map();
const mimeTypeStream = await fetch('https://svn.apache.org/viewvc/httpd/httpd/trunk/docs/conf/mime.types?view=co');
const mimes = await mimeTypeStream.text();
mimes.split('\n').map(m => {
    let mimetype = 'unknown/unknown';
    let exts = 'n/a';
    if (m[0] !== "#" && m.length > 0) {
        [mimetype, exts] = m.replaceAll(/\t+/g,'|').split('|');
        exts.split(' ').map(t=>mimetypes.set(t,mimetype));
    }    
});
*/

// //.pipeThrough(new TextLineStream())    
// //.pipeThrough(new TextEncoderStream())    
// .pipeTo(new WritableStream({
//     write(chunk) {
//         new Promise((resolve,reject) => {
//             decoder."@11ty/eleventy-upgrade-help": "^3.0.1",
    "@lit/context": "^1.1.3",
    "@patternfly/pfe-core": "^4.0.4",
    "@rhds/icons": "^1.1.2",
    "@rhds/tokens": "^2.1.0",
    "lit": "^3.2.1",
    "prism-esm": "^1.29.0-fix.6",
    "tslib": "^2.7.0",
    "web-dev-server-plugin-lit-css": "^3.0.1"decode(chunk));
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

// const data = await Deno.readTextFile('static/hello.js');
// const data = await Deno.lstat('static/hello.js');

// const insert = await fetch(`${store}/query`, {
//     method: 'POST',
//     headers: {
//         "Content-Type": 'application/sparql-update'
//     },
//     body: `INSERT DATA {  }`
// });

    // const schema = await fetch('https://schema.org/version/latest/schemaorg-current-https.ttl');
    // const schema = await Deno.open('./data/schemaorg-current-https.ttl', {read: true})
// try {
//     const schema = await Deno.open('./data/chapeaux.ttl', {read: true});
//     const info = await schema.stat();
//     const result = await fetch(`${store}/store?default`, {
//         method: 'PUT',
//         headers: {
//             "Accept":'*/*',
//             "Content-Type": 'text/turtle',
//             "Content-Length": info.size
//         },
//         body: schema.readable
//     });
//     console.log(result);
// } catch (err) {
//     console.log("ERROR:", err);
// }

const clear = await fetch(`${store}/update`, {
    method: 'POST',
    headers: {
        "Content-Type": 'application/sparql-update'
    },
    body: 'DELETE WHERE { ?s ?p ?o }'
});

