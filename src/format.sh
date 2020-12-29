#!/usr/bin/env bash

PATH=$PATH:/usr/local/bin

pbpaste | prettier --parser $1
