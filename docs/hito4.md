# Milestone 4


In this part we will create a VM by using [Google Cloud Shell](https://cloud.google.com/shell/docs/), then we will deploye our app on Google Compute Engine in a virtual machine with Ubuntu Server 18.4 LTS, and we will add Mongodb into our app, and we will create a new function which allows clients login to our app. 


#### In this part we are going to use Mongodb in Our App..

We have to do somethings to start using Mongodb:

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

#### Also, In this part we are going to create new method to users login ..


* The first thing I have to do it is add **PASSWORD** feature to user profile

so, the profile feature has been :

* names
* ages
* skills
* study (Bachelor, Master,PhD ......)
* Phones numbers
* emails
* status (Single or not)
* **PASSWORD** new feature 

Now, I have to create The login function, this function has two parameter *user email* and *user password*, and it returns json, if a user is exist or not.

So, I added a new method to our **REST API** 

 The following:
    
         GET on "/api/log": Return the login status 'exist' || 'notexist'


Now,We can try to login with correct email and password, the result will be :

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/logincase1.jpg)

And let us try with incorrect data, So, the result will be :

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/logincase2.jpg)


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



After running the commands of creating instance the result will be: 

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/createVM.jpg)


its configuration:
   
   1. OS: Ubuntu 18.4 LTS 
   2. Region: europe-west2.
   3. user : ahmedtaher641aa
   4. Ip address: static
   5. ports: HTTP (80).


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/ubuntucfg.jpg)

## Why ubuntu?!

As I said in the document of milestone 3, ubuntu has a lot of nice features which make us choose ubuntu, in additional,there are many differences between debian, ubuntu and windows we can see that in this [website](https://linuxconfig.org/debian-vs-ubuntu) which describes the difference between Debian and ubuntu, and this [website](https://www.techulator.com/experts/3039-Fundamental-differences-between-Ubuntu-and-Windows.aspx) describes the difference between Windows and ubuntu, for that we have used Linux.


We can find specific [images](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/cli-ps-findimage) of ubuntu,To find a specific VM image in the Marketplace we can use this line:

             gcloud compute images list

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/ubuntuimage.jpg)



Finally, now we can deploy our project on the new our virtual machine so we can do that in a same way as in the [previous milestone](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito3.md),we have to [Install](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-ansible-on-ubuntu-18-04) Ansible on Ubuntu 18.4 LTS, now we can ping our machine after edit hosts file with ansible_host, ansible_user that it is located in the   
--/etc/ansible/hosts-- and the result will be:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/testwithansible1.jpg)


And we have to add a new task to our [playbook](https://github.com/AbdullahTaher93/CCMYproject/blob/master/provision/playbook.yml) file to install mongodb and start it, I followed this [document](https://cloudmesh.github.io/classes/lesson/devops/ansible/ansible-appendix.html) to do it, SO, the adding will be :

Module apt_key: add repository keys:
                
    tasks:
    - name: Import the public key used by the package management system
                    apt_key: keyserver=hkp://keyserver.ubuntu.com:80 id=7F0CEB10 state=present


Module apt_repository: add repositories

         - name: Add MongoDB repository
      apt_repository: repo='deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' state=present

Module apt: install packages

         - name: install mongodb
           apt: pkg=mongodb-org state=latest update_cache=yes
           notify:
              - start mongodb

Module service: manage services

          handlers:
           - name: start mongodb
             service: name=mongod state=started











### Check the App 

To check App if it is working correctly, its IP accessed through the browser http://35.246.115.186/

  and the result will be:



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/VMIP2.jpg)






       










