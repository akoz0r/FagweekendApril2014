# Webstep Stavanger fagweekend April 2014

Bootstrap code for creating apps that use the CV Partner REST API.

## Getting started with the web app

The web app uses Nginx as a reverse proxy in front of the CV Partner API.

Clone this repo and open a terminal / command line in its directory.

On Linux (Debian and possibly its derivatives):

    $ apt-get install nginx-light
    $ /usr/sbin/nginx -p nginx -c nginx.conf

On Windows:

1. Download Nginx 1.6 from <http://nginx.org/en/download.html>.
2. Unzip Nginx into c:\nginx
3. Edit `nginx\nginx.conf`, uncomment the settings for the uwsgi and scgi modules.
4. Start Nginx with the following command (from the folder of the cloned repo):

```bat
c:\nginx\nginx.exe -p nginx -c nginx.conf
```

On OS X:

Install homebrew (http://brew.sh/)

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Install nginx

    $ brew install nginx

Start nginx (from the folder of the cloned repo). Ignore error messages regarding log access.

    $ nginx -p nginx -c nginx.conf

Test that it works by opening <http://localhost:8888>. Verify that it
serves `webapp/index.html`. Then test the REST API by following the
instructions in the web page.

# Results

## Group 41

Benny, Johan Herman, Jostein

* An experimental AngularJS implementation extracting CV data: <https://github.com/jostein-topland/codejam/tree/master/js/webstep-fagkveld-apr-2014>.

## Group 42

Jan Terje, Ørjan, Steffen and Stig Inge

* A partially implemented Java / Dropwizard based REST API for extracting the timeline of a user: <https://github.com/mrsteffenjo/cvpartner-timeline-backend>.
* A WPF Client for showing dynamic data as TimeLines :
<https://github.com/akoz0r/CVPartnerWPFTimeLine>.

## Group 43

Øystein, Geir, Ragnar, Jahn Even og Lisbeth

* Company search delivering projects with contributing consultants and their role: <https://github.com/LSkogland/cvpartner-bedriftsok>.
