import React, { useState, useEffect, useContext } from 'react';
import { DummyItem, EmptyMsg } from './EventsStyle';
import { getAllEvents } from '../../api/event';
import { getUserEvents } from '../../api/event';

//Components
import Section from '../../components/Section/Section';
import EventCard from '../../components/EventCard/EventCard';
import {
  EventsWrapper,
  FilterWrapper,
  SectionContent,
} from '../../lib/styles/generalStyles';
import Filter from '../../components/Filter/Filter';
import Status from '../../components/Status/Status';
import FilterOverlay from '../../components/FilterOverlay/FilterOverlay';
import StatusOverlay from '../../components/StatusOverlay/StatusOverlay';
import { AuthContext } from '../../context/AuthContext';

//Mock data

const Events = () => {
  const [filter, setFilter] = useState(false);
  const [status, setStatus] = useState(false);
  const [allEvents, setAllEvents] = useState(true);
  const [events, setEvents] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [categories, setCategories] = useState([]);
  const [statusFilter, setStatusFilter] = useState('Svi');
  const { authToken } = useContext(AuthContext);

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

  const resetFilters = () => {
    setSearchValue('');
    setEventDate('');
    setOrganizer('');
    setCategories([]);
    setStatusFilter('Svi');
  };

  const handleSetAllEvents = (value) => {
    setAllEvents(value);
    resetFilters();
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    toggleStatus();
  };

  useEffect(() => {
    allEvents === true
      ? getAllEvents(authToken).then((result) => setEvents(result))
      : getUserEvents(authToken).then((result) => setEvents(result));
  }, [allEvents, authToken]);

  window.addEventListener('resize', handleResize);

  const handleSearch = (value) => {
    setSearchValue(value.toLowerCase());
  };

  const handleCategoriesSearch = (isChecked, value) => {
    let newCategoriesList;
    if (isChecked) {
      newCategoriesList = categories.concat(value);
      setCategories(newCategoriesList);
    } else {
      newCategoriesList = categories.filter((category) => category !== value);
      setCategories(newCategoriesList);
    }
  };

  const handleShowResults = (searchCriteria) => {
    searchCriteria.title
      ? handleSearch(searchCriteria.title)
      : handleSearch('');

    searchCriteria.organizer
      ? setOrganizer(searchCriteria.organizer)
      : setOrganizer('');

    searchCriteria.date ? setEventDate(searchCriteria.date) : setEventDate('');

    setCategories(searchCriteria.categories);

    toggleFilter();
  };

  return (
    <>
      <Section
        onOpenFilter={toggleFilter}
        onOpenStatus={toggleStatus}
        sectionTitle="Događaji"
        leftButton="Svi događaji"
        rightButton="Moji događaji"
        setAllEvents={handleSetAllEvents}
      />
      {filter ? (
        <FilterOverlay
          title="Filtriraj"
          onOverlayClosed={toggleFilter}
          handleShowResults={handleShowResults}
        />
      ) : null}
      {status ? (
        <StatusOverlay
          title="Status događaja"
          onOverlayClosed={toggleStatus}
          handleShowResults={handleStatusFilter}
        />
      ) : null}
      {!filter && !status ? (
        events.length !== 0 ? (
          <MapEvents
            Events={events}
            allEvents={allEvents}
            searchValue={searchValue}
            handleSearch={handleSearch}
            eventDate={eventDate}
            setEventDate={setEventDate}
            organizer={organizer}
            setOrganizer={setOrganizer}
            categories={categories}
            handleCategoriesSearch={handleCategoriesSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        ) : (
          <EmptyMsg>Nema prijavljenih događaja</EmptyMsg>
        )
      ) : null}
    </>
  );
};

const MapEvents = ({
  Events,
  allEvents,
  searchValue,
  handleSearch,
  eventDate,
  setEventDate,
  organizer,
  setOrganizer,
  categories,
  handleCategoriesSearch,
  statusFilter,
  setStatusFilter,
}) => {
  const SetButtonText = () => {
    const PrijaviSe = 'Prijavi se';
    const OdjaviSe = 'Ocijeni';
    return allEvents === true ? PrijaviSe : OdjaviSe;
  };

  const parseDate = (rawDate) => {
    const options = {
      weekday: 'long',
      month: '2-digit',
      day: 'numeric',
    };

    const date = new Date(rawDate);
    const parsedDate = date.toLocaleDateString('hr', options);
    return parsedDate.charAt(0).toUpperCase() + parsedDate.slice(1);
  };

  const parseTime = (rawStartTime, rawEndTime) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
    };

    const parsedStartTime = new Date(rawStartTime).toLocaleTimeString(
      'hr',
      options,
    );
    const parsedEndTime = new Date(rawEndTime).toLocaleTimeString(
      'hr',
      options,
    );

    return parsedStartTime + ' - ' + parsedEndTime + 'h';
  };

  return (
    <>
      <SectionContent columns={2}>
        {
          <FilterWrapper>
            {allEvents ? (
              <Filter
                handleSearch={handleSearch}
                handleDateSearch={setEventDate}
                handleCompanySearch={setOrganizer}
                handleCategoriesSearch={handleCategoriesSearch}
              />
            ) : (
              <Status handleStatusFilter={setStatusFilter} />
            )}
          </FilterWrapper>
        }
        <EventsWrapper>
          {Events.map(
            (event) =>
              ((allEvents &&
                event.name?.toLowerCase().includes(searchValue) &&
                event.organizer?.includes(organizer) &&
                event.startTime?.includes(eventDate) &&
                (categories.every((category) =>
                  event.category?.includes(category),
                ) ||
                  categories.length === 0)) ||
                (!allEvents &&
                  ((statusFilter === 'Nadolazeći' &&
                    new Date(event.event.startTime?.toString()) > new Date()) ||
                    (statusFilter === 'Završeni' &&
                      new Date(event.event.endTime?.toString()) < new Date()) ||
                    statusFilter === 'Svi'))) && (
                <EventCard
                  key={event.id || event.event.id}
                  id={event.id || event.event.id}
                  title={event.name || event.event.name}
                  location={event.location || event.event.location}
                  date={parseDate(event.startTime || event.event.startTime)}
                  time={parseTime(
                    event.startTime || event.event.startTime,
                    event.endTime || event.event.endTime,
                  )}
                  freeSpots={event.seats || event.event.seats}
                  company={event.organizer || event.event.organizer}
                  shortDescription={
                    event.description || event.event.description
                  }
                  buttonText={SetButtonText()}
                />
              ),
          )}
        </EventsWrapper>
        <DummyItem />
      </SectionContent>
    </>
  );
};

export default Events;
