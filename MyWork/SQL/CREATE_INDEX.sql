CREATE UNIQUE NONCLUSTERED INDEX idx_Employee
ON [dbo].[Employee]
(
	Name ASC,
	Gender ASC
)
INCLUDE(Salary, Department)

DROP INDEX idx_Employee ON [dbo].[Employee]

SELECT Name
	  ,Gender
	  ,Salary
	  ,Department
FROM [dbo].[Employee]
WHERE Name = 'Dave'
AND Gender = 'Male'