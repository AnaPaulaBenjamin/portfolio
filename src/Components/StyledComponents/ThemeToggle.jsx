import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.247 1C7.71154 2.77173 7.66675 4.65554 8.1174 6.45072C8.56805 8.2459 9.49726 9.88521 10.806 11.194C12.1148 12.5027 13.7541 13.432 15.5493 13.8826C17.3445 14.3333 19.2283 14.2885 21 13.753C20.4864 15.4418 19.5441 16.9688 18.265 18.1853C16.9859 19.4018 15.4135 20.2663 13.7011 20.6946C11.9886 21.1229 10.1944 21.1004 8.49324 20.6293C6.79207 20.1581 5.24189 19.2545 3.9937 18.0063C2.74551 16.7581 1.84186 15.2079 1.37074 13.5068C0.899633 11.8056 0.877125 10.0114 1.30541 8.29893C1.7337 6.58647 2.59819 5.01411 3.81467 3.735C5.03116 2.4559 6.55818 1.51364 8.247 1Z"
              stroke="var(--text-3)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 3.14286V1M5.28571 5.28571L3.85714 3.85714M5.28571 16.7143L3.85714 18.1429M16.7143 5.28571L18.1429 3.85714M16.7143 16.7143L18.1429 18.1429M3.14286 11H1M11 18.8571V21M18.8571 11H21M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z"
              stroke="var(--text-3)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
