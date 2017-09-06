Create Database burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `burger_name` VARCHAR(70) NOT NULL DEFAULT 'Default Burger Name DB',
  `devoured` TINYINT NOT NULL DEFAULT 0,
  `date` TIMESTAMP NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`));

Select * from burgers;
