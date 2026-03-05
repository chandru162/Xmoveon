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
     width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_4151)">
      <path
        d="M8.80273 2.40039H16.8044V8.80174H14.4039L11.2032 10.4021V8.80174H8.80273V2.40039Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0017 12.8028V16.0035C12.0017 16.2157 11.9174 16.4192 11.7673 16.5693C11.6173 16.7194 11.4137 16.8037 11.2015 16.8037H4.80017C4.58795 16.8037 4.38442 16.7194 4.23436 16.5693C4.0843 16.4192 4 16.2157 4 16.0035V4.80114C4 4.58893 4.0843 4.3854 4.23436 4.23534C4.38442 4.08528 4.58795 4.00098 4.80017 4.00098H6.40051"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00195 14.4028V14.4108"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_4151">
        <rect width="19.204" height="19.204" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const RectangleIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_4156)">
      <path
        d="M3.20117 3.20068H8.00218V9.60203H3.20117V3.20068Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.20117 12.8027H8.00218V16.0034H3.20117V12.8027Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2031 9.60205H16.0041V16.0034H11.2031V9.60205Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2031 3.20068H16.0041V6.40136H11.2031V3.20068Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_4156">
        <rect width="19.204" height="19.204" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const HeartPinIcon = (props) => (
  <svg
    {...props}
     width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_4162)">
      <path
        d="M9.60254 16.0032L3.60128 10.0596C3.20544 9.67439 2.89364 9.21141 2.68552 8.6998C2.4774 8.18819 2.37747 7.63903 2.39201 7.0869C2.40656 6.53477 2.53526 5.99163 2.77003 5.49169C3.00479 4.99174 3.34053 4.54582 3.7561 4.182C4.17167 3.81819 4.65806 3.54436 5.18466 3.37776C5.71125 3.21115 6.26664 3.15539 6.81585 3.21398C7.36505 3.27256 7.89618 3.44423 8.37578 3.71817C8.85538 3.99211 9.27307 4.36238 9.60254 4.80567C10.1993 4.0103 11.0709 3.46567 12.0474 3.27794C13.0239 3.09021 14.0353 3.27284 14.8844 3.79023C15.7336 4.30761 16.3597 5.12268 16.6406 6.07654C16.9215 7.0304 16.8372 8.05469 16.404 8.94974"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9004 16.1001C17.2362 15.7644 17.4649 15.3367 17.5576 14.871C17.6503 14.4054 17.6028 13.9227 17.4211 13.484C17.2394 13.0453 16.9317 12.6704 16.537 12.4066C16.1422 12.1428 15.678 12.002 15.2032 12.002C14.7284 12.002 14.2643 12.1428 13.8695 12.4066C13.4747 12.6704 13.1671 13.0453 12.9854 13.484C12.8037 13.9227 12.7562 14.4054 12.8489 14.871C12.9416 15.3367 13.1703 15.7644 13.5061 16.1001C13.8406 16.4354 14.4063 16.9363 15.2032 17.6036C16.0442 16.8915 16.6107 16.3906 16.9004 16.1001Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2031 14.4028V14.4108"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_4162">
        <rect width="19.204" height="19.204" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const TopologyIcon = (props) => (
  <svg
    {...props}
     width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_4167)">
      <path
        d="M16.0034 14.4031C16.0034 13.9786 15.8348 13.5716 15.5347 13.2715C15.2346 12.9713 14.8275 12.8027 14.4031 12.8027C13.9786 12.8027 13.5716 12.9713 13.2715 13.2715C12.9713 13.5716 12.8027 13.9786 12.8027 14.4031C12.8027 14.8275 12.9713 15.2346 13.2715 15.5347C13.5716 15.8348 13.9786 16.0034 14.4031 16.0034C14.8275 16.0034 15.2346 15.8348 15.5347 15.5347C15.8348 15.2346 16.0034 14.8275 16.0034 14.4031Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.40185 14.4031C6.40185 13.9786 6.23324 13.5716 5.93312 13.2715C5.633 12.9713 5.22594 12.8027 4.80151 12.8027C4.37707 12.8027 3.97002 12.9713 3.6699 13.2715C3.36978 13.5716 3.20117 13.9786 3.20117 14.4031C3.20117 14.8275 3.36978 15.2346 3.6699 15.5347C3.97002 15.8348 4.37707 16.0034 4.80151 16.0034C5.22594 16.0034 5.633 15.8348 5.93312 15.5347C6.23324 15.2346 6.40185 14.8275 6.40185 14.4031Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.40185 4.80102C6.40185 4.37658 6.23324 3.96953 5.93312 3.66941C5.633 3.36929 5.22594 3.20068 4.80151 3.20068C4.37707 3.20068 3.97002 3.36929 3.6699 3.66941C3.36978 3.96953 3.20117 4.37658 3.20117 4.80102C3.20117 5.22546 3.36978 5.63251 3.6699 5.93263C3.97002 6.23275 4.37707 6.40136 4.80151 6.40136C5.22594 6.40136 5.633 6.23275 5.93312 5.93263C6.23324 5.63251 6.40185 5.22546 6.40185 4.80102Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0034 4.80102C16.0034 4.37658 15.8348 3.96953 15.5347 3.66941C15.2346 3.36929 14.8275 3.20068 14.4031 3.20068C13.9786 3.20068 13.5716 3.36929 13.2715 3.66941C12.9713 3.96953 12.8027 4.37658 12.8027 4.80102C12.8027 5.22546 12.9713 5.63251 13.2715 5.93263C13.5716 6.23275 13.9786 6.40136 14.4031 6.40136C14.8275 6.40136 15.2346 6.23275 15.5347 5.93263C15.8348 5.63251 16.0034 5.22546 16.0034 4.80102Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2026 9.6018C11.2026 9.17737 11.034 8.77031 10.7339 8.47019C10.4338 8.17007 10.0267 8.00146 9.60229 8.00146C9.17785 8.00146 8.7708 8.17007 8.47068 8.47019C8.17056 8.77031 8.00195 9.17737 8.00195 9.6018C8.00195 10.0262 8.17056 10.4333 8.47068 10.7334C8.7708 11.0335 9.17785 11.2021 9.60229 11.2021C10.0267 11.2021 10.4338 11.0335 10.7339 10.7334C11.034 10.4333 11.2026 10.0262 11.2026 9.6018Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.80078 6.40137V12.8027"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4023 12.8027V6.40137"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.40039 4.80078H12.8017"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8017 14.4028H6.40039"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00195 6.00146L8.40246 8.40197"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8027 10.8022L13.2032 13.2028"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2032 6.00146L10.8027 8.40197"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.40246 10.8022L6.00195 13.2028"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_4167">
        <rect width="19.204" height="19.204" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CloverIcon = (props) => (
  <svg
    {...props}
     width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_4174)">
      <path
        d="M9.60155 8.0015L6.88337 5.24892C6.57384 4.93406 6.40039 4.5102 6.40039 4.06867C6.40039 3.62714 6.57384 3.20328 6.88337 2.88842C7.03533 2.73358 7.21663 2.61059 7.41666 2.52662C7.6167 2.44266 7.83147 2.39941 8.04842 2.39941C8.26537 2.39941 8.48014 2.44266 8.68018 2.52662C8.88021 2.61059 9.06151 2.73358 9.21347 2.88842L9.60155 3.20049L9.98963 2.88842C10.1416 2.73358 10.3229 2.61059 10.5229 2.52662C10.723 2.44266 10.9377 2.39941 11.1547 2.39941C11.3716 2.39941 11.5864 2.44266 11.7864 2.52662C11.9865 2.61059 12.1678 2.73358 12.3197 2.88842C12.6293 3.20328 12.8027 3.62714 12.8027 4.06867C12.8027 4.5102 12.6293 4.93406 12.3197 5.24892L9.60155 8.0015Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.60155 11.2021L6.88337 13.9547C6.57384 14.2696 6.40039 14.6934 6.40039 15.135C6.40039 15.5765 6.57384 16.0004 6.88337 16.3152C7.03533 16.4701 7.21663 16.5931 7.41666 16.677C7.6167 16.761 7.83147 16.8042 8.04842 16.8042C8.26537 16.8042 8.48014 16.761 8.68018 16.677C8.88021 16.5931 9.06151 16.4701 9.21347 16.3152L9.60155 16.0032L9.98963 16.3152C10.1416 16.4701 10.3229 16.5931 10.5229 16.677C10.723 16.761 10.9377 16.8042 11.1547 16.8042C11.3716 16.8042 11.5864 16.761 11.7864 16.677C11.9865 16.5931 12.1678 16.4701 12.3197 16.3152C12.6293 16.0004 12.8027 15.5765 12.8027 15.135C12.8027 14.6934 12.6293 14.2696 12.3197 13.9547L9.60155 11.2021Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2031 9.60204L13.9557 6.88386C14.2706 6.57433 14.6944 6.40088 15.136 6.40088C15.5775 6.40088 16.0013 6.57433 16.3162 6.88386C16.471 7.03582 16.594 7.21711 16.678 7.41715C16.762 7.61719 16.8052 7.83196 16.8052 8.04891C16.8052 8.26585 16.762 8.48062 16.678 8.68066C16.594 8.8807 16.471 9.062 16.3162 9.21395L16.0041 9.60204L16.3162 9.99012C16.471 10.1421 16.594 10.3234 16.678 10.5234C16.762 10.7234 16.8052 10.9382 16.8052 11.1552C16.8052 11.3721 16.762 11.5869 16.678 11.7869C16.594 11.987 16.471 12.1683 16.3162 12.3202C16.0013 12.6297 15.5775 12.8032 15.136 12.8032C14.6944 12.8032 14.2706 12.6297 13.9557 12.3202L11.2031 9.60204Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00248 9.60204L5.2499 6.88386C4.93503 6.57433 4.51118 6.40088 4.06965 6.40088C3.62812 6.40088 3.20426 6.57433 2.8894 6.88386C2.73456 7.03582 2.61156 7.21711 2.5276 7.41715C2.44364 7.61719 2.40039 7.83196 2.40039 8.04891C2.40039 8.26585 2.44364 8.48062 2.5276 8.68066C2.61156 8.8807 2.73456 9.062 2.8894 9.21395L3.20146 9.60204L2.8894 9.99012C2.73456 10.1421 2.61156 10.3234 2.5276 10.5234C2.44364 10.7234 2.40039 10.9382 2.40039 11.1552C2.40039 11.3721 2.44364 11.5869 2.5276 11.7869C2.61156 11.987 2.73456 12.1683 2.8894 12.3202C3.20426 12.6297 3.62812 12.8032 4.06965 12.8032C4.51118 12.8032 4.93503 12.6297 5.2499 12.3202L8.00248 9.60204Z"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_4174">
        <rect width="19.204" height="19.204" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const RouteIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_4179)">
      <path
        d="M9.60156 6.43324V2.40039"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4023 8.00189L16.0031 6.00146"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4023 11.2021L16.0031 13.2026"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.60156 12.7705V16.8034"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.80193 11.2021L3.20117 13.2026"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.80193 8.00149L3.20117 5.99707"
        strokeWidth="1.60034"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_4179">
        <rect width="19.204" height="19.204" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/* ADVANCED FEATURES SVG ICONS END  */




/* PLATFORM FEATURES SVG ICONS START */

export const MenuIcon = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5876)">
      <path
        d="M5 7.5H25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15H25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 22.5H25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5876">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const BalanceIcon = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_menu)">
      {/* Container */}
      <path
        d="
          M3.719 6.2
          C3.719 5.542 3.98 4.911 4.445 4.446
          C4.91 3.981 5.541 3.72 6.199 3.72
          H23.558
          C24.215 3.72 24.846 3.981 25.311 4.446
          C25.776 4.911 26.038 5.542 26.038 6.2
          V23.559
          C26.038 24.216 25.776 24.847 25.311 25.312
          C24.846 25.777 24.215 26.039 23.558 26.039
          H6.199
          C5.541 26.039 4.91 25.777 4.445 25.312
          C3.98 24.847 3.719 24.216 3.719 23.559
          V6.2
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lines */}
      <path
        d="M18.598 21.079H21.078"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
      />
      <path
        d="M13.641 17.359H21.08"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
      />
      <path
        d="M16.117 13.639H21.077"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_menu">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const StoredIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
     <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />
    <g clipPath="url(#clip0_balance)">
      {/* Base */}
      <path
        d="M8.68 24.799H21.079"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top bar */}
      <path
        d="M7.441 7.44L14.881 6.2L22.321 7.44"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center pole */}
      <path
        d="M14.879 3.72V24.799"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left scale */}
      <path
        d="
          M11.158 14.879
          L7.439 7.44
          L3.719 14.879
          C3.719 15.866 4.111 16.812 4.808 17.51
          C5.506 18.207 6.452 18.599 7.439 18.599
          C8.425 18.599 9.371 18.207 10.069 17.51
          C10.766 16.812 11.158 15.866 11.158 14.879
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right scale */}
      <path
        d="
          M26.037 14.879
          L22.318 7.44
          L18.598 14.879
          C18.598 15.866 18.99 16.812 19.687 17.51
          C20.385 18.207 21.331 18.599 22.318 18.599
          C23.304 18.599 24.25 18.207 24.948 17.51
          C25.645 16.812 26.037 15.866 26.037 14.879
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_balance">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LinkIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

     <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_window)">
      {/* Frame */}
      <path
        d="
          M3.719 8.68
          C3.719 8.022 3.98 7.391 4.445 6.926
          C4.91 6.461 5.541 6.2 6.199 6.2
          H23.558
          C24.215 6.2 24.846 6.461 25.311 6.926
          C25.776 7.391 26.038 8.022 26.038 8.68
          V21.079
          C26.038 21.737 25.776 22.367 25.311 22.832
          C24.846 23.298 24.215 23.559 23.558 23.559
          H6.199
          C5.541 23.559 4.91 23.298 4.445 22.832
          C3.98 22.367 3.719 21.737 3.719 21.079
          V8.68
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      <path
        d="M7.441 9.919H7.454"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
      />
      <path
        d="M11.16 9.919H11.173"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_window">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/*  PLATFORM FEATURES SVG ICONS END  */


export const SectionLayoutIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5881)">
      <path
        d="M3.75 6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 21.25H21.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 17.5H21.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.25 13.75H21.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5881">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ScalesIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5886)">
      <path
        d="M8.75 25H21.25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 7.5L15 6.25L22.5 7.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3.75V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 15L7.5 7.5L3.75 15C3.75 15.9946 4.14509 16.9484 4.84835 17.6517C5.55161 18.3549 6.50544 18.75 7.5 18.75C8.49456 18.75 9.44839 18.3549 10.1517 17.6517C10.8549 16.9484 11.25 15.9946 11.25 15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.25 15L22.5 7.5L18.75 15C18.75 15.9946 19.1451 16.9484 19.8483 17.6517C20.5516 18.3549 21.5054 18.75 22.5 18.75C23.4946 18.75 24.4484 18.3549 25.1517 17.6517C25.8549 16.9484 26.25 15.9946 26.25 15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5886">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const WindowCardIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_132_5891)">
      <path
        d="M3.75 8.75C3.75 8.08696 4.01339 7.45107 4.48223 6.98223C4.95107 6.51339 5.58696 6.25 6.25 6.25H23.75C24.413 6.25 25.0489 6.51339 25.5178 6.98223C25.9866 7.45107 26.25 8.08696 26.25 8.75V21.25C26.25 21.913 25.9866 22.5489 25.5178 23.0178C25.0489 23.4866 24.413 23.75 23.75 23.75H6.25C5.58696 23.75 4.95107 23.4866 4.48223 23.0178C4.01339 22.5489 3.75 21.913 3.75 21.25V8.75Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10H7.5125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 10H11.2625"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_132_5891">
        <rect width="30" height="30" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowButtonIcon = (props) => (
  <svg
    {...props}
    width="134"
    height="53"
    viewBox="0 0 134 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Border Shapes */}
    <rect
      x="0.5"
      y="0.5"
      width="132.38"
      height="51.056"
      rx="25.528"
      stroke="#56E000"
    />
    <rect
      x="0.5"
      y="0.5"
      width="114.727"
      height="51.056"
      rx="25.528"
      stroke="#56E000"
    />
    <rect
      x="0.5"
      y="0.5"
      width="99.0353"
      height="50"
      rx="25"
      stroke="#56E000"
    />

    {/* Primary Arrow Path */}
    <path
      d="M56.9295 15.1576L34.0176 37.3535L37.7817 41L60.6936 18.8067L60.6936 38.367L66.0176 38.367L66.0176 10L36.7355 10L36.7355 15.1576L56.9295 15.1576Z"
      fill="#56E000"
    />
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
      stroke="#56E000"
    />
    <rect
      x="0.5"
      y="0.5"
      width="114.727"
      height="51.056"
      rx="25.528"
      stroke="#56E000"
    />
    <rect
      x="0.5"
      y="0.5"
      width="99.0353"
      height="51.056"
      rx="25.528"
      stroke="#56E000"
    />

    {/* Arrow Icon Path */}
    <path
      d="M56.9409 36.7227L33.9889 13.7707L37.7596 10L60.7116 32.9493L60.7116 12.7227L66.0449 12.7227L66.0449 42.056L36.7116 42.056L36.7116 36.7227L56.9409 36.7227Z"
      fill="#56E000"
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
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_localisation)">
      {/* Top Left Block */}
      <path
        d="M5.19531 5.19702H12.991V15.5912H5.19531V5.19702Z"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Left Block */}
      <path
        d="M5.19531 20.7883H12.991V25.9854H5.19531V20.7883Z"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Right Block */}
      <path
        d="M18.1914 15.5913H25.9871V25.9855H18.1914V15.5913Z"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top Right Block */}
      <path
        d="M18.1914 5.19702H25.9871V10.3941H18.1914V5.19702Z"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_localisation">
        <rect width="31.1827" height="31.1827" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const OrbitIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_orbit)">
      <path
        d="M20.789 23.3869C21.4782 23.3869 22.1392 23.6607 22.6265 24.148C23.1138 24.6353 23.3876 25.2963 23.3876 25.9855C23.3876 25.2963 23.6614 24.6353 24.1487 24.148C24.636 23.6607 25.297 23.3869 25.9862 23.3869C25.297 23.3869 24.636 23.1131 24.1487 22.6258C23.6614 22.1385 23.3876 21.4775 23.3876 20.7884C23.3876 21.4775 23.1138 22.1385 22.6265 22.6258C22.1392 23.1131 21.4782 23.3869 20.789 23.3869ZM20.789 7.79558C21.4782 7.79558 22.1392 8.06935 22.6265 8.55668C23.1138 9.044 23.3876 9.70495 23.3876 10.3941C23.3876 9.70495 23.6614 9.044 24.1487 8.55668C24.636 8.06935 25.297 7.79558 25.9862 7.79558C25.297 7.79558 24.636 7.5218 24.1487 7.03448C23.6614 6.54715 23.3876 5.8862 23.3876 5.19702C23.3876 5.8862 23.1138 6.54715 22.6265 7.03448C22.1392 7.5218 21.4782 7.79558 20.789 7.79558ZM11.6941 23.3869C11.6941 21.3194 12.5154 19.3365 13.9774 17.8745C15.4394 16.4126 17.4222 15.5912 19.4898 15.5912C17.4222 15.5912 15.4394 14.7699 13.9774 13.3079C12.5154 11.846 11.6941 9.86312 11.6941 7.79558C11.6941 9.86312 10.8728 11.846 9.41081 13.3079C7.94883 14.7699 5.96598 15.5912 3.89844 15.5912C5.96598 15.5912 7.94883 16.4126 9.41081 17.8745C10.8728 19.3365 11.6941 21.3194 11.6941 23.3869Z"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_orbit">
        <rect width="31.1827" height="31.1827" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const DocumentArrowIcon = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 32 32" fill="none">
    <g clipPath="url(#clip0_doc)">
      <path
        d="M18.1914 3.89795V9.09506C18.1914 9.43965 18.3283 9.77013 18.572 10.0138C18.8156 10.2575 19.1461 10.3943 19.4907 10.3943H24.6878"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0874 27.2849H9.09465C8.40547 27.2849 7.74452 27.0112 7.25719 26.5238C6.76987 26.0365 6.49609 25.3756 6.49609 24.6864V6.4965C6.49609 5.80732 6.76987 5.14637 7.25719 4.65905C7.74452 4.17172 8.40547 3.89795 9.09465 3.89795H18.1896L24.686 10.3943V24.6864C24.686 25.3756 24.4122 26.0365 23.9249 26.5238C23.4376 27.0112 22.7766 27.2849 22.0874 27.2849Z"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5907 14.292L12.9922 18.1898H18.1893L15.5907 22.0877"
        stroke="currentColor"
        strokeWidth="2.07884"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const HistoryIcon = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 32 32" fill="none">
    <path
      d="M15.5898 9.09497V15.5914L18.1884 18.1899"
      stroke="currentColor"
      strokeWidth="2.07884"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.0859 28.584L28.5823 24.6862L22.0859 20.7883V28.584Z"
      stroke="currentColor"
      strokeWidth="2.07884"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.9125 27.2109C14.4671 27.4888 11.9963 26.9881 9.85208 25.78C7.70783 24.5719 5.99942 22.7181 4.97014 20.4825C3.94087 18.2469 3.64321 15.7436 4.11956 13.329C4.59591 10.9143 5.82197 8.71158 7.62315 7.03438C9.42433 5.35717 11.7088 4.29103 14.1512 3.98779C16.5936 3.68455 19.0694 4.15967 21.226 5.34549C23.3827 6.53131 25.1102 8.36737 26.1626 10.5922C27.2149 12.817 27.5385 15.3171 27.0872 17.7366"
      stroke="currentColor"
      strokeWidth="2.07884"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const MobileCheckIcon = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 32 32" fill="none">
    <path
      d="M14.9429 27.2849H10.3954C9.70625 27.2849 9.0453 27.0112 8.55797 26.5238C8.07065 26.0365 7.79688 25.3756 7.79688 24.6864V6.4965C7.79688 5.80732 8.07065 5.14637 8.55797 4.65905C9.0453 4.17172 9.70625 3.89795 10.3954 3.89795H20.7897C21.4788 3.89795 22.1398 4.17172 22.6271 4.65905C23.1144 5.14637 23.3882 5.80732 23.3882 6.4965V18.8396"
      stroke="currentColor"
      strokeWidth="2.07884"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19.4883 24.6862L22.0868 27.2848L27.2839 22.0876"
      stroke="currentColor"
      strokeWidth="2.07884"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClockBoxIcon = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 32 32" fill="none">
    <path
      d="M5.19531 6.4963C5.19531 6.15171 5.3322 5.82123 5.57586 5.57757C5.81952 5.33391 6.15 5.19702 6.49459 5.19702H24.6845C25.0291 5.19702 25.3595 5.33391 25.6032 5.57757C25.8469 5.82123 25.9838 6.15171 25.9838 6.4963V24.6862C25.9838 25.0308 25.8469 25.3613 25.6032 25.6049C25.3595 25.8486 25.0291 25.9855 24.6845 25.9855H6.49459C6.15 25.9855 5.81952 25.8486 5.57586 25.6049C5.3322 25.3613 5.19531 25.0308 5.19531 24.6862V6.4963Z"
      stroke="currentColor"
      strokeWidth="2.07884"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.5898 9.09497V15.5914L19.4877 19.4892"
      stroke="currentColor"
      strokeWidth="2.07884"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LayoutIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_layout_new)">
      {/* Top Header Block */}
      <path
        d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side Image/Icon Square */}
      <path
        d="M4 13C4 12.4477 4.44772 12 5 12H9C9.55228 12 10 12.4477 10 13V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V13Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Side Text Lines */}
      <path
        d="M14 12H20M14 16H20M14 20H20"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_layout_new">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PayPalIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_paypal)">
      <path
        d="M17.5 7.2C19.2 8.2 20 10 20 12C20 14.5 17.5 16.5 15 16.5H12.4L11.8 20.1C11.7532 20.3293 11.6276 20.5349 11.4449 20.6811C11.2621 20.8272 11.0339 20.9047 10.8 20.9H8.1C8.02501 20.9015 7.95064 20.8861 7.88239 20.855C7.81415 20.8239 7.75378 20.7778 7.70577 20.7202C7.65775 20.6626 7.62331 20.5949 7.605 20.5222C7.58669 20.4494 7.58498 20.3735 7.6 20.3L7.8 18.9M10 13H12.5C15 13 17.5 10.5 17.5 8C17.5 5 15.6 3 12.5 3H7C6.5 3 6 3.5 6 4L4 18C4 18.5 4.5 19 5 19H7.8L9 14C9.1 13.4 9.4 13 10 13Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_paypal">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ProfileCardIcon = (props) => (
  <svg
    {...props}
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#56E000"
  >
    <g clipPath="url(#clip0_227_5098)">
      <path
        d="M21.4047 6.42119V19.2636C21.4047 19.8313 21.1792 20.3757 20.7778 20.7771C20.3764 21.1785 19.8319 21.404 19.2643 21.404H8.56227C7.99461 21.404 7.45019 21.1785 7.04878 20.7771C6.64738 20.3757 6.42188 19.8313 6.42188 19.2636V6.42119C6.42188 5.85352 6.64738 5.3091 7.04878 4.9077C7.45019 4.5063 7.99461 4.28079 8.56227 4.28079H19.2643C19.8319 4.28079 20.3764 4.5063 20.7778 4.9077C21.1792 5.3091 21.4047 5.85352 21.4047 6.42119Z"
        strokeWidth="2.1404"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7012 17.1232H17.1224"
        strokeWidth="2.1404"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7715 11.7722C11.7715 12.3399 11.997 12.8843 12.3984 13.2857C12.7998 13.6871 13.3442 13.9126 13.9119 13.9126C14.4796 13.9126 15.024 13.6871 15.4254 13.2857C15.8268 12.8843 16.0523 12.3399 16.0523 11.7722C16.0523 11.2045 15.8268 10.6601 15.4254 10.2587C15.024 9.85731 14.4796 9.63181 13.9119 9.63181C13.3442 9.63181 12.7998 9.85731 12.3984 10.2587C11.997 10.6601 11.7715 11.2045 11.7715 11.7722Z"
        strokeWidth="2.1404"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.28125 8.5616H7.49185"
        strokeWidth="2.1404"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.28125 12.8424H7.49185"
        strokeWidth="2.1404"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.28125 17.1232H7.49185"
        strokeWidth="2.1404"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_227_5098">
        <rect width="25.6848" height="25.6848" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const StarIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_star)">
      <path
        d="M12.0008 17.75L5.82881 20.995L7.00781 14.122L2.00781 9.25495L8.90781 8.25495L11.9938 2.00195L15.0798 8.25495L21.9798 9.25495L16.9798 14.122L18.1588 20.995L12.0008 17.75Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_star">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ChatSearchIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_chat_search)">
      {/* Message Lines */}
      <path
        d="M8 9H16M8 13H13"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Chat Bubble Frame */}
      <path
        d="M11.008 19.195L8 21V18H6C4.89543 18 4 17.1046 4 16V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V11.5"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Magnifying Glass (Search) */}
      <path
        d="M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18Z"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.1992 20.2002L21.9992 22.0002"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_chat_search">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const PricingIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_pricing_new)">
      {/* S-shape for Currency */}
      <path
        d="M16.7 8C16.501 7.43524 16.1374 6.94297 15.6563 6.58654C15.1751 6.23011 14.5983 6.02583 14 6H10C9.20435 6 8.44129 6.31607 7.87868 6.87868C7.31607 7.44129 7 8.20435 7 9C7 9.79565 7.31607 10.5587 7.87868 11.1213C8.44129 11.6839 9.20435 12 10 12H14C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H10C9.40175 17.9742 8.82491 17.7699 8.34373 17.4135C7.86255 17.057 7.49905 16.5648 7.3 16"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vertical Line for Dollar Symbol */}
      <path
        d="M12 3V6M12 18V21"
        stroke="#56E000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_pricing_new">
        <rect width="24" height="24" fill="white" />
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      stroke="currentColor"
      strokeWidth="2.00219"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.1992 17.3523H33.8699"
      stroke="currentColor"
      strokeWidth="2.00219"
      strokeLinecap="round"
    />
    <path
      d="M43.0486 50.3884L49.197 44.3611C49.574 43.9953 49.8739 43.5576 50.079 43.0739C50.2841 42.5902 50.3902 42.0703 50.3911 41.5449C50.3919 41.0195 50.2875 40.4993 50.084 40.015C49.8805 39.5306 49.582 39.0919 49.2062 38.7248C48.4392 37.9748 47.4097 37.5539 46.337 37.5518C45.2643 37.5498 44.2332 37.9667 43.4634 38.7138L43.0523 39.1176L42.643 38.7138C41.8761 37.9643 40.847 37.5438 39.7748 37.5417C38.7025 37.5397 37.6718 37.9563 36.9021 38.7028C36.5249 39.0685 36.2248 39.5062 36.0196 39.9898C35.8143 40.4734 35.7081 40.9933 35.707 41.5186C35.706 42.044 35.8103 42.5643 36.0136 43.0487C36.217 43.5331 36.5153 43.9719 36.891 44.3391L43.0486 50.3884Z"
      stroke="currentColor"
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
      fill="#E4FFD4"
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
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background */}
    <rect
      width="64.07"
      height="64.07"
      rx="10.01"
      fill="#E4FFD4"
    />
    <g clipPath="url(#clip0_star)">
      <path
        d="
          M14.877 1.24
          C15.08 1.241 15.278 1.291 15.456 1.387
          C15.634 1.483 15.786 1.621 15.898 1.789
          L15.981 1.933
          L19.517 9.101
          L27.428 10.248
          C28.347 10.382 28.767 11.414 28.3 12.14
          L28.213 12.258
          L28.116 12.365
          L22.383 17.943
          L23.734 25.823
          C23.769 26.028 23.752 26.24 23.684 26.437
          C23.616 26.634 23.5 26.811 23.346 26.951
          C23.191 27.091 23.004 27.19 22.801 27.239
          C22.599 27.288 22.387 27.285 22.186 27.23
          L22.06 27.187
          L21.935 27.13
          L14.876 23.41
          L7.801 27.13
          C7.671 27.198 7.538 27.241 7.404 27.261
          L7.273 27.274
          C7.1 27.28 6.927 27.25 6.767 27.186
          C6.606 27.122 6.46 27.025 6.339 26.901
          C6.218 26.777 6.124 26.63 6.063 26.467
          C6.002 26.305 5.976 26.132 5.986 25.959
          L6.002 25.823
          L7.353 17.943
          L1.621 12.363
          C1.473 12.219 1.363 12.04 1.302 11.842
          C1.241 11.645 1.23 11.435 1.27 11.232
          C1.31 11.029 1.401 10.839 1.533 10.68
          C1.666 10.521 1.836 10.398 2.028 10.321
          L2.168 10.277
          L2.309 10.248
          L10.219 9.101
          L13.756 1.934
          C13.855 1.722 14.014 1.543 14.213 1.419
          C14.412 1.296 14.643 1.234 14.877 1.24
          Z
        "
        fill="#56E000"
      />
    </g>

    <defs>
      <clipPath id="clip0_star">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const UserIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_user)">
      {/* Head */}
      <path
        d="
          M11.778 3.72
          H17.978
          C18.471 3.72 18.944 3.916 19.293 4.264
          C19.642 4.613 19.837 5.086 19.837 5.58
          C19.837 6.731 19.38 7.834 18.566 8.648
          C17.753 9.462 16.649 9.919 15.498 9.919
          H14.258
          C13.107 9.919 12.003 9.462 11.189 8.648
          C10.375 7.834 9.918 6.731 9.918 5.58
          C9.918 5.086 10.114 4.613 10.463 4.264
          C10.812 3.916 11.285 3.72 11.778 3.72
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Body */}
      <path
        d="
          M4.961 21.079
          V19.839
          C4.961 17.208 6.006 14.685 7.866 12.825
          C9.727 10.965 12.25 9.919 14.88 9.919
          C17.511 9.919 20.034 10.965 21.895 12.825
          C23.755 14.685 24.8 17.208 24.8 19.839
          V21.079
          C24.8 22.394 24.277 23.656 23.347 24.586
          C22.417 25.516 21.156 26.039 19.84 26.039
          H9.921
          C8.605 26.039 7.344 25.516 6.414 24.586
          C5.483 23.656 4.961 22.394 4.961 21.079
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_user">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MapHeartIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_location)">
      {/* Map */}
      <path
        d="
          M14.878 22.939
          L11.158 21.079
          L3.719 24.799
          V8.68
          L11.158 4.96
          L18.598 8.68
          L26.038 4.96
          V14.259
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left fold */}
      <path
        d="M11.16 4.96V21.079"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right fold */}
      <path
        d="M18.598 8.679V15.499"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Location pin */}
      <path
        d="
          M26.19 24.949
          C26.71 24.429 27.064 23.766 27.208 23.044
          C27.352 22.323 27.278 21.575 26.996 20.895
          C26.715 20.215 26.238 19.634 25.626 19.225
          C25.015 18.816 24.295 18.598 23.56 18.598
          C22.824 18.598 22.105 18.816 21.493 19.225
          C20.881 19.634 20.404 20.215 20.123 20.895
          C19.841 21.575 19.768 22.323 19.911 23.044
          C20.055 23.766 20.409 24.429 20.93 24.949
          C21.448 25.468 22.325 26.244 23.56 27.279
          C24.863 26.175 25.741 25.399 26.19 24.949
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pin dot */}
      <path
        d="M23.559 22.319V22.331"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_location">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const BookmarkIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_bookmark)">
      {/* Outer box */}
      <path
        d="
          M4.961 7.44
          C4.961 6.782 5.222 6.151 5.687 5.686
          C6.152 5.221 6.783 4.96 7.441 4.96
          H22.32
          C22.978 4.96 23.609 5.221 24.074 5.686
          C24.539 6.151 24.8 6.782 24.8 7.44
          V22.319
          C24.8 22.977 24.539 23.607 24.074 24.072
          C23.609 24.537 22.978 24.799 22.32 24.799
          H7.441
          C6.783 24.799 6.152 24.537 5.687 24.072
          C5.222 23.607 4.961 22.977 4.961 22.319
          V7.44
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bookmark */}
      <path
        d="
          M14.879 4.96
          V13.639
          L17.359 11.159
          L19.839 13.639
          V4.96
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_bookmark">
        <rect width="29.758" height="29.758" fill="white" />
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
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.7207 21.0789L13.6402 27.2786L22.3197 22.3188V12.3994L17.36 9.29954L22.3197 6.19971L27.2794 9.29954V14.2593L13.6402 22.3188L8.68044 19.219V9.91951L3.7207 6.81967V21.0789Z"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6387 22.3188V27.2786"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
    />
    <path
      d="M8.67969 19.219L17.3592 14.2593"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
    />
    <path
      d="M17.3594 9.29944V14.2592M17.3594 14.2593L22.3191 17.3591"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
    />
    <path
      d="M13.6402 16.1192V6.81968L8.68044 3.71985L3.7207 6.81968"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
    />
    <path
      d="M8.67969 9.91941L13.6394 6.81958M22.3184 12.3993L27.2781 9.29944"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
    />
  </svg>
);

export const SearchSettingsIcon = (props) => (
  <svg
    {...props}
    width="28"
    height="28"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.7207 12.3994C3.7207 13.5392 3.94521 14.6678 4.38139 15.7209C4.81758 16.7739 5.45691 17.7308 6.26288 18.5367C7.06885 19.3427 8.02567 19.982 9.07872 20.4182C10.1318 20.8544 11.2604 21.0789 12.4002 21.0789C13.54 21.0789 14.6687 20.8544 15.7217 20.4182C16.7748 19.982 17.7316 19.3427 18.5376 18.5367C19.3436 17.7308 19.9829 16.7739 20.4191 15.7209C20.8553 14.6678 21.0798 13.5392 21.0798 12.3994C21.0798 11.2596 20.8553 10.1309 20.4191 9.07787C19.9829 8.02482 19.3436 7.06799 18.5376 6.26202C17.7316 5.45606 16.7748 4.81673 15.7217 4.38054C14.6687 3.94435 13.54 3.71985 12.4002 3.71985C11.2604 3.71985 10.1318 3.94435 9.07872 4.38054C8.02567 4.81673 7.06885 5.45606 6.26288 6.26202C5.45691 7.06799 4.81758 8.02482 4.38139 9.07787C3.94521 10.1309 3.7207 11.2596 3.7207 12.3994Z"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.0392 26.0386L18.5996 18.599"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8797 8.67957H11.7798C11.2865 8.67957 10.8135 8.87552 10.4647 9.22432C10.1159 9.57312 9.91992 10.0462 9.91992 10.5395C9.91992 11.0327 10.1159 11.5058 10.4647 11.8546C10.8135 12.2034 11.2865 12.3994 11.7798 12.3994H13.0198C13.513 12.3994 13.9861 12.5953 14.3349 12.9441C14.6837 13.2929 14.8797 13.766 14.8797 14.2593C14.8797 14.7525 14.6837 15.2256 14.3349 15.5744C13.9861 15.9232 13.513 16.1192 13.0198 16.1192H9.91992"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.3984 16.1191V17.359M12.3984 7.43958V8.67951"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const ClockedIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
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

export const BookmarkedIcon = (props) => (
  <svg
    {...props}
    width="24"
    height="24"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_bookmark)">
      {/* Outer box */}
      <path
        d="
          M4.961 7.44
          C4.961 6.782 5.222 6.151 5.687 5.686
          C6.152 5.221 6.783 4.96 7.441 4.96
          H22.32
          C22.978 4.96 23.609 5.221 24.074 5.686
          C24.539 6.151 24.8 6.782 24.8 7.44
          V22.319
          C24.8 22.977 24.539 23.607 24.074 24.072
          C23.609 24.537 22.978 24.799 22.32 24.799
          H7.441
          C6.783 24.799 6.152 24.537 5.687 24.072
          C5.222 23.607 4.961 22.977 4.961 22.319
          V7.44
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bookmark */}
      <path
        d="
          M14.879 4.96
          V13.639
          L17.359 11.159
          L19.839 13.639
          V4.96
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_bookmark">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ClockingIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
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

/* MarketPlace Section Svg Icons  */

export const ApprovalIcon = (props) => (
  <svg {...props} width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <path
      d="M23.5574 28.5184V38.4379C23.5574 39.0956 22.897 39.6778 22.3175 39.6778H19.8376C19.2581 39.6778 18.5977 39.0956 18.5977 38.4379V29.7583C18.5977 29.1006 19.2581 28.5184 19.8376 28.5184H23.5574Z"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M23.5574 28.5184C26.0373 28.5184 28.5171 26.0386 28.5171 23.5587V22.3187C28.5171 21.6609 29.1775 19.8389 30.997 19.8389C32.8165 19.8389 33.4769 21.6609 33.4769 22.3187V28.5184H37.1967C38.8566 28.5184 39.6765 30.3406 39.6765 30.9983L38.4366 37.1979C38.1762 38.5974 37.2366 39.6778 35.9567 39.6778H27.2772C25.4577 39.6778 23.5574 37.8573 23.5574 35.958"
      stroke="#56E000"
      strokeWidth="1.98"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MarkStoredIcon = (props) => (
  <svg
    {...props}
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
     <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />
    <g clipPath="url(#clip0_balance)">
      {/* Base */}
      <path
        d="M8.68 24.799H21.079"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Top bar */}
      <path
        d="M7.441 7.44L14.881 6.2L22.321 7.44"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center pole */}
      <path
        d="M14.879 3.72V24.799"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left scale */}
      <path
        d="
          M11.158 14.879
          L7.439 7.44
          L3.719 14.879
          C3.719 15.866 4.111 16.812 4.808 17.51
          C5.506 18.207 6.452 18.599 7.439 18.599
          C8.425 18.599 9.371 18.207 10.069 17.51
          C10.766 16.812 11.158 15.866 11.158 14.879
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right scale */}
      <path
        d="
          M26.037 14.879
          L22.318 7.44
          L18.598 14.879
          C18.598 15.866 18.99 16.812 19.687 17.51
          C20.385 18.207 21.331 18.599 22.318 18.599
          C23.304 18.599 24.25 18.207 24.948 17.51
          C25.645 16.812 26.037 15.866 26.037 14.879
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_balance">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MarkLinkIcon = (props) => (
  <svg
    {...props}
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >

     <rect
      width="61.8268"
      height="61.8268"
      rx="10.3045"
      fill="#E4FFD4"
    />

    <g clipPath="url(#clip0_window)">
      {/* Frame */}
      <path
        d="
          M3.719 8.68
          C3.719 8.022 3.98 7.391 4.445 6.926
          C4.91 6.461 5.541 6.2 6.199 6.2
          H23.558
          C24.215 6.2 24.846 6.461 25.311 6.926
          C25.776 7.391 26.038 8.022 26.038 8.68
          V21.079
          C26.038 21.737 25.776 22.367 25.311 22.832
          C24.846 23.298 24.215 23.559 23.558 23.559
          H6.199
          C5.541 23.559 4.91 23.298 4.445 22.832
          C3.98 22.367 3.719 21.737 3.719 21.079
          V8.68
        "
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dots */}
      <path
        d="M7.441 9.919H7.454"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
      />
      <path
        d="M11.16 9.919H11.173"
        stroke="#56E000"
        strokeWidth="1.98"
        strokeLinecap="round"
      />
    </g>

    <defs>
      <clipPath id="clip0_window">
        <rect width="29.758" height="29.758" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MarkStorefulIcon = (props) => (
  <svg
    {...props}
     width="60"
    height="60"
    viewBox="0 0 60 60"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
    <rect width="61.8268" height="61.8268" rx="10.3045" fill="#E4FFD4" />

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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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
      fill="#E4FFD4"
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



