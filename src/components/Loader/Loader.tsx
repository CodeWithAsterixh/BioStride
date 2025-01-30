import "../../loader.css";


export default function Loader() {
  return (
    <div className="heartbeatloader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 400"
        height="100%"
        width="100%"
        className="svgdraw"
      >
        <path
          stroke="black"
          strokeWidth="4"
          fill="transparent"
          d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
          className="path"
        ></path>
      </svg>
      <div className="innercircle"></div>
      <div className="outercircle"></div>
    </div>
  );
}
