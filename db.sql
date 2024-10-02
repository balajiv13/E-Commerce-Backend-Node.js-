CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dob` date DEFAULT NULL,
  `phone_number` varchar(15) NOT NULL,
  `role` enum('customer', 'admin') DEFAULT 'customer',
  `check_status` enum('true',  'false') DEFAULT 'true',
  `status` enum('A', 'IA') DEFAULT 'A',
  `created_by` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT (CURRENT_DATE),
  `updated_by` varchar(100) DEFAULT NULL,
  `updated_date` datetime DEFAULT (CURRENT_DATE)
);


insert into users (first_name, last_name, email, password, dob, phone_number, role) values ('Admin', '', 'balajievil13@gmail.com', 'Admin@123', '2000-02-13T0', '9789324961','admin' )

 alter table users add column `created_by` varchar(100) not null;


 -- select * from aerp_master_item limit 1 \G;
-- CREATE TABLE db1.table1 SELECT * FROM db2.table1

 CREATE TABLE `item_move_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `mov_status` varchar(75) NOT NULL,
  `min_time` varchar(50) NOT NULL,
  `max_time` varchar(50) NOT NULL,
  `status` enum('A', 'IA') DEFAULT 'A',
  `created_by` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT (CURRENT_DATE),
  `updated_by` varchar(100) DEFAULT NULL,
  `updated_date` datetime DEFAULT (CURRENT_DATE)
);


insert into item_move_status (mov_status, min_time, max_time) values ('Fast Moving', '1', '7'), ('Medium Moving', '2', '10'), ('Slow Moving', '2', '15');


CREATE TABLE `storage_mstr` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `strg_name` varchar(75) NOT NULL,
  `min_capacity` varchar(50) NOT NULL,
  `max_capacity` varchar(50) NOT NULL,
  `location` varchar(150) NOT NULL,
  `status` enum('A', 'IA') DEFAULT 'A',
  `created_by` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT (CURRENT_DATE),
  `updated_by` varchar(100) DEFAULT NULL,
  `updated_date` datetime DEFAULT (CURRENT_DATE)
);