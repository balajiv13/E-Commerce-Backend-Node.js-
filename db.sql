CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dob` date DEFAULT NULL,
  `phone_number` varchar(15) NOT NULL,
  `role` enum('customer', 'admin') DEFAULT 'customer',
  -- `check_status` enum('true',  'false') DEFAULT 'true',
  `status` enum('A', 'IA') DEFAULT 'A',
  `created_by` varchar(100) DEFAULT NULL,
  `created_date` datetime DEFAULT (CURRENT_DATE),
  `updated_by` varchar(100) DEFAULT NULL,
  `updated_date` datetime DEFAULT (CURRENT_DATE)
);


insert into users (first_name, last_name, email, password, dob, phone_number, role) values ('Admin', '', 'balajievil13@gmail.com', 'Admin@123', '2000-02-13T0', '9789324961','admin' )

 alter table users add column `created_by` varchar(100) not null;