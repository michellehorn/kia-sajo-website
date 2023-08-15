import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import { gallery } from "../../assets/images";
import { GalleryItem, GalleryVideo, SectionGallery } from "./Gallery.styles";
import "../../../node_modules/react-modal-video/css/modal-video.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const videoGallery = [
  "YTE9iyDu9ho",
  "xSmFiPJbR7Y",
  "V3IupSW-AlE",
  "YyiRcNPleMc",
];

export const Gallery = () => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleVideoOpen = (id: string) => {
    setVideoId(id);
    setOpen(true);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <SectionGallery>
      <Carousel
        autoPlay
        autoPlaySpeed={3000}
        rewind
        infinite
        swipeable
        responsive={responsive}
        draggable
        slidesToSlide={1}
        keyBoardControl
      >
        {gallery.map((item) => (
          <GalleryItem src={item} />
        ))}
      </Carousel>

      <Carousel
        rewind
        infinite
        swipeable
        responsive={responsive}
        draggable
        slidesToSlide={1}
        keyBoardControl
          
      >
        {/* FECHAR NO ESC */}
        {videoGallery.map((item) => (
          <>
            <GalleryVideo
              imgurl={`http://img.youtube.com/vi/${item}/0.jpg`}
              onClick={() => handleVideoOpen(item)}
            
            >
              <PlayArrowIcon />
            </GalleryVideo>
          </>
        ))}
      </Carousel>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </SectionGallery>
  );
};
