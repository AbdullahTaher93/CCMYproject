

# Milestone 3 Document

   In this Milestone ,The application has been deployed in Google Cloud Platform [GCP](https://cloud.google.com/gcp/), We know there are many LaaS providers such as  Amazon AWS, Microsoft Azure, Google Compute Engine and IBM SmartCloud Enterprise.... etc, we can see the [features]() of each one, So after reading its features I decided using Microsoft Azure but I don't have any credits to use it and I have iready used my free account, so, i decided to use google cloud platform as a Iaas provider,
   
   
   For that, The app will deploy in a virtual machine in Google Cloud Platform with Ubuntu Server 18.04.I selected Linux OS,because Linux supports almost all of the major programming languages (Python, C/C++, Java, Perl, Ruby, etc.). Moreover, it offers a vast range of applications useful for programming purposes.we can find many libraries developed natively for Linux, The [package manager](https://en.wikipedia.org/wiki/Package_manager) on Linux helps us get things done easily.Interestingly, the ability of bash scripting is also one of the most compelling reasons why we prefer using Linux OS.Linux also brings in native support for Secure Shell [SSH](https://en.wikipedia.org/wiki/Secure_Shell), which would help us manage our servers quickly. we could include things like apt-get commands which further makes Linux one of the most popular choices of the programmers.




   

   ## Creating a VM instance 
       
 * note I used the google cloud platform [document](https://cloud.google.com/compute/docs/instances/create-start-instance) to create and start a VM instance.

 So, we can follow these instruction to create a VM instance :

 1. Go to the VM instances [page](https://console.cloud.google.com/compute/instances?_ga=2.239529539.-1964402234.1558025525).
 2. Select our project and click Continue.
 3. Click the Create instance button.
 4. Specify a Name for our instance.(I have written 'abdullah')
 5. Optionally, change the Zone for this instance. The list of zones is randomized within each region to encourage use across multiple zones.
 6. Machine type :  I selected n1-standard1 with 1 vCPU and 3.75 Memory,they are normal not so high and not so low.
 7. Select our operating system, so, I selected Ubuntu 18.04 LTS.
 8. To permit HTTP,select Allow HTTP traffic that allows all incoming traffic on tcp:80 (HTTP), and SSH tcp:22 has opened by default.
 9. Click the Create button to create and start the instance.


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/VM1.jpg)

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/VM2.jpg)


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/VM3.jpg)


Now we can start with our server by using SSH.

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/VM4.jpg)



    


 ## Ansible

   To use it, we need to install it previously. Then we need to edit a file called hosts and it is located in the /etc/ansible/ directory. This file edited with the following:

     [GoolgeCloud]
       Ip Address ansible_user=ahmedtaher641aa

we are indicating to IP of  our Virtual machine of  in the google cloud platform with its username. 

Now, we can ping our machine by using : 
   
         ansible all -m ping --ask-pass 


And the result follows:

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/ansible1.jpg)


Now, we will run the provisioning tasks to deploy your application.

The provisioning file is located in the provision directory with the name [playbook.yml](https://github.com/AbdullahTaher93/CCMYproject/blob/master/provision/playbook.yml)



this file follows these steps:

* Create a directory where the project will be downloaded.
* Clone the git repository.
* Install npm 
* Install dependencies.
* Install pm2
* Remove, if it exists, a previous pm2 process


We launched the playbook and the result follows:
        
![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/ansible22.jpg)









   ## Run our App
  
 finally, We can run our application on the VM in the Port 80 with a command :
        
         sudo PORT=80 npm start

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/runserver.jpg)




![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/server.jpg)







      






    











    
 







