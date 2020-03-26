DECLARE @Variable CHAR(20) = '1234'

SELECT @Variable, LEN(@Variable), DATALENGTH(@Variable)

GO

DECLARE @Variable VARCHAR(8000) = '1234'

SELECT @Variable, LEN(@Variable), DATALENGTH(@Variable)

GO

DECLARE @Variable NVARCHAR(4000) = N'Rᾅὴ'

SELECT @Variable, LEN(@Variable), DATALENGTH(@Variable)

-- Max length is 8000 for VARCHAR or CHAR
-- Max length is 8000 for NVARCHAR or NCHAR