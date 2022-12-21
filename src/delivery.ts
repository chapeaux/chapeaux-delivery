/**
 * https://{HOST}/{NS?}/{ORG?}/{MODULE?}{@VERSION}/{...dir?}/{file}{.ext}{?flags}
 * 
 * HOST - custom responses per registered hostname
 * NS - processing namespace via plugin (e.g. - gh|GitHub, npm|NPM, gl|GitLab, etc|AndSoOn)
 * ORG - arbitrary additional hook (gh:organization/user, npm:@org)
 * MODULE - root directory (gh:repo, npm:package)
 * VERSION - differentiator (gh:tag/commit/branch)
 * dir - arbitrary sub-directories
 * file - file name
 * ext - file extension
 * flags - 
 */

/*
\
CLI args
  - init = create default config(s) and folder structure
  - path/p = base path to local asset cache (default = ./)
  - host/h = host config files path (default = ./)
  - namespace/n = namespace config/plugin files path (default = ./)

Lifecycle
  - Request
  - Check Cache/Catalog
  - Navigate Host (look for specific host config)
  - Navigate Namespace (look for NS plugin)
  - Find NS Org
  - Find NS Org Module (@Version)
  - 

*/

/*
import { serve } from "https://deno.land/std@0.170.0/http/server.ts";



const port = 8080;
const hostname = '0.0.0.0';

const handler = (request: Request): Response => {
    const loc = new URL(request.url);
    console.log(`Prot:${loc.protocol}, Host:${loc.host}, Path:${loc.pathname}, Search:${[...loc.searchParams.entries()]}`);
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port, hostname });
*/

import {App} from './App.ts';

const app = new App();

app.start();

app.stop();