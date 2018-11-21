/*Bài 1-2*/
CREATE TABLE cstm(
	cstm_id int IDENTITY(1,1) PRIMARY KEY,
	cstm_name VARCHAR(255) NOT NULL,
	civ_code VARCHAR(255) NOT NULL,
	cstm_address TEXT
);

CREATE TABLE subscr_form(
	cstm_id int FOREIGN KEY REFERENCES cstm(cstm_id),
	form_id INT IDENTITY(1,1) PRIMARY KEY,
	cstm_name VARCHAR(255) NOT NULL,
	civ_code VARCHAR(255) NOT NULL,
	cstm_address TEXT,
	t_o_subscr TEXT,
	d_o_subscr DATE,
	phonenumb VARCHAR(20) NOT NULL
);
/*Bài 3*/
INSERT INTO cstm (cstm_name, civ_code, cstm_address) VALUES ('Nguyen Nguyet Nga', '123456789','Hanoi');
INSERT INTO cstm (cstm_name, civ_code, cstm_address) VALUES ('Pham Anh Dung', '987654321','TpHCM');
INSERT INTO subscr_form (cstm_name, civ_code, cstm_address, t_o_subscr, d_o_subscr, phonenumb, cstm_id) VALUES ('Nguyen Nguyet Nga', '123456789','Hanoi','Tra truoc','2002-12-12','123456789',1);
INSERT INTO subscr_form (cstm_name, civ_code, cstm_address, t_o_subscr, d_o_subscr, phonenumb, cstm_id) VALUES ('Pham Anh Dung', '987654321','TpHCM','Tra sau','2006-1-1','987654321',2);
UPDATE subscr_form SET phonenumb = '0123456789' WHERE cstm_id = 1;
UPDATE subscr_form SET phonenumb = '0987654321' WHERE cstm_id = 2;

/*Bài 4*/
SELECT * FROM cstm;
SELECT * FROM subscr_form;

/*Bài 5*/
SELECT * FROM subscr_form WHERE phonenumb = '0123456789';
SELECT * FROM cstm WHERE civ_code = '123456789';
SELECT * FROM subscr_form WHERE civ_code = '123456789';
SELECT * FROM subscr_form WHERE d_o_subscr = '2002-12-12';
SELECT * FROM subscr_form WHERE cstm_address LIKE '%Hanoi%';

