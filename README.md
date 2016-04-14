# Project Description

An application that will let you search for movies in the IMDb database and show information + links.

# What You Will Learn

* How to use [Gulp](http://gulpjs.com/) tasks
* How to compile JavaScript
* How to work with the [OMDb API](http://omdbapi.com/)
* How to work with JSON responses
* How to use the [Flux](https://facebook.github.io/flux/docs/overview.html) architecture

# Installing and Running

Before running the following commands, make sure you have navigated into the project root directory first:

    $ cd react-moviefind

Install the `npm` modules:

    $ [sudo] npm install        # run as root if necessary

Since the public repo does not contain the actual `dist` directory, you will have to first build them with Gulp, which is simply just:

    $ gulp

The `dist` should be built with no errors and you can now run it on a local server:

    $ npm install http-server        # if it isn't installed yet
                                     # (add -g parameter for global installation)
    
    $ http-server dist -p 8080          # feel free to modify options as appropriate

If the instructions were followed sequentially and verbatim, the application shoudl now be available at <http://localhost:8080/>.
