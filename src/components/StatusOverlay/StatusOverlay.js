import React, { useState } from 'react';
import Status from '../Status/Status';
import FilterStatusOverlay from '../FilterStatusOverlay/FilterStatusOverlay';

const StatusOverlay = ({ title, onOverlayClosed, handleShowResults }) => {
  const [status, setStatus] = useState('Svi');

  const onShowResults = () => {
    handleShowResults(status);
  };

  return (
    <FilterStatusOverlay
      title={title}
      onOverlayClosed={onOverlayClosed}
      onShowResults={onShowResults}>
      <Status handleStatusFilter={setStatus} />
    </FilterStatusOverlay>
  );
};

export default StatusOverlay;
