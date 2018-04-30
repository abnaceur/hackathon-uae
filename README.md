KHADAMATI AI
=========================


## Description of the project :

#### UAE - 42 hackathon 

A proactive government needs to pay attention to citizens’ feedback, both active and passive, and hear citizens’ complaints to governments through official channels (e.g., websites, call centres) and on social media. However, a detailed quantitative analysis around this would require a set of relevant keywords to be available in the local languages. 
Given the diversity of dialects in Arabic prevalent in different countries/regions, this becomes a challenging exercise.
Useful Statistics:

of federal government services ~3000
of federal government entities ~40
of federal government website/applications ~100
Target audience ~9 million (UAE population)
of Arabic speakers worldwide ~ 420 million
of Arabic dialects ~50+

Data Source: Government service catalogue (called Khadamati)

This will provide data on all federal government service requirements (fees, documents needed etc.)
Data sets will be provided through APIs
Objective: Build an enabler for AI engines to have a better understanding of Arabic language and its sentiments.


## Team 
 - abnaceur [Doeremon] : http://naceur-abdeljalil.com/files/CV.pdf
 - mschmitt [توفيق]
 - acalleja [Tacos]

## Project's Goals and objectives

Create a platform for government employees to handle input from all arabic speaking
users.

The sentiment analyser notify them for any negative feedback. They can then translate it
using our translator, from any dialect to their, so that they can always adapt to users'
needs.

The biggest difficulty is the harvest of data to improve the platform. This is done by
using three different features:

the captcha system offers users to evaluate the feelings expressed by a sentence in 
their dialect. This data will be re-injected in the sentiment analyser to make better
predictions.

The collaborative dictionary targets scholars, so that we can translate the most 
uncommon and subtle words of every dialect.

A game application, that let users learn english. English is used as a binding language
between the different dialects. This will be used to translate the most common words
of every dialect.


Provided solution : 
    - A translator between all arabic dialects.
    - Sentiments Analytics for any arabic dialect.
    - A collaborative dictionnary.
    - A captcha system.
    - A game sample.

## Technologies :
 - Laravel 5 framework.
 - ReactJs.
 - Django 2.0.4 framework.
 - Docker 17.05.0.
 - Webpack.
 - Mysql.
 - Sqlite.
 - Bootstrap 4
 
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

Connect to phpmyadmin on http://phpmyadmin.khadamati-ai.local/ 
and create the database named 'khadamati-ai'


##### For testing do this steps : 
you have a database dump "khadamati-ai.sql.zip"
Just connect to http://phpmyadmin.khadamati-ai.local/ 
and import the file : khadamati-ai.sql.zip

Teste sentences : 
    Translation : 

    النفط يرتفع قرب خمسون دولاراً إلى أعلى مستوى منذ أواخرالشهر    
el-nepht krub khamssin dolar le 3la nivou men  

نتائج قوية للشركات تصعد بالأسهم الأميركية
resultat kouwat charikat tal3at asshoum marikania 
ا
    Definition :   نتائج , قوية 

    Phrase analysis : 287 645 words.

    The game : 
    
    ['Hello'],
    ['', 'Sugar', 'Apple', 'three', 'Country', 'Road', 'Beautiful', 'Door', 'Sky', 'key'],
    ['', '', 'Students', 'Teacher', 'Drink', 'Walk', 'Open', 'Try', 'music', 'Orange'],
    ['Fly', 'Earn', 'Money', 'Town', 'Phone', 'Window', 'Honey', 'Day', 'Rich'] 
    ['Success', 'Cop', 'Bird','High']

    
    ['Salam'],
    ['', 'Sukar', 'Toffah', 'tlata', 'EL-watan', 'Tri9', 'Chabba', 'Bab', 'Essma', 'Meftah'],
    ['', '', 'Telmid', 'Mo3alim', 'Chroub', 'Mchi', 'Haal', 'Sayi', 'Mussi9a', 'Chinna'],
    ['Tiir', 'Rbah', 'Drahem', 'Madina', 'Tiliphoun', 'Ta9a', '3assal', 'Nhar', 'Ghaniy'],
    ['Nadjih','Kass', 'Zawech', '9aali']



#### For a new database 
For new database then fill the default values of the database tables in nature, dialect and all_words tables

Create the tables for the database in the khadamati-ai_app container

```bash
php artisan migrate
```

```bash
php artisan db:seed --class=NatureTableSeeder
php artisan db:seed --class=DialectTableSeeder
php artisan db:seed --class=AllwordsTableSeeder
```


### Install app_front_reactjs

Navigate to the app-front-reactjs folder 

```bash
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
the link to access the app is : app.khadamati-ai.local:8010

### Connect to the database

Start this link in your browser: phpmyadmin.khadamati-ai.dev
P.S: Get sure that all your containers are up "docker ps".

```bash
Usernaem: root 
Password: root
```

### Fix allow control all origin in chrome navigator 
In chrome navigator install the plugin "allow-control-allow-origin"
link :https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

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
