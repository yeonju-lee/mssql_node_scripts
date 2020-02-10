DROP TABLE IF EXISTS myTable;

use hello;

create table hello (
  id INT NOT NULL identity(1,1) PRIMARY KEY,
  a varchar(255) NOT NULL,
  b varchar(255) NOT NULL,
  c varchar(255) NOT NULL,
  d varchar(100) NOT NULL,
  address varchar(255) NOT NULL,
  word TEXT NOT NULL,
);

SET QUOTED_IDENTIFIER OFF;

INSERT INTO hello (a,b,c,d,address,word) VALUES ("Brady","Mon, 8th, 2018","Sociis Natoque Penatibus Institute","$00,000.00","P.O. Box 899, 7685 Sit St.","sem, vitae aliquam eros turpis non enim. Mauris quis turpis");
