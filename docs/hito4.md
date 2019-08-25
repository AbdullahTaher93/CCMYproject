# Milestone 4


In this part we will create a VM by using the [Azure](https://Azure.microsoft.com) CLI tool, then we will deploye our app on Azure in a virtual machine with [Debian 9](https://www.debian.org/intro/why_debian), and we will add Mongodb into our app, and we will create a new class 


#### In this part we are going to use Mongodb in Our App..

We have to do somethings for using Mongodb : 

  First: we need to connect our app with Mongodb, but before that we should install mongodb with this line:

    npm install mongodb --save

Now we can connect mongodb with our app by these lines:

    var MongoClient=require("mongodb").MongoClient;

    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, { useNewUrlParser: true },function(err,........

Second: we used 3 method for dealing with mongodb
 
 * add a new profile by this line:

           db.collection("profiles").insertOne() 

* remove a profile by this line:

    
        query={ID:index};*
        db.collection("profiles").deleteOne(query)

* Search about a profile by this line:

        query={ID:index};
        db.collection("profiles").find().sort(query).toArray()


## Now we are going to create a new VM by using command line to deploy our App

#### We are going to use Cloud shell of Google cloud platform



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/cliofgoogle.jpg)

The first thing we have to do That create instance with the following commands:

    gcloud compute instances create hito4 \
    --image-family ubuntu-1804-lts \
    --image-project ubuntu-os-cloud \
    --zone europe-west2 \
    --machine-type n1-standard-1 \
    --subnet default \
    --address [IP address] \
    --tags http-server 




In this case we chose data center of europe-west2 because it has the best Latency, following [Google Cloud Platform Network Test](https://cloudharmony.com/speedtest-for-google:storage) 



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/testgoogle.jpg)

And we used :
 1. To select the Ubuntu OS:

         --image-family ubuntu-1804-lts
         --image-project ubuntu-os-cloud

 2. To select the machine type with 1 vCPU and 3.75 Memory:
     
        --machine-type n1-standard-1

 3. To put IP static for our machine: 

         --subnet default 
         --address [IP address] 

 4. To open port 80 :
      
        --tags http-server 

* Note that we don't need to open port 22 because in google cloud platform the port 22 open automatically.



After running the commands of create instance the result will be: 

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/createVM.jpg)


its configuration:
   
   1. OS: Ubuntu 18.4 LTS 
   2. Region: europe-west2.
   3. user : ahmedtaher641aa
   4. Ip address: static
   5. ports: HTTP (80).


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/ubuntucfg.jpg)

## Why ubuntu?!

As I said in the document of milestone3  


We can find specific [images](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/cli-ps-findimage) of Debian,To find a specific VM image in the Marketplace we can use this line:

             az vm image list --offer Debian --all --output table 

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/showVMofDebian.png)


### Start with Ubuntu

  ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/runde.png)

Finally, now we can deploy our project on the new our virtual machine so we can do that in a same way as in the [previous milestone](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito3.md),we have to [Install](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-ansible-on-ubuntu-18-04) Ansible on Ubuntu 18.4 LTS, now we can ping our machine after edit hosts file with ansible_host, ansible_user that it is located in the   
--/etc/ansible/hosts-- and the result will be:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/testwithansible.png)










### Check the App 

To check App if it is working correctly, its IP accessed through the browser http://52.143.152.163/

  and the result will be:



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/IPVM2.png)






       










