SELECT *
FROM [dbo].[Person]
FOR XML RAW

GO

SELECT *
FROM [dbo].[Person]
FOR XML RAW('Person')

GO

SELECT *
FROM [dbo].[Person]
FOR XML RAW('Person'), TYPE

GO

SELECT *
FROM [dbo].[Person]
FOR XML RAW('Person'), ELEMENTS, ROOT('Persons')

GO 

SELECT *
FROM [dbo].[Person] [Person]
FOR XML AUTO, ELEMENTS, ROOT('Persons')

GO 

SELECT O.name, O.object_id, O.schema_id, O.type, O.type_desc, T.create_date, T.durability, T.durability_desc
FROM sys.objects O
JOIN sys.tables T
	ON (o.name = T.name)
FOR XML AUTO, ELEMENTS, ROOT('Objects')

SELECT O.name '@name', O.object_id '@object_id', O.schema_id, O.type, O.type_desc, T.create_date, T.durability, T.durability_desc
FROM sys.objects O
JOIN sys.tables T
	ON (o.name = T.name)
FOR XML PATH('Object'), ELEMENTS, ROOT('Objects')