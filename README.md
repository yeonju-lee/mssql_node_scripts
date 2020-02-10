db 용량을 채우기 위한 방법

-- mssql 

## how to use

```
npm install
npm install tedious


# create hello database
node create_database.js [ip] [port] [id] [pw]

# create hello table
node create_table.js [ip] [port] [id] [pw]

# insert data into hello table
unzip sql/data_big.zip sql/data_big.sql
node insert_data.js [ip] [port] [id] [pw] [iter]

# run query
node run_query.js [ip] [port] [id] [pw] [query]

```


## 기타
```
# check the database size
node run_query.js [ip] [port] [id] [password] 'SELECT table_schema AS "Database", ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS "Size (MB)" FROM information_schema.TABLES GROUP BY table_schema;'

```
