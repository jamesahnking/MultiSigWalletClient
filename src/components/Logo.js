// material-ui
import { useTheme } from "@mui/material/styles";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <svg
      xmlns="http://www.w3.org /2000/svg"
      width="160.61"
      height="37.85"
      viewBox="0 0 160.61 37.85"
    >
      <circle cx="20.98" cy="19" r="17.22" fill="#94d2bd" />
      <circle cx="20.98" cy="19" r="14.59" fill="#c96928" />
      <circle cx="20.98" cy="19" r="12.23" fill="#e6f2e3" />
      <circle cx="20.98" cy="19" r="9.25" fill="#fcd6ce" />
      <circle cx="20.98" cy="19" r="6.19" fill="#f8edeb" />
      <circle cx="20.98" cy="19" r="3.85" fill="#e8e8e4" />
      <path
        d="M144.65,15.42a1.64,1.64,0,0,1,.4,0,.77.77,0,0,1,.31.12.68.68,0,0,1,.2.24.88.88,0,0,1,.07.36.66.66,0,0,1-.11.38.72.72,0,0,1-.31.25.73.73,0,0,1,.42.29.79.79,0,0,1,.14.49.84.84,0,0,1-.09.4.81.81,0,0,1-.24.28,1.25,1.25,0,0,1-.35.16,1.75,1.75,0,0,1-.4.05h-1.48V15.42Zm-.09,1.24a.49.49,0,0,0,.3-.09.32.32,0,0,0,.12-.28.39.39,0,0,0,0-.17.23.23,0,0,0-.11-.11.35.35,0,0,0-.14-.06h-.81v.72Zm0,1.29h.19l.16-.07a.32.32,0,0,0,.11-.12.51.51,0,0,0-.09-.54.63.63,0,0,0-.35-.1h-.74V18Z"
        fill="#3ec0f0"
      />
      <path
        d="M148.37,15.42V16h-1.62v.66h1.48v.52h-1.48v.75h1.65v.57h-2.32V15.42Z"
        fill="#3ec0f0"
      />
      <path d="M148.46,16v-.56H151V16h-.92v2.5h-.67V16Z" fill="#3ec0f0" />
      <path
        d="M152.31,15.42l1.14,3.06h-.7l-.23-.68h-1.14l-.24.68h-.68l1.16-3.06Zm0,1.87L152,16.17h0l-.4,1.12Z"
        fill="#3ec0f0"
      />
      <text
        transform="translate(42.04 31.98)"
        font-size="16.13"
        fill="#fff"
        font-family="FatFrank-Heavy, FatFrank"
        font-weight="800"
      >
        multisig{" "}
        <tspan x="63.84" y="0" letter-spacing="-0.04em">
          w
        </tspan>
        <tspan x="77.19" y="0">
          allet
        </tspan>
      </text>
      <text
        transform="translate(42.04 17.02)"
        font-size="18.82"
        fill="#fff"
        font-family="FatFrank-Heavy, FatFrank"
        font-weight="800"
      >
        subtlemint
      </text>
    </svg>
  );
};

export default Logo;
