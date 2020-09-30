#!/bin/bash
#made by surya_dont do shit u dont know ,if u know u rock
set -e
if [$1 == '']; then
exit 1
fi

while true;do
val=$RANDOM
echo $val>$1
read -p "SENT $val " -t 0.5
done

