# 1 + 2. Tao 3 bang phu hop voi yeu cau
CREATE DATABASE assignment_4_HW;

CREATE TABLE `assignment_4_HW`.`product`  (
	`product_code` VARCHAR(45) NOT NULL,
    `product_date` DATETIME,
    `product_name` VARCHAR(45),
	`product_type` VARCHAR(45) NOT NULL,
    PRIMARY KEY(`product_code`));
    
CREATE TABLE `assignment_4_HW`.`type` (
	`product_type` VARCHAR(45) NOT NULL,
    `employee_code` VARCHAR(45),
    PRIMARY KEY(`product_type`));

CREATE TABLE `assignment_4_HW`.`employee` (
	`employee_code` INT NOT NULL,
    `employee_name` VARCHAR(45),
    PRIMARY KEY (`employee_code`));

USE assignment_4_HW;
    
# 3. Them cau lenh de them vao cac thong tin nhu bang
INSERT INTO `product`(`product_code`,`product_date`,`product_name`,`product_type`) 
    VALUES ('Z37 111111', '2009-12-12', 'May Tinh Xach Tay Z37', 'Z37E');
INSERT INTO `type`(`product_type`,`employee_code`)
    VALUES ('Z37E', '987688');
INSERT INTO `employee`(`employee_code`, `employee_name`)
    VALUES ('987688', 'Nguyen Van An');
INSERT INTO `type` (`product_type`, `employee_code`) 
    VALUES ('Z27E', '12345');
INSERT INTO `type` (`product_type`, `employee_code`) 
    VALUES ('Z17E', '67890');
INSERT INTO `employee` (`employee_code`, `employee_name`) 
    VALUES ('12345', 'Ninh Hoang Hai');
INSERT INTO `employee` (`employee_code`) 
    VALUES ('67890', 'Phung Van A');

# 4. Lenh truy van (SELECT)
# a. Liet ke danh sach loai san pham
# b. Liet ke danh sach san pham
# c. Liet ke danh sach nhan vien
SELECT `product_type` FROM `type`;
SELECT `product_code`,`product_name` FROM `product`;
SELECT `employee_code`,`employee_name` FROM `employee`;

# 5. Lenh truy van (tiep)
# a. Liet ke danh sach loai sp cua cong ty theo thu tu tang dan cua ten
# b. Liet ke danh sach nhan vien tang dan
# c. Liet ke cac san pham co ma so Z37E
SELECT `product_type` FROM `type` ORDER BY `product_type` ASC;
SELECT `employee_name` FROM `employee` ORDER BY `employee_name` ASC;
SELECT * FROM `product` WHERE `product_type` = 'Z37E';

# d. Liet ke sp Nguyen Van An
SELECT `product_code` FROM `product`
INNER JOIN `type` ON `product`.`product_type` = `type`.`product_type`
INNER JOIN `employee` ON `type`.`employee_code` = `employee`.`employee_code`;

# 6. Select (tiep)
# a. So san pham theo tung loai:
