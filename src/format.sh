#!/usr/bin/env bash

PATH=$PATH:$PRETTIER_PATH

if [ "$1" = "sql" ]
then
	pbpaste | npx prettier --parser sql --uppercase true $PRETTIER_OPTIONS 2>&1 
else
	pbpaste | prettier --parser $1 $PRETTIER_OPTIONS 2>&1
fi
