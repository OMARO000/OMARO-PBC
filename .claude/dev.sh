#!/bin/sh
export PATH="/usr/local/Cellar/node/25.6.1_1/bin:$PATH"
cd "$(dirname "$0")/.."
npm run dev
