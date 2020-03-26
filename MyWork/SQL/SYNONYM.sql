SELECT *
FROM [dbo].[Person]


CREATE SYNONYM [Persons]
FOR [dbo].[Person]

SELECT * FROM Persons

GO


SP_RENAME '[dbo].[Person]','Person1'

GO

DROP SYNONYM IF EXISTS Persons

CREATE SYNONYM [Persons]
FOR [dbo].[Person1]