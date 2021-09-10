# Voice Qualtrics: platform for making voice-based questionnaires

Specialization project

This platform is originally built to facilitate doctors and other caregivers to create and send out health assessment questionnaires to their patients. It is also a generalized platform for user to create voice-based questionnaires and send it out to people via Amazon Echo devices.

The platform  




## UI

The UI of the voice questionnaire is built using React and Bootstrap.
Figma prototype link: https://www.figma.com/proto/muG4NGDatAY6zFcb1fAXEf/voice-qualtrics?page-id=220%3A173&node-id=323%3A69&viewport=-292%2C-1018%2C0.4422054886817932&scaling=min-zoom

## pre-requisite

npm should be installed on the app.

## installation and start guide

To build the app, run the below commands to open the ui folder and build the app.  
```
cd ui
npm run build
```
To start the app, run the below command under the ui folder.

```
npm start
```

## Amazon Echo Device Connectivity

The `dynamo-db-starter` is the part for creating an Alexa Skill for the questionnaire platform. 
