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

Beispielvideo: https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm

## audio

```html
<audio src="myaudio.mk" loop volume="0.5"></audio>
```

## Bildformate

relevante Bildformate für das Web:

- _jpg_
- _png_ (verlustfreie Komprimierung)
- _webp_ (bessere Komprimierung im Vergleich zu _jpg_ und _png_)
- _avif_ (zukünftiges Format)
- _gif_ (animiert, eingeschränkte Farbpalette)
- _svg_ (Vektorgrafiken)

## Videoformate

relevante Videoformate für das Web:

- _MP4_ Container, _H.264_ (_AVC_) Codec: universell unterstützt, patentiert, gute Qualität
- _MP4_ Container, _H.265_ (_HEVC_) Codec: patentiert, bessere Qualität
- _WebM_ Container, _AV1_ Codec: Kandidat für neuen Standard, open source, besser Qualität

siehe auch: [Wikipedia: HTML5 video](https://en.wikipedia.org/wiki/HTML5_video)
