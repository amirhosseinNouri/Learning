#!/bin/bash

function hello(){
    for NAME in $@
    do
        echo "Hello $NAME"
    done
    now
}

function now(){
    echo "It's $(date +%r)"
}

hello amirhossein amir ali