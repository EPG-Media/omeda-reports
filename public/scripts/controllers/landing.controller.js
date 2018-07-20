
// app contains error checking logic for former employer 1 and highschool diploma
// uncoment to use (both front and backend)

myApp.controller('LandingController',['EmailFactory', 'alertify', '$scope', '$location', '$http', function(EmailFactory, alertify, $scope, $location, $http) {

  // defining this
  const self = this;

  // defining alertify options
  alertify.logPosition('bottom right');

  // setting init button status
  self.button_status = 'button_active';
  self.excel_button_status = 'button_active';

  // setting select data
  self.date = new Date().toLocaleDateString();
  self.organization = 'EPG Media';
  self.brand = 'EPG Media Central Database';

  // setting dynamic dates for select
  let today = new Date();
  self.one_week_back = today.setDate(today.getDate() - 7);
  self.two_week_back = today.setDate(today.getDate() - 14);
  self.three_week_back = today.setDate(today.getDate() - 21);
  self.thirty_week_back = today.setDate(today.getDate() - 30);
  console.log(today);

  self.users = [
    {
      username: 'Bernadette Wohlman',
      user_email: 'bwohlman@epgmediallc.com'
    },
    {
      username: 'Chris Stanton',
      user_email: 'cstanton@epgmediallc.com'
    },
    {
      username: 'Karen Kalinyak',
      user_email: 'kkalinyak@epgmediallc.com'
    },
    {
      username: 'Kathy Johnson',
      user_email: 'Kathy.Johnson@Boatingindustry.com'
    },
    {
      username: 'Mary Jo Temei',
      user_email: 'mtomei@epgmediallc.com'
    }
  ]



  // dummy data
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
    },
    {
      brand: 'WR',
      type: 'Enews',
      campaign: 'Enews',
      date: '06/04/18',
      headline: 'The headline of the article',
      deployed: '7326',
      recieved: '6932',
      bounce: '5.34%',
      opens: '806',
      unique_opens: '263',
      open_rate: '6.5%',
      clicks: '1119',
      unique_clicks: '652',
      click_to_open: '10.4%',
      ctr: '2.8%'
    },
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
    },
    {
      brand: 'WR',
      type: 'Enews',
      campaign: 'Enews',
      date: '06/04/18',
      headline: 'The headline of the article',
      deployed: '7326',
      recieved: '6932',
      bounce: '5.34%',
      opens: '806',
      unique_opens: '263',
      open_rate: '6.5%',
      clicks: '1119',
      unique_clicks: '652',
      click_to_open: '10.4%',
      ctr: '2.8%'
    }
  ];

  // makes query call to API
  self.sendQuery = (query) => {
    self.button_status = 'button_inactive';
    console.log(query);
  };

  // exports data to excel
  self.export = (API_response) => {
    self.excel_button_status = 'button_inactive';
    $http({
      method: 'POST',
      url: '/excel_export',
      data: API_response
    }).then(function(response) {
      alertify.success('<span class="tooltip_span"><img class="tooltip_img" src="./assets/images/logo2.png"><h4>SUCCESS - Report is being emailed to you</h4></span>');
      self.excel_button_status = 'button_active';
    }).catch(function(error) {
      alertify.alert("ERROR - exporting and mailing report. Please try again later");
      self.excel_button_status = 'button_active';
      console.log('ERROR exporting to Excel', error);
    });
  };




}]); // end myAPP.controller
