USE [SQLPractice]

GO

DROP TABLE [dbo].[Person1]

GO

CREATE TABLE [dbo].[Person]
(
	 ID INT NOT NULL IDENTITY(1,1),
	 NAME VARCHAR(20),
	 SALARY MONEY
)


INSERT INTO [dbo].[Person]
VALUES ('Janakiram', 1000),
	   ('Srinivas', 1200)


BEGIN TRAN

DELETE FROM [dbo].[Person]

INSERT INTO [dbo].[Person]
VALUES ('Janakiram', 1000),
	   ('Srinivas', 1200)

SELECT * FROM [dbo].[Person]

ROLLBACK TRAN



BEGIN TRAN

TRUNCATE TABLE [dbo].[Person]

INSERT INTO [dbo].[Person]
VALUES ('Janakiram', 1000),
	   ('Srinivas', 1200)

SELECT * FROM [dbo].[Person]

ROLLBACK TRAN