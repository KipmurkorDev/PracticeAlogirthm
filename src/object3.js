var employees=[]
employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}



function pluck(list, propertyName) {
    return list.map(function(i) {
      return i[propertyName];
    });
  }
  const duck = {
    hasBill: true
  };
  const beaver = {
    hasTail: true
  };
  const otter = {
    hasFur: true,
    feet: 'webbed'
  };
  
  function Basketball(color) {
    return {
      color: color,
      numDots: 35000
    };
  }