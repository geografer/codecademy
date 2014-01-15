var suitcase = {
     shirt: "Hawaiian"
     };

     if(suitcase.hasOwnProperty("shorts")){

      console.log(suitcase.shorts);


     }else if(!suitcase.hasOwnProperty("shorts")){

     suitcase = { shorts: "green stripes"};
      console.log(suitcase.shorts);


    }