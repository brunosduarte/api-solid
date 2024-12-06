# GymPass style app

## RFs (Functional Requirements)

- [x] Should be able to register;
- [x] Should be able to authenticate;
- [x] Should be able to obtain credentials from logged in user;
- [x] Should be able to obtain the check-ins count by logged user;
- [x] Should be able to obtain check-ins history;
- [ ] Should be able to search for the nearest gym;
- [ ] Should be able to search gyms by the name;
- [x] Should be able to check-in in a gym place;
- [ ] Should be able to validate the check-in of an user;
- [x] Should be able to register a gym place;

## RNs (Business Rules)

- [x] The user can't register with a duplicate email address;
- [x] The user can't make two check-ins in a same day;
- [x] The user can't make the check-in if is >100m away from the gym place;
- [ ] The check-in can't be validated until the 20 minutes after the creation;
- [ ] The check-in only can be validated by administrators;
- [ ] The gym place only can be registered by administrators;


## RNFs (Not Functional Requirements)

- [x] The password of the user must be encrypted;
- [x] The application data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated by the 20 items per page;
- [ ] The user must be identified by a JWT;
