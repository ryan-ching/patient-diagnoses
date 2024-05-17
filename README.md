# NEMS Coding Project
![Diagram](./src/images/uml.png)

## Website Link
https://main.d3otgbi377lksu.amplifyapp.com/
## Instructions
- Patient Demographics
    - Name
    - Age
    - Address
    - Sex/Gender
- List of recommended diagnosis to choose from
    - Implement some sort functionality without using built in features (client side/server side)
- User interaction to add diagnosis to patient
    - save to a file, database, or in-memory so that a page refresh keeps the state of that change
- If you can put yourself in the shoes of a doctor treating a patient what additional feature might be useful and how would you go about extending the application to support those.

## Explanation
- App.js: Main render component, as well as storing state through patientStatus
    - patientStatus stores the state of the patients after updating the diagnosis
    - Saves locally by updating localStorage patientStatus whenever it is changed
    - add/delete takes in the id (current patient) and target diagnosis (to add/delete) to update patientStatus
- Data.js: Store data objects
    - patientList - Store patient list with specified demographics + symptoms and diagnosis (initially empty) used as initial state for patientStatus
    - diagnosisList - Store list of diagnosis with associated symptoms, used for filtering and sorting available diagnosis for each patient
- Header.js: Title card
- PatientSection.js: Rendered for each individual patient. displays all patient information and current diagnosis
    - Parameters: patient info, add/delete functions
    - add/delete buttons when clicked call App.js functions to update state
    - Filters diagnosis
- SubmitSection.js: Store current patientData in a string object, save as csv file
    - TODO
## Additional Features
- Delete a diagnosis (done)
- Extending to recommended medication
- Better sorting algorithm (maybe rank the symptoms of how likely they predict a diagnosis)

## TODO
- Add submit function to export current data
- Styling
