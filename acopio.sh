#! / bin / bash

gcloud compute instances create hito4 \
      #To select the Ubuntu OS
    --image-family ubuntu-1804-lts \ 
    --image-project ubuntu-os-cloud \
    #To select data center of europe-west2 
    --zone europe-west2 \
    #To select the machine type with 1 vCPU and 3.75 Memory
    --machine-type n1-standard-1 \
    --subnet default \
    #To put IP static for our machine
    --address [IP address] \
    #To open port 80
    --tags http-server 
