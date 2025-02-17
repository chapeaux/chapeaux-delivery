import { JSDOM } from "jsdom";
const mimes = new Map();
try {
    const resp = await fetch('https://www.iana.org/assignments/media-types/media-types.xml');
    const text = await resp.text();
    const { window: { document } } = new JSDOM(text);
    const records = document.querySelectorAll('record');
    records.values().forEach(record=>{
        const mimeName = record.querySelector('name').textContent;
        const mimeType = record.querySelector('file').textContent;
        mimes.set(mimeName, mimeType);
    });
} catch (err) {
    console.log("ERROR:",err);
}
console.log(`JavaScript:${mimes.get('javascript')}
HTML: ${mimes.get('html')}
CSS: ${mimes.get('css')}
JSON: ${mimes.get('json')}`)