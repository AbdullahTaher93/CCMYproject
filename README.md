

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


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/cyc.png)

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


## Deploy in PaaS

We have chosen as temporary PaaS, for the deployment of our application, Heroku. This PaaS has been chosen because it is simple to use and allows to deploy any application from a Github repository.

As an integration service, Travis has been used. The reason for use is the same as that of Heroku: how easy it is to use. It is enough to include a file .travis.yml. To use it you have to link it with the github account.

All the information regarding this section and the microservice developed is in
[This Document](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito2.md)
Despliegue: https://small-well-service.herokuapp.com/
