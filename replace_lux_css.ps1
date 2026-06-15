$file = "c:\Users\mahaj\Social-Theka\src\Component\Home.css"
$content = Get-Content $file -Raw -Encoding UTF8
$idx = $content.IndexOf("/* ══════════════════════════════════════════════════`n   LUXURY SHOWCASE")
if ($idx -lt 0) {
    Write-Host "Not found with that exact text, trying alternate..."
    $idx = $content.IndexOf("LUXURY SHOWCASE")
    # back up to find the comment start
    $start = $content.LastIndexOf("/* ═", $idx)
    Write-Host "Found at index $start"
} else {
    $start = $idx
}
$before = $content.Substring(0, $start)
Set-Content $file -Value $before -Encoding UTF8 -NoNewline
Write-Host "Truncated. Kept $($before.Length) chars."
