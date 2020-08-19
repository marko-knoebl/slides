# Medien

## Medien

- `img`
- `video`
- `audio`

## img

Attribute:

- `src`: Pfad zum Bild
- `alt`: Alternativtext, falls das Bild nicht dargestellt werden kann
- `srcset`: Liste von Bildpfaden für verschiedene Auflösungen

## srcset - Beispiel

```html
<img
  alt=""
  src="images/2000x1000.png"
  srcset="
    images/500x250.png   500w,
    images/1000x500.png 1000w
  "
/>
```

Demo: http://srcset.salcode.com/

## video

```html
<video autoplay loop controls width="250">
  <source src="myvideo.webm" type="video/webm" />
  <source src="myvideo.mp4" type="video/mp4" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

Beispielvideo: https://interactive-examples.mdn.mozilla.net/media/examples/flower.*

## audio

```html
<audio src="myaudio.mk" loop volume="0.5"></audio>
```
