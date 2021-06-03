export class User {
  constructor(email, password, firstName, lastName, isAdmin) {
    (this.email = email),
      (this.password = password),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.isAdmin = isAdmin);
  }
}

export class Event {
  constructor(
    startTime,
    endTime,
    name,
    description,
    location,
    organizer,
    seats,
    category,
  ) {
    (this.startTime = startTime),
      (this.endTime = endTime),
      (this.name = name),
      (this.description = description),
      (this.location = location),
      (this.organizer = organizer),
      (this.seats = seats),
      (this.category = category);
  }
}
