import apiOrigin from './api';

// export const createUser = (user) => {
//   return fetch(`${apiOrigin}/api/user`, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   }).then((res) => res.json());
// };

export const loginUser = (user) => {
  return fetch(`${apiOrigin}/api/auth/jwt`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};

// export const getUserById = (id, authToken) => {
//   return fetch(`${apiOrigin}/api/user/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-type': 'application/json',
//       'auth-token': authToken,
//     },
//   }).then((res) => res.json());
// };

export const getAllUsers = (authToken) => {
  return fetch(`${apiOrigin}/api/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'auth-token': authToken,
    },
  }).then((res) => res.json());
};

// export const updateUserById = (id, authToken) => {
//   return fetch(`${apiOrigin}/api/user/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json',
//       'auth-token': authToken,
//     },
//     body: JSON.stringify(user),
//   }).then((res) => res.json());
// };

// export const deleteUserById = (id, authToken) => {
//   return fetch(`${apiOrigin}/api/user/${id}`, {
//     method: 'DEL',
//     headers: {
//       'auth-token': authToken,
//     },
//   }).then((res) => res.json());
// };

export const getUsersRegisteredToEvent = (id, authToken) => {
  return fetch(`${apiOrigin}/api/event-user/users/${id}`, {
    method: 'GET',
    headers: {
      'auth-token': authToken,
    },
  }).then((res) => res.json());
};

export const confirmUserAttendance = (confirmedUsers, id, authToken) => {
  return fetch(`${apiOrigin}/api/event-user/confirm/${id}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'auth-token': authToken,
    },
    body: JSON.stringify(confirmedUsers),
  })
    .then((res) => res)
    .then();
};

export const getEventRatings = (id, authToken) => {
  return fetch(`${apiOrigin}/api/event-user/ratings/${id}`, {
    method: 'GET',
    headers: {
      'auth-token': authToken,
    },
  }).then((res) => res.json());
};
