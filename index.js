// Code your solution in this file.


function lowerCaseDrivers(drivers){
  
  return drivers.map(function(s){
     return s.toLowerCase();
  })
  
}


function nameToAttributes(drivers){
  
  return drivers.map(function(s){
      let temp = s.indexOf(s);
      let str1 = s.slice(0, temp-1);
      let str2 = s.slice(temp+1, s.length);
      
  });
  
}