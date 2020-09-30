#!/bin/bash
#made by surya_dont do shit u dont know ,if u know u rock

if [[ $# -ne 2 ]] ; then
echo "bro wheres the parameter first parameter should be serial second should be time"
exit 1
fi

echo passesd

while true;do
val=$RANDOM
echo $val>$1
read -p "SENT $val " -t $2
done
