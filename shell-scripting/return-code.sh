#!/bin/bash

# ls /not/here
# echo ${?}

HOST="app.snapp.taxi"
# ping -c 1 $HOST > /dev/null

# if [ "$?" -eq 0 ]
# then
#     echo "$HOST is reachable"
# else
#     echo "$HOST is unreachable"
# fi

ping -c 1 $HOST > /dev/null && echo "${HOST} is reachable"