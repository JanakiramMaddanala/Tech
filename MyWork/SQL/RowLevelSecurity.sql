/* SYSTEM VERSIONED TEMPORAL TABLE */

CREATE TABLE [dbo].[Developer]
(
	 ID INT PRIMARY KEY IDENTITY,
	 Name VARCHAR(100),
	 Designation VARCHAR(100),
	 ValidFrom DATETIME2 GENERATED ALWAYS AS ROW START,
	 ValidTo DATETIME2 GENERATED ALWAYS AS ROW END,
	 PERIOD FOR SYSTEM_TIME(ValidFrom, ValidTo)
)
WITH(SYSTEM_VERSIONING = ON (HISTORY_TABLE = [dbo].[DeveloperHistory]))

GO

INSERT INTO [dbo].[Developer] (Name, Designation)
VALUES
('Ram', 'Consultant'),
('Srinivas', 'Senior Consultant'),
('Kishore', 'Manager')

GO 


DROP TABLE [dbo].[Developer]

ALTER TABLE [dbo].[Developer] SET (SYSTEM_VERSIONING = ON (HISTORY_TABLE = [dbo].[DeveloperHistory]))

ALTER TABLE [dbo].[Developer] SET (SYSTEM_VERSIONING = OFF)
GO
DROP TABLE [dbo].[Developer]
GO
DROP TABLE [dbo].[DeveloperHistory]

GO

SELECT *
FROM [dbo].[Developer]
FOR SYSTEM_TIME ALL

SELECT *
FROM [dbo].[Developer]
FOR SYSTEM_TIME AS OF '2019-05-26 10:24:36.0854698'

SELECT *
FROM [dbo].[Developer]
FOR SYSTEM_TIME FROM '2019-05-26 10:24:36.0854697' TO '2019-05-26 10:25:24.9231632'

GO

UPDATE [dbo].[Developer]
SET ValidFrom = GETDATE()-3
WHERE ID = 1

GO

ALTER TABLE [dbo].[Developer]
DROP PERIOD FOR SYSTEM_TIME

ALTER TABLE [dbo].[Developer]
ADD PERIOD FOR SYSTEM_TIME (ValidFrom, ValidTo)

CREATE SCHEMA Security
GO

CREATE SECURITY POLICY [Security].[DeveloperPolicy]
ADD FILTER PREDICATE [dbo].fn_DeveloperPolicy(Name)
ON [dbo].[Developer]

DROP SECURITY POLICY [Security].[DeveloperPolicy]

GO
DROP FUNCTION fnDeveloperPolicy
GO
CREATE OR ALTER FUNCTION fn_DeveloperPolicy
(
	@Name VARCHAR(200)
)
RETURNS TABLE
WITH SCHEMABINDING
AS

RETURN 
(
	   SELECT @Name [result] 
	   WHERE @Name = USER_NAME() 
)




CREATE USER Ram WITHOUT LOGIN;
CREATE USER Srinivas WITHOUT LOGIN;
CREATE USER Kishore WITHOUT LOGIN;

GRANT SELECT ON [dbo].[Developer] TO Ram;
GRANT SELECT ON [dbo].[Developer] TO Kishore;

EXECUTE AS USER = 'Kishore'
SELECT *
FROM [dbo].[Developer]
REVERT;

