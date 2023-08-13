USE `misa.cukcuk.ptson`;

select * FROM employee;

INSERT INTO positions(PositionId, PositionCode, PositionName, CreatedDate, CreatedBy, ModifiedDate, ModifiedBy) VALUES (
    UUID(), 'VT-67', 'Trưởng nhóm', CURRENT_DATE(), '', CURRENT_DATE(), '');
INSERT INTO positions(PositionId, PositionCode, PositionName, CreatedDate, CreatedBy, ModifiedDate, ModifiedBy) VALUES (
  UUID(), 'VT-68', 'Trưởng phòng', CURRENT_DATE(), '', CURRENT_DATE(), '');
INSERT INTO positions(PositionId, PositionCode, PositionName, CreatedDate, CreatedBy, ModifiedDate, ModifiedBy) VALUES (
  UUID(), 'VT-69', 'Giám đốc', CURRENT_DATE(), '', CURRENT_DATE(), '');


INSERT INTO department(DepartmentId, DepartmentCode, DepartmentName, CreatedDate, CreatedBy, ModifiedDate, ModifiedBy) VALUES (
  UUID(), 'VY-66', 'Phòng Hành Chính', CURRENT_DATE(), '', CURRENT_DATE(), '');
INSERT INTO department(DepartmentId, DepartmentCode, DepartmentName, CreatedDate, CreatedBy, ModifiedDate, ModifiedBy) VALUES (
  UUID(), 'VY-67', 'Phòng Nhân Sự', CURRENT_DATE(), '', CURRENT_DATE(), '');
INSERT INTO department(DepartmentId, DepartmentCode, DepartmentName, CreatedDate, CreatedBy, ModifiedDate, ModifiedBy) VALUES (
  UUID(), 'VY-68', 'Phòng Công Nghệ Thông Tin', CURRENT_DATE(), '', CURRENT_DATE(), '');
INSERT INTO department(DepartmentId, DepartmentCode, DepartmentName, CreatedDate, CreatedBy, ModifiedDate, ModifiedBy) VALUES (
  UUID(), 'VY-69', 'Phòng Kế Toán', CURRENT_DATE(), '', CURRENT_DATE(), '');


INSERT INTO employee(EmployeeId, EmployeeCode, FullName, DateOfBirth, Gender, IdentityNumber, IdentityDate, IdentityPlace, Email, PhoneNumber, TaxCode, Salary, JoinDate, WorkStatus) VALUES(
  UUID(), 'NV-0001', 'Pham Thanh Son', CURRENT_DATE(), 0, '', CURRENT_DATE(), '' , 'abc@gmail.com', '0123456789', '', 1000000, CURRENT_DATE() , 1);


UPDATE employee SET FullName = "Pham Thanh SSS", IdentityNumber = "12345654321" WHERE EmployeeId = "b55d2ce1-ca5a-4d28-ba3e-a1a9df21301e";