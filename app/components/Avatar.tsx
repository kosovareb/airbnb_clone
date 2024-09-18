"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined,
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ src, className }) => {
  return (
    <Image
      className={`rounded-full ${className}`}
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
