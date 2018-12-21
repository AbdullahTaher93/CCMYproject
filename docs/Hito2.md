# Milestone 2
In this milestone, a REST API has been developed in NodeJS using Express, this API is based on a data structure in which the data that arrives through the API is stored.

Right now the data is stored in this structure and managed by itself, in the future this will be changed by a non-relational database,

A RESTful API is an application program interface [API](https://searchmicroservices.techtarget.com/definition/application-program-interface-API) that uses [HTTP](https://searchwindevelopment.techtarget.com/definition/HTTP) requests to GET, PUT, POST and DELETE data.
A RESTful API -- also referred to as a RESTful web service -- is based on representational state transfer [REST](https://searchmicroservices.techtarget.com/definition/REST-representational-state-transfer) technology, an architectural style and approach to communications often used in [web services](https://searchmicroservices.techtarget.com/definition/Web-services-application-services) development.



## Data Structure

This structure has a "data" object the data are about information of persons(profile) such as :

names,ages,skills,Study,phones numbers,emails,status,

In addition,a profile is added where data objects are stored.
On this profile we put four functions:

1-storeData : it provides to user save a new profile
2- editData: edit a value already stored in the profile.
3-deleteData: delete a profile.
4-search: it provides a query for users have ages less than specific age.

## REST API

  Our REST API has the following methods:
  * GET on "/": Returns the status of the service.
  * GET over "/api": It returns all the profiles of users.
  * GET over "/api/search": It returns the profiles of users have ages less than specific age.
  * POST on "/api": Adds a new profile.
  * PUT on "/api": Edits an element stored in the profile, it is passed on the position of the profile to be modified and the new elements.
  * DELETE on "/api": It removes a profile of users, it is passed on the index of this.

    This API in the future will be used from a web page.


     Now we can create a small web service by use Node js :


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20init.png)


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20--save%20inst.png)




## Test

The tests were carried out using the "supertest" framework and executed with mocha.
After that we can test our project with [travis](https://travis-ci.org)




![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas1.png)



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas2.png)


 


## PaaS Heroku

This PaaS has been selected for its simplicity of use, it is free and easy to configure, it is also easy to integrate with Travis, in the future Azure will be used.
if the Api pass The test it will  deploy to [Heroku](https://Heroku.com) but befor that we must connect Github with Heroku .



 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/heroku.png) 












## [My Project](https://abdullahtaher93.github.io/CCMYproject/)

Despliegue: https://small-well-service.herokuapp.com/
