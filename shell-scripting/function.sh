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
    FILE=$1
    if [ -f $FILE ]
    then
        BACKUP_FILE="/tmp/$(basename ${FILE}).$(date +%F).$$"
        echo "Backing up ${FILE} to ${BACKUP_FILE}"
        cp $FILE $BACKUP_FILE

    else
        echo "No such a file"
        return 1   
    fi
}

backup_file /etc/hosts

if [ $? -eq 0 ]
then
    echo "Backup succeeded!"
else
    echo "Backup failed"
fi