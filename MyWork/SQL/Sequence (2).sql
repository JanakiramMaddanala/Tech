CREATE SEQUENCE [dbo].[SnapshotSequence]
AS [BIGINT]
START WITH 1
INCREMENT BY 1
CACHE 50

--MAX(INT) = 2147483648

DROP SEQUENCE [dbo].[SampleSequence]

DECLARE @SnapshotID BIGINT = NEXT VALUE FOR [dbo].[SnapshotSequence]

SELECT @SnapshotID [SnapshotID]