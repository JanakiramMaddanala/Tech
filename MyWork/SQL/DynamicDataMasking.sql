CREATE TABLE [dbo].[PersonalInfo]
(
	ID BIGINT PRIMARY KEY IDENTITY(100000,1),
	NAME VARCHAR(500) MASKED WITH (FUNCTION='default()'),
	DESIGNATION VARCHAR(100) MASKED WITH (FUNCTION='partial(4,"****",0)')
)

ALTER TABLE [dbo].[PersonalInfo]
ALTER COLUMN DESIGNATION ADD MASKED WITH (FUNCTION='partial(1,"****",1)')

INSERT INTO [dbo].[PersonalInfo]
VALUES
('Janakiram Maddanala', 'Consultant'),
('Srivnivas Babu Maddanala', 'Senior Consultant'),
('VVR Kishroe Maddanala', 'Manager')


SELECT *
FROM [dbo].[PersonalInfo]

DELETE FROM [dbo].[PersonalInfo]

CREATE USER Ram WITHOUT LOGIN;  
GRANT SELECT ON [dbo].[PersonalInfo] TO Ram;  
  
EXECUTE AS USER = 'Ram';  
SELECT * FROM [dbo].[PersonalInfo]  
REVERT;  