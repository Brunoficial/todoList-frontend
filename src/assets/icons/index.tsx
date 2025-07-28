export const Icons = {
  Searchbar: ({ width = "24px", height = "24px" }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z"
        stroke="#1E1E1E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  Sun: ({ width = "24px", height = "24px" }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5_54)">
        <path
          d="M16 1.33333V3.99999M16 28V30.6667M5.62671 5.62666L7.52004 7.51999M24.48 24.48L26.3734 26.3733M1.33337 16H4.00004M28 16H30.6667M5.62671 26.3733L7.52004 24.48M24.48 7.51999L26.3734 5.62666M22.6667 16C22.6667 19.6819 19.6819 22.6667 16 22.6667C12.3181 22.6667 9.33337 19.6819 9.33337 16C9.33337 12.3181 12.3181 9.33333 16 9.33333C19.6819 9.33333 22.6667 12.3181 22.6667 16Z"
          stroke="#F3F3F3"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_54">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  Checkmark: ({width = "24px", height = "24px"}) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7333 24L5.13333 16.4L7.03333 14.5L12.7333 20.2L24.9667 7.96667L26.8667 9.86667L12.7333 24Z"
        fill="white"
      />
    </svg>
  ),
};
