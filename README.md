# Grunt Installer for WP Plugins

This Gruntfile will automatically download the plugins on the list below, unzip them, and remove the `.zip` archives. It also removes `.git` files, Hello Dolly (amirite?), and Akismet.

## Getting Started

Put `Gruntfile.js` and `package.json` in your `/wp-content/plugins/` directory. Note: cloning this repo into your plugins folder will liekely get you an error about the folder not being empty. It's probably easier to clone where you like & copy the 2 needed files to your `/plugins/` directory.

In your command line application, `cd` to your `/plugins/` directory and run the following commands:

```
npm install
grunt
```

## Included Plugins

The following plugins will be added to your site:

* [Types](https://wordpress.org/plugins/types/)
* [WordPress SEO by Yoast](https://wordpress.org/plugins/wordpress-seo/)
* [Google Analytics by Yoast](https://wordpress.org/plugins/google-analytics-for-wordpress/)
* [Captain Typekit](https://wordpress.org/plugins/captain-typekit/)
* [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/)
* [Kint Debugger](https://wordpress.org/plugins/kint-debugger/)
* [What the File](https://wordpress.org/plugins/what-the-file/)
* [WP Zero Span](https://wordpress.org/plugins/zero-spam/)