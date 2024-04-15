


CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);


INSERT INTO books (id, title, author) VALUES
  ('1', 'Dune', 'Frank Herbert'),
  ('2', 'Fire & Blood', 'George R. R. Martin'),
  ('3', 'The Call of Cthulhu', 'H. P. Lovecraft');