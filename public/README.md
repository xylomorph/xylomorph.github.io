
This directory is used to store content (slides, PDFs) that is injected externally . The inputs of this directory is not tracked. 

The current setup/workflow is as follows:

1. Inject content into the `public/` directory locally (not git-tracked).
2. Build locally to `docs`.
3. Push to GitHub to deploy the `docs` folder as the website.

Later, we might switch to a workflow based deployment of the website. In this setup, we might store the public content in a separate repository and inject it into the website build process via GitHub Actions. This would allow us to keep the public content in a separate repository and avoid tracking it in the main repository.

**Background:** 

I want to share over the websites slides and documents in two ways:

1. As part of the website itself (e.g., posts)
2. Unreferenced: Contents that I want to share by distributing a link. These contain documents, slides, courses etc. that I created elsewhere (e.g., in my PKM). These contents are not part of the website itself, but I want to share them via the website.
    + Subdomain is not ideal since I do not have proper encryption for subdomain. Better: a subfolder
    + Hence (probably): Simply a (script-based) copying into this `public`folder.
