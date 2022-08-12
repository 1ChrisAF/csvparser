$csv_text = Get-Content -Path .\convertcsv.csv -Raw

$parsed_text = node parser.js $csv_text

$parsed_text | Out-File -FilePath .\parsedData.txt