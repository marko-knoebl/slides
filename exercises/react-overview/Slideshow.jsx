// https://codesandbox.io/s/slideshow-cn6m5
import { useState } from "react";

const baseUrl = "https://picsum.photos/300/200?image=";
export default function SlideshowApp() {
  const [img, setImg] = useState(0);
  const imgUrl = baseUrl + img.toString();
  return (
    <div>
      <h1>Image {img}</h1>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)}>prev</button>
      <img src={imgUrl} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
}
