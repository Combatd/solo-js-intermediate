function main() {
  var flightNumber = readLine();
  var flightStatus = readLine();
  
  var flight1 = new Flight(flightNumber, flightStatus)
  
  //output
  console.log('The flight ' + flight1.number + ' is ' + flight1.status)
  
}

function Flight(flightNumber, status) {
  this.number = flightNumber;
  this.status = status;
};