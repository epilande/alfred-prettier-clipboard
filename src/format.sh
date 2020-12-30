#!/usr/bin/env bash

PATH=$PATH:$PRETTIER_PATH

pbpaste | prettier --parser $1 $PRETTIER_OPTIONS
