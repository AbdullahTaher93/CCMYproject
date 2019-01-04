# Milestone 2
In this milestone, a REST API has been developed in NodeJS using Express, this API is based on a data structure in which the data that arrives through the API is stored.

 Right now, The data is stored in this structure and managed by itself, in the future this will be changed by a non-relational database.

A RESTful API is an application program interface [API](https://searchmicroservices.techtarget.com/definition/application-program-interface-API) That uses [HTTP](https://searchwindevelopment.techtarget.com/definition/HTTP) requests to GET, PUT, POST and DELETE data.
A RESTful API -- also referred to as a RESTful web service -- is based on representational state transfer [REST](https://searchmicroservices.techtarget.com/definition/REST-representational-state-transfer) technology, an architectural style and approach to communications often used in [web services](https://searchmicroservices.techtarget.com/definition/Web-services-application-services) development.



## Data Structure

This structure has a "data" object The data are about information of persons(profile) such as :

The names
The ages
The skills
A study
The Phones numbers
The emails
The status

A profile added where data objects stored.
We put four functions:

1-storeData : it provides to users save a new profile
2- editData: edit a value already stored in the profile.
3-deleteData: delete a profile.
4-search: it provides a query of users whose their ages less than Specific age 
          For example:The ages<25 years old..

## REST API

  Our REST API has the following methods:
    * GET on "/": Return the status of the service.
    * GET over "/api":return all the profiles of users.
    * GET over "/api/search":return the profiles of users whose their ages less than Specific age .
    * POST on "/api": Add a new profile.
    * PUT on "/api": Edit an element stored in the profile,It's based on the position of the profile.
    * DELETE on "/api":remove a profile of users, It's based on index of profile.

 This API in the future will be used from a web page.


 Now we can create a small web service by using Node js :


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20init.png)


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20--save%20inst.png)




## Test

   The tests were created by using the "supertest" framework and executed with mocha.
   After that we can test our project with [travis](https://travis-ci.org)




![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas1.png)



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas2.png)


 


## PaaS Heroku

We selected This PasS because it is easy to use, it is free and it easy to configure, Also it is easy to integrate with Travis, in the Future we will use Azure.

Now for using Heroku we should create an new account in [Heroku](https://Heroku.com) then we should connect Github with Heroku.

![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/heroku.png) 




 

## [My Project](https://abdullahtaher93.github.io/CCMYproject/)

Despliegue: https://small-well-service.herokuapp.com/
