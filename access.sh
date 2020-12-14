#!/bin/bash
set -x

IP=$1
PORT=$2
ID=$3
PW=$4

node create_database.js $1 $2 $3 $4

node create_table.js $1 $2 $3 $4

if [ -f ./sql/data_big.sql ]; then
	echo "already created"
else
	unzip sql/data_big.zip
	mv data_big.sql sql/
fi

node insert_data.js $1 $2 $3 $4 1

node delete_table.js $1 $2 $3 $4
#node delete_database.js $1 $2 $3 $4
