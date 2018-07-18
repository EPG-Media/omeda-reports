
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

  self.sendQuery = (query) => {
    self.button_status = 'button_inactive';
    console.log(query);
  }



}]); // end myAPP.controller
