import {Video, type Video as VideoType} from "../Video/Video";

interface VideoListProps {
  list: VideoType[];
}

export const VideoList = ({list}: VideoListProps) => {
  return list.map((item) => <Video url={item.url} date={item.date} />);
};
