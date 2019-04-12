 //Depois de tanto apanhar consegui desenvolver menu fixo sem jQuery!!

 window.onscroll = function(){
    let pega = document.getElementById('navbar');
      if(window.scrollY >= 100){
        pega.classList.add('fixo');
        pega.style.backgroundColor = "black";
      }
      else{
       pega.classList.remove('fixo');
       pega.style.backgroundColor = "#f1f1f1";
      }
    }