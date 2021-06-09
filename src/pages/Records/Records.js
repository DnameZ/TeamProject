import React, { useState } from 'react';
import { DummyItem, ButtonWrapper } from './RecordsStyle';

//Components
import Section from '../../components/Section/Section';
import EventCard from '../../components/EventCard/EventCard';
import {
  EventsWrapper,
  FilterWrapper,
  PrimaryButton,
  SectionContent,
} from '../../lib/styles/generalStyles';
import Filter from '../../components/Filter/Filter';
import FilterStatusOverlay from '../../components/FilterStatusOverlay/FilterStatusOverlay';

//Mock data
import eventsMock from '../../lib/mock/events';

const Records = () => {
  const [filter, setFilter] = useState(false);
  const [allEvents, setAllEvents] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleFilter = () => {
    setFilter((prevFilter) => !prevFilter);
  };

  const handleResize = (event) => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (event.target.innerWidth > 1300) {
      setFilter(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return (
    <>
      {isMobile ? (
        <Section
          onOpenFilter={toggleFilter}
          sectionTitle="Evidencija"
          buttonsHidden
          setAllEvents={setAllEvents}
          leftTitle="Filtriraj"
        />
      ) : (
        <Section
          onOpenFilter={toggleFilter}
          sectionTitle="Evidencija polaznika"
          buttonsHidden
          setAllEvents={setAllEvents}
          leftTitle="Filtriraj"
        />
      )}
      {filter ? (
        <FilterStatusOverlay title="Filtriraj" onOverlayClosed={toggleFilter}>
          <Filter />
        </FilterStatusOverlay>
      ) : null}
      {!filter ? (
        <SectionContent columns={2}>
          {<FilterWrapper>{allEvents && <Filter />}</FilterWrapper>}
          <EventsWrapper>
            {eventsMock.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                location={event.title}
                date={event.date}
                time={event.time}
                freeSpots={event.availability}
                company={event.company}
                shortDescription={event.shortDescription}
                buttonText="Evidentiraj"
              />
            ))}
          </EventsWrapper>
          <DummyItem />
          <ButtonWrapper>
            <PrimaryButton text="Prikaži više" type="fullWidth" />
          </ButtonWrapper>
        </SectionContent>
      ) : null}
    </>
  );
};

export default Records;
