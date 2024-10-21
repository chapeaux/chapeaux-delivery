# Chapeaux Catalog Schema Details


## Resources

### Schema

* Host - Site or Family of Sites Owner

    * hosts
* Namespace
* Organization
* Module
* Library

    * version
* Asset

    * sizeInBytes
    * assetDescription
    * textContent
    * mimeType
* Stylesheet

    Extends Asset
* Script

    Extends Asset
* Image

    Extends Asset
* WebComponent

    Extends Asset


### Host
### Namespace
### Organization
### Module
### Library(@Version)
### File Path (Asset)

Tobias - Drupal consumers from static host, questions of are we using the right file. Predictable pattern. Constrained to the thing they are meant to do: one of the same thing.
Webcomponents JS, 

Zack - What you're consuming matters. How you're bundling. RHDS were new. Still actually have to get dependencies to resolve. Issue was not just consuming through NPM but processing before loading into Drupal. Red Hat Shared Libs heading to consuming via RHDS CDN - https://gitlab.cee.redhat.com/dxp/dat/modules/red_hat_shared_libs

Asset packs? 

Notification system to know who is using it.

Consolidation of asset locations

