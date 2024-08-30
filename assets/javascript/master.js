 // exist array
 const fruitsName = ["Pear", "Apple", "Exotic"];
 const colors = ['0B403F', 'F05A72', '6979FB'];
 const positions = ['0%', '-100%', '-200%'];
 const colorBacks = ['CBE78F', 'FBB2B2', 'C1BFF2'];

 // access to eleman's
 const nextBtn = document.getElementsByClassName('nextButton')[0];
 const previousBtn = document.getElementsByClassName('previousButton')[0];
 const fruitName = document.querySelector('.fruitName');
 const fruity = document.querySelector('.fruity');
 const body = document.querySelector('.bodyOrg');
 const pos = document.querySelector('.center .img2');
 const fruitImages = document.querySelectorAll('.fruit-images');
 const footer = document.querySelector('.footer');


 let flag = 0;
 const updateDisplay = () => {
     fruity.style.color = '#' + colors[flag];
     fruitName.innerHTML = fruitsName[flag];
     body.style.background = '#' + colorBacks[flag];
     pos.style.left = positions[flag];


     // Hide or reset all fruit containers
     fruitImages.forEach(val => {
         val.classList.add('hide');
     });

     // Show the current fruit container
     fruitImages[flag].classList.remove('hide');

     // Add animation class
     fruitName.classList.remove('animate');
     void fruitName.clientHeight;
     fruitName.classList.add('animate');
 };

 const updateButtons = () => {
     if (flag <= 0) {
         previousBtn.classList.add('hide');
     } else {
         previousBtn.classList.remove('hide');
     }

     if (flag >= colors.length - 1) {
         nextBtn.classList.add('hide');
     } else {
         nextBtn.classList.remove('hide');
     }
 };

 // Initial display setup
 updateDisplay();
 updateButtons();

 nextBtn.addEventListener('click', () => {
     if (flag < colors.length - 1) {
         flag++;
         updateDisplay();
         updateButtons();
     }
 });

 previousBtn.addEventListener('click', () => {
     if (flag > 0) {
         flag--;
         updateDisplay();
         updateButtons();
     }
 });