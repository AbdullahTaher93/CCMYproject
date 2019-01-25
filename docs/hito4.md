# Milestone 4


In this part the create virtual machine the command line using the Azure CLI tool, The application has been deployed in Azure in a virtual machine with Ubuntu Server 18.04 ,and we used Mongodb in our app  ....


#### In this part we used Mongodb in Our App..

  first: we need connect our app with Mongodb but before that we should install mongodb in our app with this line:

    npm install mongodb --save

now we can connect mongo with app by this lines:

    var MongoClient=require("mongodb").MongoClient;

    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, { useNewUrlParser: true },function(err,........

second: we used 3 method for dealing with mongodb
 
 * add a new profile by this line:

           db.collection("profiles").insertOne() 

* remove a profile by this line:

    
        query={ID:index};*
        db.collection("profiles").deleteOne(query)

* search about a profile by this line:

        query={ID:index};
        db.collection("profiles").find().sort(query).toArray()


## Now we can create new VM for deploying our App

#### We used Cloud shell of portal azuer



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/cli.png)

the first thing we have to do is create the resource group with the following command:

    az  group create --name hito4 --location francecentral


In this case we we choose data center of france central because it has the best Average Latency. following [web portal](https://azurespeedtest.azurewebsites.net/) 



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/lat.png)


After running the command of create group the result will be: 

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/creategroup.png)


#
Next,we created the network security group of our virtual machine
following command:

       az network nsg create --resource-group hito4 --location francecentral --name networks


result will be:



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/createnetwork1.png)


#
Then we should open Port 80 with command:


    az network nsg rule create --resource-group hito4 --nsg-name networks --name http80 --protocol tcp --priority 800 --destination-port-range 80 --access allow




![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/createnetwork2.png)





#
then, we can create and run  our virtual machine we indicate image, user, static ip and we indicate that it belongs to the network security group created previously that with command:

     az vm create --resource-group hito4 --name MyProject --image Canonical:UbuntuServer:18.04-LTS:latest --admin-username abdullahtaher --admin-password mypassword --public-ip-address-allocation static --nsg networks

its configuration:
   
   1. OS: Ubuntu Server 18.04 
   2. Region: France Central.
   3. Authentication:password.
   4. user : AbdullahTaher
   5. Ip address: static
   6. Open ports: HTTP (80).

   We used Ubuntu Server 18.04 operating system,because it is the latest version of Ubuntu Server and because it brings NodeJS already.

finally, now we can deploy our project on the new our virtual machine we can do that a same way as in the [previous milestone](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito3.md) 

### Checking the deployment

To check if the application is working correctly, its IP has been accessed through the browser http://40.89.153.174/  and the result will be:



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/IPVM2.png)






       










