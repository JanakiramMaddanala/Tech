CREATE TABLE [dbo].[Employee]
(
    ID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Gender VARCHAR(50) NOT NULL,
    Salary INT NOT NULL,
    Department VARCHAR(50) NOT NULL
)


--DROP TABLE [dbo].[Employee]

INSERT INTO employee VALUES
(16, 'Dave', 'Male', 5000, 'Sales'),
(2, 'Jim', 'Female', 6000, 'HR'),
(3, 'Kate', 'Female', 7500, 'IT'),
(4, 'Will', 'Male', 6500, 'Marketing'),
(5, 'Shane', 'Female', 5500, 'Finance'),
(6, 'Shed', 'Male', 8000, 'Sales'),
(7, 'Vik', 'Male', 7200, 'HR'),
(8, 'Vince', 'Female', 6600, 'IT'),
(9, 'Jane', 'Female', 5400, 'Marketing'),
(10, 'Laura', 'Female', 6300, 'Finance'),
(11, 'Mac', 'Male', 5700, 'Sales'),
(12, 'Pat', 'Male', 7000, 'HR'),
(13, 'Julie', 'Female', 7100, 'IT'),
(14, 'Elice', 'Female', 6800,'Marketing'),
(15, 'Wayne', 'Male', 5000, 'Finance')

SELECT COALESCE(Department, NULL, 'All') [Department] 
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY Department

SELECT COALESCE(Department, NULL, 'All') [Department] 
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY ROLLUP(Department) 

GO

SELECT Department
	  ,Gender
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY Department, Gender
ORDER BY Department, Gender

SELECT COALESCE(Department, 'All Departments') [Department]
	  ,ISNULL(Gender, 'All Genders') [Gender]
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY ROLLUP(Gender, Department) 


SELECT COALESCE(Department, 'All Departments') [Department]
	  ,ISNULL(Gender, 'All Genders') [Gender]
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY ROLLUP(Department, Gender) 


SELECT COALESCE(Department, 'All Departments') [Department]
	  ,ISNULL(Gender, 'All Genders') [Gender]
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY CUBE(Department, Gender) 
ORDER BY Department, Gender


SELECT *
FROM [dbo].[Employee]
ORDER BY ID
OFFSET (SELECT 5) ROWS
FETCH NEXT 10 ROWS ONLY 


SELECT Department
	  ,Gender
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY Department, Gender

SELECT COALESCE(Department, 'All Departments') [Department]
	  ,ISNULL(Gender, 'All Genders') [Gender]
	  ,SUM(Salary) [Salary]
	  ,GROUPING(Department) [AggregatedOnDepartment]
	  ,GROUPING(Gender) [AggregatedOnGender]
	  ,GROUPING_ID(Department, Gender) [AggregatedOnGenderAndDepartment]
FROM [dbo].[Employee]
GROUP BY CUBE(Department, Gender)
HAVING GROUPING_ID(Department, Gender) >= 1


SELECT Department [Department] 
      ,Gender
	  ,SUM(Salary) [Salary]
FROM [dbo].[Employee]
GROUP BY Department, Gender

SELECT ID
	  ,Name
	  ,Department
	  ,Gender
	  ,Salary
	  ,MAX(Salary) OVER (PARTITION BY Department) [MaxSalary]
	  ,FIRST_VALUE(Salary) OVER (PARTITION BY Department ORDER BY ID) [MinIDSalary]
	  ,DENSE_RANK() OVER (PARTITION BY Gender ORDER BY Salary) [DenseRank]
	  ,RANK() OVER (PARTITION BY Gender ORDER BY Salary) [Rank]
	  ,LAG(Salary) OVER (PARTITION BY Department ORDER BY Salary DESC) [PreviousSalary]
	  ,LEAD(Salary) OVER (PARTITION BY Department ORDER BY Salary DESC) [NextSalary]
	  ,FIRST_VALUE(Salary) OVER (PARTITION BY Department ORDER BY ID DESC) [MaxIDSalary]
FROM [dbo].[Employee]
ORDER BY Gender, Salary



SELECT ID
	  ,Name
	  ,Department
	  ,Gender
	  ,Salary
	  ,NTILE(2) OVER (PARTITION BY Department ORDER BY Salary DESC) [BucketNumber]
FROM [dbo].[Employee]


