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
        {/* ✅ Renamed ID to clip_qatar */}
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

export const MessageIcon = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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

export const MenuIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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

export const SectionLayoutIcon = (props) => (
  <svg
    {...props}
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
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
    stroke="currentColor"
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
    stroke="currentColor"
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
      stroke="currentColor"
    />
    <rect
      x="0.5"
      y="0.5"
      width="114.727"
      height="51.056"
      rx="25.528"
      stroke="currentColor"
    />
    <rect
      x="0.5"
      y="0.5"
      width="99.0353"
      height="50"
      rx="25"
      stroke="currentColor"
    />

    {/* Primary Arrow Path */}
    <path
      d="M56.9295 15.1576L34.0176 37.3535L37.7817 41L60.6936 18.8067L60.6936 38.367L66.0176 38.367L66.0176 10L36.7355 10L36.7355 15.1576L56.9295 15.1576Z"
      fill="currentColor"
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
    stroke="currentColor"
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
    stroke="currentColor"
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
    stroke="currentColor"
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
    stroke="currentColor"
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
      stroke="currentColor"
    />
    <rect
      x="0.5"
      y="0.5"
      width="114.727"
      height="51.056"
      rx="25.528"
      stroke="currentColor"
    />
    <rect
      x="0.5"
      y="0.5"
      width="99.0353"
      height="51.056"
      rx="25.528"
      stroke="currentColor"
    />

    {/* Arrow Icon Path */}
    <path
      d="M56.9409 36.7227L33.9889 13.7707L37.7596 10L60.7116 32.9493L60.7116 12.7227L66.0449 12.7227L66.0449 42.056L36.7116 42.056L36.7116 36.7227L56.9409 36.7227Z"
      fill="currentColor"
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 22.5V27.5M8.75 19.375L17.5 14.375M17.5 9.375V14.375M17.5 14.375L22.5 17.5M13.75 16.25V6.875L8.75 3.75L3.75 6.875M8.75 10L13.75 6.875M22.5 12.5L27.5 9.375"
        stroke="currentColor"
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handle */}
      <path
        d="M26.25 26.25L18.75 18.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dollar Symbol (S-shape) */}
      <path
        d="M15 8.75H11.875C10.8395 8.75 10 9.58947 10 10.625C10 11.6605 10.8395 12.5 11.875 12.5H13.125C14.1605 12.5 15 13.3395 15 14.375C15 15.4105 14.1605 16.25 13.125 16.25H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dollar Vertical Line */}
      <path
        d="M12.5 16.25V17.5M12.5 7.5V8.75"
        stroke="currentColor"
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Clock Hands */}
      <path
        d="M15 8.75V15L18.75 18.75"
        stroke="currentColor"
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 5V21.25M18.75 8.75V15.625"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Location Pin / Drop Icon */}
      <path
        d="M26.4013 25.1511C27.4279 23.231 27.5726 21.7495 27.2147 21.0642C26.4502 19.7932 25.2168 18.749 23.75 18.749C22.2832 18.969 21.0988 25.1511C21.6213 25.6748 22.505 26.4573 23.75 27.4998C25.0638 26.3873 26.4013 25.1511Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.75 22.5V22.5125"
        stroke="currentColor"
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
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export const LocalisationIcon = (props) => (
  <svg
    {...props}
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">


    <g clip-path="url(#clip0_132_4018)">
      <path d="M4.13672 4.13745H10.343V12.4125H4.13672V4.13745Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.65501" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4.13672 16.55H10.343V20.6876H4.13672V16.55Z" stroke="currentColor" style="stroke:#231E30;stroke:color(display-p3 0.1373 0.1176 0.1882);stroke-opacity:1;" stroke-width="1.65501" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.4805 12.4126H20.6868V20.6876H14.4805V12.4126Z" stroke="currentColor" style="stroke:#231E30;stroke:color(display-p3 0.1373 0.1176 0.1882);stroke-opacity:1;" stroke-width="1.65501" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.4805 4.13745H20.6868V8.27497H14.4805V4.13745Z" stroke="currentColor" style="stroke:#231E30;stroke:color(display-p3 0.1373 0.1176 0.1882);stroke-opacity:1;" stroke-width="1.65501" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_132_4018">
        <rect width="24.8251" height="24.8251" fill="white" style="fill:white;fill-opacity:1;" />
      </clipPath>
    </defs>
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side Image/Icon Square */}
      <path
        d="M4 13C4 12.4477 4.44772 12 5 12H9C9.55228 12 10 12.4477 10 13V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right Side Text Lines */}
      <path
        d="M14 12H20M14 16H20M14 20H20"
        stroke="currentColor"
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
        stroke="currentColor"
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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_profile)">
      {/* Main Card Body */}
      <path
        d="M20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H8C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18V6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Avatar Circle and Info Lines */}
      <path
        d="M10 16H16M11 11C11 12.1046 11.8954 13 13 13C14.1046 13 15 12.1046 15 11C15 9.89543 14.1046 9 13 9C11.8954 9 11 9.89543 11 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Side Decorative Lines */}
      <path
        d="M4 8H7M4 12H7M4 16H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_profile">
        <rect width="24" height="24" fill="white" />
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
        stroke="currentColor"
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Chat Bubble Frame */}
      <path
        d="M11.008 19.195L8 21V18H6C4.89543 18 4 17.1046 4 16V7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V11.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Magnifying Glass (Search) */}
      <path
        d="M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.1992 20.2002L21.9992 22.0002"
        stroke="currentColor"
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
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vertical Line for Dollar Symbol */}
      <path
        d="M12 3V6M12 18V21"
        stroke="currentColor"
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
