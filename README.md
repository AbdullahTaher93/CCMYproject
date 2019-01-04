

[![Build Status](https://travis-ci.org/AbdullahTaher93/CCMYproject.svg?branch=master)](https://travis-ci.org/AbdullahTaher93/CCMYproject)


# Description


We know there are many persons are looking for a job and they face difficult to find a job, 
What they want,Conversely There are many companies’ managers are looking for a suitable person
For working in their companies, my project provides a special relation between companies and people 
The objective is create Employment website with user interface which will enable them to
Browse, search, get the chance to work, and select the suitable works. 
For example: If someone wants looking for a job just he will search via our App,Then the search result will
be as his skills in his profile.

# Architecture

In simple words, software architecture is the process of converting software characteristics such as flexibility, scalability, feasibility, reusability, and security into a structured solution that meets the technical and the business expectations. This definition leads us to ask about the characteristics of a software that can affect a software architecture design. There is a long list of characteristics which mainly represent the business or the operational requirements, in addition to the technical requirements.


![Computación nube](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/image/cyc.png)

# The top-level structure of the program:
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


#  Deploy in PaaS

We have chosen as temporary PasS for the deployment of our application, Heroku: This PasS has been chosen because it is simple to use and allows to deploy any application from a Github repository.

Travis has been used As an integration service . The reason for using it is:easy to use. It is enough to include a file .travis.yml. To use it you have to connect it with the github account.

All the information regarding this section and the microservice developed is in
[This Document](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito2.md)

Despliegue: https://small-well-service.herokuapp.com/


# Provision

Ansible has been used in the provisioning,The application has been deployed in Azure in a virtual machine with Ubuntu Server 18.04 
All the information about this milestone[This Document](https://github.com/AbdullahTaher93/CCMYproject/blob/master/docs/Hito3.md)

I have checked the supply of [javiercabrera184](https://github.com/javiercabrera184) in the following [This Document](https://github.com/javiercabrera184/ProyectoCC/blob/master/docs/Hito3.md)

MV: 40.89.158.72

