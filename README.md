# Chapeaux Delivery
Hybrid-Edge Asset Delivery (HEAD) Server 

## Process Flow
* User --_{requests}_--> Web Site/Asset
* DNS --_{routes to}_--> Nearest, most-performant CDN
* CDN --_{responds with}_--> Local Cache OR Loads from System of Record

## Features:
* Locally relevant responses
* Multiple DNS servers
* Load Balancing between CDNs
* Performance monitoring of CDNs
* Performance monitoring of Local Cache and Persistent Storage
* Ability to pull from system of record (Git, NPM, etc.) and cache response
* Flexibility to adjust scope
* Compatibility with [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

## Use case

Financial institution branch teller web interface. Deployed as an app on a remote cluster at each branch. Developer references assets like:
* https://cdn.somebank.com/logo.png
* https://cdn.somebank.com/components.js

Request is made by teller workstation, DNS checks performance tables and sees that the local cluster includes a Chapeaux HEAD Server, routes to the files hosted at the local branch cluster, and serves from there. Logo file was not cached, so HEAD server routes to the global file and caches it. Instead of routing out to the global URL for every asset, the request is handled locally, to improve performance.