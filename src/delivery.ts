/**
 * https://{HOST}/{NS?}/{ORG?}/{MODULE?}@{VERSION}/{file}{.ext}?{flag}
 * 
 */

/*
\
CLI args
    - path/p = base path to local assets

*/

import { serve } from "https://deno.land/std@0.165.0/http/server.ts";

const port = 8080;

const handler = (request: Request): Response => {
    const loc = new URL(request.url);
    console.log(`Prot:${loc.protocol}, Host:${loc.host}, Path:${loc.pathname}, Search:${[...loc.searchParams.entries()]}`);
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });