#!/bin/bash

echo "Generating env file..."

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

# Add assignment
echo "window._env = {" >> ./env-config.js

# Each line represents key=value pairs
env | while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file if containt "REACT_" keyword
  if [[ $varname == "REACT_"* ]]; then
    echo "  $varname: \"$value\"," >> ./env-config.js
  fi
done

echo "}" >> ./env-config.js

echo "Done."
