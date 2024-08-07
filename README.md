# Casperish

A modified version of the default personal blogging theme for Ghost.

We have forked the Casper theme on GitHub and made our changes to that fork. We will follow the [usual protocol to sync our fork with the upstream repo](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

## Changes

This is a summary of the changes this theme makes to Casper.

* Indicate that we don't want infinite scroll.
* Add icon and tooltip to display all tags when hovering the primary tag of post listings.
* Show every tag when viewing a post, instead of just the primary tag.
* Add a hidden edit link to pages/posts (upper-left of body).
* Add an "all authors" template to dispaly every author.
* Add a dark mode accent color to the theme config and use it throughout the styling.
* Ensure post "cards" now consume some space for the primary tag, even if no tags exist.
* Add ellipsis to post excerpts.
* Hide the Membership/Subscribe sections/actions.
* Make minor adjustments to tables (full width, standard casing in headers).
* Add Ghost Series Display to posts. Requires `GhostSeriesDisplayApiKey` added in Site Header.

An example script for the `GhostSeriesDisplayApiKey` value needed is below.

```js
<script>
    var GhostSeriesDisplayApiKey = '0123456789abcdef0123456789';
</script>
```

## New Routes

You may choose to include the new routes in a site's `/settings/routes.yaml` file. If so, an example of that section follows.

```yaml
routes:
    /all-authors/: all-authors
```

## Local Testing

To test this theme locally, create a symlink (or directory junction for Windows) under `/content/themes/` to this directory.

```
sudo ln -s /path/to/your/blog/content/themes/casperish /path/to/this/directory
mklink /J C:\Path\to\Your\Blog\content\themes\casperish C:\Path\to\This\Directory
```

## Production Setup

It's easiest to put the theme in a shared location on the server and symlink to it under any blog's `/content/themes/` directory.

```
sudo ln -s /var/www/shared/ghost-themes/casperish ./casperish
```


---------------------------------------

# Casper

The default theme for [Ghost](http://github.com/tryghost/ghost/). This is the latest development version of Casper! If you're just looking to download the latest release, head over to the [releases](https://github.com/TryGhost/Casper/releases) page.

&nbsp;

![screenshot-desktop](https://user-images.githubusercontent.com/1418797/183329195-8e8f2ee5-a473-4694-a813-a2575491209e.png)

&nbsp;

# First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

This theme has lots of code comments to help explain what's going on just by reading the code. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://ghost.org/docs/themes/) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The parent template file, which includes your global header/footer
- `index.hbs` - The main template to generate a list of posts, usually the home page
- `post.hbs` - The template used to render individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives, eg. "all posts tagged with `news`"
- `author.hbs` - Used for author archives, eg. "all posts written by Jamie"

One neat trick is that you can also create custom one-off templates by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for an `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive


# Development

Casper styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# install dependencies
yarn install

# run development server
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
# create .zip file
yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- [Color Mod](https://github.com/jonathantneal/postcss-color-mod-function)


# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.


# Copyright & License

Copyright (c) 2013-2023 Ghost Foundation - Released under the [MIT license](LICENSE).
