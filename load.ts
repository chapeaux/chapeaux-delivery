import { TextLineStream, toText } from "jsr:@std/streams";

const store = 'http://127.0.0.1:7878';
const mimeTypeRegExp = /^(?<mimetype>[\w\d]+\/[\w\d\-\.]+)[^\n\r][\t\s]+(?<exts>[ \w]+)/g;
// const mimeTypeRegExp = /(?<mimetype>[\w\d]+\/[\w\d\-\.]+)[\t\s]+/g;
// const extRegExp = /\t+(?<exts>\w+[ ?\w+]?)/g;
const mimetypes = new Map();
const mimeTypeStream = await fetch('https://svn.apache.org/viewvc/httpd/httpd/trunk/docs/conf/mime.types?view=co');
const mimes = await mimeTypeStream.text();
mimes.split('\n').map(m => {
    if (m[0] !== "#") {
        // if (m.indexOf('text/javascript') >= 0) { 
        //     console.log(m);
        //     console.log(mimeTypeRegExp.exec(m)?.groups); 
        // }
        const results = mimeTypeRegExp.exec(m);
        console.log(results);
        const {mime, exts} = results.groups;
        // console.log(exts);
        exts?.trim().split(' ').map(t=>mimetypes.set(t,mime));
    }
    
});

console.log(`HTML: ${mimetypes.get('html')} | CSS: ${mimetypes.get('css')} | JS: ${mimetypes.get('js')}`)
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

