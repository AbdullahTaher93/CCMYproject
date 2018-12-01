

[![Build Status](https://travis-ci.org/AbdullahTaher93/CCMYproject.svg?branch=master)](https://travis-ci.org/AbdullahTaher93/CCMYproject)


# Description


we know there are many persons are looking for a job and they face difficult to find a job 
what they want Conversely there are many companies’ managers are looking for a suitable person
to work in their companies created as a social media don't provide a special relation between 
companies and jobless so, my project provides a special relation between companies and people The
objective of this project, create Employment website with user interface which will enable them to
browse, search, get the chance to work, and select the suitable work or employee of their choice. 
For example: if someone is looking for a job just will do searching, the search result will be liking
his skills in his profile.

# Architecture

In simple words, software architecture is the process of converting software characteristics such as flexibility, scalability, feasibility, reusability, and security into a structured solution that meets the technical and the business expectations. This definition leads us to ask about the characteristics of a software that can affect a software architecture design. There is a long list of characteristics which mainly represent the business or the operational requirements, in addition to the technical requirements.

## The top-level structure of the program:
 Home Page

1 Administrator

      1.1 Manage Jobs

       1.2 Manage Searchers

       1.3 Manage Providers
2 Provider

     2.1 Add New Jobs

     2.2   Add Jobs' Skills

     2.3   Profile

     2.4 See Searcher

3 Searcher

    3.1 Add New Skills 
    3.2 Profile
    3.3 See Jobs
I will use Node js as Back-end, Html, CSS, JavaScript as front-end and MongoDB to Handle data

# Milestone 2
In this milestone, a REST API has been developed in NodeJS using Express, this API is based on a data structure in which the data that arrives through the API is stored.

Right now the data is stored in this structure and managed by itself, in the future this will be changed by a non-relational database,

A RESTful API is an application program interface [API](https://searchmicroservices.techtarget.com/definition/application-program-interface-API) that uses [HTTP](https://searchwindevelopment.techtarget.com/definition/HTTP) requests to GET, PUT, POST and DELETE data.
A RESTful API -- also referred to as a RESTful web service -- is based on representational state transfer [REST](https://searchmicroservices.techtarget.com/definition/REST-representational-state-transfer) technology, an architectural style and approach to communications often used in [web services](https://searchmicroservices.techtarget.com/definition/Web-services-application-services) development.

now we can create a small web service by use Node js :
![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20init.png)


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/npm%20--save%20inst.png)

then we used get method of REST

-app.get("/", function (req, res) {
        -res.send( {"status":"OK","ejemplo":{"ruta":"/see_issues",-"valor":{"size":0}}} );


After that we can test our project with [travis](https://travis-ci.org)


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas1.png)



![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/trivas2.png)


 if it pass The test it will  deploy to [Heroku](https://Heroku.com) but befor that we must connect Github with Heroku 



 ![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/heroku.png) 




## [My Project](https://abdullahtaher93.github.io/CCMYproject/)
Despliegue: https://small-well-service.herokuapp.com/
