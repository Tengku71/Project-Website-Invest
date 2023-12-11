const navBar = document.querySelector(".navbar")

window.addEventListener("scroll" , () =>{
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("navbar-active", windowPosition);
});

// navbar

const btnNavbar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
btnNavbar.addEventListener('click', function(){
  btnNavbar.classList.toggle('change');
  if(btnNavbar.classList.contains('change')){
    menu.style.display = 'flex';
    menu.style.opacity = '1';
    menu.classList.remove('slideOut');
    menu.classList.add('slideIn');

  }else{
    menu.style.display = 'none';
    menu.style.display = '0';
    menu.classList.remove('slideIn');
    menu.classList.add('slideOut');
  }
})

// Function to handle the autoplay logic
function startAutoplay() {
  // Interval between slides in milliseconds (adjust as needed)
  const interval = 3000; // 5 seconds

  // Get the radio buttons
  const radios = document.querySelectorAll('input[type=radio]');

  // Function to change the checked radio button
  function changeRadio() {
    // Find the currently checked radio
    const checkedRadio = document.querySelector('input[type=radio]:checked');

    // Find the index of the currently checked radio
    const currentIndex = Array.from(radios).indexOf(checkedRadio);

    // Calculate the index of the next radio
    const nextIndex = (currentIndex + 1) % radios.length;

    // Check the next radio button
    radios[nextIndex].checked = true;
  }

  // Variable to hold the setInterval ID
  let autoplayInterval;

  // Function to start autoplay
  function startAutoplay() {
    autoplayInterval = setInterval(changeRadio, interval);
  }

  // Function to stop autoplay
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Start autoplay when the page is loaded
  startAutoplay();
}

// Call the startAutoplay function when the page is loaded
document.addEventListener('DOMContentLoaded', startAutoplay);

// Hero Section

const btnSelengkapnya = document.querySelector('.btn-selengkapnya');
const btnCloseSelengkapnya = document.querySelector('.btn-tutup-selengkapnya');
btnSelengkapnya.addEventListener('click', function(){
  document.querySelector('.selengkapnya').style.display = 'block';
  document.querySelector('.selengkapnya').style.overflow = 'scroll';
  disableScroll();  
  overlayBlur();
  document.querySelector('.selengkapnya').addEventListener('mouseleave', function(){
    document.querySelector('.selengkapnya').style.display = 'none';
    document.querySelector('.selengkapnya').style.overflow = 'hidden';
    enableScroll();
    disableOverlay();
  })
})


// Btn Jadwal
const btnJadwal = document.querySelector('.btn2');
const btnCloseJadwal = document.querySelector('.btn-tutup');
const overlay = document.querySelector('overlay');
btnJadwal.addEventListener('click', function(){
  document.querySelector('.jadwal-trip').style.display = 'block';
  disableScroll();  
  overlayBlur();
  document.querySelector('.jadwal-trip').addEventListener('mouseleave', function(){
    document.querySelector('.jadwal-trip').style.display = 'none';
    enableScroll();
    disableOverlay();
  })

})
btnCloseJadwal.addEventListener('click', function(){
  document.querySelector('.jadwal-trip').style.display = 'none';
  enableScroll()
  document.querySelector('.overlay-about').style.display = 'none';
})

// Btn Paket
const Pkt1 = document.querySelector('.paket1');
const Pkt2 = document.querySelector('.paket2')
const btnPaket1 = document.querySelector('.btn-paket1');
const btnPaket2 = document.querySelector('.btn-paket2');

btnPaket1.addEventListener('click', function(){
  Pkt1.style.display = 'block';
  disableScroll();
  overlayBlur();
  Pkt1.addEventListener('mouseleave', function(){
    Pkt1.style.display = 'none';
    enableScroll();
    disableOverlay();
  })
})
btnPaket2.addEventListener('click', function(){
  Pkt2.style.display = 'block';
  disableScroll();
  overlayBlur();
  Pkt2.addEventListener('mouseleave', function(){
    Pkt2.style.display = 'none';
    enableScroll();
    disableOverlay();
  })
})



// Btn Destinasi
document.querySelector('#next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.querySelector('#slide').appendChild(lists[0]);
}
document.querySelector('#prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.querySelector('#slide').prepend(lists[lists.length - 1]);
}

// btn sewa jeep
const btnJeep1 = document.querySelector('.jeep1');
const btnJeep2 = document.querySelector('.jeep2');
const btnJeep3 = document.querySelector('.jeep3');
const btnJeep4 = document.querySelector('.jeep4');
const btnJeep5 = document.querySelector('.jeep5');
const btnJeep6 = document.querySelector('.jeep6');
const detailSewaJeep1 = document.querySelector('.detail-sewa-jeep1');
const detailSewaJeep2 = document.querySelector('.detail-sewa-jeep2');
const detailSewaJeep3 = document.querySelector('.detail-sewa-jeep3');
const detailSewaJeep4 = document.querySelector('.detail-sewa-jeep4');
const detailSewaJeep5 = document.querySelector('.detail-sewa-jeep5');
const detailSewaJeep6 = document.querySelector('.detail-sewa-jeep6');
const btnClose1 = document.querySelector('.close-btn1');
const btnClose2 = document.querySelector('.close-btn2');
const btnClose3 = document.querySelector('.close-btn3');
const btnClose4 = document.querySelector('.close-btn4');
const btnClose5 = document.querySelector('.close-btn5');
const btnClose6 = document.querySelector('.close-btn6');

btnJeep1.addEventListener('click', function(){
  detailSewaJeep1.style.display = 'flex';
  detailSewaJeep1.addEventListener('mouseleave', function(){
    detailSewaJeep1.style.display = 'none';
  })
})
btnJeep2.addEventListener('click', function(){
  detailSewaJeep2.style.display = 'flex';
  detailSewaJeep2.addEventListener('mouseleave', function(){
    detailSewaJeep2.style.display = 'none';
  })
})
btnJeep3.addEventListener('click', function(){
  detailSewaJeep3.style.display = 'flex';
  detailSewaJeep3.addEventListener('mouseleave', function(){
    detailSewaJeep3.style.display = 'none';
  })
})
btnJeep4.addEventListener('click', function(){
  detailSewaJeep4.style.display = 'flex';
  detailSewaJeep4.addEventListener('mouseleave', function(){
    detailSewaJeep4.style.display = 'none';
  })
})
btnJeep5.addEventListener('click', function(){
  detailSewaJeep5.style.display = 'flex';
  detailSewaJeep5.addEventListener('mouseleave', function(){
    detailSewaJeep5.style.display = 'none';
  })
})
btnJeep6.addEventListener('click', function(){
  detailSewaJeep6.style.display = 'flex';
  detailSewaJeep6.addEventListener('mouseleave', function(){
    detailSewaJeep6.style.display = 'none';
  })
})


btnClose1.addEventListener('click', function(){
  detailSewaJeep1.style.display = 'none';
})
btnClose2.addEventListener('click', function(){
  detailSewaJeep2.style.display = 'none';
})
btnClose3.addEventListener('click', function(){
  detailSewaJeep3.style.display = 'none';
})
btnClose4.addEventListener('click', function(){
  detailSewaJeep4.style.display = 'none';
})
btnClose5.addEventListener('click', function(){
  detailSewaJeep5.style.display = 'none';
})
btnClose6.addEventListener('click', function(){
  detailSewaJeep6.style.display = 'none';
})

const btnBatal = document.querySelector('.btn-batal');
const btnDaftar = document.querySelector('.btn-daftar');
const booking = document.querySelector('.container-booking');
const btnForm = document.querySelector('.btn-form');

btnBatal.addEventListener('click', function(){
    booking.style.display = 'none';
    document.querySelector('.booking').style.height = 'fit-content';
    document.querySelector('.booking').style.overflow = 'hidden';
    document.body.style.overflow="initial";
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.overlay-booking').style.display = 'none';
    location.href="#booking"
})
btnDaftar.addEventListener('click', function(){
  booking.style.display = 'none';
  document.querySelector('.booking').style.height = 'fit-content';
  document.querySelector('.booking').style.overflow = 'hidden';
  document.body.style.overflow="initial";
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('.overlay-booking').style.display = 'none';
})
btnForm.addEventListener('click', function(){
  booking.style.display = 'block';
  location.href="#container-booking"
  document.body.style.overflow="hidden"; 
  document.getElementById('overlay').style.display = 'block';
  document.querySelector('.overlay-booking').style.display = 'block';
  if (x.matches) { // If media query matches
    if (y.matches) { // If media query matches
      document.querySelector('.booking').style.height = '800px';
      document.querySelector('.booking').style.overflow = 'scroll';
    }else{
      document.querySelector('.booking').style.height = '1300px';
      document.querySelector('.booking').style.overflow = 'scroll';
    }
  }else{
    document.querySelector('.booking').style.height = '800px';
    document.querySelector('.booking').style.overflow = 'scroll';
  }
})

ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 2000,
  delay: 200
 });
 ScrollReveal().reveal('.hero', {delay: 50, origin: 'top'});
 ScrollReveal().reveal('.about', {delay: 50, origin: 'bottom'});
 ScrollReveal().reveal('.paket-wisata', {delay: 50, origin: 'bottom'});
 ScrollReveal().reveal('.sewa-jeep', {delay: 50, origin: 'bottom'});
 ScrollReveal().reveal('.destinasi', {delay: 50, origin: 'bottom'});
 ScrollReveal().reveal('.booking', {delay: 50, origin: 'bottom'});
 ScrollReveal().reveal('.footer', {delay: 50, origin: 'left'});

function overlayBlur(){
  document.querySelector('.overlay-about').style.display = 'block';
  document.querySelector('.overlay-paket').style.display = 'block';
  document.querySelector('.overlay-selengkapnya').style.display = 'block';
}
function disableOverlay(){
  document.querySelector('.overlay-paket').style.display = 'none';
  document.querySelector('.overlay-about').style.display = 'none';
  document.querySelector('.overlay-selengkapnya').style.display = 'none';
}

 function disableScroll() { 
  document.body.style.overflow="hidden"; 
  document.getElementById('overlay').style.display = 'block';
}
 function enableScroll() { 
  document.body.style.overflow="initial"; 
  document.getElementById('overlay').style.display = 'none';
}

let x = window.matchMedia("(max-width: 1180px)")
let y = window.matchMedia("(max-width: 730px)")