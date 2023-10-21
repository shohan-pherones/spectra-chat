#!/bin/bash

data="root"
placeholder="REDACTED"

if [ -f "/app/page.tsx" ]; then
  sed -i "s/$sensitive_data/$placeholder/g" /app/page.tsx
  echo "Data in /app/page.tsx has been sanitized."
else
  echo "File '/app/page.tsx' not found."
fi
