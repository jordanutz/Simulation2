delete from listing where id = $1
returning*;
