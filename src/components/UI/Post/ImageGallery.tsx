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
    <LightGallery elementClassNames={`mt-2 grid ${images?.length==1 ?"gird-cols-1":"grid-cols-2"} gap-2`} speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images?.map((image,idx) => {
        return (
          <Link href={image} key={idx} className={`w-full ${images?.length==3 && idx==0 ?"col-span-2":"col-span-1"}`}>
            <Image src={image} alt="image" className="h-[400px] w-full object-cover" height={500} width={500} />
          </Link>
        );
      })}
      
    </LightGallery>
  );
};

export default ImageGallery;
