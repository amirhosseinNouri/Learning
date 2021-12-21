#!/bin/bash


ENVS=$(ls .env*)
echo $NVS
DATE=$(date +%F)


for ENV in $ENVS 
do
    echo "Renaiming ${ENV} to ${DATE}-${ENV}"
    mv ${ENV} ${DATE}-${ENV}
done