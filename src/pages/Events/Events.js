import React, { useState, useEffect } from 'react';
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
  const [users, setUsers] = useState([]);
  const authToken = localStorage.getItem('authToken');

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

  const removePastEvents = (events) => {
    const now = new Date();
    const filteredEvents = events.filter(
      (event) => new Date(event.startTime) > now,
    );
    return filteredEvents;
  };

  const removeUserEvent = (id) => {
    const filteredUserEvents = users.filter(
      (userEvent) => userEvent.event.id !== id,
    );
    setUsers(filteredUserEvents);
  };

  const removeEvent = (id) => {
    const filteredEvents = events.filter((event) => event.id !== id);
    setEvents(filteredEvents);
  };

  useEffect(() => {
    async function fetchData() {
      if (allEvents) {
        const data = await getUserEvents(authToken);
        setUsers(data);
        setEvents(
          removePastEvents(await getAllEvents(authToken)).filter(
            (event) => !data.some((user) => event.id === user.event.id),
          ),
        );
        return;
      }

      await getUserEvents(authToken).then((result) => setUsers(result));
    }
    fetchData();
  }, [allEvents]);

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
        <MapEvents
          Events={events}
          Users={users}
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
          removeUserEvent={removeUserEvent}
          removeEvent={removeEvent}
        />
      ) : null}
    </>
  );
};

const MapEvents = ({
  Events,
  Users,
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
  removeUserEvent,
  removeEvent,
}) => {
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
          {allEvents
            ? Events.map(
                (event) =>
                  allEvents &&
                  event.name?.toLowerCase().includes(searchValue) &&
                  event.organizer?.includes(organizer) &&
                  event.startTime?.includes(eventDate) &&
                  (categories.some((category) =>
                    event.category?.includes(category),
                  ) ||
                    categories.length === 0) && (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      title={event.name}
                      location={event.location}
                      date={parseDate(event.startTime)}
                      time={parseTime(event.startTime, event.endTime)}
                      freeSpots={event.seats}
                      company={event.organizer}
                      shortDescription={event.description}
                      buttonText="Prijavi se"
                      removeEvent={removeEvent}
                    />
                  ),
              )
            : Users.map(
                (event) =>
                  !allEvents &&
                  ((statusFilter === 'Nadolazeći' &&
                    new Date(event.event.startTime?.toString()) > new Date()) ||
                    (statusFilter === 'Završeni' &&
                      new Date(event.event.endTime?.toString()) < new Date()) ||
                    statusFilter === 'Svi') && (
                    <EventCard
                      key={event.event.id}
                      id={event.event.id}
                      title={event.event.name}
                      location={event.event.location}
                      date={parseDate(event.event.startTime)}
                      time={parseTime(
                        event.event.startTime,
                        event.event.endTime,
                      )}
                      freeSpots={event.event.seats}
                      company={event.event.organizer}
                      shortDescription={event.event.description}
                      buttonText={
                        allEvents === true
                          ? 'Prijavi se'
                          : new Date() > new Date(event.event.endTime)
                          ? 'Ocijeni'
                          : 'Odjavi se'
                      }
                      removeUserEvent={removeUserEvent}
                    />
                  ),
              )}
        </EventsWrapper>
      </SectionContent>
    </>
  );
};

export default Events;
