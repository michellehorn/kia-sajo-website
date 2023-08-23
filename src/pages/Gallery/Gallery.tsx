import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import { gallery } from "../../assets/images";
import { GalleryItem, GalleryVideo, SectionGallery } from "./Gallery.styles";
import "../../../node_modules/react-modal-video/css/modal-video.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { SwipeableDrawer } from "@mui/material";
import { isMobile } from "react-device-detect";
import ReactPlayer from "react-player";

const videoGallery = [
  "MJ09dpL5SG0",
  "YTE9iyDu9ho",
  "xSmFiPJbR7Y",
  "V3IupSW-AlE",
  "YyiRcNPleMc",
];

export const Gallery = ({ id }: { id: string }) => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const handleVideoOpen = async (id: string) => {
    await setVideoId(id);
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
    <SectionGallery id={id}>
      <Carousel
        autoPlay
        autoPlaySpeed={3000}
        rewind
        infinite
        responsive={responsive}
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
        autoPlay
        autoPlaySpeed={3200}
        responsive={responsive}
        draggable
        slidesToSlide={1}
        keyBoardControl
      >
        {/* FECHAR NO ESC */}
        {videoGallery.map((item) => (
          <>
            <GalleryVideo imgUrl={`http://img.youtube.com/vi/${item}/0.jpg`}>
              <PlayArrowIcon onClick={() => handleVideoOpen(item)} />
            </GalleryVideo>
          </>
        ))}
      </Carousel>
      {isMobile ? (
        <SwipeableDrawer
          anchor="bottom"
          open={isOpen}
          onClose={() => {
            setOpen(false);
            setVideoId("");
          }}
          onOpen={() => setOpen(true)}
        >
          {videoId && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height={600}
              playing={isOpen && videoId ? true : false}
              muted={false}
              pip
            />
          )}
        </SwipeableDrawer>
      ) : (
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => {
            setOpen(false);
            setVideoId("");
          }}
        />
      )}
    </SectionGallery>
  );
};
