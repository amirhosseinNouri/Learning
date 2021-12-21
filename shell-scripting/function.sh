#!/bin/bash

# function hello(){
#     for NAME in $@
#     do
#         echo "Hello $NAME"
#     done
#     now
# }

# function now(){
#     echo "It's $(date +%r)"
# }

# hello amirhossein amir ali

function backup_file(){
    local FILE=$1
    if [ -f $FILE ]
    then
        BACKUP_FILE="/tmp/$(basename ${FILE}).$(date +%F).$$"
        echo "Backing up ${FILE} to ${BACKUP_FILE}"
        cp $FILE $BACKUP_FILE

    else
        echo "${FILE} doesn't exists"
        return 1   
    fi
}

backup_file $1

if [ $? -eq 0 ]
then
    echo "Backup succeeded!"
else
    echo "Backup failed"
    exit 1
fi