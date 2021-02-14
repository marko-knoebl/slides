// https://codesandbox.io/s/progress-bar-ehyqj
type Props = { value: number; color?: string };

const ProgressBar = ({ value, color }: Props) => (
  <div style={{ border: "1px solid black" }}>
    <div
      style={{
        height: "1em",
        width: `${value * 100}%`,
        backgroundColor: color || "green"
      }}
    ></div>
  </div>
);

export default ProgressBar;
