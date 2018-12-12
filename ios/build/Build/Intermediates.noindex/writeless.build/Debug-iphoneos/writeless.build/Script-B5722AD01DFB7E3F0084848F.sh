#!/bin/bash
set -eo pipefail

pushd "${SRCROOT}/.."
value="$(cat ~/.expo/PATH)"
PATH="$PATH:$value" expo prepare-detached-build --platform ios
popd

