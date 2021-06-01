import React, { useState } from 'react';
import { SectionButton } from '../../lib/styles/generalStyles';

import {
  Section as SectionWrapper,
  BigHeading,
  SmallHeading,
  SectionButtonWrapper,
  HeadingWrapper,
} from '../Section/SectionStyle';

const Section = ({ onOpenFilter, onOpenStatus }) => {
  const mojiDogadaji = 'Moji Događaji';
  const sviDogadaji = 'Svi Događaji';
  const [curEvent, setcurEvent] = useState(sviDogadaji);
  const ToggleDogađaj = (Događaj) => {
    setcurEvent(Događaj);
  };
  const SetActiveOrInactive = (text) => {
    const active = 'active';
    const inactive = 'inactive';
    return curEvent === text ? active : inactive;
  };

  return (
    <SectionWrapper>
      <HeadingWrapper>
        <BigHeading>Događaji</BigHeading>
        {curEvent === sviDogadaji ? (
          <SmallHeading onClick={onOpenFilter}>Filtriraj</SmallHeading>
        ) : (
          <SmallHeading onClick={onOpenStatus}>Status</SmallHeading>
        )}
      </HeadingWrapper>
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
    </SectionWrapper>
  );
};

export default Section;
