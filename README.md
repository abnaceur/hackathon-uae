KHADAMATI AI
=========================

## Install the development environment

Get the source:

```bash
git clone https://me-me@bitbucket.org/me-me/hackathon-uae.git
```

Edit your `/etc/hosts` file:

```
127.0.0.1   app.khadamati-ai.local
127.0.0.1   django.khadamati-ai.local
127.0.0.1   phpmyadmin.khadamati-ai.local 
```

Build the environment:


```bash
# copy the .env file.
cp .env-example .env
```


```bash
# Use your GITLAB credentials to login in the Docker private registry for the project.
docker-compose up --build
```
Note: the port 80 must not be used by another application (like Apache or Skype).

P.S: The build may take some time don't worry be happy and grab a cup of tea :)


```bash
# Connect to the app container.
docker exec -ti khadamati-ai_app bash
```

Install all dependencies by composer inside khadamati-ai_app container


```bash
composer install
```

Now generate the key inside the container.

```bash
php artisan key:generate
php artisan config:cache
php artisan config:clear
```

Once the key is generated remember to delete the folder .docker
and start docker-compose again to init the .env app key varibale


```bash
sudo rm -rf .docker
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker-compose up --build -d
```

Note : the option '-d' is for silent mode 

Create the tables for the database in the khadamati-ai_app container

```bash
php artisan migrate
```

Connect to phpmyadmin on http://phpmyadmin.khadamati-ai.local/ 
and create the database named 'khadamati-ai'


Fill the default values of the database tables in nature, dialect and all_words tables

```bash
php artisan db:seed --class=NatureTableSeeder
php artisan db:seed --class=DialectTableSeeder
php artisan db:seed --class=AllwordsTableSeeder
```

 in the same root directory

```bash
# Install all dependencies.
npm install
```

Navigate to the app-front-reactjs folder 

```bash.
cd app-front-reactjs
```

then

```bash
# Install all dependencies.
npm install
```

Create a symblic link for bundle.js

```bash
ln app-front-reactjs/public/bundle.js public/js/bundle.js
```

### Django app 

It is the the app-front-django folder
the link to access the app is : app.khadamati-ai.dev:8010

### Connect to the database

Start this link in your browser: phpmyadmin.khadamati-ai.dev
P.S: Get sure that all your containers are up "docker ps".

```bash
Usernaem: root 
Password: root
```

### Help

To generate the bundler in app folder :
```bash.
make build
```

Start webpack in watch mode
```bash
# Install all dependencies.
make watch
```


Stop and remove all containers

```bash
docker stop $(docker ps -a -q)
```

Connect to a container via bash (get the container name you want to connect to via command `docker ps`)
```bash
docker exec -ti containername bash
```

Execute a command directly in a container without connecting in bash (get the container name you want to connect to via command `docker ps`)

```bash
docker exec -i containername yourcommand
```

Delete all inages 

```bash
docker rmi -f $(docker images -q)
```

Show inages 

```bash
docker images
```
