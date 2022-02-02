#/bin/bash

function log(){

    MESSAGE_LENGTH=$(($#-1))
    MESSAGE=${@:1:$MESSAGE_LENGTH}
    COLOR=${@: -1}

    TEXT="\x1B[${COLOR}m${MESSAGE}\x1B[0m"
    echo $TEXT
}

function log_message(){
    log $@ 32
}

function log_error(){
    log $@ 31
}


log_message "messageeee"
log_error "This is an error message"
log_message
log_message "after"
