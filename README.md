# Docker_Final_Assignment explanation

This is my read me file for my assignment, I will go over how this app will work and the steps I took to achive them.

Challange 3: We are tasked to add a DB to our previous assignment insted of using an array like i did in the prev assignment 
we will need to pull our info from a DB. 

To do this I did the following. 

1. Updated the docker compose yml file.
To add a DB I went with mariaDB and to do this I had to add it to the docker yml file along with all the configurations we where give nin the assignment.

mariadb:
    image: mariadb:latest
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: PasswordR00T
      MYSQL_DATABASE: book_store
      MYSQL_USER: Marcel_G
      MYSQL_PASSWORD: Pa$$w00rd
    volumes:
      - ./docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d # use the init.sql file on start up from the dir 

  Above we can see the mariaDB section we aded, this section contains the image we will be using (latest in this case) then we restart the db allways and finally the eviroment variables and volumes. 
  These enviroment variables provide the information the DB will need upon launching we need a root password, database name, user and password for the user. 

  The volumes section specifys in this case where we will execute our sql for creating and seeding the database. 
  that is what ./docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d is a folder containing init.sql that has code to create our database book_store and our relevant tables. 

  The next section is to make sure our node-js app depends on the maria db, which means that before our node.js app container runs our mariadb container should be up and running. The enviroment variables specify to the node.js app what to connect to. ex- we need to connect to the db via the user and password to access the data withing book_store. 
  
  depends_on:
      - mariadb
    environment:
      DB_HOST: mariadb
      DB_ROOT_PASSWORD: PasswordR00T
      DB_DATABASE: book_store
      DB_USERNAME: Marcel_G  
      DB_PASSWORD: Pa$$w00rd

      
