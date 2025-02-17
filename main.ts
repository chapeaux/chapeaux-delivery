import { type Route, route, serveDir } from "@std/http";

const routes: Route[] = [
  {
    pattern: new URLPattern({ pathname: "/" }),
    handler: async () => {
      const body = await Deno.readFile(Deno.cwd()+'/demo/index.html'); 
      return new Response(body, {
        headers: {
          'content-type': "text/html"
        }
      })
    }
  },
  {
    pattern: new URLPattern({ pathname: "/schema/:types{/}?" }),
    handler: (_req, _info, params) => new Response(`Namespace: ${params?.pathname.groups.ns}`)
  },
  {
    pattern: new URLPattern({ pathname: "/vocabulary/:term{/}?" }),
    handler: (_req, _info, params) => new Response(`Namespace: ${params?.pathname.groups.ns}`)
  },
  {
    pattern: new URLPattern({ pathname: "/:ns{/}?" }),
    handler: (_req, _info, params) => new Response(`Namespace: ${params?.pathname.groups.ns}`)
  },
  {
    pattern: new URLPattern({ pathname: "/:ns/:org{/}?" }),
    handler: (_req, _info, params) => new Response(`
        Namespace: ${params?.pathname.groups.ns}
              Org: ${params?.pathname.groups.org}
    `)
  },
  {
    pattern: new URLPattern({ pathname: "/:ns/:org/{@}?:module{/}?" }),
    handler: (_req, _info, params) => new Response(`
        Namespace: ${params?.pathname.groups.ns}
              Org: ${params?.pathname.groups.org}
           Module: ${params?.pathname.groups.module}
    `)
  },
  {
    pattern: new URLPattern({ pathname: "/:ns/:org/{@}?:module+/:library{@:version}?{/}?" }),
    handler: (_req, _info, params) => new Response(`
        Namespace: ${params?.pathname.groups.ns}
              Org: ${params?.pathname.groups.org}
           Module: ${params?.pathname.groups.module}
          Library: ${params?.pathname.groups.library}
          Version: ${params?.pathname.groups.version}
    `)
  },
  {
    pattern: new URLPattern({ 
      pathname: "/:ns/:org/{@}?:module+/:library{@:version}?/:filepath+" 
    }),
    handler: (req, _info, params) => new Response(`
        Namespace: ${params?.pathname.groups.ns}
              Org: ${params?.pathname.groups.org}
           Module: ${params?.pathname.groups.module}
          Library: ${params?.pathname.groups.library}
          Version: ${params?.pathname.groups.version}
        File Path: ${params?.pathname.groups.filepath}
    `)
  }
];

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

const handler = route(routes, defaultHandler);

export default {
  fetch(req) {
    return handler(req);
  },
} satisfies Deno.ServeDefaultExport;
