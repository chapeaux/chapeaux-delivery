import init, * as oxigraph from './deps/oxigraph/web.js';

await init();

const store = new oxigraph.Store([
    oxigraph.quad(
        oxigraph.namedNode("http://example/"),
        oxigraph.namedNode("http://schema.org/name"),
        oxigraph.literal("first example")
    ),
    oxigraph.quad(
        oxigraph.namedNode("http://example/"),
        oxigraph.namedNode("http://schema.org/name"),
        oxigraph.literal("second example")
    )
]);

store.add(oxigraph.quad(
    oxigraph.namedNode("http://example/"),
    oxigraph.namedNode("http://schema.org/name"),
    oxigraph.literal("third example")
))

const query = `
SELECT ?name 
WHERE { <http://example/> <http://schema.org/name> ?name }
`;

for (const binding of store.query(query)) {
    console.log(binding.get("name").value);
}

console.log(`Has second example: ${store.has(oxigraph.quad(
    oxigraph.namedNode("http://example/"),
    oxigraph.namedNode("http://schema.org/name"),
    oxigraph.literal("second example")
))}`)

store.delete(oxigraph.quad(
    oxigraph.namedNode("http://example/"),
    oxigraph.namedNode("http://schema.org/name"),
    oxigraph.literal("second example")
));

console.log(`Has second example: ${store.has(oxigraph.quad(
    oxigraph.namedNode("http://example/"),
    oxigraph.namedNode("http://schema.org/name"),
    oxigraph.literal("second example")
))}`)

console.log(store.match());

const dump = store.dump({
    format:'rdf',
    from_graph_name: oxigraph.defaultGraph()
});

console.log(dump);