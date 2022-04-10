create database clotex;

use clotex;

create table productos(
id_productos int unsigned not null auto_increment,
nombre varchar(120) not null,
codigo varchar(120) not null,
stock varchar(120) not null,
precio varchar(120) not null,
primary key(id_productos)
);

create table cliente(
id_cliente int unsigned not null auto_increment,
nombrec varchar(120) not null,
email varchar(120) not null,
primary key(id_cliente)
);

create table proveedores(
id_proveedores int unsigned not null auto_increment,
nombrep varchar(120) not null,
direccion varchar(120) not null,
primary key(id_proveedores)
);

insert into cliente values(null, "Cristian", "cristianlopez@gmail.com");
insert into cliente values(null, "Manuel", "Manuelolivera1@gmail.com");
insert into cliente values(null, "Ricardo", "Gutierrezricardo@gmail.com");
insert into cliente values(null, "Florencia", "Flor112@gmail.com");
insert into cliente values(null, "Agustina", "Agustinabelen@gmail.com");
insert into cliente values(null, "Celeste", "celestecastro@gmail.com");
insert into cliente values(null, "Valentina", "Valencaruso@gmail.com");
insert into cliente values(null, "David", "Davidvilla@gmail.com");
insert into cliente values(null, "Gonzalo", "Gonzalot10@gmail.com");
insert into cliente values(null, "Patricia", "Patorivas@gmail.com");

insert into proveedores values(null, "Jose", "Pedro varela 419");
insert into proveedores values(null, "Rosa", "Arenales 1920");
insert into proveedores values(null, "Hugo", "Mendoza 128");
insert into proveedores values(null, "Lucas", "Av San Martin 5893");
insert into proveedores values(null, "Nicole", "Av Rivadavia 12384");