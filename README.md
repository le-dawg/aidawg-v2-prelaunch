# AI Doing AWkwardly Graceful ...

The pre-launch home to AIDAWG.ml - the intertubes' premier spot for awkward yet graceful AI projects. More artsy than professional - hence the rebrand. STAY AT-TUNED!

## Install instructions in case Skynet wins and humans forget how:

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new <site-name> https://github.com/le-dawg/aidawg-v2-prelaunch
```

Then you can run it by:

```sh
cd aidawg-prelaunch
npm install
gatsby develop
```

### Personalization

Edit `config.js` to put up your details

```javascript
module.exports = {
  siteTitle: 'Gatsby Starter Eventually', // <title>
  ...
  heading: 'Eventually',
  subHeading:
    "A simple template for telling the world when you'll launch your next big thing.",
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/anubhavsrivastava',
    }
    ...
  ],
};

```

### Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
