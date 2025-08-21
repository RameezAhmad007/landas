import classNameMerge from "@shared/utils/classNameMerge";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNameMerge("w-full object-contain", className)}
    />
  );
};

export default Image;
