
function togglebtn() {
        let data=document.querySelector(".mobile-bar")
        data.classList.toggle('active')
}

document.querySelectorAll('.questions').forEach(question => {
  const questionHead = question.querySelector('.q-head');
  questionHead.addEventListener('click', () => {
      question.classList.toggle('seeanswer');
  });
});

const mainMenu = document.querySelector('.sticky');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        mainMenu.classList.add('slidedown');
    } else {
        mainMenu.classList.remove('slidedown');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 3, // Display 3 slides in a row
      spaceBetween: 30, // Add spacing between slides
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow clickable pagination
      },
      breakpoints: {
        700: {
          slidesPerView: 3, // Show 1 slide on smaller screens
          spaceBetween: 20, // Adjust spacing for smaller screens
        },
      },
    });
  });




const counters=document.querySelectorAll('.count')
const container=document.querySelector('.company-short-details')

  window.addEventListener('scroll',()=>{
    if (window.scrollY>300) {
      counters.forEach(counter=>{
        counter.innerText=0
        let count=0
        function updateCount() {
          const target =parseInt(counter.getAttribute('data-target'))
          if (count < target) {
            count++;
            counter.innerText=count
            setTimeout(updateCount,100)
          }
          else{
            counter.innerText=target
          }
        }

        updateCount();
        
      })
    }
  })


(function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
    w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
    m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://167.86.121.150:8080/mtc.js','mt');
mt('send', 'pageview');
  