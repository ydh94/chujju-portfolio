import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import '../../styles/projects/Project.scss';

interface IPropsProject {
  data: { video: string; title: string; content: string };
  key: number;
}

export default function Project(attr: IPropsProject) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<ReactPlayer>(null);
  const { video, title, content } = attr.data;

  return (
    <div className='project--container' ref={containerRef}>
      <div className='project--video'>
        <ReactPlayer url={video} controls width={'100%'} height={'100%'} ref={videoRef} playing={true} />
      </div>
      <div className='project--article'>
        <div className='project--title'>{title}</div>
        <div className='project--content'>{content}</div>
      </div>
    </div>
  );
}
