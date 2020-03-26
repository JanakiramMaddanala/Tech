DECLARE @JSON NVARCHAR(1000)

SET @JSON = '{
	"ID" : 1,
	"NAME" : "RAM"
}'

SELECT @JSON, ISJSON(@JSON)

GO 
DECLARE @JSON NVARCHAR(1000)

SET @JSON = '{
        "_id" : "5e4a96130902aa3e54b1771d",
        "title" : "The Last Student Returns",
        "meta" : {
                "rating" : 9.5,
                "aired" : 2018,
                "runtime" : 100
        },
        "visitors" : 1300000,
        "expectedVisitors" : 1550000,
        "genre" : [
                "thriller",
                "drama"
        ]
}'

--SELECT ISJSON(@JSON) [IsJSON]
--SELECT JSON_QUERY(@JSON, '$.genre') [Genres]
--SELECT JSON_VALUE(@JSON, '$.genre[0]') [FirstGenre]
--SELECT JSON_VALUE(@JSON, '$.meta.rating') [Rating]
--SELECT JSON_VALUE(@JSON, '$.meta.Rating') [Rating]
--SELECT JSON_VALUE(@JSON, 'strict $.meta.Rating') [Rating]

--SET @JSON = JSON_MODIFY(@JSON,'$.genre[0]', 'devils')

--SELECT @JSON

SELECT *
FROM OPENJSON(@JSON, '$.meta')
	 WITH (rating DECIMAL(5,1), aired INT, runtime INT)

SELECT *
FROM [dbo].[Person]
FOR JSON PATH, ROOT('Persons')

SELECT *
FROM [dbo].[Person]
ORDER BY ID
OFFSET (SELECT 1) ROWS
FETCH NEXT 1 ROWS ONLY 

