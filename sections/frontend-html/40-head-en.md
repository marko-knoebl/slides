# Head

## Entries in the head

- `title`
- `meta`
- favicon
- stylesheet
- scripts

## title

document title that appears in the window bar:

```html
<title>my website</title>
```

## meta

meta tags are used for including associated meta information

## meta: charset

We should usually include a `<meta charset="UTF-8" />` declaration so we can use any Unicode characters

```html
<button>😊</button>
```

## meta: viewport

We should usually include a _viewport_ declaration to reset browser scaling on small devices

```html
<meta name="viewport" width="device-width" />
```

**Background**: In the early days of mobile web (before responsive design), Websites were scaled down by mobile browsers. The above code disables this behavior.

https://viewportsizes.com/mine

## meta: description

- may be used by search engines to show a page summary
- default title for bookmarks

```html
<meta
  name="description"
  content="Wikipedia is a free online encyclopedia, ..."
/>
```

## meta: keywords

may be used by search engines

```html
<meta name="keywords" content="HTML,javascript" />
```

## favicon

icon that is displayed in the website tab:

```html
<link
  rel="icon"
  sizes="32x32"
  href="favicon_32.png"
  type="image/png"
/>
```

if no explicit link is present, browsers will look for _facivon.ico_ by default
