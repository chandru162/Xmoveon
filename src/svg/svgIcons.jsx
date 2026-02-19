import React from 'react';

// ✅ QatarFlag - Fixed IDs
const QatarFlag = (props) => {
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
        {/* ✅ Renamed ID to clip_qatar */}
        <clipPath id="clip_qatar">
          <rect width="32" height="24" fill="white" style={{ fill: 'white', fillOpacity: 1 }} />
        </clipPath>
      </defs>
    </svg>
  );
};

// ✅ USAFlag - Fixed IDs
const USAFlag = (props) => {
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
        <path
          d="M34 8L34 16L-2 16L-2 8Z"
          fill="#3D58DB"
          stroke="#F7FCFF"
          strokeWidth="4"
        />
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


const IndiaFlag = (props) => {
  return (
    <svg
      {...props}
      width="32"
      height="24"
      viewBox="0 0 32 24"
      xmlns="http://www.w3.org/2000/svg"
    >
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

export { QatarFlag, USAFlag ,IndiaFlag};
