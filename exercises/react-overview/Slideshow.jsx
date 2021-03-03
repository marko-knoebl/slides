// https://codesandbox.io/s/slideshow-cn6m5
import { useState } from "react";

const Slideshow = () => {
  const [img, setImg] = useState(0);
  return (
    <div>
      <button onClick={() => setImg(0)}>start</button>
      <button onClick={() => setImg(img - 1)} disabled={img === 0}>
        prev
      </button>
      <img src={`https://picsum.photos/300/200?image=${img}`} alt="slideshow" />
      <button onClick={() => setImg(img + 1)}>next</button>
    </div>
  );
};

export default Slideshow;
