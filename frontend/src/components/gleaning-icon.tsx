export function GleaningIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      width={size}
      height={size}
    >
      <rect width="32" height="32" rx="8" className="fill-[#1a1a1a] dark:fill-[#f5f0e8]" />
      <path
        d="M7 20 C7 17 9 14 12 13 L12 11 C7 12 4 16 4 20 L4 24 L9 24 L9 20 Z"
        className="fill-[#f5f0e8] dark:fill-[#1a1a1a]"
      />
      <path
        d="M17 20 C17 17 19 14 22 13 L22 11 C17 12 14 16 14 20 L14 24 L19 24 L19 20 Z"
        className="fill-[#f5f0e8] dark:fill-[#1a1a1a]"
      />
      <circle cx="26" cy="22" r="3" fill="#c9a96e" />
    </svg>
  );
}
