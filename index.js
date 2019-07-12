`var katzDeliLine = [];`

function takeANumber(katzDeli, newCustomer){
  
    if (katzDeli.length > 0);
    katzDeli.push(newCustomer);
     return ('Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.')
  }

function nowServing (katzDeliLine){
  
  if(katzDeliLine.length===0) { //checks if length of array(katzDeli) is = to 0
   return 'There is nobody waiting to be served!'; //returns string no one is waiting
}
  var customer = katzDeliLine.shift(); // shift array of people
  return "Currently serving " + customer + "."; //return string with customer name
}

function currentLine(line) {
    
    if (line.length === 0) {
      return "The line is currently empty."
    } else{
      var lineToReturn = ""
    for(var i = 0; i < line.length; i++) {
       lineToReturn += (i + 1) + ". " + line[i]
       if (i < (line.length - 1)) {
         lineToReturn += ", "
       }
      }
    return "The line is currently: " + lineToReturn
    }
}

     