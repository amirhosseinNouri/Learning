#!/bin/bash

case $1 in
    start|START)
        echo "Start"
        ;;
    stop|STOP)
        echo "Stop"
        ;;
    *)
        echo "Default"
esac    