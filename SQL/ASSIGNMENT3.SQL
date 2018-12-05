USE `assignment_3_hw`;

CREATE TABLE `customer` (
	`customer_name` VARCHAR(45) NOT NULL,
    `customer_social_id` INT NOT NULL,
    `customer_address` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`customer_social_id`));

CREATE TABLE `phone_plan` (
	`phone_number` INT NOT NULL,
    `phone_plan_type` VARCHAR(45) NOT NULL,
    `phone_begin_date` DATETIME NOT NULL,
    `customer_social_id` INT NOT NULL,
    PRIMARY KEY (`phone_number`));

