import React, { useState } from 'react';
import { SectionButton } from '../../lib/styles/generalStyles';

import {
  Section as SectionWrapper,
  BigHeading,
  SmallHeading,
  SectionButtonWrapper,
  HeadingWrapper,
} from '../Section/SectionStyle';

const Section = ({
  onOpenFilter,
  onOpenStatus,
  sectionTitle,
  leftButton,
  rightButton,
  buttonsHidden,
  setAllEvents,
  setShowEvents,
}) => {
  const mojiDogadaji = rightButton;
  const sviDogadaji = leftButton;
  const [curEvent, setcurEvent] = useState(sviDogadaji);
  const ToggleDogađaj = (dogadaj) => {
    setcurEvent(dogadaj);
    if (setAllEvents) {
      dogadaj === leftButton ? setAllEvents(true) : setAllEvents(false);
    }
    if (setShowEvents) {
      dogadaj === leftButton ? setShowEvents(true) : setShowEvents(false);
    }
  };

  const SetActiveOrInactive = (text) => {
    const active = 'active';
    const inactive = 'inactive';
    return curEvent === text ? active : inactive;
  };

  return (
    <SectionWrapper>
      <HeadingWrapper>
        <BigHeading>{sectionTitle}</BigHeading>
        {curEvent === sviDogadaji ? (
          <SmallHeading onClick={onOpenFilter}>Filtriraj</SmallHeading>
        ) : (
          <SmallHeading onClick={onOpenStatus}>Status</SmallHeading>
        )}
      </HeadingWrapper>
      {!buttonsHidden ? (
        <SectionButtonWrapper>
          <SectionButton
            text={sviDogadaji}
            type={SetActiveOrInactive(sviDogadaji)}
            Func={() => ToggleDogađaj(sviDogadaji)}
          />
          <SectionButton
            text={mojiDogadaji}
            type={SetActiveOrInactive(mojiDogadaji)}
            Func={() => ToggleDogađaj(mojiDogadaji)}
          />
        </SectionButtonWrapper>
      ) : null}
    </SectionWrapper>
  );
};

export default Section;
