
$FolderPath = "";
$SearchTerm = ""

Get-ChildItem -Path $FolderPath -Recurse -File | ForEach-Object { Select-String -Path $_.FullName -Pattern $SearchTerm -AllMatches;}
ForEach-Object { 
    
    $MatchString = Select-String -Path $_.FullName -Pattern $SearchTerm -AllMatches; 
    Write-Output $MatchString;
}
