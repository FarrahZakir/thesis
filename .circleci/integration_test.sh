#!/bin/sh

latest_deployment=$(curl https://api.github.com/repos/FarrahZakir/thesis/deployments?per_page=1)

statuses_url=$(echo "$latest_deployment" | jq -r '.[].statuses_url')
echo $statuses_url

status_res_state=""
while [[ $status_res_state != "success" ]]
do
    status_res_body=$(curl $statuses_url)
    echo $status_res_body
    status_res_state=$(echo "$status_res_body" | jq -r '.[].state')
    echo $status_res_state

    sleep 1
done

npm run integration-test --ci --runInBand --reporters=default
