SELECT UserPreferences
	  ,ISJSON(UserPreferences) [IsJSON]
	  ,JSON_VALUE(UserPreferences, '$.theme') [Theme]
	  ,JSON_VALUE(UserPreferences, '$.dateFormat') [DateFormat]
	  ,JSON_VALUE(UserPreferences, '$.timeZone') [TimeZone]
	  ,JSON_VALUE(UserPreferences, '$.table.pageLength') [PageLength]
	  ,JSON_QUERY(UserPreferences, '$.table') [Table]
	  ,(SELECT TOP 1 value FROM OPENJSON(UserPreferences) WHERE PersonID = P.PersonID ) [Json]
FROM [Application].[People] P
GO 

SELECT *
FROM [Application].[People]

DECLARE @Json NVARCHAR(MAX) = (SELECT TOP 1 UserPreferences FROM [Application].[People])

SELECT @Json

SELECT *
FROM OPENJSON(@Json)

SELECT CityID [ID]
	  ,CityName
	  ,StateProvinceID
	  ,LastEditedBy
	  ,ValidFrom
	  ,ValidTo
FROM [Application].[Cities]
FOR JSON PATH
GO
DECLARE @json NVARCHAR(MAX);
SET @json = '[
				{
					"info":
					{
						"address":[{"town":"Belgrade"},{"town":"Paris"},{"town":"Madrid"}]
					}
				}
			 ]';
SELECT *
FROM OPENJSON(@json) WITH (address NVARCHAR(MAX) '$.info.address' as json)
OUTER APPLY OPENJSON(address) WITH (town NVARCHAR(MAX) '$' as json)

SET @json = JSON_MODIFY(@json,'$.info.address[1].town','London');
SELECT modifiedJson = @json;

GO 

DECLARE @json NVARCHAR(MAX) = N'
{
  "FirstName":null,
  "LastName":"Duffy",
  "NatID":245797967,
  "Current":false,
  "Skills":["Dev","QA","PM"],
  "Region":{"Country":"Canada","Territory":"North America"}
}';
 
SELECT *
FROM OPENJSON(@json) WITH 
(
	[FirstName] VARCHAR(100) '$.FirstName',
	[LastName] VARCHAR(100) '$.LastName',
	[NatID] BIGINT '$.NatID',
	[Current] NVARCHAR(5) '$.Current',
	[Skills] NVARCHAR(MAX) '$.Skills' AS JSON,
	[Region] NVARCHAR(MAX) '$.Region' AS JSON 
)

SELECT *
FROM OPENJSON(@json) WITH 
(
	[FirstName] VARCHAR(100) '$.FirstName',
	[LastName] VARCHAR(100) '$.LastName',
	[NatID] BIGINT '$.NatID',
	[Current] NVARCHAR(5) '$.Current',
	[PrimarySkill] NVARCHAR(10) '$.Skills[0]',
	[Country] NVARCHAR(20) '$.Region.Country'  
)


SELECT TOP 2 
	   CountryID [Primary.ID]
	  ,CountryName [Primary.Name]
	  ,Region
	  ,Subregion
	  ,NULL [Optional]
FROM [Application].[Countries] [Countries]
FOR JSON PATH
	,ROOT('Countries')
	,INCLUDE_NULL_VALUES
	--,WITHOUT_ARRAY_WRAPPER


SELECT *
FROM [Application].[Cities] 

