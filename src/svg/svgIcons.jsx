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
        <path d="M34 8L34 16L-2 16L-2 8Z" fill="#3D58DB" stroke="#F7FCFF" strokeWidth="4" />
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
