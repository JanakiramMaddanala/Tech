SELECT ISNULL('ABC', 1)

GO 

SELECT ISNULL(NULL, 1)

GO

SELECT ISNULL('ABC', 'BCD')

GO

SELECT ISNULL(NULL, NULL)

GO

-- THROWS error due to not having same data type values and the lowest precedence datatype tries to output
SELECT COALESCE('ABC', 1, 2)

GO 
-- Works here because the highest precedence datatype tries to output and that is what is expected
SELECT COALESCE(NULL, 1, 2,  'ABC')

GO 
DECLARE @Var INT

SELECT COALESCE(NULL, @Var)