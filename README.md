# Webstep fagweekend April 2014

Bootstrap code for creating apps that use the CV Partner REST API.

## Getting started with the web app

Clone this repo and open a terminal / command line in its directory.

On Linux (Debian and possibly its derivatives):

    $ apt-get install nginx-light
    $ /usr/sbin/nginx -p nginx -c nginx.conf

On Windows:

1. Download and install Nginx from <http://nginx.org/en/download.html>.
2. Run the following commands:

    > ??

On OS X:

Install homebrew (http://brew.sh/)

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Install nginx

    $ brew install nginx

Start nginx (from the folder where you cloned the repo). Ignore error messages regarding log access.

    $ nginx -p nginx -c nginx.conf

Test that it works by opening <http://localhost:8888>. Verify that it
serves `webapp/index.html`. Then test the REST API by following the
instruction in the web page.

