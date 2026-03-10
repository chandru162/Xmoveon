import React from 'react';

export const QatarFlag = (props) => {
  return (
    <svg
      {...props}
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip_qatar)">
        <rect width="32" height="24" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H32V24H0V0Z"
          fill="#F7FCFF"
          style={{ fill: '#F7FCFF', fillOpacity: 1 }}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0V8H32V0H0Z"
          fill="#5EAA22"
          style={{ fill: '#5EAA22', fillOpacity: 1 }}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 16V24H32V16H0Z"
          fill="#272727"
          style={{ fill: '#272727', fillOpacity: 1 }}
        />
        <rect width="10" height="24" fill="#E31D1C" style={{ fill: '#E31D1C', fillOpacity: 1 }} />
      </g>
      <defs>
        {/*  Renamed ID to clip_qatar */}
        <clipPath id="clip_qatar">
          <rect width="32" height="24" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
        </clipPath>
      </defs>
    </svg>
  );
};

export const USAFlag = (props) => {
  return (
    <svg {...props} width="32" height="24" viewBox="0 0 32 24">
      <path d="M0 0H32V24H0Z" fill="#3D58DB" />

      <mask
        id="usa-mask-0"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="24"
      >
        <path d="M0 0H32V24H0Z" fill="white" />
      </mask>

      <g mask="url(#usa-mask-0)">
        <path d="M34 8L34 16L-2 16L-2 8Z" fill="#3D58DB" stroke="currentColor" strokeWidth="4" />
      </g>

      <path d="M0 0L0 24L18 12Z" fill="#E31D1C" />

      <mask
        id="usa-mask-1"
        maskType="luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="24"
      >
        <path d="M0 0L0 24L18 12Z" fill="white" />
      </mask>

      <g mask="url(#usa-mask-1)">
        <path
          d="M6.68764 14.2168L3.01571 16.1548L4.80338 12.2609L2.52539 10.1808L5.33788 10.077L6.68764 6.55627L7.71769 10.077L10.5254 10.077L8.654 12.2609L10.1425 16.1548L6.68764 14.2168Z"
          fill="#F7FCFF"
        />
      </g>
    </svg>
  );
};

export const IndiaFlag = (props) => {
  return (
    <svg {...props} width="32" height="24" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <rect width="32" height="24" fill="white" />

        {/* Top saffron */}
        <rect y="0" width="32" height="8" fill="#FC6500" />

        {/* Bottom green */}
        <rect y="16" width="32" height="8" fill="#5EAA22" />

        {/* Ashoka Chakra (simple circle) */}
        <circle cx="16" cy="12" r="4" fill="#000080" />
      </g>

      <defs>
        <clipPath id="clip0">
          <rect width="32" height="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

/* ADVANCED FEATURES SVG ICONS  START*/

export const MessageIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_message)">
      {/* Top message bubble */}
      <path
        d="M27.6 18.6H40.4V28.2H36.56L31.44 30.6V28.2H27.6V18.6Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Main box */}
      <path
        d="M32 34.4V39.6C32 39.944 31.8633 40.2739 31.6198 40.5174C31.3763 40.7609 31.0464 40.8976 30.7024 40.8976H20.4C20.056 40.8976 19.7261 40.7609 19.4826 40.5174C19.2391 40.2739 19.1024 39.944 19.1024 39.6V21.6C19.1024 21.256 19.2391 20.9261 19.4826 20.6826C19.7261 20.4391 20.056 20.3024 20.4 20.3024H23.6"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dot */}
      <path
        d="M26 36.8V36.88"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_message">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const RectangleIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_grid)">
      {/* Top Left */}
      <path
        d="M18 18H26V30H18V18Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Left */}
      <path
        d="M18 34H26V40H18V34Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Right */}
      <path
        d="M34 30H42V40H34V30Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top Right */}
      <path
        d="M34 18H42V24H34V18Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_grid">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const HeartPinIcon = (props) => (
  <svg
    {...props}
    width="48"
    height="48"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="54.014"
      height="54.014"
      rx="9"
      fill="none"
    />

    {/* Heart */}
    <g clipPath="url(#clip0_favorite)">
      <path
        d="
          M29.275 33.759
          L27.006 36.009
          L18.566 27.651
          C18.009 27.109 17.571 26.458 17.278 25.738
          C16.985 25.019 16.845 24.246 16.865 23.47
          C16.886 22.694 17.067 21.93 17.397 21.227
          C17.727 20.524 18.199 19.896 18.784 19.385
          C19.368 18.873 20.052 18.488 20.793 18.254
          C21.533 18.02 22.314 17.941 23.087 18.023
          C23.859 18.106 24.606 18.347 25.28 18.733
          C25.955 19.118 26.542 19.639 27.006 20.262
          C27.886 19.09 29.189 18.308 30.637 18.082
          C32.085 17.856 33.564 18.204 34.76 19.052
          C35.955 19.9 36.773 21.181 37.038 22.623
          C37.303 24.064 36.995 25.552 36.18 26.771
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M31.497 36.009
          L36.219 31.257
          C36.804 30.665 37.131 29.867 37.131 29.036
          C37.131 28.204 36.804 27.406 36.219 26.814
          C35.932 26.523 35.59 26.291 35.213 26.132
          C34.836 25.974 34.43 25.892 34.021 25.891
          C33.612 25.89 33.206 25.971 32.828 26.128
          C32.451 26.285 32.108 26.516 31.82 26.807
          L31.504 27.124
          L31.191 26.805
          C30.903 26.514 30.561 26.282 30.184 26.123
          C29.807 25.965 29.402 25.883 28.992 25.882
          C28.583 25.881 28.178 25.962 27.8 26.119
          C27.422 26.276 27.079 26.507 26.791 26.798
          C26.205 27.388 25.877 28.186 25.875 29.017
          C25.874 29.849 26.2 30.647 26.783 31.24
          L31.489 36.009
          H31.497
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_favorite">
        <rect
          width="27.007"
          height="27.007"
          transform="translate(13.504 13.503)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const TopologyIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_network)">
      {/* Top Right */}
      <circle
        cx="39"
        cy="39"
        r="3"
        stroke="#56E000"
        strokeWidth="2.06089"
      />

      {/* Bottom Left */}
      <circle
        cx="23"
        cy="39"
        r="3"
        stroke="#56E000"
        strokeWidth="2.06089"
      />

      {/* Top Left */}
      <circle
        cx="23"
        cy="23"
        r="3"
        stroke="#56E000"
        strokeWidth="2.06089"
      />

      {/* Bottom Right */}
      <circle
        cx="39"
        cy="23"
        r="3"
        stroke="#56E000"
        strokeWidth="2.06089"
      />

      {/* Center */}
      <circle
        cx="31"
        cy="31"
        r="3"
        stroke="#56E000"
        strokeWidth="2.06089"
      />

      {/* Vertical lines */}
      <path
        d="M23 26V36"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M39 36V26"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      {/* Horizontal lines */}
      <path
        d="M26 23H36"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M36 39H26"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      {/* Diagonals */}
      <path
        d="M25 25L29 29"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M33 33L37 37"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M37 25L33 29"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M29 33L25 37"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_network">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const CloverIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="none" />

    <g clipPath="url(#clip0_clover)">
      <path
        d="M31 27.5L26.7 23.2C26.2 22.7 25.9 22 25.9 21.3C25.9 20.6 26.2 19.9 26.7 19.4C27 19.1 27.4 18.9 27.8 18.7C28.2 18.5 28.6 18.4 29 18.4C29.4 18.4 29.8 18.5 30.2 18.7C30.6 18.9 31 19.1 31.3 19.4L31.7 19.7L32.1 19.4C32.4 19.1 32.8 18.9 33.2 18.7C33.6 18.5 34 18.4 34.4 18.4C34.8 18.4 35.2 18.5 35.6 18.7C36 18.9 36.4 19.1 36.7 19.4C37.2 19.9 37.5 20.6 37.5 21.3C37.5 22 37.2 22.7 36.7 23.2L32.4 27.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M31 34.5L26.7 38.8C26.2 39.3 25.9 40 25.9 40.7C25.9 41.4 26.2 42.1 26.7 42.6C27 42.9 27.4 43.1 27.8 43.3C28.2 43.5 28.6 43.6 29 43.6C29.4 43.6 29.8 43.5 30.2 43.3C30.6 43.1 31 42.9 31.3 42.6L31.7 42.3L32.1 42.6C32.4 42.9 32.8 43.1 33.2 43.3C33.6 43.5 34 43.6 34.4 43.6C34.8 43.6 35.2 43.5 35.6 43.3C36 43.1 36.4 42.9 36.7 42.6C37.2 42.1 37.5 41.4 37.5 40.7C37.5 40 37.2 39.3 36.7 38.8L32.4 34.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M34.5 31L38.8 26.7C39.3 26.2 40 25.9 40.7 25.9C41.4 25.9 42.1 26.2 42.6 26.7C42.9 27 43.1 27.4 43.3 27.8C43.5 28.2 43.6 28.6 43.6 29C43.6 29.4 43.5 29.8 43.3 30.2C43.1 30.6 42.9 31 42.6 31.3L42.3 31.7L42.6 32.1C42.9 32.4 43.1 32.8 43.3 33.2C43.5 33.6 43.6 34 43.6 34.4C43.6 34.8 43.5 35.2 43.3 35.6C43.1 36 42.9 36.4 42.6 36.7C42.1 37.2 41.4 37.5 40.7 37.5C40 37.5 39.3 37.2 38.8 36.7L34.5 32.4"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M27.5 31L23.2 26.7C22.7 26.2 22 25.9 21.3 25.9C20.6 25.9 19.9 26.2 19.4 26.7C19.1 27 18.9 27.4 18.7 27.8C18.5 28.2 18.4 28.6 18.4 29C18.4 29.4 18.5 29.8 18.7 30.2C18.9 30.6 19.1 31 19.4 31.3L19.7 31.7L19.4 32.1C19.1 32.4 18.9 32.8 18.7 33.2C18.5 33.6 18.4 34 18.4 34.4C18.4 34.8 18.5 35.2 18.7 35.6C18.9 36 19.1 36.4 19.4 36.7C19.9 37.2 20.6 37.5 21.3 37.5C22 37.5 22.7 37.2 23.2 36.7L27.5 32.4"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_clover">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const RouteIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_direction)">
      <path
        d="M31 24V17"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 28L42 24.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 34L42 37.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 38V45"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 34L20 37.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 28L20 24.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_direction">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

/* ADVANCED FEATURES SVG ICONS END  */




/* VENDORS FEATURES SVG ICONS START */

export const MenuIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_menu)">
      <path
        d="M20 24H42"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 31H42"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 38H42"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_menu">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const BalanceIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_balance)">
      {/* Container */}
      <path
        d="
          M18 21
          C18 20.2 18.3 19.4 18.9 18.8
          C19.5 18.2 20.3 17.9 21.1 17.9
          H40
          C40.8 17.9 41.6 18.2 42.2 18.8
          C42.8 19.4 43.1 20.2 43.1 21
          V40
          C43.1 40.8 42.8 41.6 42.2 42.2
          C41.6 42.8 40.8 43.1 40 43.1
          H21.1
          C20.3 43.1 19.5 42.8 18.9 42.2
          C18.3 41.6 18 40.8 18 40
          V21
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lines */}
      <path
        d="M36 38H39"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M30 34H39"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M33 30H39"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_balance">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const StoredIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_stored)">
      {/* Base */}
      <path
        d="M24 42H38"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top bar */}
      <path
        d="M22 24L31 22L40 24"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center pole */}
      <path
        d="M31 18V42"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left scale */}
      <path
        d="
          M27 33
          L22 24
          L17 33
          C17 34.3 17.5 35.6 18.5 36.5
          C19.5 37.5 20.8 38 22 38
          C23.3 38 24.5 37.5 25.5 36.5
          C26.5 35.6 27 34.3 27 33
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right scale */}
      <path
        d="
          M45 33
          L40 24
          L35 33
          C35 34.3 35.5 35.6 36.5 36.5
          C37.5 37.5 38.8 38 40 38
          C41.3 38 42.5 37.5 43.5 36.5
          C44.5 35.6 45 34.3 45 33
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_stored">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const LinkIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_link)">
      {/* Frame */}
      <path
        d="
          M18 24
          C18 23.2 18.3 22.4 18.9 21.8
          C19.5 21.2 20.3 20.9 21.1 20.9
          H40
          C40.8 20.9 41.6 21.2 42.2 21.8
          C42.8 22.4 43.1 23.2 43.1 24
          V38
          C43.1 38.8 42.8 39.6 42.2 40.2
          C41.6 40.8 40.8 41.1 40 41.1
          H21.1
          C20.3 41.1 19.5 40.8 18.9 40.2
          C18.3 39.6 18 38.8 18 38
          V24
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      <path
        d="M23 26H23.1"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M27 26H27.1"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_link">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

/*  VENDORS FEATURES SVG ICONS END  */


export const SectionLayoutIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
      stroke="none"
    />

    <g clipPath="url(#clip0_sectionlayout)">
      {/* Outer Box */}
      <path
        d="M18 22C18 21.2 18.3 20.4 18.9 19.8C19.5 19.2 20.3 18.9 21.1 18.9H40.9C41.7 18.9 42.5 19.2 43.1 19.8C43.7 20.4 44 21.2 44 22V40C44 40.8 43.7 41.6 43.1 42.2C42.5 42.8 41.7 43.1 40.9 43.1H21.1C20.3 43.1 19.5 42.8 18.9 42.2C18.3 41.6 18 40.8 18 40V22Z"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lines */}
      <path
        d="M36 38H40"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M30 34H40"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M33 30H40"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_sectionlayout">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const ScalesIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
      stroke="none"
    />

    <g clipPath="url(#clip0_scales)">
      {/* Base */}
      <path
        d="M24 42H38"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top bar */}
      <path
        d="M22 24L31 22L40 24"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center pole */}
      <path
        d="M31 18V42"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left scale */}
      <path
        d="M27 33L22 24L17 33C17 34.3 17.5 35.6 18.5 36.5C19.5 37.5 20.8 38 22 38C23.3 38 24.5 37.5 25.5 36.5C26.5 35.6 27 34.3 27 33Z"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right scale */}
      <path
        d="M45 33L40 24L35 33C35 34.3 35.5 35.6 36.5 36.5C37.5 37.5 38.8 38 40 38C41.3 38 42.5 37.5 43.5 36.5C44.5 35.6 45 34.3 45 33Z"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_scales">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const WindowCardIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
      stroke="none"
    />

    <g clipPath="url(#clip0_windowcard)">
      {/* Window Frame */}
      <path
        d="M18 24C18 23.2 18.3 22.4 18.9 21.8C19.5 21.2 20.3 20.9 21.1 20.9H40.9C41.7 20.9 42.5 21.2 43.1 21.8C43.7 22.4 44 23.2 44 24V38C44 38.8 43.7 39.6 43.1 40.2C42.5 40.8 41.7 41.1 40.9 41.1H21.1C20.3 41.1 19.5 40.8 18.9 40.2C18.3 39.6 18 38.8 18 38V24Z"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top dots */}
      <path
        d="M23 26H23.2"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M28 26H28.2"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_windowcard">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowButtonIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_arrow)">
      {/* Arrow */}
      <path
        d="M34 23L26 31L28.2 33.2L36.2 25.2V33H39V20H26V23H34Z"
        fill="#0f0f0f"
      />
    </g>

    <defs>
      <clipPath id="clip0_arrow">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ClockIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5956)">
      <path
        d="M3.75 15C3.75 16.4774 4.04099 17.9403 4.60636 19.3052C5.17172 20.6701 6.00039 21.9103 7.04505 22.955C8.08971 23.9996 9.3299 24.8283 10.6948 25.3936C12.0597 25.959 13.5226 26.25 15 26.25C16.4774 26.25 17.9403 25.959 19.3052 25.3936C20.6701 24.8283 21.9103 23.9996 22.955 22.955C23.9996 21.9103 24.8283 20.6701 25.3936 19.3052C25.959 17.9403 26.25 16.4774 26.25 15C26.25 13.5226 25.959 12.0597 25.3936 10.6948C24.8283 9.3299 23.9996 8.08971 22.955 7.04505C21.9103 6.00039 20.6701 5.17172 19.3052 4.60636C17.9403 4.04099 16.4774 3.75 15 3.75C13.5226 3.75 12.0597 4.04099 10.6948 4.60636C9.3299 5.17172 8.08971 6.00039 7.04505 7.04505C6.00039 8.08971 5.17172 9.3299 4.60636 10.6948C4.04099 12.0597 3.75 13.5226 3.75 15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 8.75V15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15L17.5 11.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5956">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const CopyIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5960)">
      <path
        d="M20 20V22.5C20 23.163 19.7366 23.7989 19.2678 24.2678C18.7989 24.7366 18.163 25 17.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5V12.5C5 11.837 5.26339 11.2011 5.73223 10.7322C6.20107 10.2634 6.83696 10 7.5 10H10V7.5C10 6.83696 10.2634 6.20107 10.7322 5.73223C11.2011 5.26339 11.837 5 12.5 5H22.5C23.163 5 23.7989 5.26339 24.2678 5.73223C24.7366 6.20107 25 6.83696 25 7.5V17.5C25 18.163 24.7366 18.7989 24.2678 19.2678C23.7989 19.7366 23.163 20 22.5 20H20Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 10H10V12.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17.5V20H12.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10H20V12.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17.5V20H17.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5960">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ShippingIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5964)">
      <path
        d="M6.25 21.25C6.25 21.913 6.51339 22.5489 6.98223 23.0178C7.45107 23.4866 8.08696 23.75 8.75 23.75C9.41304 23.75 10.0489 23.4866 10.5178 23.0178C10.9866 22.5489 11.25 21.913 11.25 21.25C11.25 20.587 10.9866 19.9511 10.5178 19.4822C10.0489 19.0134 9.41304 18.75 8.75 18.75C8.08696 18.75 7.45107 19.0134 6.98223 19.4822C6.51339 19.9511 6.25 20.587 6.25 21.25Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 21.25C18.75 21.913 19.0134 22.5489 19.4822 23.0178C19.9511 23.4866 20.587 23.75 21.25 23.75C21.913 23.75 22.5489 23.4866 23.0178 23.0178C23.4866 22.5489 23.75 21.913 23.75 21.25C23.75 20.587 23.4866 19.9511 23.0178 19.4822C22.5489 19.0134 21.913 18.75 21.25 18.75C20.587 18.75 19.9511 19.0134 19.4822 19.4822C19.0134 19.9511 18.75 20.587 18.75 21.25Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 21.25H3.75V13.75M3.75 13.75L6.25 7.5H17.5L22.5 13.75M3.75 13.75H22.5M22.5 13.75H23.75C24.413 13.75 25.0489 14.0134 25.5178 14.4822C25.9866 14.9511 26.25 15.587 26.25 16.25V21.25H23.75M18.75 21.25H11.25M15 13.75V7.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5964">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const SuccessDocumentIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5972)">
      <path
        d="M12.0187 25H8.75C8.08696 25 7.45107 24.7366 6.98223 24.2678C6.51339 23.7989 6.25 23.163 6.25 22.5V7.5C6.25 6.83696 6.51339 6.20107 6.98223 5.73223C7.45107 5.26339 8.08696 5 8.75 5H18.75C19.413 5 20.0489 5.26339 20.5178 5.73223C20.9866 6.20107 21.25 6.83696 21.25 7.5V17.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 23.75L20 26.25L25 21.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 10H16.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 15H13.75"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5972">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CTAArrowIcon = (props) => (
  <svg
    {...props}
    width="134"
    height="53"
    viewBox="0 0 134 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Rectangles/Borders */}
    <rect
      x="0.5"
      y="0.5"
      width="132.38"
      height="51.056"
      rx="25.528"
      stroke="#0f0f0f"
    />
    <rect
      x="0.5"
      y="0.5"
      width="114.727"
      height="51.056"
      rx="25.528"
      stroke="#0f0f0f"
    />
    <rect
      x="0.5"
      y="0.5"
      width="99.0353"
      height="51.056"
      rx="25.528"
      stroke="#0f0f0f"
    />

    {/* Arrow Icon Path */}
    <path
      d="M56.9409 36.7227L33.9889 13.7707L37.7596 10L60.7116 32.9493L60.7116 12.7227L66.0449 12.7227L66.0449 42.056L36.7116 42.056L36.7116 36.7227L56.9409 36.7227Z"
      fill="#0f0f0f"
    />
  </svg>
);

export const SetupIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_setup)">
      <path
        d="M3.75 21.25L13.75 27.5L22.5 22.5V12.5L17.5 9.375L22.5 6.25L27.5 9.375V14.375L13.75 22.5L8.75 19.375V10L3.75 6.875V21.25Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 22.5V27.5M8.75 19.375L17.5 14.375M17.5 9.375V14.375M17.5 14.375L22.5 17.5M13.75 16.25V6.875L8.75 3.75L3.75 6.875M8.75 10L13.75 6.875M22.5 12.5L27.5 9.375"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_setup">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const AnalysisIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_analysis)">
      {/* Magnifying Glass Circle */}
      <path
        d="M3.75 12.5C3.75 17.3325 7.6675 21.25 12.5 21.25C17.3325 21.25 21.25 17.3325 21.25 12.5C21.25 7.6675 17.3325 3.75 12.5 3.75C7.6675 3.75 3.75 7.6675 3.75 12.5Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handle */}
      <path
        d="M26.25 26.25L18.75 18.75"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dollar Symbol (S-shape) */}
      <path
        d="M15 8.75H11.875C10.8395 8.75 10 9.58947 10 10.625C10 11.6605 10.8395 12.5 11.875 12.5H13.125C14.1605 12.5 15 13.3395 15 14.375C15 15.4105 14.1605 16.25 13.125 16.25H10"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dollar Vertical Line */}
      <path
        d="M12.5 16.25V17.5M12.5 7.5V8.75"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_analysis">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const DurationIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_duration)">
      {/* Outer Circle */}
      <path
        d="M3.75 15C3.75 21.2132 8.7868 26.25 15 26.25C21.2132 26.25 26.25 21.2132 26.25 15C26.25 8.7868 21.2132 3.75 15 3.75C8.7868 3.75 3.75 8.7868 3.75 15Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Clock Hands */}
      <path
        d="M15 8.75V15L18.75 18.75"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_duration">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const LocationIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_location)">
      {/* Map Fold Lines */}
      <path
        d="M15 23.125L11.25 21.25L3.75 25V8.75L11.25 5L18.75 8.75L26.25 5V14.375"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 5V21.25M18.75 8.75V15.625"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Location Pin / Drop Icon */}
      <path
        d="M26.4013 25.1511C27.4279 23.231 27.5726 21.7495 27.2147 21.0642C26.4502 19.7932 25.2168 18.749 23.75 18.749C22.2832 18.969 21.0988 25.1511C21.6213 25.6748 22.505 26.4573 23.75 27.4998C25.0638 26.3873 26.4013 25.1511Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.75 22.5V22.5125"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_location">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ContactIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
      stroke="#56E000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const LocalisationIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_grid)">
      {/* Top Left */}
      <path
        d="M18 18H26V30H18V18Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Left */}
      <path
        d="M18 34H26V40H18V34Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Right */}
      <path
        d="M34 30H42V40H34V30Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top Right */}
      <path
        d="M34 18H42V24H34V18Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_grid">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const OrbitIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_sparkle)">
      <path
        d="M36.5 38
        C37.6 38 38.6 38.4 39.4 39.2
        C40.2 40 40.6 41 40.6 42
        C40.6 41 41 40 41.8 39.2
        C42.6 38.4 43.6 38 44.7 38
        C43.6 38 42.6 37.6 41.8 36.8
        C41 36 40.6 35 40.6 34
        C40.6 35 40.2 36 39.4 36.8
        C38.6 37.6 37.6 38 36.5 38Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M36.5 23
        C37.6 23 38.6 23.4 39.4 24.2
        C40.2 25 40.6 26 40.6 27
        C40.6 26 41 25 41.8 24.2
        C42.6 23.4 43.6 23 44.7 23
        C43.6 23 42.6 22.6 41.8 21.8
        C41 21 40.6 20 40.6 19
        C40.6 20 40.2 21 39.4 21.8
        C38.6 22.6 37.6 23 36.5 23Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M25 38
        C25 35 26.2 32.2 28.3 30.1
        C30.4 28 33.2 26.8 36.2 26.8
        C33.2 26.8 30.4 25.6 28.3 23.5
        C26.2 21.4 25 18.6 25 15.6
        C25 18.6 23.8 21.4 21.7 23.5
        C19.6 25.6 16.8 26.8 13.8 26.8
        C16.8 26.8 19.6 28 21.7 30.1
        C23.8 32.2 25 35 25 38Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_sparkle">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const DocumentArrowIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_docArrow)">
      {/* Fold */}
      <path
        d="M34 17V22C34 22.5 34.2 22.9 34.6 23.3C35 23.7 35.4 24 35.9 24H40"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Document */}
      <path
        d="
        M37 42H25
        C23.9 42 23 41.6 22.2 40.8
        C21.4 40 21 39.1 21 38
        V20
        C21 18.9 21.4 18 22.2 17.2
        C23 16.4 23.9 16 25 16
        H34
        L40 22
        V38
        C40 39.1 39.6 40 38.8 40.8
        C38 41.6 37.1 42 36 42
        Z
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arrow */}
      <path
        d="M31 29L28 34H34L31 38"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_docArrow">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const HistoryIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_time)">
      <g transform="translate(15.457 15.4568) scale(1.24)">

        <path
          d="M12.4121 7.24072V12.4126L14.4809 14.4814"
          stroke="#56E000"
          strokeWidth="2.06089"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M17.584 22.7563L22.7559 19.6532L17.584 16.55V22.7563Z"
          stroke="#56E000"
          strokeWidth="2.06089"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M13.4643 21.6631C11.5174 21.8843 9.55041 21.4857 7.84333 20.5239C6.13625 19.5622 4.77615 18.0863 3.95672 16.3065C3.1373 14.5267 2.90032 12.5337 3.27955 10.6114C3.65878 8.68906 4.63488 6.93541 6.06884 5.60015C7.50279 4.26489 9.32149 3.41612 11.2659 3.1747C13.2104 2.93329 15.1814 3.31154 16.8984 4.2556C18.6153 5.19965 19.9906 6.66137 20.8284 8.43259C21.6662 10.2038 21.9238 12.1942 21.5645 14.1204"
          stroke="#56E000"
          strokeWidth="2.06089"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

      </g>
    </g>

    <defs>
      <clipPath id="clip0_time">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const MobileCheckIcon = (props) => (
  <svg
    {...props}
    width="48"
    height="48"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="54.014"
      height="54.014"
      rx="9"
      fill="none"
    />

    {/* Mobile */}
    <path
      d="M25.5 38H21.5C20.6 38 19.8 37.7 19.2 37.1C18.6 36.5 18.3 35.7 18.3 34.8V18.5C18.3 17.6 18.6 16.8 19.2 16.2C19.8 15.6 20.6 15.3 21.5 15.3H30.5C31.4 15.3 32.2 15.6 32.8 16.2C33.4 16.8 33.7 17.6 33.7 18.5V29.5"
      stroke="#56E000"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Check */}
    <path
      d="M30.5 34.5L33.5 37.5L39.5 31.5"
      stroke="#56E000"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClockBoxIcon = (props) => (
  <svg
    {...props}
    width="48"
    height="48"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect width="54.014" height="54.014" rx="9" fill="none" />

    {/* Box */}
    <path
      d="M18 19C18 18.6 18.2 18.2 18.5 17.9C18.8 17.6 19.2 17.4 19.6 17.4H35.4C35.8 17.4 36.2 17.6 36.5 17.9C36.8 18.2 37 18.6 37 19V35C37 35.4 36.8 35.8 36.5 36.1C36.2 36.4 35.8 36.6 35.4 36.6H19.6C19.2 36.6 18.8 36.4 18.5 36.1C18.2 35.8 18 35.4 18 35V19Z"
      stroke="#56E000"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Clock hand */}
    <path
      d="M27.5 21.5V27.5L31.5 31.5"
      stroke="#56E000"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LayoutIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_layout)">
      {/* Top Header Block */}
      <path
        d="M18 20C18 19.2 18.7 18.5 19.5 18.5H42.5C43.3 18.5 44 19.2 44 20V23C44 23.8 43.3 24.5 42.5 24.5H19.5C18.7 24.5 18 23.8 18 23V20Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Side Image/Icon Square */}
      <path
        d="M18 31C18 30.2 18.7 29.5 19.5 29.5H26C26.8 29.5 27.5 30.2 27.5 31V40C27.5 40.8 26.8 41.5 26 41.5H19.5C18.7 41.5 18 40.8 18 40V31Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Side Text Lines */}
      <path
        d="M31 30H44M31 35H44M31 40H44"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_layout">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const PayPalIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_paypal)">
      <path
        d="M38 25C40.2 26.2 41.2 28.5 41.2 31C41.2 34.2 38 36.8 34.8 36.8H31.5L30.7 41.5C30.65 41.8 30.48 42.05 30.24 42.22C30 42.39 29.7 42.48 29.4 42.45H25.9C25.8 42.45 25.7 42.43 25.62 42.39C25.54 42.35 25.47 42.29 25.41 42.22C25.35 42.15 25.31 42.06 25.29 41.97C25.27 41.88 25.27 41.79 25.29 41.7L25.5 39.8M28.3 33H31.5C34.8 33 38 29.7 38 26.5C38 22.8 35.5 20 31.5 20H24.3C23.7 20 23 20.7 23 21.4L20.7 39C20.7 39.7 21.4 40.4 22.1 40.4H25.5L27 33.8C27.15 33.2 27.5 33 28.3 33Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_paypal">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ProfileCardIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_profile)">
      <path
        d="M42 24V40C42 40.8 41.7 41.6 41.1 42.2C40.5 42.8 39.7 43.1 39 43.1H26C25.3 43.1 24.5 42.8 23.9 42.2C23.3 41.6 23 40.8 23 40V24C23 23.2 23.3 22.4 23.9 21.8C24.5 21.2 25.3 20.9 26 20.9H39C39.7 20.9 40.5 21.2 41.1 21.8C41.7 22.4 42 23.2 42 24Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M28 38H37"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M29.5 30C29.5 30.8 29.8 31.6 30.4 32.2C31 32.8 31.8 33.1 32.6 33.1C33.4 33.1 34.2 32.8 34.8 32.2C35.4 31.6 35.7 30.8 35.7 30C35.7 29.2 35.4 28.4 34.8 27.8C34.2 27.2 33.4 26.9 32.6 26.9C31.8 26.9 31 27.2 30.4 27.8C29.8 28.4 29.5 29.2 29.5 30Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M19 26H23M19 31H23M19 36H23"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_profile">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const StarIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_star)">
      <path
        d="M31 40L23.5 44L25 35.5L19 30L27.5 28.5L31 21L34.5 28.5L43 30L37 35.5L38.5 44L31 40Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_star">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const ChatSearchIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_chat_search)">
      {/* Message Lines */}
      <path
        d="M24 27H38M24 33H33"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Chat Bubble Frame */}
      <path
        d="M30 42L26 44V40H23C21.5 40 20.5 39 20.5 37.5V24.5C20.5 23 21.5 22 23 22H41C42.5 22 43.5 23 43.5 24.5V30"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Magnifying Glass */}
      <path
        d="M36 38C36 40 37.8 41.8 39.8 41.8C41.8 41.8 43.6 40 43.6 38C43.6 36 41.8 34.2 39.8 34.2C37.8 34.2 36 36 36 38Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M43.5 41.5L46 44"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_chat_search">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const PricingIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_pricing)">
      {/* S-shape */}
      <path
        d="M40 26C39.7 25.2 39.2 24.5 38.5 24C37.8 23.5 37 23.3 36.1 23.2H31C29.8 23.2 28.7 23.7 27.9 24.5C27.1 25.3 26.6 26.4 26.6 27.6C26.6 28.8 27.1 29.9 27.9 30.7C28.7 31.5 29.8 32 31 32H36.1C37.3 32 38.4 32.5 39.2 33.3C40 34.1 40.5 35.2 40.5 36.4C40.5 37.6 40 38.7 39.2 39.5C38.4 40.3 37.3 40.8 36.1 40.8H31C30.1 40.7 29.3 40.5 28.6 40C27.9 39.5 27.4 38.8 27.1 38"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Vertical line */}
      <path
        d="M33.5 19V23.2M33.5 40.8V45"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_pricing">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


export const worldIcon = (props)=>{

    <svg 
    {...props}
    width="45"
    height="45" 
    viewBox="0 0 45 45" 
    fill="none"
    xmlns="http://www.w3.org/2000/svg">

        <g clip-path="url(#clip0_422_2812)">
        <path d="M34.5337 24.9239C38.7403 28.8478 41.0418 32.2652 40.2086 33.917C38.8412 36.5966 29.5948 33.4417 19.5518 26.873C9.51252 20.3043 2.47584 12.807 3.84133 10.1292C4.69293 8.45905 9.21153 9.31432 14.4918 11.6067" stroke="#5C9B35" style="stroke:#5C9B35;stroke:color(display-p3 0.3608 0.6078 0.2078);stroke-opacity:1;" stroke-width="2.00219" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.17578 22.0241C9.17578 23.7112 9.50809 25.3818 10.1537 26.9405C10.7994 28.4993 11.7457 29.9155 12.9387 31.1085C14.1317 32.3015 15.548 33.2479 17.1067 33.8935C18.6654 34.5391 20.336 34.8714 22.0232 34.8714C23.7103 34.8714 25.3809 34.5391 26.9396 33.8935C28.4983 33.2479 29.9146 32.3015 31.1076 31.1085C32.3006 29.9155 33.2469 28.4993 33.8926 26.9405C34.5382 25.3818 34.8705 23.7112 34.8705 22.0241C34.8705 20.3369 34.5382 18.6663 33.8926 17.1076C33.2469 15.5489 32.3006 14.1326 31.1076 12.9396C29.9146 11.7466 28.4983 10.8003 26.9396 10.1546C25.3809 9.509 23.7103 9.1767 22.0232 9.1767C20.336 9.1767 18.6654 9.509 17.1067 10.1546C15.548 10.8003 14.1317 11.7466 12.9387 12.9396C11.7457 14.1326 10.7994 15.5489 10.1537 17.1076C9.50809 18.6663 9.17578 20.3369 9.17578 22.0241Z" stroke="#5C9B35" style="stroke:#5C9B35;stroke:color(display-p3 0.3608 0.6078 0.2078);stroke-opacity:1;" stroke-width="2.00219" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_422_2812">
        <rect width="44.0481" height="44.0481" fill="white" style="fill:white;fill-opacity:1;"/>
        </clipPath>
        </defs>
        </svg>

}


export const WorldIcon = (props) => (
  <svg {...props} width="45" height="45" viewBox="0 0 45 45" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_422_2812)">
      <path d="M34.5337 24.9239C38.7403 28.8478..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.17578 22.0241C9.17578 23.7112..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_422_2812">
        <rect width="44.0481" height="44.0481" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const SunIcon = (props) => (
  <svg {...props} width="45" height="45" viewBox="0 0 45 45" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_422_30381)">
      <path d="M22.0249 14.6827C23.4613 14.6827..."
        fill="#5C9B35"/>
      <path d="M22.0228 3.67065..."
        fill="#5C9B35"/>
      <path d="M32.4724 8.9803..."
        fill="#5C9B35"/>
    </g>
    <defs>
      <clipPath id="clip0_422_30381">
        <rect width="44.0481" height="44.0481" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const FileIcon = (props) => (
  <svg {...props} width="45" height="45" viewBox="0 0 45 45" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_422_30412)">
      <path d="M16.5171 9.1767H12.8465..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5195 9.17672C16.5195 8.2032..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M25.6929 20.1887H21.1046..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_422_30412">
        <rect width="44.0481" height="44.0481" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);
export const EditIcon = (props) => (
  <svg {...props} width="45" height="45" viewBox="0 0 45 45" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_422_30423)">
      <path d="M22.0255 27.5301L37.4149 12.0857..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.3672 9.17664L34.8732 14.6827"
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5196 12.9758C13.3 13.4346..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_422_30423">
        <rect width="44.0481" height="44.0481" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const HeadphoneIcon = (props) => (
  <svg {...props} width="45" height="45" viewBox="0 0 45 45" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_422_30434)">
      <path d="M7.33984 27.5301C7.33984 26.5565..." stroke="#5C9B35"
        strokeWidth="2.00219" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M27.5312 27.5301C27.5312 26.5565..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.33984 27.53V22.024C7.33984 18.1299..."
        stroke="#5C9B35" strokeWidth="2.00219"
        strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_422_30434">
        <rect width="44.0481" height="44.0481" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const HomeIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_home)">
      {/* House body */}
      <path
        d="M27.0507 21.897H24.4746C23.7913 21.897 23.1361 22.1684 22.653 22.6515C22.1698 23.1346 21.8984 23.7899 21.8984 24.4731V39.9298C21.8984 40.613 22.1698 41.2683 22.653 41.7514C23.1361 42.2345 23.7913 42.5059 24.4746 42.5059H37.3551C38.0384 42.5059 38.6936 42.2345 39.1767 41.7514C39.6598 41.2683 39.9313 40.613 39.9313 39.9298V24.4731C39.9313 23.7899 39.6598 23.1346 39.1767 22.6515C38.6936 22.1684 38.0384 21.897 37.3551 21.897H34.779"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top rounded detail */}
      <path
        d="M27.0508 21.8972C27.0508 21.2139 27.3222 20.5587 27.8053 20.0756C28.2884 19.5925 28.9437 19.321 29.6269 19.321H32.203C32.8862 19.321 33.5415 19.5925 34.0246 20.0756C34.5077 20.5587 34.7791 21.2139 34.7791 21.8972C34.7791 22.5804 34.5077 23.2356 34.0246 23.7188C33.5415 24.2019 32.8862 24.4733 32.203 24.4733H29.6269C28.9437 24.4733 28.2884 24.2019 27.8053 23.7188C27.3222 23.2356 27.0508 22.5804 27.0508 21.8972Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Plus horizontal */}
      <path
        d="M28.3359 33.4895H33.4882"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Plus vertical */}
      <path
        d="M30.9141 30.9136V36.0658"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const AddDocumentIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_home)">
      {/* Roof */}
      <path
        d="M21.8964 30.9136H19.3203L30.9128 19.321L42.5054 30.9136H39.9293"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* House body */}
      <path
        d="M21.8984 30.9136V39.93C21.8984 40.6132 22.1698 41.2685 22.653 41.7516C23.1361 42.2347 23.7913 42.5061 24.4746 42.5061H37.3551C38.0384 42.5061 38.6936 42.2347 39.1767 41.7516C39.6598 41.2685 39.9313 40.6132 39.9313 39.93V30.9136"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Door */}
      <path
        d="M27.0508 42.5061V34.7778C27.0508 34.0945 27.3222 33.4393 27.8053 32.9562C28.2884 32.4731 28.9437 32.2017 29.6269 32.2017H32.203C32.8862 32.2017 33.5415 32.4731 34.0246 32.9562C34.5077 33.4393 34.7791 34.0945 34.7791 34.7778V42.5061"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const TruckIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_home)">
      {/* Left circle */}
      <path
        d="M21.8984 37.3537C21.8984 38.0369 22.1698 38.6922 22.653 39.1753C23.1361 39.6584 23.7913 39.9298 24.4746 39.9298C25.1578 39.9298 25.813 39.6584 26.2961 39.1753C26.7793 38.6922 27.0507 38.0369 27.0507 37.3537C27.0507 36.6705 26.7793 36.0152 26.2961 35.5321C25.813 35.049 25.1578 34.7776 24.4746 34.7776C23.7913 34.7776 23.1361 35.049 22.653 35.5321C22.1698 36.0152 21.8984 36.6705 21.8984 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right circle */}
      <path
        d="M34.7773 37.3537C34.7773 38.0369 35.0488 38.6922 35.5319 39.1753C36.015 39.6584 36.6702 39.9298 37.3535 39.9298C38.0367 39.9298 38.6919 39.6584 39.1751 39.1753C39.6582 38.6922 39.9296 38.0369 39.9296 37.3537C39.9296 36.6705 39.6582 36.0152 39.1751 35.5321C38.6919 35.049 38.0367 34.7776 37.3535 34.7776C36.6702 34.7776 36.015 35.049 35.5319 35.5321C35.0488 36.0152 34.7773 36.6705 34.7773 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Home structure */}
      <path
        d="M21.8954 37.3537H19.3193V32.2014M18.0312 21.897H32.1999V37.3537M27.0477 37.3537H34.776M39.9282 37.3537H42.5044V29.6253M42.5044 29.6253H32.1999M42.5044 29.6253L38.6402 23.185H32.1999"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small line */}
      <path
        d="M19.3203 27.0493H24.4725"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const BikeDeliveryIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_home)">
      {/* Left wheel */}
      <path
        d="M18.0312 38.6418C18.0312 39.6666 18.4384 40.6495 19.163 41.3741C19.8877 42.0988 20.8706 42.5059 21.8954 42.5059C22.9203 42.5059 23.9031 42.0988 24.6278 41.3741C25.3525 40.6495 25.7596 39.6666 25.7596 38.6418C25.7596 37.6169 25.3525 36.6341 24.6278 35.9094C23.9031 35.1847 22.9203 34.7776 21.8954 34.7776C20.8706 34.7776 19.8877 35.1847 19.163 35.9094C18.4384 36.6341 18.0312 37.6169 18.0312 38.6418Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right wheel */}
      <path
        d="M36.0664 38.6418C36.0664 39.6666 36.4735 40.6495 37.1982 41.3741C37.9229 42.0988 38.9057 42.5059 39.9306 42.5059C40.9554 42.5059 41.9383 42.0988 42.663 41.3741C43.3876 40.6495 43.7948 39.6666 43.7948 38.6418C43.7948 37.6169 43.3876 36.6341 42.663 35.9094C41.9383 35.1847 40.9554 34.7776 39.9306 34.7776C38.9057 34.7776 37.9229 35.1847 37.1982 35.9094C36.4735 36.6341 36.0664 37.6169 36.0664 38.6418Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Body */}
      <path
        d="M30.915 39.9299V34.7776L27.0508 30.9135L33.4911 25.7612L36.0672 29.6254H39.9314"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small detail */}
      <path
        d="M36.0664 21.8972C36.0664 22.2388 36.2021 22.5664 36.4437 22.808C36.6852 23.0495 37.0129 23.1852 37.3545 23.1852C37.6961 23.1852 38.0237 23.0495 38.2653 22.808C38.5068 22.5664 38.6425 22.2388 38.6425 21.8972C38.6425 21.5556 38.5068 21.228 38.2653 20.9864C38.0237 20.7448 37.6961 20.6091 37.3545 20.6091C37.0129 20.6091 36.6852 20.7448 36.4437 20.9864C36.2021 21.228 36.0664 21.5556 36.0664 21.8972Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const StorefulIcon = (props) => (
  <svg
    {...props}
     width="64"
    height="64"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_home)">
      {/* Left wheel */}
      <path
        d="M21.8984 37.3537C21.8984 38.0369 22.1698 38.6922 22.653 39.1753C23.1361 39.6584 23.7913 39.9298 24.4746 39.9298C25.1578 39.9298 25.813 39.6584 26.2961 39.1753C26.7793 38.6922 27.0507 38.0369 27.0507 37.3537C27.0507 36.6705 26.7793 36.0152 26.2961 35.5321C25.813 35.049 25.1578 34.7776 24.4746 34.7776C23.7913 34.7776 23.1361 35.049 22.653 35.5321C22.1698 36.0152 21.8984 36.6705 21.8984 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right wheel */}
      <path
        d="M34.7773 37.3537C34.7773 38.0369 35.0488 38.6922 35.5319 39.1753C36.015 39.6584 36.6702 39.9298 37.3535 39.9298C38.0367 39.9298 38.6919 39.6584 39.1751 39.1753C39.6582 38.6922 39.9296 38.0369 39.9296 37.3537C39.9296 36.6705 39.6582 36.0152 39.1751 35.5321C38.6919 35.049 38.0367 34.7776 37.3535 34.7776C36.6702 34.7776 36.015 35.049 35.5319 35.5321C35.0488 36.0152 34.7773 36.6705 34.7773 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Home body */}
      <path
        d="M21.8964 37.3537H19.3203V29.6254M19.3203 29.6254L21.8964 23.1851H33.489L38.6412 29.6254M19.3203 29.6254H38.6412M38.6412 29.6254H39.9293C40.6125 29.6254 41.2677 29.8968 41.7508 30.3799C42.234 30.863 42.5054 31.5182 42.5054 32.2015V37.3537H39.9293M34.777 37.3537H27.0487M30.9128 29.6254V23.1851"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill=""
        />
      </clipPath>
    </defs>
  </svg>
);
export const StoreIcon = (props) => (
  <svg
    {...props}
     width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_home)">
      {/* Left wheel */}
      <path
        d="M21.8984 37.3537C21.8984 38.0369 22.1698 38.6922 22.653 39.1753C23.1361 39.6584 23.7913 39.9298 24.4746 39.9298C25.1578 39.9298 25.813 39.6584 26.2961 39.1753C26.7793 38.6922 27.0507 38.0369 27.0507 37.3537C27.0507 36.6705 26.7793 36.0152 26.2961 35.5321C25.813 35.049 25.1578 34.7776 24.4746 34.7776C23.7913 34.7776 23.1361 35.049 22.653 35.5321C22.1698 36.0152 21.8984 36.6705 21.8984 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right wheel */}
      <path
        d="M34.7773 37.3537C34.7773 38.0369 35.0488 38.6922 35.5319 39.1753C36.015 39.6584 36.6702 39.9298 37.3535 39.9298C38.0367 39.9298 38.6919 39.6584 39.1751 39.1753C39.6582 38.6922 39.9296 38.0369 39.9296 37.3537C39.9296 36.6705 39.6582 36.0152 39.1751 35.5321C38.6919 35.049 38.0367 34.7776 37.3535 34.7776C36.6702 34.7776 36.015 35.049 35.5319 35.5321C35.0488 36.0152 34.7773 36.6705 34.7773 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Home body */}
      <path
        d="M21.8964 37.3537H19.3203V29.6254M19.3203 29.6254L21.8964 23.1851H33.489L38.6412 29.6254M19.3203 29.6254H38.6412M38.6412 29.6254H39.9293C40.6125 29.6254 41.2677 29.8968 41.7508 30.3799C42.234 30.863 42.5054 31.5182 42.5054 32.2015V37.3537H39.9293M34.777 37.3537H27.0487M30.9128 29.6254V23.1851"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const BoxIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_home)">
      {/* Box-style Home */}
      <path
        d="M30.9138 19.321L41.2183 25.1173V36.7098L30.9138 42.5061L20.6094 36.7098V25.1173L30.9138 19.321Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M30.9141 30.9135L41.2185 25.1172"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M30.9141 30.9136V42.5061"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M30.9138 30.9135L20.6094 25.1172"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


export const DocumentHeartIcon = (props) => (
  <svg
    {...props}
    width="40"
    height="40"
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.1178 48.5531H24.6941C23.7206 48.5531 22.7869 48.1663 22.0986 47.4779C21.4102 46.7896 21.0234 45.8559 21.0234 44.8824V19.1876C21.0234 18.2141 21.4102 17.2805 22.0986 16.5921C22.7869 15.9037 23.7206 15.517 24.6941 15.517H39.3768C40.3503 15.517 41.284 15.9037 41.9724 16.5921C42.6608 17.2805 43.0475 18.2141 43.0475 19.1876V30.1997"
      stroke="#56E000"
      strokeWidth="2.00219"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.1992 17.3523H33.8699"
      stroke="#56E000"
      strokeWidth="2.00219"
      strokeLinecap="round"
    />
    <path
      d="M43.0486 50.3884L49.197 44.3611C49.574 43.9953 49.8739 43.5576 50.079 43.0739C50.2841 42.5902 50.3902 42.0703 50.3911 41.5449C50.3919 41.0195 50.2875 40.4993 50.084 40.015C49.8805 39.5306 49.582 39.0919 49.2062 38.7248C48.4392 37.9748 47.4097 37.5539 46.337 37.5518C45.2643 37.5498 44.2332 37.9667 43.4634 38.7138L43.0523 39.1176L42.643 38.7138C41.8761 37.9643 40.847 37.5438 39.7748 37.5417C38.7025 37.5397 37.6718 37.9563 36.9021 38.7028C36.5249 39.0685 36.2248 39.5062 36.0196 39.9898C35.8143 40.4734 35.7081 40.9933 35.707 41.5186C35.706 42.044 35.8103 42.5643 36.0136 43.0487C36.217 43.5331 36.5153 43.9719 36.891 44.3391L43.0486 50.3884Z"
      stroke="#56E000"
      strokeWidth="2.00219"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const StoreShopIcon = (props) => (
  <svg
    {...props}
    width="36"
    height="36"
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="64.07"
      height="64.07"
      rx="10.01"
      fill="none"
    />

    {/* Store */}
    <g clipPath="url(#clip0_store)">
      {/* Bottom line */}
      <path
        d="M15.52 48.553H48.556"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Roof + shades */}
      <path
        d="
          M15.52 22.858V24.694
          C15.52 26.154 16.1 27.554 17.132 28.587
          C18.165 29.62 19.565 30.2 21.026 30.2
          C22.486 30.2 23.886 29.62 24.919 28.587
          C25.952 27.554 26.532 26.154 26.532 24.694

          M15.52 22.858H48.556
          M15.52 22.858L19.19 15.517H44.885L48.556 22.858

          M26.532 24.694V22.858
          M26.532 24.694
          C26.532 26.154 27.112 27.554 28.144 28.587
          C29.177 29.62 30.577 30.2 32.038 30.2
          C33.498 30.2 34.898 29.62 35.931 28.587
          C36.964 27.554 37.544 26.154 37.544 24.694

          M37.544 24.694V22.858
          M37.544 24.694
          C37.544 26.154 38.124 27.554 39.156 28.587
          C40.189 29.62 41.589 30.2 43.05 30.2
          C44.51 30.2 45.91 29.62 46.943 28.587
          C47.976 27.554 48.556 26.154 48.556 24.694V22.858
        "
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left pillar */}
      <path
        d="M19.188 48.553V29.924"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Right pillar */}
      <path
        d="M44.883 48.553V29.924"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Door */}
      <path
        d="
          M26.531 48.553V41.212
          C26.531 40.238 26.918 39.305 27.606 38.616
          C28.295 37.928 29.228 37.541 30.202 37.541
          H33.873
          C34.846 37.541 35.78 37.928 36.468 38.616
          C37.157 39.305 37.543 40.238 37.543 41.212V48.553
        "
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_store">
        <rect
          width="44.048"
          height="44.048"
          transform="translate(10.012 10.011)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

//// BROWSER SECTION SVG ICONS  START ///

export const StaredIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_star)">
      <path
        d="
          M31 18
          L34.5 25
          L42 26
          L36.5 31
          L38 38.5
          L31 35
          L24 38.5
          L25.5 31
          L20 26
          L27.5 25
          Z
        "
        fill="#56E000"
      />
    </g>

    <defs>
      <clipPath id="clip0_star">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const UserIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_user)">
      {/* Head */}
      <path
        d="
          M26 20
          H36
          C36.8 20 37.5 20.3 38.1 20.9
          C38.7 21.5 39 22.2 39 23
          C39 24.7 38.3 26.3 37.1 27.5
          C35.9 28.7 34.3 29.4 32.6 29.4
          H30.4
          C28.7 29.4 27.1 28.7 25.9 27.5
          C24.7 26.3 24 24.7 24 23
          C24 22.2 24.3 21.5 24.9 20.9
          C25.5 20.3 26.2 20 27 20
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Body */}
      <path
        d="
          M20 38
          V36
          C20 32.8 21.3 29.8 23.5 27.6
          C25.7 25.4 28.7 24.1 31.9 24.1
          C35.1 24.1 38.1 25.4 40.3 27.6
          C42.5 29.8 43.8 32.8 43.8 36
          V38
          C43.8 39.6 43.1 41.1 41.9 42.3
          C40.7 43.5 39.2 44.2 37.6 44.2
          H26.2
          C24.6 44.2 23.1 43.5 21.9 42.3
          C20.7 41.1 20 39.6 20 38
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_user">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const MapHeartIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_location)">
      {/* Map */}
      <path
        d="
          M31 40
          L26 38
          L18 42
          V25
          L26 21
          L34 25
          L42 21
          V31
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left fold */}
      <path
        d="M26 21V38"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right fold */}
      <path
        d="M34 25V32"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Location pin */}
      <path
        d="
          M42 42
          C42.6 41.4 43 40.6 43.2 39.8
          C43.4 39 43.3 38.2 43 37.5
          C42.7 36.8 42.2 36.2 41.5 35.8
          C40.8 35.4 40 35.2 39.2 35.2
          C38.4 35.2 37.6 35.4 36.9 35.8
          C36.2 36.2 35.7 36.8 35.4 37.5
          C35.1 38.2 35 39 35.2 39.8
          C35.4 40.6 35.8 41.4 36.4 42
          C37 42.6 38 43.5 39.2 44.7
          C40.5 43.6 41.4 42.7 42 42
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pin dot */}
      <path
        d="M39.2 39V39.1"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_location">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const BookmarkIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_bookmark)">
      {/* Outer box */}
      <path
        d="
          M19 22
          C19 21.2 19.3 20.4 19.9 19.8
          C20.5 19.2 21.3 18.9 22.1 18.9
          H39
          C39.8 18.9 40.6 19.2 41.2 19.8
          C41.8 20.4 42.1 21.2 42.1 22
          V39
          C42.1 39.8 41.8 40.6 41.2 41.2
          C40.6 41.8 39.8 42.1 39 42.1
          H22.1
          C21.3 42.1 20.5 41.8 19.9 41.2
          C19.3 40.6 19 39.8 19 39
          V22
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bookmark */}
      <path
        d="
          M31 18.9
          V29
          L34 26
          L37 29
          V18.9
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_bookmark">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

/* BROWSERS SECTION SVG ICONS END */






/* DRIVERS SVG ICONS SECTION START
 */


export const CubeNetworkIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_cube)">
      <path
        d="M18 38L30 45L40 40V28L34 24L40 20L46 24V30L30 40L24 36V25L18 22V38Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M30 40V45"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M24 36L34 30"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M34 24V30M34 30L40 34"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M30 32V22L24 18L18 22"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />

      <path
        d="M24 25L30 22M40 28L46 24"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_cube">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const SearchSettingsIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_search)">
      <path
        d="
          M19 31
          C19 32.4 19.3 33.7 19.8 35
          C20.3 36.3 21.1 37.4 22.1 38.4
          C23.1 39.4 24.2 40.2 25.5 40.7
          C26.8 41.2 28.1 41.5 29.5 41.5
          C30.9 41.5 32.2 41.2 33.5 40.7
          C34.8 40.2 35.9 39.4 36.9 38.4
          C37.9 37.4 38.7 36.3 39.2 35
          C39.7 33.7 40 32.4 40 31
          C40 29.6 39.7 28.3 39.2 27
          C38.7 25.7 37.9 24.6 36.9 23.6
          C35.9 22.6 34.8 21.8 33.5 21.3
          C32.2 20.8 30.9 20.5 29.5 20.5
          C28.1 20.5 26.8 20.8 25.5 21.3
          C24.2 21.8 23.1 22.6 22.1 23.6
          C21.1 24.6 20.3 25.7 19.8 27
          C19.3 28.3 19 29.6 19 31
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M46 46L38 38"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M33 26H29
          C28.4 26 27.9 26.2 27.5 26.6
          C27.1 27 26.9 27.5 26.9 28.1
          C26.9 28.7 27.1 29.2 27.5 29.6
          C27.9 30 28.4 30.2 29 30.2
          H30.5
          C31.1 30.2 31.6 30.4 32 30.8
          C32.4 31.2 32.6 31.7 32.6 32.3
          C32.6 32.9 32.4 33.4 32 33.8
          C31.6 34.2 31.1 34.4 30.5 34.4
          H26.9
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M29.5 34.4V36M29.5 24V26"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_search">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ClockedIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_clock)">
      <path
        d="
          M19 31
          C19 32.8 19.4 34.6 20.1 36.2
          C20.8 37.9 21.8 39.3 23 40.5
          C24.2 41.7 25.6 42.7 27.3 43.4
          C28.9 44.1 30.7 44.5 32.5 44.5
          C34.3 44.5 36.1 44.1 37.7 43.4
          C39.4 42.7 40.8 41.7 42 40.5
          C43.2 39.3 44.2 37.9 44.9 36.2
          C45.6 34.6 46 32.8 46 31
          C46 27.3 44.5 23.8 41.9 21.2
          C39.3 18.6 35.8 17.1 32.1 17.1
          C28.4 17.1 24.9 18.6 22.3 21.2
          C19.7 23.8 19 27.3 19 31
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M32 23V31L37 36"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_clock">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const BookmarkedIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_bookmark)">
      {/* Outer box */}
      <path
        d="
          M19 22
          C19 21.2 19.3 20.4 19.9 19.8
          C20.5 19.2 21.3 18.9 22.1 18.9
          H39
          C39.8 18.9 40.6 19.2 41.2 19.8
          C41.8 20.4 42.1 21.2 42.1 22
          V39
          C42.1 39.8 41.8 40.6 41.2 41.2
          C40.6 41.8 39.8 42.1 39 42.1
          H22.1
          C21.3 42.1 20.5 41.8 19.9 41.2
          C19.3 40.6 19 39.8 19 39
          V22
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bookmark */}
      <path
        d="
          M31 18.9
          V29
          L34 26
          L37 29
          V18.9
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_bookmark">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ClockingIcon = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.7207 14.8792C3.7207 16.3447 4.00935 17.7958 4.57016 19.1498C5.13097 20.5037 5.95297 21.7339 6.98921 22.7701C8.02546 23.8064 9.25566 24.6284 10.6096 25.1892C11.9635 25.75 13.4146 26.0386 14.8801 26.0386C16.3456 26.0386 17.7967 25.75 19.1506 25.1892C20.5045 24.6284 21.7347 23.8064 22.771 22.7701C23.8072 21.7339 24.6292 20.5037 25.19 19.1498C25.7509 17.7958 26.0395 16.3447 26.0395 14.8792C26.0395 11.9196 24.8638 9.08115 22.771 6.98836C20.6782 4.89557 17.8398 3.71985 14.8801 3.71985C11.9204 3.71985 9.08201 4.89557 6.98921 6.98836C4.89642 9.08115 3.7207 11.9196 3.7207 14.8792Z"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8789 8.67957V14.8792L18.5987 18.599"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

 /* Vendors Svg Icons Section .. */

export const DocumentListIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.71875 6.19965C3.71875 5.54195 3.98002 4.91119 4.44509 4.44612C4.91015 3.98106 5.54091 3.71979 6.19862 3.71979H23.5577C24.2154 3.71979 24.8461 3.98106 25.3112 4.44612C25.7763 4.91119 26.0375 5.54195 26.0375 6.19965V23.5587C26.0375 24.2164 25.7763 24.8472 25.3112 25.3122C24.8461 25.7773 24.2154 26.0386 23.5577 26.0386H6.19862C5.54091 26.0386 4.91015 25.7773 4.44509 25.3122C3.98002 24.8472 3.71875 24.2164 3.71875 23.5587V6.19965Z"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5977 21.0789H21.0775M13.6406 17.3591H21.0802M16.1172 13.6393H21.0769"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenusIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.96094 7.43958H24.7999M4.96094 14.8792H24.7999M4.96094 22.3188H24.7999"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const BalancesIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.67969 24.7987H21.079M7.44141 7.43961L14.881 6.19968L22.3206 7.43961M14.8789 3.71979V24.7987"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1583 14.8792L7.43855 7.43961L3.71875 14.8792C3.71875 15.8658 4.11066 16.8119 4.80825 17.5095C5.50585 18.2071 6.452 18.599 7.43855 18.599C8.4251 18.599 9.37125 18.2071 10.0688 17.5095C10.7664 16.8119 11.1583 15.8658 11.1583 14.8792Z"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.0373 14.8792L22.3175 7.43961L18.5977 14.8792C18.5977 15.8658 18.9896 16.8119 19.6872 17.5095C20.3848 18.2071 21.3309 18.599 22.3175 18.599C23.304 18.599 24.2502 18.2071 24.9478 17.5095C25.6453 16.8119 26.0373 15.8658 26.0373 14.8792Z"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const WindowsIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.71875 8.67953C3.71875 8.02183 3.98002 7.39106 4.44509 6.926C4.91015 6.46093 5.54091 6.19966 6.19862 6.19966H23.5577C24.2154 6.19966 24.8461 6.46093 25.3112 6.926C25.7763 7.39106 26.0375 8.02183 26.0375 8.67953V21.0789C26.0375 21.7366 25.7763 22.3673 25.3112 22.8324C24.8461 23.2975 24.2154 23.5587 23.5577 23.5587H6.19862C5.54091 23.5587 4.91015 23.2975 4.44509 22.8324C3.98002 22.3673 3.71875 21.7366 3.71875 21.0789V8.67953Z"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.44141 9.91946H7.45381M11.1602 9.91946H11.1726"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* MARKETPLACE SECTION SVG ICONS START */

export const ApprovalIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_approval)">
      <path
        d="M27 33V43C27 43.8 26.2 44.4 25.5 44.4H22.5C21.8 44.4 21 43.8 21 43V34.5C21 33.7 21.8 33 22.5 33H27Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M27 33C30 33 33 30 33 27V25.5C33 24.7 33.8 22.5 36 22.5C38.2 22.5 39 24.7 39 25.5V33H43C45 33 46 35.2 46 36L44.5 43C44.2 44.6 43 45.8 41.4 45.8H31C29 45.8 27 43.8 27 41.8"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_approval">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const MarkStoredIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_markstored)">
      {/* Base */}
      <path
        d="M24 42H38"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top bar */}
      <path
        d="M22 24L31 22L40 24"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center pole */}
      <path
        d="M31 18V42"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left scale */}
      <path
        d="
          M27 33
          L22 24
          L17 33
          C17 34.3 17.5 35.6 18.5 36.5
          C19.5 37.5 20.8 38 22 38
          C23.3 38 24.5 37.5 25.5 36.5
          C26.5 35.6 27 34.3 27 33
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right scale */}
      <path
        d="
          M45 33
          L40 24
          L35 33
          C35 34.3 35.5 35.6 36.5 36.5
          C37.5 37.5 38.8 38 40 38
          C41.3 38 42.5 37.5 43.5 36.5
          C44.5 35.6 45 34.3 45 33
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_markstored">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const MarkLinkIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_marklink)">
      {/* Frame */}
      <path
        d="
          M18 24
          C18 23.2 18.3 22.4 18.9 21.8
          C19.5 21.2 20.3 20.9 21.1 20.9
          H40
          C40.8 20.9 41.6 21.2 42.2 21.8
          C42.8 22.4 43.1 23.2 43.1 24
          V38
          C43.1 38.8 42.8 39.6 42.2 40.2
          C41.6 40.8 40.8 41.1 40 41.1
          H21.1
          C20.3 41.1 19.5 40.8 18.9 40.2
          C18.3 39.6 18 38.8 18 38
          V24
        "
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      <path
        d="M23 26H23.1"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M27 26H27.1"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_marklink">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const MarkStorefulIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_home)">
      {/* Left wheel */}
      <path
        d="M21.8984 37.3537C21.8984 38.0369 22.1698 38.6922 22.653 39.1753C23.1361 39.6584 23.7913 39.9298 24.4746 39.9298C25.1578 39.9298 25.813 39.6584 26.2961 39.1753C26.7793 38.6922 27.0507 38.0369 27.0507 37.3537C27.0507 36.6705 26.7793 36.0152 26.2961 35.5321C25.813 35.049 25.1578 34.7776 24.4746 34.7776C23.7913 34.7776 23.1361 35.049 22.653 35.5321C22.1698 36.0152 21.8984 36.6705 21.8984 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right wheel */}
      <path
        d="M34.7773 37.3537C34.7773 38.0369 35.0488 38.6922 35.5319 39.1753C36.015 39.6584 36.6702 39.9298 37.3535 39.9298C38.0367 39.9298 38.6919 39.6584 39.1751 39.1753C39.6582 38.6922 39.9296 38.0369 39.9296 37.3537C39.9296 36.6705 39.6582 36.0152 39.1751 35.5321C38.6919 35.049 38.0367 34.7776 37.3535 34.7776C36.6702 34.7776 36.015 35.049 35.5319 35.5321C35.0488 36.0152 34.7773 36.6705 34.7773 37.3537Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Store body */}
      <path
        d="M21.8964 37.3537H19.3203V29.6254M19.3203 29.6254L21.8964 23.1851H33.489L38.6412 29.6254M19.3203 29.6254H38.6412M38.6412 29.6254H39.9293C40.6125 29.6254 41.2677 29.8968 41.7508 30.3799C42.234 30.863 42.5054 31.5182 42.5054 32.2015V37.3537H39.9293M34.777 37.3537H27.0487M30.9128 29.6254V23.1851"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_home">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


/* MARKETPLACE SECTION SVG ICONS END*/


export const DeliveryBoxIcon = (props) => (
  <svg
    {...props}
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="59.5168" height="59.5168" rx="9.91946" fill="white" />

    <path
      d="M21.0781 35.958C21.0781 36.6157 21.3394 37.2465 21.8045 37.7115C22.2695 38.1766 22.9003 38.4379 23.558 38.4379C24.2157 38.4379 24.8465 38.1766 25.3115 37.7115C25.7766 37.2465 26.0379 36.6157 26.0379 35.958C26.0379 35.3003 25.7766 34.6696 25.3115 34.2045C24.8465 33.7394 24.2157 33.4781 23.558 33.4781C22.9003 33.4781 22.2695 33.7394 21.8045 34.2045C21.3394 34.6696 21.0781 35.3003 21.0781 35.958Z"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M33.4785 35.958C33.4785 36.6157 33.7398 37.2465 34.2049 37.7115C34.6699 38.1766 35.3007 38.4379 35.9584 38.4379C36.6161 38.4379 37.2468 38.1766 37.7119 37.7115C38.177 37.2465 38.4382 36.6157 38.4382 35.958C38.4382 35.3003 38.177 34.6696 37.7119 34.2045C37.2468 33.7394 36.6161 33.4781 35.9584 33.4781C35.3007 33.4781 34.6699 33.7394 34.2049 34.2045C33.7398 34.6696 33.4785 35.3003 33.4785 35.958Z"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M21.0795 35.958H18.5996V28.5184L21.0795 22.3187H32.2389L37.1986 28.5184H38.4385C39.0962 28.5184 39.727 28.7797 40.1921 29.2447C40.6571 29.7098 40.9184 30.3406 40.9184 30.9983V35.958H26.0392M29.759 28.5184V22.3187"
      stroke="currentColor"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartIcon = (props) => (
  <svg
    {...props}
    width="48"
    height="48"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="54.014"
      height="54.014"
      rx="9"
      fill="none"
    />

    {/* Heart */}
    <g clipPath="url(#clip0_favorite)">
      <path
        d="
          M29.275 33.759
          L27.006 36.009
          L18.566 27.651
          C18.009 27.109 17.571 26.458 17.278 25.738
          C16.985 25.019 16.845 24.246 16.865 23.47
          C16.886 22.694 17.067 21.93 17.397 21.227
          C17.727 20.524 18.199 19.896 18.784 19.385
          C19.368 18.873 20.052 18.488 20.793 18.254
          C21.533 18.02 22.314 17.941 23.087 18.023
          C23.859 18.106 24.606 18.347 25.28 18.733
          C25.955 19.118 26.542 19.639 27.006 20.262
          C27.886 19.09 29.189 18.308 30.637 18.082
          C32.085 17.856 33.564 18.204 34.76 19.052
          C35.955 19.9 36.773 21.181 37.038 22.623
          C37.303 24.064 36.995 25.552 36.18 26.771
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M31.497 36.009
          L36.219 31.257
          C36.804 30.665 37.131 29.867 37.131 29.036
          C37.131 28.204 36.804 27.406 36.219 26.814
          C35.932 26.523 35.59 26.291 35.213 26.132
          C34.836 25.974 34.43 25.892 34.021 25.891
          C33.612 25.89 33.206 25.971 32.828 26.128
          C32.451 26.285 32.108 26.516 31.82 26.807
          L31.504 27.124
          L31.191 26.805
          C30.903 26.514 30.561 26.282 30.184 26.123
          C29.807 25.965 29.402 25.883 28.992 25.882
          C28.583 25.881 28.178 25.962 27.8 26.119
          C27.422 26.276 27.079 26.507 26.791 26.798
          C26.205 27.388 25.877 28.186 25.875 29.017
          C25.874 29.849 26.2 30.647 26.783 31.24
          L31.489 36.009
          H31.497
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_favorite">
        <rect
          width="27.007"
          height="27.007"
          transform="translate(13.504 13.503)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const ProfileIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="54.014"
      height="54.014"
      rx="9"
      fill="none"
    />

    {/* Profile */}
    <g clipPath="url(#clip0_profile)">
      {/* Face + body */}
      <path
        d="
          M19.129 21.38H20.255
          C20.852 21.38 21.424 21.143 21.846 20.721
          C22.268 20.299 22.505 19.727 22.505 19.13
          C22.505 18.831 22.624 18.545 22.835 18.334
          C23.046 18.123 23.332 18.005 23.631 18.005
          H30.382
          C30.681 18.005 30.967 18.123 31.178 18.334
          C31.389 18.545 31.508 18.831 31.508 19.13
          C31.508 19.727 31.745 20.299 32.167 20.721
          C32.589 21.143 33.161 21.38 33.758 21.38
          H34.884
          C35.48 21.38 36.053 21.618 36.475 22.04
          C36.897 22.462 37.134 23.034 37.134 23.631
          V33.759
          C37.134 34.355 36.897 34.928 36.475 35.35
          C36.053 35.772 35.48 36.009 34.884 36.009
          H19.129
          C18.533 36.009 17.96 35.772 17.538 35.35
          C17.116 34.928 16.879 34.355 16.879 33.759
          V23.631
          C16.879 23.034 17.116 22.462 17.538 22.04
          C17.96 21.618 18.533 21.38 19.129 21.38
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Smile */}
      <path
        d="
          M24.195 30.383
          C24.562 30.757 25 31.054 25.483 31.257
          C25.966 31.46 26.485 31.565 27.009 31.565
          C27.532 31.565 28.051 31.46 28.534 31.257
          C29.017 31.054 29.455 30.757 29.822 30.383
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Eyes */}
      <path
        d="M23.633 25.882H23.644"
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M30.383 25.882H30.394"
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_profile">
        <rect
          width="27.007"
          height="27.007"
          transform="translate(13.504 13.503)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
export const PackageIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="54.014"
      height="54.014"
      rx="9"
      fill="none"
    />

    {/* Box */}
    <g clipPath="url(#clip0_package)">
      {/* Left side */}
      <path
        d="
          M16.879 24.756
          V33.759
          L24.756 30.383
          V27.457
          L16.879 24.756
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top */}
      <path
        d="
          M16.879 20.255
          L27.007 23.631
          L37.134 20.255
          L27.007 16.879
          L16.879 20.255
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right side */}
      <path
        d="
          M29.258 27.344
          V37.134
          L37.135 33.759
          V24.756
          L29.258 27.344
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_package">
        <rect
          width="27.007"
          height="27.007"
          transform="translate(13.504 13.503)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


export const CodeIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="54.014"
      height="54.014"
      rx="9"
      fill="none"
    />

    {/* Code */}
    <g clipPath="url(#clip0_code)">
      {/* Left arrow */}
      <path
        d="M23.071 28.695L21.383 27.007L23.071 25.319"
        stroke="#5C9B35"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right arrow */}
      <path
        d="M30.945 25.319L32.633 27.007L30.945 28.695"
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Circle */}
      <path
        d="
          M16.879 27.007
          C16.879 28.337 17.141 29.654 17.65 30.883
          C18.159 32.111 18.905 33.228 19.845 34.168
          C20.786 35.109 21.902 35.855 23.131 36.364
          C24.36 36.873 25.677 37.134 27.007 37.134
          C28.337 37.134 29.653 36.873 30.882 36.364
          C32.111 35.855 33.227 35.109 34.168 34.168
          C35.108 33.228 35.854 32.111 36.363 30.883
          C36.872 29.654 37.134 28.337 37.134 27.007
          C37.134 25.677 36.872 24.36 36.363 23.131
          C35.854 21.903 35.108 20.786 34.168 19.846
          C33.227 18.905 32.111 18.159 30.882 17.65
          C29.653 17.141 28.337 16.879 27.007 16.879
          C25.677 16.879 24.36 17.141 23.131 17.65
          C21.902 18.159 20.786 18.905 19.845 19.846
          C18.905 20.786 18.159 21.903 17.65 23.131
          C17.141 24.36 16.879 25.677 16.879 27.007
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Slash */}
      <path
        d="M28.133 24.194L25.883 30.383"
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_code">
        <rect
          width="27.007"
          height="27.007"
          transform="translate(13.504 13.503)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const LogoutIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="54.014"
      height="54.014"
      rx="9"
      fill="none"
    />

    {/* Logout */}
    <g clipPath="url(#clip0_logout)">
      {/* Device */}
      <path
        d="
          M29.257 22.506
          V20.255
          C29.257 19.658 29.02 19.086 28.598 18.664
          C28.176 18.242 27.603 18.005 27.007 18.005
          H19.129
          C18.533 18.005 17.96 18.242 17.538 18.664
          C17.116 19.086 16.879 19.658 16.879 20.255
          V33.759
          C16.879 34.355 17.116 34.928 17.538 35.35
          C17.96 35.772 18.533 36.009 19.129 36.009
          H27.007
          C27.603 36.009 28.176 35.772 28.598 35.35
          C29.02 34.928 29.257 34.355 29.257 33.759
          V31.508
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arrow */}
      <path
        d="
          M36.012 27.007
          H21.383
          M21.383 27.007
          L24.759 23.631
          M21.383 27.007
          L24.759 30.383
        "
        stroke="#56E000"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_logout">
        <rect
          width="27.007"
          height="27.007"
          transform="translate(13.504 13.503)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


/* GLOBAL FEATURES SECTION SVG ICONS  */


export const GlobeIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />

    <g clipPath="url(#clip0_add_globe)" transform="translate(15.457 15.457)">
      {/* Globe outline */}
      <path
        d="M34.5337 24.9239C38.7403 28.8478 41.0418 32.2652 40.2086 33.917C38.8412 36.5966 29.5948 33.4417 19.5518 26.873C9.51252 20.3043 2.47584 12.807 3.84133 10.1292C4.69293 8.45905 9.21153 9.31432 14.4918 11.6067"
        stroke="#56E000"
        strokeWidth="2.06"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.17578 22.0241C9.17578 23.7112 9.50809 25.3818 10.1537 26.9405C10.7994 28.4993 11.7457 29.9155 12.9387 31.1085C14.1317 32.3015 15.548 33.2479 17.1067 33.8935C18.6654 34.5391 20.336 34.8714 22.0232 34.8714C23.7103 34.8714 25.3809 34.5391 26.9396 33.8935C28.4983 33.2479 29.9146 32.3015 31.1076 31.1085C32.3006 29.9155 33.2469 28.4993 33.8926 26.9405C34.5382 25.3818 34.8705 23.7112 34.8705 22.0241C34.8705 20.3369 34.5382 18.6663 33.8926 17.1076C33.2469 15.5489 32.3006 14.1326 31.1076 12.9396C29.9146 11.7466 28.4983 10.8003 26.9396 10.1546C25.3809 9.509 23.7103 9.1767 22.0232 9.1767C20.336 9.1767 18.6654 9.509 17.1067 10.1546C15.548 10.8003 14.1317 11.7466 12.9387 12.9396C11.7457 14.1326 10.7994 15.5489 10.1537 17.1076C9.50809 18.6663 9.17578 20.3369 9.17578 22.0241Z"
        stroke="#56E000"
        strokeWidth="2.06"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Add "+" sign */}
      <path
        d="M22 10V18"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14H26"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_add_globe">
        <rect width="30.9134" height="30.9134" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const GlobeWithArrowsIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />
    <g clipPath="url(#clip0_globe_arrows)" transform="translate(15.457 15.457)">
      <path
        d="M22.0249 14.6827C23.4613 14.6827 24.8661 15.1041 26.0653 15.8946C27.2646 16.6851 28.2056 17.8101 28.7718 19.1301C29.338 20.4501 29.5046 21.9073 29.2508 23.321C28.9971 24.7348 28.3342 26.043 27.3443 27.0838C26.3543 28.1245 25.0808 28.852 23.6815 29.1761C22.2822 29.5002 20.8186 29.4067 19.4719 28.9072C18.1252 28.4077 16.9546 27.5241 16.1051 26.3659C15.2557 25.2077 14.7646 23.8257 14.6928 22.3912"
        stroke="#56E000"
        strokeWidth="2.06"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22.0228 3.67065V9.17667" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32.4724 8.9803L29.9029 11.5498" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38.543 20.1887H34.8724" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.9045 29.9032L32.474 32.4726" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.0228 33.0361V38.5421" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5505 29.9032L14.1457 32.4983" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.0118 20.1887H7.34112" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.97877 8.98031L11.5482 11.5498" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_globe_arrows">
        <rect width="30.9134" height="30.9134" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowsIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />
    <g clipPath="url(#clip0_arrows)" transform="translate(15.457 15.457)">
      <path d="M12.8492 14.6827L5.50781 22.0241L12.8492 29.3654" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.1992 14.6827L38.5406 22.0241L31.1992 29.3654" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.6929 7.34137L18.3516 36.7068" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_arrows">
        <rect width="30.9134" height="30.9134" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const DocumentIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />
    <g clipPath="url(#clip0_document)" transform="translate(8.986 8.986)">
      <path d="M16.5171 9.1767H12.8465C11.8729 9.1767 10.9393 9.56343 10.2509 10.2518C9.56251 10.9402 9.17578 11.8738 9.17578 12.8474V34.8714C9.17578 35.845 9.56251 36.7786 10.2509 37.467C10.9393 38.1554 11.8729 38.5421 12.8465 38.5421H31.1998C32.1734 38.5421 33.107 38.1554 33.7954 37.467C34.4838 36.7786 34.8705 35.845 34.8705 34.8714V12.8474C34.8705 11.8738 34.4838 10.9402 33.7954 10.2518C33.107 9.56343 32.1734 9.1767 31.1998 9.1767H27.5292" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5195 9.17672C16.5195 8.2032 16.9063 7.26954 17.5946 6.58116C18.283 5.89277 19.2167 5.50604 20.1902 5.50604H23.8609C24.8344 5.50604 25.7681 5.89277 26.4564 6.58116C27.1448 7.26954 27.5316 8.2032 27.5316 9.17672C27.5316 10.1502 27.1448 11.0839 26.4564 11.7723C25.7681 12.4607 24.8344 12.8474 23.8609 12.8474H20.1902C19.2167 12.8474 18.283 12.4607 17.5946 11.7723C16.9063 11.0839 16.5195 10.1502 16.5195 9.17672Z" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25.6929 20.1887H21.1046C20.3744 20.1887 19.6742 20.4788 19.1579 20.9951C18.6416 21.5113 18.3516 22.2116 18.3516 22.9417C18.3516 23.6719 18.6416 24.3721 19.1579 24.8884C19.6742 25.4047 20.3744 25.6947 21.1046 25.6947H22.9399C23.6701 25.6947 24.3703 25.9848 24.8866 26.5011C25.4029 27.0174 25.6929 27.7176 25.6929 28.4477C25.6929 29.1779 25.4029 29.8781 24.8866 30.3944C24.3703 30.9107 23.6701 31.2008 22.9399 31.2008H18.3516" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.0234 31.2008V33.0361M22.0234 18.3534V20.1887" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_document">
        <rect width="44.0481" height="44.0481" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MailIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />
    <g clipPath="url(#clip0_mail)" transform="translate(8.986 8.986)">
      <path d="M22.0255 27.5301L37.4149 12.0857C38.1377 11.3629 38.5438 10.3825 38.5438 9.36027C38.5438 8.33801 38.1377 7.35763 37.4149 6.63479C36.692 5.91195 35.7116 5.50586 34.6894 5.50586C33.6671 5.50586 32.6868 5.91195 31.9639 6.63479L16.5195 22.0241V27.5301H22.0255Z" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.3672 9.17664L34.8732 14.6827" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5196 12.9758C13.3 13.4346 10.3742 15.0972 8.33233 17.6284C6.29047 20.1596 5.28451 23.3709 5.51737 26.6147C5.75023 29.8584 7.20458 32.8931 9.58706 35.1067C11.9695 37.3203 15.1028 38.548 18.3549 38.5421C21.4445 38.5425 24.4308 37.4294 26.7664 35.4069C29.102 33.3844 30.6306 30.588 31.072 27.5301" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_mail">
        <rect width="44.0481" height="44.0481" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CalendarIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />
    <g clipPath="url(#clip0_calendar)" transform="translate(8.986 8.986)">
      <path d="M7.33984 27.5301C7.33984 26.5565 7.72657 25.6229 8.41496 24.9345C9.10335 24.2461 10.037 23.8594 11.0105 23.8594H12.8459C13.8194 23.8594 14.753 24.2461 15.4414 24.9345C16.1298 25.6229 16.5165 26.5565 16.5165 27.5301V33.0361C16.5165 34.0096 16.1298 34.9432 15.4414 35.6316C14.753 36.32 13.8194 36.7067 12.8459 36.7067H11.0105C10.037 36.7067 9.10335 36.32 8.41496 35.6316C7.72657 34.9432 7.33984 34.0096 7.33984 33.0361V27.5301Z" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27.5312 27.5301C27.5312 26.5565 27.918 25.6229 28.6064 24.9345C29.2948 24.2461 30.2284 23.8594 31.2019 23.8594H33.0373C34.0108 23.8594 34.9444 24.2461 35.6328 24.9345C36.3212 25.6229 36.7079 26.5565 36.7079 27.5301V33.0361C36.7079 34.0096 36.3212 34.9432 35.6328 35.6316C34.9444 36.32 34.0108 36.7067 33.0373 36.7067H31.2019C30.2284 36.7067 29.2948 36.32 28.6064 35.6316C27.918 34.9432 27.5312 34.0096 27.5312 33.0361V27.5301Z" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.33984 27.53V22.024C7.33984 18.1299 8.88677 14.3953 11.6403 11.6418C14.3939 8.88823 18.1285 7.34131 22.0226 7.34131C25.9167 7.34131 29.6513 8.88823 32.4048 11.6418C35.1583 14.3953 36.7053 18.1299 36.7053 22.024V27.53" stroke="#56E000" strokeWidth="2.06" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_calendar">
        <rect width="44.0481" height="44.0481" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CircleLayoutIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />

    <g clipPath="url(#clip0_circle)">
      <g transform="translate(16 16)" stroke="#56E000">
        <circle
          cx="15"
          cy="15"
          r="10"
          strokeWidth="2.06"
        />
      </g>
    </g>

    <defs>
      <clipPath id="clip0_circle">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);



export const HeartLayIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="none" />

    <g clipPath="url(#clip0_heart)">
      <g transform="translate(16 16)" stroke="#56E000">
        <path
          d="M15 26L5 16C3 14 3 10 6 8C8 6 11 7 13 9L15 11L17 9C19 7 22 6 24 8C27 10 27 14 25 16L15 26Z"
          strokeWidth="2.06"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>

    <defs>
      <clipPath id="clip0_heart">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const RefreshLayoutIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />

    <g clipPath="url(#clip0_refresh)">
      <g transform="translate(16 16)" stroke="#56E000">
        <path
          d="M22 6V12H16"
          strokeWidth="2.06"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 24A10 10 0 1 0 6 12"
          strokeWidth="2.06"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 26V20H16"
          strokeWidth="2.06"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>

    <defs>
      <clipPath id="clip0_refresh">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const SearchDocumentIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_search)" transform="translate(15.457 15.457)">
      <path
        d="M19.9545 15.6611C20.1511 14.8501 20.0901 13.9981 19.7799 13.2235C19.4698 12.4488 18.9259 11.7902 18.2239 11.3391C17.5219 10.888 16.6968 10.6669 15.8633 10.7066C15.0298 10.7463 14.2295 11.0448 13.5736 11.5606C12.9176 12.0763 12.4388 12.7837 12.2037 13.5844C11.9685 14.385 11.9888 15.2389 12.2616 16.0275C12.5344 16.8161 13.0463 17.5 13.7259 17.9841C14.4055 18.4682 15.2192 18.7284 16.0536 18.7285"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.0417 28.7415C15.3368 28.7391 14.6616 28.4577 14.1635 27.959L8.48611 22.2829C7.22939 21.0262 6.30544 19.4763 5.79766 17.7731C5.28988 16.0699 5.21426 14.2671 5.57764 12.5273C5.94101 10.7876 6.73194 9.16576 7.87901 7.80822C9.02608 6.45068 10.4932 5.40019 12.1479 4.75158C13.8026 4.10296 15.5927 3.87665 17.3568 4.09307C19.1208 4.3095 20.8032 4.96184 22.252 5.99121C23.7008 7.02058 24.8705 8.39456 25.6554 9.98913C26.4403 11.5837 26.8157 13.3486 26.7477 15.1246"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20.0664 24.0795C20.0664 25.1439 20.4892 26.1646 21.2419 26.9173C21.9945 27.6699 23.0153 28.0927 24.0797 28.0927C25.144 28.0927 26.1648 27.6699 26.9175 26.9173C27.6701 26.1646 28.0929 25.1439 28.0929 24.0795C28.0929 23.0151 27.6701 21.9943 26.9175 21.2417C26.1648 20.489 25.144 20.0662 24.0797 20.0662C23.0153 20.0662 21.9945 20.489 21.2419 21.2417C20.4892 21.9943 20.0664 23.0151 20.0664 24.0795Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M27.0234 27.0225L29.4314 29.4305"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_search">
        <rect width="30.9134" height="30.9134" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const NetworkIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_network)" transform="translate(15.457 15.457)">
      <path
        d="M18.728 16.053C18.728 15.3434 18.4461 14.6629 17.9443 14.1611C17.4426 13.6594 16.762 13.3775 16.0525 13.3775C15.3429 13.3775 14.6623 13.6594 14.1606 14.1611C13.6588 14.6629 13.377 15.3434 13.377 16.053C13.377 16.7626 13.6588 17.4431 14.1606 17.9449C14.6623 18.4466 15.3429 18.7285 16.0525 18.7285C16.762 18.7285 17.4426 18.4466 17.9443 17.9449C18.4461 17.4431 18.728 16.7626 18.728 16.053Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.0538 28.0928C11.6205 28.0928 8.02734 24.7992 8.02734 20.7351C8.02734 16.671 11.6205 13.3775 16.0538 13.3775"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M28.0922 16.053C28.0922 20.4863 24.7987 24.0795 20.7346 24.0795C16.6705 24.0795 13.377 20.4863 13.377 16.053"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.0527 18.7285C20.486 18.7285 24.0792 15.435 24.0792 11.3709C24.0792 7.30678 20.486 4.01324 16.0527 4.01324"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M18.7289 16.053C18.7289 11.6197 15.4354 8.02649 11.3713 8.02649C7.30721 8.02649 4.01367 11.6197 4.01367 16.053"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_network">
        <rect width="30.9134" height="30.9134" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ConnectionIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_connection)" transform="translate(15.457 15.457)">
      <path
        d="M28.0929 28.0928L20.0664 20.0663"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.40234 10.702C4.87164 9.12911 5.74613 7.70721 6.93815 6.57882C8.13018 5.45042 9.59786 4.65517 11.1941 4.27277C13.4345 3.73053 15.796 4.03109 17.8291 5.11722C19.8623 6.20335 21.425 7.9992 22.2198 10.1629"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.7416 5.35101V10.702H17.3906"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3473 16.053C21.8767 17.6234 21.0021 19.0428 19.811 20.1691C18.6198 21.2955 17.1538 22.0894 15.5596 22.4715C13.3194 23.0134 10.9582 22.7127 8.92532 21.6266C6.89249 20.5405 5.32996 18.7448 4.53516 16.5814"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.01367 21.404V16.053H9.36467"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_connection">
        <rect width="30.9134" height="30.9134" fill="white" />
      </clipPath>
    </defs>
  </svg>
);




export const GlobalIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_global)">
      <g transform="translate(15.457 15.4568) scale(0.7)">

        <path
          d="M34.5337 24.9239C38.7403 28.8478 41.0418 32.2652 40.2086 33.917C38.8412 36.5966 29.5948 33.4417 19.5518 26.873C9.51252 20.3043 2.47584 12.807 3.84133 10.1292C4.69293 8.45905 9.21153 9.31432 14.4918 11.6067"
          stroke="#56E000"
          strokeWidth="2.06089"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M9.17578 22.0241C9.17578 23.7112 9.50809 25.3818 10.1537 26.9405C10.7994 28.4993 11.7457 29.9155 12.9387 31.1085C14.1317 32.3015 15.548 33.2479 17.1067 33.8935C18.6654 34.5391 20.336 34.8714 22.0232 34.8714C23.7103 34.8714 25.3809 34.5391 26.9396 33.8935C28.4983 33.2479 29.9146 32.3015 31.1076 31.1085C32.3006 29.9155 33.2469 28.4993 33.8926 26.9405C34.5382 25.3818 34.8705 23.7112 34.8705 22.0241C34.8705 20.3369 34.5382 18.6663 33.8926 17.1076C33.2469 15.5489 32.3006 14.1326 31.1076 12.9396C29.9146 11.7466 28.4983 10.8003 26.9396 10.1546C25.3809 9.509 23.7103 9.1767 22.0232 9.1767C20.336 9.1767 18.6654 9.509 17.1067 10.1546C15.548 10.8003 14.1317 11.7466 12.9387 12.9396C11.7457 14.1326 10.7994 15.5489 10.1537 17.1076C9.50809 18.6663 9.17578 20.3369 9.17578 22.0241Z"
          stroke="#56E000"
          strokeWidth="2.06089"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

      </g>
    </g>

    <defs>
      <clipPath id="clip0_global">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


export const BrightIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_bright)">
      {/* Sun center */}
      <circle
        cx="31"
        cy="31"
        r="6"
        stroke="#56E000"
        strokeWidth="2.06089"
      />

      {/* Sun rays */}
      <path
        d="M31 20V23"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M31 39V42"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M20 31H23"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M39 31H42"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M23.5 23.5L25.5 25.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M36.5 36.5L38.5 38.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M23.5 38.5L25.5 36.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
      <path
        d="M36.5 25.5L38.5 23.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_bright">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


export const CoderIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_coder)">
      <path
        d="M24.5 27.5L18 34L24.5 40.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.5 27.5L44 34L37.5 40.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 20L28 48"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_coder">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


export const BillingIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_billing)">
      <path
        d="M26 20H23C22.2 20 21.5 20.3 20.9 20.9C20.3 21.5 20 22.2 20 23V40C20 40.8 20.3 41.5 20.9 42.1C21.5 42.7 22.2 43 23 43H39C39.8 43 40.5 42.7 41.1 42.1C41.7 41.5 42 40.8 42 40V23C42 22.2 41.7 21.5 41.1 20.9C40.5 20.3 39.8 20 39 20H36"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M26 20C26 19.2 26.3 18.5 26.9 17.9C27.5 17.3 28.2 17 29 17H32C32.8 17 33.5 17.3 34.1 17.9C34.7 18.5 35 19.2 35 20C35 20.8 34.7 21.5 34.1 22.1C33.5 22.7 32.8 23 32 23H29C28.2 23 27.5 22.7 26.9 22.1C26.3 21.5 26 20.8 26 20Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M34 30H30C29.3 30 28.7 30.3 28.2 30.8C27.7 31.3 27.4 31.9 27.4 32.6C27.4 33.3 27.7 33.9 28.2 34.4C28.7 34.9 29.3 35.2 30 35.2H31.6C32.3 35.2 32.9 35.5 33.4 36C33.9 36.5 34.2 37.1 34.2 37.8C34.2 38.5 33.9 39.1 33.4 39.6C32.9 40.1 32.3 40.4 31.6 40.4H27.4"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M31 40.4V42M31 28V30"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_billing">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);


export const EditerIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="none"
    />

    <g clipPath="url(#clip0_editer)">
      <path
        d="M31 36L44 23C44.6 22.4 45 21.6 45 20.8C45 20 44.6 19.2 44 18.6C43.4 18 42.6 17.6 41.8 17.6C41 17.6 40.2 18 39.6 18.6L26.5 31.6V36H31Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M37.5 21L42.5 26"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M26.5 23C23.8 23.4 21.3 24.8 19.6 27C17.9 29.2 17 32 17.2 34.8C17.4 37.6 18.7 40.2 20.7 42.1C22.7 44 25.4 45 28.2 45C30.9 45 33.5 44 35.6 42.2C37.7 40.4 39 37.9 39.4 35"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_editer">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

export const HeadsetIcon = (props) => (
  <svg
    {...props}
    width="44"
    height="44"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="none" />

    <g clipPath="url(#clip0_headset)">
      <path
        d="M18.6 36.5C18.6 35.7 18.9 34.9 19.5 34.3C20.1 33.7 20.9 33.4 21.7 33.4H23.2C24 33.4 24.8 33.7 25.4 34.3C26 34.9 26.3 35.7 26.3 36.5V41.3C26.3 42.1 26 42.9 25.4 43.5C24.8 44.1 24 44.4 23.2 44.4H21.7C20.9 44.4 20.1 44.1 19.5 43.5C18.9 42.9 18.6 42.1 18.6 41.3V36.5Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M35.7 36.5C35.7 35.7 36 34.9 36.6 34.3C37.2 33.7 38 33.4 38.8 33.4H40.3C41.1 33.4 41.9 33.7 42.5 34.3C43.1 34.9 43.4 35.7 43.4 36.5V41.3C43.4 42.1 43.1 42.9 42.5 43.5C41.9 44.1 41.1 44.4 40.3 44.4H38.8C38 44.4 37.2 44.1 36.6 43.5C36 42.9 35.7 42.1 35.7 41.3V36.5Z"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M18.6 36.5V31.7C18.6 28.3 19.9 25 22.4 22.5C24.9 20 28.2 18.7 31.6 18.7C35 18.7 38.3 20 40.8 22.5C43.3 25 44.6 28.3 44.6 31.7V36.5"
        stroke="#56E000"
        strokeWidth="2.06089"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_headset">
        <rect
          width="30.9134"
          height="30.9134"
          transform="translate(15.457 15.4568)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);