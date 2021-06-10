import React, { useState, useEffect } from 'react';
import { ButtonWrapper, DummyItem } from './EventsStyle';
import { getAllEvents } from '../../api/event';

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
import FilterStatusOverlay from '../../components/FilterStatusOverlay/FilterStatusOverlay';

//Mock data
import eventsMock from '../../lib/mock/events';

const Events = () => {
  const [filter, setFilter] = useState(false);
  const [status, setStatus] = useState(false);
  const [allEvents, setAllEvents] = useState(true);
  const [events, setEvents] = useState([{}]);
  let authToken = localStorage.getItem('authToken');

  const SetButtonText = () => {
    const PrijaviSe = 'Prijavi se';
    const OdjaviSe = 'Ocjeni';
    return allEvents === true ? PrijaviSe : OdjaviSe;
  };

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

  useEffect(() => {
    getAllEvents(authToken).then((result) => setEvents(result));
  }, []);

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
      />

      {filter ? (
        <FilterStatusOverlay title="Filtriraj" onOverlayClosed={toggleFilter}>
          <Filter />
        </FilterStatusOverlay>
      ) : null}
      {status ? (
        <FilterStatusOverlay
          title="Status događaja"
          onOverlayClosed={toggleStatus}>
          <Status />
        </FilterStatusOverlay>
      ) : null}
      {!filter && !status ? (
        <SectionContent columns={2}>
          {<FilterWrapper>{allEvents ? <Filter /> : <Status />}</FilterWrapper>}
          <EventsWrapper>
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.name}
                location={event.location}
                date={event.startTime}
                time={event.time}
                freeSpots={event.seats}
                company={event.organizer}
                shortDescription={event.description}
                buttonText={SetButtonText()}
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
