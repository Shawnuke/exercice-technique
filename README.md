# exercice-technique

**INSTRUCTIONS:**
> Realize a carousel. 
<hr>

# Table of Contents

* [Author / Team Members](#author-/-team-members)
* [Description](#description)
* [Project Demo](#project-demo)
* [Features](#features) 
* [Issues](#issues)
* [Credits / Contributors](#credits-/-contributors)
* [License](#license)

# Author / Team Members

## Lead developer
* Corentin Boulanouar <corentin.boulanouar@hetic.net>

# Description

big introduction of what the project is about.

# Features 

* Multiple pages
* with dynamic content linked to a database
* dynamic routes
* a front framework (bootstrap)
* templating using Twig
* a readme.md
* a SQL export


Projects are displayed using a cards system. for each card : 
* if project description is omitted, twig display the beginning of the text

* Autoload of created files using psr-4 autoloading

* Discovered, created and used middlewares, PHP class, and controllers

* Setup working with controllers instead of working with routes in order to give more structure to the application.

* Use of the library <a href="https://github.com/Respect/Validation">Respect\Validation</a> which is a validation engine for PHP.

# Issues

* I didn't manage to create custom Rules for the Respect\Validation library.

* I spent too much time on coding the authentification system, therefore I didn't have the  time to code the back-office system, and the individual-project pages...

# Credits / Contributors

* <a href="https://codecourse.com/lessons">Codecourse</a> from which I learned how to create and use PHP class, namespaces, controllers, and middlewares. 

* The <a href="http://www.slimframework.com/docs/">Slim Framework Documentation</a>, in which I found everything I needed.

# License

[MIT](LICENSE) © Corentin Boulanouar

This project is licensed under the terms of the [MIT](LICENSE) license. <br>
See the <a href=''>license.md</a> file for more information.