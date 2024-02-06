--1. user table

--테이블 만들기
CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(10) NOT NULL,
  age int NOT NULL,
  address varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
)




-- 2. username table

table username[

--테이블 만들기
CREATE TABLE username (
id VARCHAR(10) NOT NULL PRIMARY KEY,
pw VARCHAR(20) NOT NULL,
name VARCHAR(5) NOT NULL,
-- 열거형 데이터 - ex) ('F','M',''): 설정해 놓은 데이터 외에 다른 데이터가 올 시 오류
gender ENUM('F','M','') DEFAULT '' ,
birthday DATE NOT NULL,
age INT(3) NOT NULL DEFAULT 0
);

--테이블 안에 데이터 입력
-- SELECT * FROM test.username;
-- INSERT INTO username (id, pw, name, gender, birthday, age) VALUES ('hong1234','8o4bkg','홍길동','M','1990-01-31',33);
-- INSERT INTO username (id, pw, name, gender, birthday, age) VALUES ('sexysung','87awjkdf','성춘향','F','1992-03-31',31);
-- INSERT INTO username (id, pw, name, gender, birthday, age) VALUES ('power70','qwur8sda','변사또','M','1970-05-02',53);
-- INSERT INTO username (id, pw, name, gender, birthday, age) VALUES ('hanjo','jk48fn4','한조','M','1984-10-18',39);
-- INSERT INTO username (id, pw, name, gender, birthday, age) VALUES ('widowmaker','38ewifh3','위도우','F','1976-06-27',47);
-- INSERT INTO username (id, pw, name, gender, birthday, age) VALUES ('dvadva','k3f3ah','송하나','F','2001-06-03',22);
-- INSERT INTO username (id, pw, name, gender, birthday, age) VALUES ('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);

-- 한번에 다 쓰는 방법
SELECT * FROM test.username;
INSERT INTO username (id, pw, name, gender, birthday, age) VALUES
('hong1234','8o4bkg','홍길동','M','1990-01-31',33),
('sexysung','87awjkdf','성춘향','F','1992-03-31',31),
('power70','qwur8sda','변사또','M','1970-05-02',53),
('hanjo','jk48fn4','한조','M','1984-10-18',39),
('widowmaker','38ewifh3','위도우','F','1976-06-27',47),
('dvadva','k3f3ah','송하나','F','2001-06-03',22),
('jungkrat','4ifha7f','정크랫','M','1999-11-11',24);



-- 테이블 추가 작업
SELECT * FROM username ORDER BY birthday ASC;
SELECT * FROM username WHERE gender='M' ORDER BY name DESC;
SELECT id, name FROM username WHERE birthday LIKE '199%';
SELECT * FROM username WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;
SELECT * FROM username WHERE gender = "M" AND birthday LIKE "197%";
SELECT * FROM username WHERE age ORDER BY age DESC LIMIT 3;
-- 1)
SELECT * FROM username WHERE age >=25 AND age <=50;
-- 2)
SELECT * FROM username WHERE age BETWEEN 25 AND 50;
UPDATE username SET pw = 12345678 WHERE id='hong1234';
DELETE FROM username WHERE id = 'jungkrat';
]