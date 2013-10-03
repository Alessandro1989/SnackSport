
create table snacks (
	id integer auto_increment,
	nameFoodType varchar(250),
	quantity integer,
	user varchar(250),
	date date,
	primary key (id)
);

update schema_info set version = 1;
