#!/bin/bash

set -e

if [[ $# -eq 0 ]] ; then
    echo 'bro please pass param first param should be serial path'
    exit 1
fi

echo Reading from $1
cat < $1
