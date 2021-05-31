import React, { useState } from 'react';
import { SectionButton } from '../../lib/styles/generalStyles';

import {
  Section as SectionWrapper,
  BigHeading,
  SmallHeading,
  SectionButtonWrapper,
  HeadingWrapper,
} from '../Section/SectionStyle';

const Section = () => {
  const MojiDogađaji = 'Moji Događaji';
  const SviDogađdaji = 'Svi Događaji';
  const [curEvent, setcurEvent] = useState(SviDogađdaji);
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
        {curEvent === SviDogađdaji ? (
          <SmallHeading>Filtriaj</SmallHeading>
        ) : (
          <SmallHeading>Status</SmallHeading>
        )}
      </HeadingWrapper>
      <SectionButtonWrapper>
        <SectionButton
          text={SviDogađdaji}
          type={SetActiveOrInactive(SviDogađdaji)}
          Func={() => ToggleDogađaj(SviDogađdaji)}
        />
        <SectionButton
          text={MojiDogađaji}
          type={SetActiveOrInactive(MojiDogađaji)}
          Func={() => ToggleDogađaj(MojiDogađaji)}
        />
      </SectionButtonWrapper>
    </SectionWrapper>
  );
};

export default Section;
