# GymPass style app

## RFs (Functional Requirements)

- [x] Should be able to register;
- [x] Should be able to authenticate;
- [ ] Should be able to obtain credentials from logged in user;
- [ ] Should be able to obtain the check-ins count by logged user;
- [ ] Should be able to obtain check-ins history;
- [ ] Should be able to search for the nearest gym;
- [ ] Should be able to search gyms by the name;
- [ ] Should be able to check-in in a gym place;
- [ ] Should be able to validate the check-in of an user;

## RNs (Business Rules)

- [x] The user can't register with a duplicate email address;
- [ ] The user can't make two check-ins in a same day;
- [ ] The user can't make the check-in if is >100m away from the gym place;
- [ ] The check-in can't be validated until the 20 minutes after the creation;
- [ ] The check-in only can be validated by administrators;
- [ ] The gym place only can be registered by administrators;


## RNFs (Not Functional Requirements)

- [x] The password of the user must be encrypted;
- [x] The application data must be persisted in a PostgreSQL database;
- [ ] All data lists must be paginated by the 20 items per page;
- [ ] The user must be identified by a JWT;# api-solid
