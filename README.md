# Voice Qualtrics: platform for making voice-based questionnaires

Specialization project 2021, Yimeng Sun & Srishti Gupta

## Overview


Voice Qualtrics is a survey-making platform designed for creating and sending out questionnaires through Amazon’s Echo devices. It is primarily built to facilitate care providers to distribute Electronic Rapid Fitness Assessment (eRFA) to their patients so the patients can answer the questions from the comfort of their home, but it is also a general platform to design and send out any voice-based questionnaries. 


## Developer's guide

The platform consists of three part, the Graphical User Interface (GUI), Dynamo DB database, and the Amazon Web Services(AWS)'s skills. 

Amazon Web Services (AWS) ’s lambda function then helps to translate the requests and create items to the tables in DynamoDB. When the user speaks to his/her Alexa device to trigger the questionnaire, Amazon voice service would read the questions from the database and announce them one at a time.  

To launch the platform, download the git repository and follow the below instructions. 

## UI

The UI of the voice questionnaire is built using React and Bootstrap. 
Below is the Figma prototype link: https://www.figma.com/proto/muG4NGDatAY6zFcb1fAXEf/voice-qualtrics?page-id=220%3A173&node-id=323%3A69&viewport=-292%2C-1018%2C0.4422054886817932&scaling=min-zoom

### pre-requisite

Before you build and run the app, npm should be installed on the app.

### installation and start guide

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

The `dynamo-db-starter` folder is for creating an Alexa Skill for the questionnaire platform.
