CREATE TABLE customer(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

INSERT INTO customer(id, name, birthday) VALUES
('aaa', '홍길동','1990-03-17'),
('bbb', '성춘향','1996-02-06'),
('ccc', '이몽룡','1991-05-13');


CREATE TABLE orderlist (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
)

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES
('aaa', '맥북프로', 1),
('bbb','모니터',10),
('ccc','키보드', 3),
('bbb','핸드폰', 2),
('ccc','마우스',10);    

-- INNER JOIN [
-- SELECT customer.id AS order_id, customer.name, orderlist.product_name FROM customer
-- INNER JOIN orderlist ON customer.id = orderlist.customer_id
-- WHERE orderlist.quantity >= 5;
-- 별칭으로 축약해서 간편하게 사용
-- SELECT a.id AS order_id, a.name, b.product_name FROM customer as a
-- INNER JOIN orderlist as b ON a.id = b.customer_id
-- WHERE b.quantity >= 5;
-- ]

CREATE TABLE departments(
    department_id INT PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL
);

DROP TABLE employees;
CREATE TABLE employees(
    employees_id INT PRIMARY KEY,
    username VARCHAR(31) NOT NULL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (department_id, department_name) VALUES
(1, '기획팀'),
(2, 'IT개발팀'),
(3, '디자인팀');

INSERT INTO employees (employees_id, username, department_id) VALUES
(1, '홍길동', 2),
(2, '성춘향', 3),
(3, '이몽룡', NULL),
(4, '임꺽정', 2),
(5, '황진이', 3);


-- INNER JOIN : 양쪽에 있는 데이터만 가져옴. (NULL이여서 안가져옴)
-- LEFT JOIN : NULL도 가져오지만 부서 값에 NULL이라고 되서 가져옴

-- SELECT a.employees_id, a.username, b.department_name
-- FROM employees AS a LEFT JOIN departments AS b
-- ON a.department_id = b.department_id

SELECT * FROM employees AS a LEFT JOIN departments AS b
ON a.department_id = b.department_id

-- table 결과

1	홍길동	2	2	IT개발팀
2	성춘향	3	3	디자인팀
3	이몽룡			
4	임꺽정	2	2	IT개발팀
5	황진이	3	3	디자인팀