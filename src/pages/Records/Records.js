import React, { useState, useEffect, useContext } from 'react';
import { DummyItem, LoadingSpinner } from './RecordsStyle';

//Components
import Section from '../../components/Section/Section';
import EventCard from '../../components/EventCard/EventCard';
import {
  EventsWrapper,
  FilterWrapper,
  SectionContent,
} from '../../lib/styles/generalStyles';
import Filter from '../../components/Filter/Filter';
import FilterOverlay from '../../components/FilterOverlay/FilterOverlay';
import { AuthContext } from '../../context/AuthContext';

//api
import { getAllEvents } from '../../api/event';
import { colors } from '../../lib/styles/theme';

const Records = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [events, setEvents] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [categories, setCategories] = useState([]);
  const { authToken } = useContext(AuthContext);

  const toggleFilter = () => {
    setFilter((prevFilter) => !prevFilter);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    if (window.innerWidth > 1300) {
      setFilter(false);
    }
  };

  window.addEventListener('resize', handleResize);

  const removeFutureEvents = (events) => {
    const now = new Date();
    const filteredEvents = events.filter(
      (event) => new Date(event.startTime) < now,
    );
    return filteredEvents;
  };

  useEffect(() => {
    handleResize();
    getAllEvents(authToken).then((result) => {
      setEvents(removeFutureEvents(result));
      setIsLoading(false);
    });
  });

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
      {isMobile ? (
        <Section
          onOpenFilter={toggleFilter}
          sectionTitle="Evidencija"
          buttonsHidden
        />
      ) : (
        <Section
          onOpenFilter={toggleFilter}
          sectionTitle="Evidencija polaznika"
          buttonsHidden
        />
      )}
      {filter ? (
        <FilterOverlay
          title="Filtriraj"
          onOverlayClosed={toggleFilter}
          handleShowResults={handleShowResults}
        />
      ) : null}
      {!filter ? (
        <SectionContent columns={2}>
          <FilterWrapper>
            <Filter
              handleSearch={handleSearch}
              handleCompanySearch={setOrganizer}
              handleDateSearch={setEventDate}
              handleCategoriesSearch={handleCategoriesSearch}
            />
          </FilterWrapper>
          <EventsWrapper>
            {!isLoading ? (
              events.map(
                (event) =>
                  event.name.toLowerCase().includes(searchValue) &&
                  event.organizer.includes(organizer) &&
                  event.startTime.includes(eventDate) &&
                  (categories.every((category) =>
                    event.category.includes(category),
                  ) ||
                    categories.length === 0) && (
                    <EventCard
                      id={event.id}
                      key={event.id}
                      title={event.name}
                      location={event.location}
                      date={parseDate(event.startTime)}
                      time={parseTime(event.startTime, event.endTime)}
                      freeSpots={event.seats}
                      company={event.organizer}
                      shortDescription={event.description}
                      buttonText="Evidentiraj"
                    />
                  ),
              )
            ) : (
              <LoadingSpinner
                type="TailSpin"
                color={colors.blue}
                height="50%"
                width="50%"
              />
            )}
          </EventsWrapper>
          <DummyItem />
        </SectionContent>
      ) : null}
    </>
  );
};

export default Records;
