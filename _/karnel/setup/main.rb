#!/bin/tcsh

# List of target hosts to check
set target_hosts = ("127.0.0.1" "0.0.0.0" "8.8.8.8")

# Number of ping requests
set ping_count = 4

# Function to check network health for a host
proc check_host_health(host) {
    echo "Checking network health for $host..."

    ping -c $ping_count $host

    if ($? == 0) then
        echo "$host is reachable. Network is healthy."
    else
        echo "$host is not reachable. Network may have issues."
    endif
}

# Loop through the list of target hosts and check their network health
foreach host ($target_hosts)
    check_host_health($host)
end
