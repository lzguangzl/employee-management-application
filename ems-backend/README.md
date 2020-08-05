# Employee Management System

An Employee Management System backend using Spring Boot

## Purpose of the project

To show understanding for RESTful services and testing

## Project setup

This project is created using [Spring Initializer](https://start.spring.io/)

Spring Boot

- 2.3.2

Build Tool

- Maven

Language

- Java, 13

Dependencies

- Spring Boot DevTools
- Spring Web
- Spring Data JPA
- H2 Database
- MySQL Driver
- Swagger 2

```
Spring Boot DevTools - Provides fast application restarts, LiveReload, and configurations for enhanced development experience
Spring Web           - Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container
Spring Data JPA      - Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate
H2 Database          - Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint
                       Supports embedded and server modes as well as a browser based console application
MySQL Driver - MySQL JDBC and R2DBC driver.
Swagger 2            - Simplify API development for users, teams, and enterprises with the Swagger open source and professional toolset.
```

Richardson Maturity Model (RMM)

```
A model used to describe the maturity / quality of RESTful services

Level 0 : The Swap of POX (Plain Old XML)
           - Uses one URI and one kind of method
Level 1 : Resources
           - Uses multiple URIs to identify specific resources
Level 2 : HTTP Verbs
           - HTTP verbs (GET, POST, PUT, DELETE) are used with URIs for desired actions
Level 3 : Hypermedia Controls
           - Representation contains URIs which maybe useful to consumers (Spring provide HATEOAS)
```

Swagger UI

```
URL :
localhost:8080/swagger-ui.html
```

Spring Boot DevTools & Intellij Settings

```
In Intellij IDEA :
1. File -> Build, Execution, Deployment -> Compiler -> Build Project Automatically
2. SHIFT + CRTL + A -> Registry -> compiler.automake.allow.when.app.running
```

## Setting up the project

1. Update the application.properties to own credentials
2. Follow the steps in mysql folder to setup the database in MySQL Workbench (May change to H2 database)

## Deploy and test
