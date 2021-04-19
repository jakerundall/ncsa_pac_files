# ncsa_pac_files

Can be easily loaded/reloaded with a script like this:
```
#!/usr/bin/env bash
set -x  # echo on
PROXY_FILE_URL="https://git.ncsa.illinois.edu/rundall/ncsa_pac_files/-/raw/master/ncsa_http_proxy.pac"
networksetup -setautoproxystate Wi-Fi off
networksetup -setautoproxyurl Wi-Fi "$PROXY_FILE_URL"
networksetup -getautoproxyurl Wi-Fi
```


