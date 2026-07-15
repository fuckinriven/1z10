# Run this in PowerShell as Administrator
# Get current WSL2 IP
$wslIp = (wsl -- ip addr show eth0 | Select-String -Pattern 'inet (\d+\.\d+\.\d+\.\d+)').Matches.Groups[1].Value

# Remove old proxy rules
netsh interface portproxy delete v4tov4 listenport=5173 | Out-Null

# Add proxy rule
netsh interface portproxy add v4tov4 listenaddress=0.0.0.0 listenport=5173 connectaddress=$wslIp connectport=5173

Write-Host "Port 5173 forwarded to WSL2 at $wslIp"
Write-Host "Access at http://192.168.0.102:5173 (or your current Windows IP)"

# Show all proxies
netsh interface portproxy show v4tov4
