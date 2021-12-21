#!/bin/bash

# INDEX=1
# 
# while [ $INDEX -lt 6 ]
# do
#     echo "Creating project-${INDEX}"
#     mkdir local/project-${INDEX}
#     ((INDEX++))
# done

while ping -c 1 app.snapp.taxi > /dev/null
do
    echo "snapp is sill up..."
    sleep 5
done

echo "Snapp is down =("