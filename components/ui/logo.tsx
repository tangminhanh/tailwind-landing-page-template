import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7489fd" />
            <stop offset="100%" stopColor="#ff65a3" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7489fd" />
            <stop offset="100%" stopColor="#ff65a3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient1)"
          fillRule="evenodd"
          d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#gradient2)"
          fillRule="evenodd"
          d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}

