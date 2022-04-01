import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string | undefined;
  aspectRatio: string | undefined;
  placeholderUrl: string;
  className: string;
}

export interface ImageStyle {
  width: string;
  height: string | undefined;
  aspectRatio: string | undefined;
  backgroundImage: string, 
  backgroundSize: string,
  backgroundRepeat: string,
}

const Image = (props : ImageProps) => { 

  let imgStyle : any = {
    width: props.width, 
    height: props.height, 
    backgroundImage: `url("${props.placeholderUrl}")`, 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  if (!props.height && props.aspectRatio) imgStyle.aspectRatio = props.aspectRatio;

  return (<img
    src={props.src}
    alt={props.alt}
    style={{
      ...imgStyle
    }}
    loading="lazy"
    className={`content-visibility-auto ${props.className}`}
  />);
};

export default Image;
