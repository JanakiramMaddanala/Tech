
DECLARE @TableName VARCHAR(10) = 'Employee'
DECLARE @SchemaName VARCHAR(10) = 'dbo'

DECLARE @SQLQuery NVARCHAR(500)

DECLARE @FullTableName VARCHAR(100) = QUOTENAME(@SchemaName) + '.' + QUOTENAME(@TableName)

SET @SQLQuery = N'UPDATE ' + @FullTableName + '
				  SET Id = @UpdateID 
				  WHERE Id = @LookupID'

PRINT @SQLQuery

EXECUTE SP_EXECUTESQL @SQLQuery, 
					N'@UpdateID INT, @LookupID INT',
					  @UpdateID = 100, @LookupID = 1

PRINT @SQLQuery