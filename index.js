`var katzDeliLine = [];`

function takeANumber(line){
  var one = 1++ 
  
  
  return "Welcome, " + ". You are number " + 
}

function nowServing (line){
  
  if (line.length === 0){
    return 'There is nobody waiting to be served!'
  } else{
   return "Currently serving " + line.shift() + "."
  }
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

     