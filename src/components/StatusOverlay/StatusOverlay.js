import React from 'react';
import Status from '../Status/Status';
import FilterStatusOverlay from '../FilterStatusOverlay/FilterStatusOverlay';

const StatusOverlay = ({ title, onOverlayClosed }) => {
  return (
    <FilterStatusOverlay title={title} onOverlayClosed={onOverlayClosed}>
      <Status />
    </FilterStatusOverlay>
  );
};

export default StatusOverlay;
