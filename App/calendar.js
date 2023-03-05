import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId: "584483301490-mm4q8n18duq4am1umpld5k6op8iar59g.apps.googleusercontent.com",
  apiKey: "AIzaSyD7AE68CfA-VpsIiXZRi56Rf8zr8XK5U94",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);