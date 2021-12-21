#!/bin/bash

# case $1 in
#     start|START)
#         echo "Start"
#         ;;
#     stop|STOP)
#         echo "Stop"
#         ;;
#     *)
#         echo "Default"
# esac    


read -p "Enter y or n:" ANSWER

case $ANSWER in
    [yY]|[yY][eE][sS])
        echo "Yes"
        ;;
    [nN]|[nN][oO])
        echo "No"
        ;;

    *)
        echo "Invalid"
        ;;
esac

