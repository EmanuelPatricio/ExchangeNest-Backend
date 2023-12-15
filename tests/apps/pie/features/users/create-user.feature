Feature: Create a new user
  In order to have users in the platform
  As a user with guest permissions
  I want to create a new user for myself

  Scenario: A valid non existing user
    Given I send a POST request to "/api/users" with body:
    """
    {
      "id": 124124214,
      "firstName": "user",
      "lastName": "123",
      "nic": "12345678901",
      "email": "user.123@email.com",
      "password": "123456",
      "birthDate": "2001-01-01",
      "userImage": null,
      "idRole": 4,
      "idUserStatus": 1,
      "idCountry": 1,
      "createdOn": "2023-12-04",
      "createdBy": 1,
      "lastModifiedOn": null,
      "lastModifiedBy": null
    }
    """
    Then the response status code should be 201
    And the response should be empty

 Scenario: An invalid non existing user
    Given I send a POST request to "/api/users" with body:
    """
    {
      "id": 124124124,
      "firstName": "user",
      "lastName": 123,
      "nic": "12345678901",
      "email": "user.123@email.com",
      "password": "123456",
      "birthDate": "2001-01-01",
      "userImage": null,
      "idRole": 4,
      "idUserStatus": 1,
      "idCountry": 1,
      "createdOn": "2023-12-04",
      "createdBy": 1,
      "lastModifiedOn": null,
      "lastModifiedBy": null
    }
    """
    Then the response status code should be 422