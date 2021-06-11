import React, { useState } from 'react';
import { ButtonWrapper, DummyItem } from './EventsStyle';

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
import Status from '../../components/Status/Status';
import FilterOverlay from '../../components/FilterOverlay/FilterOverlay';
import StatusOverlay from '../../components/StatusOverlay/StatusOverlay';

//Mock data
import eventsMock from '../../lib/mock/events';

const Events = () => {
  const [filter, setFilter] = useState(false);
  const [status, setStatus] = useState(false);
  const [allEvents, setAllEvents] = useState(true);

  const toggleFilter = () => {
    setFilter((prevFilter) => !prevFilter);
  };

  const toggleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  const handleResize = (event) => {
    if (event.target.innerWidth > 1300) {
      setStatus(false);
      setFilter(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return (
    <>
      <Section
        onOpenFilter={toggleFilter}
        onOpenStatus={toggleStatus}
        sectionTitle="Događaji"
        leftButton="Svi događaji"
        rightButton="Moji događaji"
        setAllEvents={setAllEvents}
        leftTitle="Filtriraj"
        rightTitle="Status"
      />
      {filter ? (
        <FilterOverlay title="Filtriraj" onOverlayClosed={toggleFilter} />
      ) : null}
      {status ? (
        <StatusOverlay title="Status događaja" onOverlayClosed={toggleStatus} />
      ) : null}
      {!filter && !status ? (
        <SectionContent columns={2}>
          {<FilterWrapper>{allEvents ? <Filter /> : <Status />}</FilterWrapper>}
          <EventsWrapper>
            {eventsMock.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                location={event.location}
                date={event.date}
                time={event.time}
                freeSpots={event.availability}
                company={event.company}
                shortDescription={event.shortDescription}
                buttonText="Prijavi/Odjavi se"
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

export default Events;
