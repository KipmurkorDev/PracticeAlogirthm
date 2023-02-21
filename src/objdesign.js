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
  
  const platypus = Object.assign({}, duck, beaver, otter);
  
  console.log(platypus);
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
  
  const platypus = Object.assign(duck, beaver, otter);