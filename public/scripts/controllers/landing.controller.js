
// app contains error checking logic for former employer 1 and highschool diploma
// uncoment to use (both front and backend)

myApp.controller('LandingController',['EmailFactory', 'alertify', '$scope', '$location', function(EmailFactory, alertify, $scope, $location) {

  // defining this
  const self = this;

  // defining alertify options
  alertify.logPosition('top right');

  // setting init button status
  self.button_status = 'button_active';

  // setting variables
  self.date = new Date().toLocaleDateString();
  self.organization = 'EPG Media';
  self.brand = 'EPG Media Central Database';

  self.API_response = [
    {
      brand: 'BI',
      type: 'Enews',
      campaign: 'Top10',
      date: '06/04/18',
      headline: 'May Top 10: Yamaha Marine officially unveils new 425 horsepower V8 outboard, Mercury Marine introduces new V-8, V-6 engine models',
      deployed: '13187',
      recieved: '13146',
      bounce: '0.31%',
      opens: '4593',
      unique_opens: '2805',
      open_rate: '21.34%',
      clicks: '1224',
      unique_clicks: '685',
      click_to_open: '24.42%',
      ctr: '5.21%'
    },
    {
      brand: 'BW',
      type: 'Enews',
      campaign: 'Enews',
      date: '06/04/18',
      headline: 'The 2018 Retailers of the Year Part 1',
      deployed: '8316',
      recieved: '7735',
      bounce: '6.99%',
      opens: '1806',
      unique_opens: '1263',
      open_rate: '16.33%',
      clicks: '1119',
      unique_clicks: '452',
      click_to_open: '10.42%',
      ctr: '4.18%'
    }
  ];

  self.sendQuery = (query) => {
    self.button_status = 'button_inactive';
    console.log(query);
  }



}]); // end myAPP.controller
