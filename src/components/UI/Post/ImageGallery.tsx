'use client'
import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

const ImageGallery = ({ images }: { images: [] | string[] }) => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images?.map((image,idx) => {
        return (
          <Link href={image} key={idx}>
            <Image src={image} alt="image" height={500} width={500} />
          </Link>
        );
      })}
      
    </LightGallery>
  );
};

export default ImageGallery;
