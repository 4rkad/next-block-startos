#!/bin/sh
set -e

COOKIE_PATH="${BITCOIND_COOKIE_PATH:-/mnt/bitcoind/.cookie}"

# Wait until bitcoind exposes its RPC cookie (post-startup race).
RETRIES=0
while [ ! -s "$COOKIE_PATH" ] && [ $RETRIES -lt 60 ]; do
  echo "Waiting for bitcoind cookie at $COOKIE_PATH..." >&2
  sleep 2
  RETRIES=$((RETRIES + 1))
done

if [ ! -s "$COOKIE_PATH" ]; then
  echo "ERROR: bitcoind cookie not found at $COOKIE_PATH after 120s" >&2
  exit 1
fi

COOKIE_CONTENT="$(cat "$COOKIE_PATH")"
BITCOIND_USERNAME="${COOKIE_CONTENT%%:*}"
BITCOIND_PASSWORD="${COOKIE_CONTENT#*:}"

export BITCOIND_USERNAME
export BITCOIND_PASSWORD
export BITCOIND_HOST="${BITCOIND_HOST:-bitcoind.startos}"
export BITCOIND_PORT="${BITCOIND_PORT:-8332}"
export HOSTNAME="${HOSTNAME:-localhost:3000}"
export PORT="${PORT:-3000}"

# next-block reads from .env via dotenv; write a transient file so its assertions pass.
cat > /app/.env <<EOF
HOSTNAME=$HOSTNAME
BITCOIND_HOST=$BITCOIND_HOST
BITCOIND_PORT=$BITCOIND_PORT
BITCOIND_USERNAME=$BITCOIND_USERNAME
BITCOIND_PASSWORD=$BITCOIND_PASSWORD
EOF

cd /app
exec node ./server.mjs
