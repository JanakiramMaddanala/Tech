SELECT LEN(NEWID()), NEWID()

GO

DROP SEQUENCE IF EXISTS [dbo].[SequenceGenerator]

GO

CREATE SEQUENCE [dbo].[SequenceGenerator] AS INT

GO

--SELECT NEXT VALUE FOR [dbo].[SequenceGenerator] 

GO

ALTER TABLE [dbo].[Person]
DROP COLUMN ID

GO

ALTER TABLE [dbo].[Person]
ADD ID INT NOT NULL CONSTRAINT DEFAULT_ID_PERSON DEFAULT (NEXT VALUE FOR [dbo].[SequenceGenerator])

