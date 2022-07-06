
  function transportFee (shift){
    if ( shift.startsWith ("morning")){
      return "You will pay R20!"
  }
  else if (shift.startsWith ("afternoon")){
      return "You will pay R10!"
  }
  else{
      return 'You are in luck for a free ride!';
  }
    };