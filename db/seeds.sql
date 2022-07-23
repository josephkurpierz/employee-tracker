INSERT INTO departments(name)
VALUES
("sales"),
("purchasing"),
("manufacturing"),
("human resources");

INSERT INTO roles(title, salary, department_id)
VALUES
('sales manager','100k',1),
('manager','80k',2),
('manager','90k',3),
('incoming', '50k',1),
('outgoing', '20k', 1);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
("big","shot",1,1),
("not as big","shot",3,1),
("medium","shot",2,1),
("small","shot",4,2),
("tiny","shot",5,3);