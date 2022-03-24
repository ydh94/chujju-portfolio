import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import '../../styles/projects/Project.scss';

interface IPropsProject {
  data: { video: string; title: string; content: string };
  key: number;
  focused: boolean;
}

export default function Project(attr: IPropsProject) {
  const { video, title, content } = attr.data;
  const { focused } = attr;
  const [play, setPlay] = useState<boolean>(false);
  const player = useRef<ReactPlayer>(null);
  const onSeek = (seconds: number) => {
    player.current?.seekTo(seconds, 'seconds');
  };

  useEffect(() => {
    setPlay(focused);
  }, [focused]);

  return (
    <div className='project--container'>
      <div className='project--video'>
        <ReactPlayer url={video} controls width={'100%'} height={'100%'} playing={play} ref={player} />
      </div>
      <div className='project--article'>
        <div className='project--title'>{title}</div>
        <div className='project--content'>{content}</div>
        <div className='project--timeline'>
          <button onClick={() => onSeek(11)}>11</button>
        </div>
      </div>
    </div>
  );
}
