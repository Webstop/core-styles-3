# Core-Styles 3

Welcome to the 3rd major release of Webstop's grocery website front-end design system.

You can find the latest documentation at [guides.webstop.com](http://guides.webstop.com), 
which represents the latest code in the master branch.

## Setup

Before you run the development server for the first time run the following command:

```bash
./setup
```

## Development Server

You'll want to open two terminal tabs/windows in the root of this project.

- Tab 1 run: `./serve`
- Tab 2 run: `./watch`

The first tab runs a Hugo we server. This monitors the markdown files in the 
documentation site and recompiles them everytime a change is made. 

The second tab runs watches the Sass files and recompiles them into CSS everytime 
a change is made.

Once you've started the webserver visit [`localhost:1313`](http://localhost:1313/) 
to see the documentation website.

## Important Developer Notes

### Development Folders

The following folders are the primary places you work when creating CSS and documentation.

- `site`
- `scss`

#### `site`

This folder contains the source files for CS3 documentation. The directory you want to work in is 
found at `site/content/docs/3.0`.

#### `scss`

This folder contains the source files for CS3 stylesheets. 

### Generated Content Folders

Some content is generate from source files and placed into special directories.

Do **NOT** edit the files in the following folders:

- `dist`
- `docs`
- `node_modules`

The files in the above folders are generated from files in other places. As 
described below.

#### `dist`

Short for distribution, the dist folder contains the production ready CSS and JS 
produced by core-styles. It is the end product of core-styles that can be used 
as a node module and/or placed on a CDN. 

Files modified in the `scss` and `js` folders are processed (linted, compiled, 
minified, concatenated, & etc.) and are then placed in the `dist` folder. Once 
we tag a release on the Github site the contents of `dist` become available as 
a node module, and can be installed with NPM or Yarn.
  
#### `docs`

Short for documentation, this is the developer documentation website hosted on 
Github pages. Github has a special feature you can enable that serves the 
content of the `docs` folder as a website. This is how we are publishing the 
documentation found at [`guides.webstop.com`](https://guides.webstop.com)

Files modified in the `site` folder are processed (converted to html, with headers, 
navitagion, & etc.) and are placed in the 'docs' folder. Once the core-styles 
repo is deployed to the Webstop Github account the documentation site is deployed.

#### `node_modules`

This is where all the 3rd party node modules are stored. This folder is not 
checked into git. The files found in the `node_modules` folder are defined 
in the `package.json` file. Node modules are how we include 3rd party libraries 
and frameworks for JavaScript and CSS, things like Bootstrap 5.

## Docker Notes

The base hugo image runs the `hugo` command everytime you start a container. 
You can't do things like `docker-compose run build bash $@`.  Therefore our 
you can only use bash through the special `bash` container. The bash container 
is based on the same Hugo image as the other containers but it starts with the 
bash command instead of the hugo command, and it installs Sass in a global 
context to you have access to the `sass` command.

## CSS Compiling issue

There is currently an issue with the recompiling scripts. Although they seem to run, they do not actually automatically compile the css as desired. In order to work around this, use the `bash` container mentioned above and run the following<br>
**npm run css-compile-docs** - manually compiles the css for the documentation site<br>
**npm run css-compile** - manually compiles the css outside the documentation site
