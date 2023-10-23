#!/bin/bash

duration=5
start_time=$(date +%s)

while true; do
    current_time=$(date +%s)
    elapsed_time=$((current_time - start_time))

    if [ $elapsed_time -ge $duration ]; then
        break
    fi

    echo "Time appears frozen..."
    sleep 1
done

echo "Time unfreezes!"
