
Feature: contact list

  Scenario Outline: login and verify contact list
    Given User visit contact list app 
    When User input "<email>" email 
    And User input "<password>" password 
    And click submit button
    Then verify user should be able to see contact list 
    Then verify contact list data is correct 

    Examples: 
    | email                    | password             |
    | yulia@gmail.com          | tester123            |
    | update@gmail.com     | testing123                 |
