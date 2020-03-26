DECLARE @Variable DECIMAL(7,2) = 12839.9222

SELECT @Variable

GO

DECLARE @Variable NUMERIC(7,2) = 12809.925298330028340823048204820398402

SELECT @Variable

GO

DECLARE @Variable FLOAT = 1234455543232925298330423468398402984.9

SELECT @Variable

SELECT CAST(@Variable AS DECIMAL)

GO

DECLARE @Variable REAL = 1.9252983300283408230482048203984021234

SELECT @Variable

GO

-- Will have only 4 digits after the decimal

DECLARE @Variable SMALLMONEY = 121234.92529833002834082304820482039840

SELECT @Variable

GO

-- Will have only 4 digits after the decimal

DECLARE @Variable MONEY = 121234.92529833002834082304820482039840

SELECT @Variable