let animation = anime({
    targets: '.letter',
    opacity: 1,
    translateY: 50, 
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInExpo'
    }, 
    scale: anime.stagger([0.7, 0.5], {from: 'center'}), 
    delay: anime.stagger(50, {start: 1000}), 
    translateX: [-10, 20]
  });                
  






var txt = 
`Hello! My name is Priyal Patel and I am a sophomore 
at University of Florida. I will graduate in the May 2024 
with a degree in Computer Science Engineering. I grew up in 
a small city in West India after my family relocated there
from Jacksonville, FL. We moved to gainesville, FL during 
my sophomore year of highschool. I am passionate about 
learning about and working with new software that aim to 
improve communities and help clients in their daily life. 
My other hobbies include singing, watching documentaries, 
volunteering and dancing`;



var i = 0;
var speed = 70;
textPosition = 0;

function typeWriter() {
    document.getElementById("typewriter").innerHTML = txt.substring(0, textPosition) + "<span>\u25ae</span>";
    if(textPosition++ != txt.length)
        setTimeout(typeWriter, speed);
  
}
typeWriter();

