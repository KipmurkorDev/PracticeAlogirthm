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
  function CoffeeMaker(object) {
    let needsRefill = false;
  
    return Object.assign({}, object, {
      pourAll: function () {
        needsRefill = true;
      },
      isEmpty: function () {
        return needsRefill;
      }
    });
  }

 const newobtc= {
    style: 'percolator',
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    }
  }
  let developer = {
    name: 'Veronika',
    getName: function () {
      return this.name;
    }
  };