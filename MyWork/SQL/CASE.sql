-- Lowest Precedence data type gets converted into highest precedence data type
-- Need to make sure all the outputs are having same datatype
DECLARE @Variable CHAR(1) = 'K'
SELECT CASE @Variable 
			WHEN 'Y' THEN 1
			WHEN 'N' THEN 'NO'
			ELSE 'UNKNOWN'
		END

GO			
DECLARE @Variable CHAR(1) = 'Y'			
SELECT CASE @Variable 
			WHEN 'Y' THEN '1'
			WHEN 'N' THEN 'NO'
			ELSE 'UNKNOWN'
		END
				