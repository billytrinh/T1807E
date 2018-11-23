/*bài 2*/
CREATE TABLE sp(
	sp_id int IDENTITY(1,1) PRIMARY KEY,
	sp_name nvarchar(300) NOT NULL,
	price decimal(12,4),
	sp_desc nvarchar(3000)
);

CREATE TABLE kh(
	kh_id int IDENTITY(1,1) PRIMARY KEY,
	kh_name nvarchar(300) NOT NULL,
	kh_address nvarchar(4000) NOT NULL,
	telephone varchar(50) NOT NULL
);

CREATE TABLE orders(
	order_id int IDENTITY(1,1) PRIMARY KEY,

	kh_id int FOREIGN KEY REFERENCES kh(kh_id),
	kh_name nvarchar(300) NOT NULL,
	kh_address nvarchar(4000) NOT NULL,
	telephone varchar(50) NOT NULL,

	order_day datetime ,
	total_money decimal(12,4)
);

CREATE TABLE orders_items(
	id int IDENTITY(1,1),
	sp_id int FOREIGN KEY REFERENCES sp(sp_id),
	order_id int FOREIGN KEY REFERENCES orders(order_id),

	sp_name nvarchar(300) NOT NULL,
	price decimal(12,4),
	sp_desc nvarchar(3000),

	
	order_day datetime ,
	kh_name nvarchar(300) NOT NULL,
	kh_address nvarchar(4000) NOT NULL,
	telephone varchar(50) NOT NULL,

	qty int DEFAULT 1,
	qty_money decimal(12,4)
);


/*bài 3*/
INSERT INTO sp (sp_name, price, sp_desc) VALUES (N'Máy tính T450','1000',N'Máy mới nhập');
INSERT INTO sp (sp_name, price, sp_desc) VALUES (N'Điện thoại Nokia5670','200',N'Điện thoại đang hot');
INSERT INTO sp (sp_name, price, sp_desc) VALUES (N'Máy in Samsung 450','100',N'Máy in đang ế');



INSERT INTO kh (kh_name, kh_address, telephone) VALUES (N'Nguyễn Văn An',N'111 Nguyễn Trãi, Thanh Xuân, Hà Nội', '987654321');



INSERT INTO orders (order_day, total_money, kh_id, kh_name, kh_address, telephone) VALUES ('2009-11-18','1500','1',N'Nguyễn Văn An',N'111 Nguyễn Trãi, Thanh Xuân, Hà Nội', '987654321');



INSERT INTO orders_items (sp_id, order_id, sp_name, price, sp_desc, qty, qty_money, order_day, kh_name, kh_address, telephone) 
VALUES ('1','1',N'Máy tính T450','1000',N'Máy mới nhập','1','1000','2009-11-18',N'Nguyễn Văn An',N'111 Nguyễn Trãi, Thanh Xuân, Hà Nội', '987654321');
INSERT INTO orders_items (sp_id, order_id, sp_name, price, sp_desc, qty, qty_money, order_day, kh_name, kh_address, telephone) 
VALUES ('2','1',N'Điện thoại Nokia5670','200',N'Điện thoại đang hot','2','400','2009-11-18',N'Nguyễn Văn An',N'111 Nguyễn Trãi, Thanh Xuân, Hà Nội', '987654321');
INSERT INTO orders_items (sp_id, order_id, sp_name, price, sp_desc, qty, qty_money, order_day, kh_name, kh_address, telephone) 
VALUES ('3','1',N'Máy in Samsung 450','100',N'Máy in đang ế','1','100','2009-11-18',N'Nguyễn Văn An',N'111 Nguyễn Trãi, Thanh Xuân, Hà Nội', '987654321');



/*bài 4*/
select * from kh;
select * from sp;
select * from orders;

/*bài 5*/
SELECT * FROM kh ORDER BY kh_name ASC;
SELECT * FROM sp ORDER BY price DESC; 
SELECT * FROM orders_items;

/*bài 6*/
SELECT COUNT(kh_id) FROM  kh;
SELECT COUNT(sp_id) FROM  sp;
SELECT order_id, total_money FROM orders;

/*bài 7*/
ALTER TABLE sp ADD CHECK (price > 0);
ALTER TABLE orders ADD CHECK (order_day <= GETDATE());
ALTER TABLE sp ADD appr_date DATE;	
ALTER TABLE sp ADD CHECK (appr_date <= GETDATE());