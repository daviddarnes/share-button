# `share-button`

A Web Component to share web pages using the native OS sharing options.

**[Demo](https://daviddarnes.github.io/share-button/demo.html)** | **[Further reading](https://darn.es/share-button-web-component/)**

## Examples

General usage example:

```html
<script type="module" src="share-button.js"></script>

<share-button>
  <button>Share</button>
</share-button>
```

Example using a fallback links:

```html
<script type="module" src="share-button.js"></script>

<share-button>
  <button>Share</button>
  <a
    href="https://twitter.com/intent/tweet/?url=https://website.com&amp;text=Example&amp;via=DavidDarnes"
  >
    Post to Twitter
  </a>
  <a href="https://facebook.com/sharer/sharer.php?u=https://website.com">
    Post to Facebook
  </a>
  <a
    href="https://www.linkedin.com/shareArticle?url=https://website.com&amp;title=Example&amp;source=Title&amp;mini=true"
  >
    Post to LinkedIn
  </a>
  <!-- Find more sharing links here https://codepen.io/daviddarnes/pen/GRJgoxy -->
</share-button>
<style>
  share-button:not(:defined) button,
  share-button:defined a {
    display: none;
  }
  share-button:not(:defined) a + a {
    margin-inline-start: 1ch;
  }
</style>
```

Example using a fallback `readonly` input:

```html
<script type="module" src="share-button.js"></script>

<share-button>
  <button>Share</button>
  <label>
    Share this page
    <input
      type="url"
      readonly
      value="https://daviddarnes.github.io/share-button/demo.html"
      onclick="this.select()"
    />
  </label>
</share-button>
<style>
  share-button:not(:defined) button,
  share-button:defined label {
    display: none;
  }
</style>
```

## Features

This Web Component allows you to:

- Use a standard `button` element to show the native OS sharing options to share the current web page

## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@daviddarnes/share-button): `npm install @daviddarnes/share-button`
1. [Download the source manually from GitHub](https://github.com/daviddarnes/share-button/releases) into your project.
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use)

### Usage

Make sure you include the `<script>` in your project (choose one of these):

```html
<!-- Host yourself -->
<script type="module" src="share-button.js"></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://www.unpkg.com/@daviddarnes/share-button@1.0.0/share-button.js"
></script>
```

```html
<!-- 3rd party CDN, not recommended for production use -->
<script
  type="module"
  src="https://esm.sh/@daviddarnes/share-button@1.0.0"
></script>
```

## Credit

With thanks to the following people:

- [Zach Leatherman](https://zachleat.com) for inspiring this [Web Component repo template](https://github.com/daviddarnes/component-template)
