import React from 'react';

import {
  SortModalBackground,
  SortModalWrapper,
  SortModalHeader,
  SortModalContent,
  SortModalTitle,
} from './SortModalStyle';

const SortModal = ({
  showSortModalEvents,
  content1,
  content2,
  content3,
  type,
  position,
  sortMethod1,
  sortMethod2,
  sortMethod3,
}) => {
  if (!showSortModalEvents) {
    return null;
  }

  return (
    <>
      <SortModalBackground />
      <SortModalWrapper type={type} position={position}>
        <SortModalHeader type={type}>
          <SortModalTitle>Poredaj:</SortModalTitle>
        </SortModalHeader>
        <SortModalContent activeClassName="active" onClick={sortMethod1}>
          {content1}
        </SortModalContent>
        <SortModalContent activeClassName="active" onClick={sortMethod2}>
          {content2}
        </SortModalContent>
        <SortModalContent activeClassName="active" onClick={sortMethod3}>
          {content3}
        </SortModalContent>
      </SortModalWrapper>
    </>
  );
};

export default SortModal;
