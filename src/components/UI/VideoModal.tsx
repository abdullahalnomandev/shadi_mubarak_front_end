import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";

type ModalVideoProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  videoId: string;
};

const VideoModal = ({ isOpen, setIsOpen, videoId }: ModalVideoProps) => {
  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default VideoModal;
