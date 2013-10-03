
create table sports (
	id integer auto_increment,
	nameSport varchar(250),
	minutes integer,
	user varchar(250),
	date date,
	primary key (id)
);

update schema_info set version = 1;