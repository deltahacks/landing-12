import React from "react";
import { cva } from "class-variance-authority";
import Box from "./svgs/Box";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const containerVariants = cva("relative flex shadow-md shadow-gray-500/40", {
  variants: {
    size: {
      large: "w-50 lg:w-85",
      medium: "w-44 lg:w-65",
      small: "w-28 lg:w-50",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const logoVariants = cva(
  "absolute top-0 flex h-full py-6 lg:py-8 w-full items-center justify-center",
  {
    variants: {
      size: {
        large: "px-7.5 lg:px-14",
        medium: "px-7 lg:px-10",
        small: "px-4.5 lg:px-7.5",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);

export type SponsorVariantSizes = "large" | "medium" | "small";

export interface SponsorData {
  src?: string;
  alt?: string;
  link?: string;
  size: SponsorVariantSizes;
  className?: string;
}

const Sponsor: React.FC<SponsorData> = ({
  src,
  alt,
  link,
  size = "medium",
  className,
}) => {
  const containerProps = {
    className: clsx(containerVariants({ size }), className),
  };

  const content = (
    <>
      <Box className="h-full w-full" />
      {src && (
        <div className={logoVariants({ size })}>
          <Image
            src={src}
            width={0}
            height={0}
            alt={`${alt} Sponsor Logo`}
            className="h-full w-full object-contain brightness-0 invert"
            quality={100}
            unoptimized={src.endsWith('.png')}
          />
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link
        {...containerProps}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </Link>
    );
  }

  return <div {...containerProps}>{content}</div>;
};

export default Sponsor;
