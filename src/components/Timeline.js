import React from 'react';
import Timelinedata from '../data';
import TimelineItem from './Timelineitem';

const Timeline = () => Timelinedata.length > 0 && (
  <div className="timeline-container">
    {Timelinedata.map((data,idx) => (
      <TimelineItem data={data} key="{idx}" />
    ))}
  </div>
);

export default Timeline;
