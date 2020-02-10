#!/bin/bash

#set -x
#set -e

IP=$1
PORT=$2
ID=$3
PW=$4
ITER=$5


if [ -f ./sql/data_big.sql ]; then
	echo "already created"
else
	unzip sql/data_big.zip
	mv data_big.sql sql/
fi

node insert_data.js $1 $2 $3 $4 $5
