#Enable-PSRemoting -force

#SQL Server Configuration
$UserName = "sa";
$Password = "";

#Source
$SourceServer = "";
$SourceDatabase = "";
$SourceQueries = @{Query="SELECT TOP 1000 * FROM [Database].[dbo].[Invoices]";DestinationTable="[dbo].[DEVELOPER]"};
$SourceColumnNames = @("ContactPersonID");

#Destination
$DestinationServer = "";
$DestinationDatabase = "";
$DestinationColumnNames = @("[Developer Name]");


ForEach($SourceQuery in $SourceQueries)
{
    $OutputDataSet = Invoke-Sqlcmd -Query $SourceQuery.Query -Server $SourceServer -Database $SourceDatabase -Username $UserName -Password $Password
    
    $OutputDataset = $OutputDataSet | Select-Object -Property $SourceColumnNames
    
    Write-Host $OutputDataSet.Count
    
    $MaxRows = 100;

    $OutputDatasetArray = For($index = 0;$index -lt $OutputDataSet.Length; $index += $MaxRows)
    {
        ,($OutputDataSet[$index..($index+$MaxRows-1)])
    }

    Write-Host $OutputDatasetArray.Count

    ForEach($Output in $OutputDataSetArray)
    {
        $InsertValues = ForEach($SubOutput in $Output)
        {
            $value = @($SourceColumnNames | ForEach-Object{$SubOutput."$_".ToString()})

            $value2 = "({0})" -f ($value -join ',')

            $value2
        }

        $InsertQuery = "INSERT INTO " + $SourceQuery.DestinationTable +"({0}) VALUES {1};" -f $($DestinationColumnNames -join ','),$($InsertValues -join ', ')

        Invoke-Sqlcmd -Query $InsertQuery -Server $DestinationServer -Database $DestinationDatabase -Username $UserName -Password $Password
    }
}


#IGNORE

#$psSession = New-PSSession -ComputerName $SQLServer

#Invoke-Command -Session $psSession -Script {Import-Module SQLPS -ErrorAction Continue}

#Import-Module SQLPS -ErrorAction Continue