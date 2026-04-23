<p align="center">
  <img src="icon.svg" alt="Next Block Logo" width="18%">
</p>

# Next Block on StartOS

> **Upstream repo:** <https://github.com/Dojo-Open-Source-Project/next-block>
> **Upstream site:** <https://nextblock.st>

[Next Block](https://nextblock.st) is a Bitcoin fee estimator — the frontend of nextblock.st, self-hosted against your own Bitcoin Core node. It ingests mempool data via `@samouraiwallet/one-dollar-fee-estimator` and pushes Low / Medium / High fee rates plus latest-block details to the UI over Server-Sent Events.

This package runs it on StartOS 0.4.0. Requires the Bitcoin Core service app (>= 28.0).

## Architectures

`x86_64`, `aarch64`.

## Build

```sh
# One-time: clone upstream into next-block-src/ (gitignored, used by the Dockerfile)
git clone --depth 1 --branch develop \
  https://github.com/Dojo-Open-Source-Project/next-block.git next-block-src

# Pack for a specific arch
make x86_64       # or: make aarch64 / make arm
make install      # requires start-cli + host in ~/.startos/config.yaml
```

## Runtime notes

- `docker_entrypoint.sh` reads `/mnt/bitcoind/.cookie`, parses `__cookie__:<rand>`, exports `BITCOIND_USERNAME` / `BITCOIND_PASSWORD`, materializes a transient `.env` (upstream `config.server.ts` reads via `dotenv` only, not `process.env`), then execs `node server.mjs`. Cookie rotation is handled for free.
- `server.mjs` is `sed`-patched in the Dockerfile to bind on `0.0.0.0`. Upstream defaults leave Node listening only on the IPv6 loopback inside StartOS' netns-isolated subcontainer, which hangs StartOS' `checkPortListening` health check and locks the package in *loading*.
- `main.ts` mounts `/mnt/bitcoind` read-only (we only need `.cookie`) and uses a 60s grace period to cover Node SSR + estimator init + first RPC handshake on slower hardware.

## Related

- `4rkad/next-block-umbrel` — Docker image build for the Umbrel variant.
- `4rkad/umbrel-app-store` — Umbrel community app manifest under `4rkad-next-block/`.

## License

AGPL-3.0, matching upstream.
