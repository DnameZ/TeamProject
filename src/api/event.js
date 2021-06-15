import apiOrigin from './api';

// export const createEvent = (event, authToken) => {
//   return fetch(`${apiOrigin}/api/event`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       'auth-token': authToken,
//     },
//     body: JSON.stringify(event),
//   }).then((res) => res.json());
// };

export const getAllEvents = (authToken) => {
  return fetch(`${apiOrigin}/api/event`, {
    method: 'GET',
    headers: {
      'auth-token': authToken,
    },
  }).then((res) => res.json());
};

// export const getEventById = (id, authToken) => {
//   return fetch(`${apiOrigin}/api/event/${id}`, {
//     method: 'GET',
//     headers: {
//       'auth-token': authToken,
//     },
//   }).then((res) => res.json());
// };

export const registerForEvent = (id, authToken) => {
  return fetch(`${apiOrigin}/api/event-user/${id}`, {
    method: 'POST',
    headers: {
      'auth-token': authToken,
    },
  }).then((res) => res);
};

export const cancelEventRegistration = (id, authToken) => {
  return fetch(`${apiOrigin}/api/event-user/${id}`, {
    method: 'DEL',
    headers: {
      'auth-token': authToken,
    },
  }).then((res) => res);
};

export const rateEvent = (review, id, authToken) => {
  return fetch(`${apiOrigin}/api/event-user/rate/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'auth-token': authToken,
    },
    body: JSON.stringify(review),
  }).then((res) => res);
};

export const getUserEvents = (authToken) => {
  return fetch(`${apiOrigin}/api/event-user/user-events`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'auth-token': authToken,
    },
  }).then((res) => res.json());
};
