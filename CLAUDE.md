## How the upstream version is pulled
- Upstream source is cloned into `next-block-src/` (gitignored) from
  `https://github.com/Dojo-Open-Source-Project/next-block.git` (branch `develop`).
- The image is built locally by the SDK from `./Dockerfile` — there is no
  prebuilt `dockerTag` in the manifest; `images.main.source.dockerBuild`
  is used instead.

> Packaged from Dojo-Open-Source-Project/next-block for StartOS 0.4.0.
