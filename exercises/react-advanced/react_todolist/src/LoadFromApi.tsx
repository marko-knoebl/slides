import React from "react";

type Props = {
  isLoading: boolean;
  onLoad: () => void;
};

const LoadFromApi = (props: Props) => (
  <div>
    <button disabled={props.isLoading} onClick={props.onLoad}>
      load from API
    </button>
    {props.isLoading ? "loading..." : null}
  </div>
);

export default LoadFromApi;
