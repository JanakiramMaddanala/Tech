DECLARE @Schema VARCHAR(10) = ''

SELECT @Schema = TABLE_SCHEMA
FROM [INFORMATION_SCHEMA].[TABLES]
WHERE TABLE_SCHEMA = 'dba'

SELECT @Schema

SET @Schema = (SELECT TABLE_SCHEMA FROM [INFORMATION_SCHEMA].[TABLES] WHERE TABLE_SCHEMA = 'dab')

SELECT @Schema

GO

SELECT *
INTO [dbo].[Person]
FROM (SELECT 1 [ID], 'RAM' [NAME], FORMAT(1000, 'C') [SALARY]) T

GO

DROP TABLE [dbo].[Person]

SELECT * FROM [dbo].[Person]
SELECT @@ROWCOUNT

GO

SELECT FORMAT(1000, 'G') [GeneralFormat]
	  ,FORMAT(1000, 'C') [CurrencyFormat]
	  ,FORMAT(1000, 'N') [NumberFormat]

GO

DECLARE @d DATETIME = '10/01/2011';  
SELECT FORMAT ( @d, 'd', 'en-US' ) AS 'US English Result'  
      ,FORMAT ( @d, 'd', 'en-gb' ) AS 'Great Britain English Result'  
      ,FORMAT ( @d, 'd', 'de-de' ) AS 'German Result'  
      ,FORMAT ( @d, 'd', 'zh-cn' ) AS 'Simplified Chinese (PRC) Result';

SELECT FORMAT( @d, 'dd/MM/yyyy', 'en-US' ) AS 'DateTime Result'  
      ,FORMAT(123456789,'###-##-####') AS 'Custom Number Result';  

--SET IDENTITY_INSERT [dbo].[Person] ON