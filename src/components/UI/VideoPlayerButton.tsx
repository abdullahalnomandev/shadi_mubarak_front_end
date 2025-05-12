import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

type ModalVideoProps = {
  videoId: string;
  title: string;
};

const VideoPlayerButton = ({ videoId, title }: ModalVideoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 border border-rose-700 text-rose-700 
        bg-white rounded-full hover:bg-rose-50 transition-all duration-300 shadow-sm group focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer"
        >
          <FaPlay className="w-4 h-4 text-rose-700 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-sm font-semibold">{title}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerButton;
