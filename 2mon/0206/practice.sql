CREATE TABLE users (
    id VARCHAR(10) NOT NULL PRIMARY KEY, 
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

INSERT INTO users (id, pw, name, gender, birthday, age) VALUES
( 'hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33 ),
( 'sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31 ),
( 'power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53 ),
( 'hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39 ),
( 'widowmaker', '38ewifh3', '위도우', '', '1986-06-27', 47 ),
( 'dvadva', 'k3f3ah', '송하나', 'F', '1994-06-03', 22 ),
( 'jungkrat', '4ifha7f', '정크랫', 'M', '1975-11-11', 24 );

SELECT * FROM users ORDER BY birthday ASC;
SELECT * FROM users WHERE gender='M' ORDER BY name DESC;
SELECT id, name FROM users WHERE birthday LIKE '199%';
SELECT * FROM users WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;
SELECT * FROM users WHERE gender='M' AND birthday LIKE '197%';
SELECT * FROM users ORDER BY age DESC LIMIT 3;
SELECT * FROM users WHERE age BETWEEN 25 AND 50;
SELECT * FROM users WHERE age >= 25 AND age <= 50;
UPDATE users SET pw='12345678' WHERE id="hong1234";
DELETE FROM users id='jungkrat';