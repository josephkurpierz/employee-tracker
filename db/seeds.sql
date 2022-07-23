INSERT INTO departments(name)
VALUES
("Engineering"),
("New Product Development"),
("Manufacturing"),
("Human Resources"),
("Sales");

INSERT INTO roles(title, salary, department_id)
VALUES
('manager','100000',1),
('team lead','80000',2),
('supervisor','90000',3),
('engineer', '50000',1),
('intern', '20000', 1);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
("Billy","Shotgun",1,1),
("Bradley","Farmall",3,1),
("Miranda","Shucks",2,1),
("I.P","Freely",4,2),
("James","NotDean",5,3);