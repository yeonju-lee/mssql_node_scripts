#!/bin/bash

IP=$1
PORT=$2
ID=$3
PW=$4

node run_mysql.js $1 $2 $3 $4

#node run_mysql.js $IP $PORT $ID $PW 
#"FLUSH TABLES WITH READ LOCK;"