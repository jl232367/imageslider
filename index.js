// Want to make and image slider that can take in an array of images and Advance through them, go backwards throw them, allow for jumping to specific pictures, and advance automatically every 5 seconds. 

// array for holding images to iterate through
const arrayOfImages = [];

// manually populating image array for testing
arrayOfImages[0] = 'https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-2060x1288.jpg';
arrayOfImages[1] = 'https://assets.newatlas.com/dims4/default/b89cd58/2147483647/strip/true/crop/925x617+0+232/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fchandra-nasa-space-telescope-anniversary-4.jpg';
arrayOfImages[2] = 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg';
arrayOfImages[3] = 'https://media.wired.com/photos/595461288e8cc150fa8ebb79/master/pass/hs-2006-14-f-hires_jpg.jpg';
arrayOfImages[4] = 'https://spaceandbeyondbox.com/wp-content/uploads/2020/02/Image-1.jpg';
arrayOfImages[5] = 'http://astronomy.com/~/media/91C30DC3C221461C813777A84738AA53.jpg'; 
arrayOfImages[6] = 'https://images.immediate.co.uk/production/volatile/sites/7/2018/02/Earth-from-space-1-64e9a7c.jpg?quality=90&resize=768,574';
arrayOfImages[7] = 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/142413-apps-feature-art-and-science-collide-the-best-in-modern-space-art-image1-iha6vzu3wk.jpg';
arrayOfImages[8] = 'https://miro.medium.com/max/6200/1*teBtR_0pirBnX4nURoMvLA.jpeg'; 

// Take and array of image url (file reference) to iterate through and generate and also the parent element id for the purpose of storage
const imgSlider = (imgArray, imageSliderParentElementId) => {
    const slideShowContainer = document.getElementById(imageSliderParentElementId);
    // left arrow to move image to previous
    const leftArrow = document.createElement('button');
    leftArrow.setAttribute('class', 'leftarrowclass');
    leftArrow.style.height = '100%';
    leftArrow.style.width = '40px';
    leftArrow.innerText = '<';
    leftArrow.style.fontSize = '1.5em';
    slideShowContainer.appendChild(leftArrow);
    leftArrow.addEventListener('click', () => {imagePrevious()});
    // image element to hold image
    const contentImage = document.createElement('img');
    contentImage.setAttribute('class', 'imagedisplay');
    slideShowContainer.appendChild(contentImage);
    contentImage.src = imgArray[8];
    // right arrow to advance image through array
    const rightArrow = document.createElement('button');
    rightArrow.setAttribute('class', 'rightarrowclass');
    rightArrow.style.height = '100%';
    rightArrow.style.width = '40px';
    rightArrow.innerText = '>';
    rightArrow.style.fontSize = '1.5em';
    
    slideShowContainer.appendChild(rightArrow);
    rightArrow.addEventListener('click', () => {imageNext()});


    // Make div holding row of circle buttons to jump to specific images
    const imageDotNavContainer = document.createElement('div');
    imageDotNavContainer.setAttribute('class', 'imagedotcontainer');
    slideShowContainer.appendChild(imageDotNavContainer);
    for (let i = 0; i <= imgArray.length -1; i++) {
        const dot = document.createElement('button');
        dot.setAttribute('class', 'navDot');
        
        dot.setAttribute('dotImageIndex', i); // data point index to pass in to get correct image from array
        dot.addEventListener('click', () => {goToImage(dot.getAttribute('dotImageIndex'))} ); 
        imageDotNavContainer.appendChild(dot);
    }

    

    // function to jump to specific image in array 

    const goToImage = (imageIndex) => {
        return contentImage.src = imgArray[imageIndex];
    }
    
    // need function to advance through Array for image to display
    const imageNext = () => {
        let last = imgArray.length - 1; 
        for (let i = 0; i <= imgArray.length; i++) {
            if (contentImage.src === imgArray[i] && contentImage.src != imgArray[last])  {
               // return contentImage.src = imgArray[0];
               
                 return contentImage.src = imgArray[i+ 1];
            } else if (contentImage.src === imgArray[last]) {
                 return contentImage.src = imgArray[0];
            }
        }
    }

    // function to move to previous image
    const imagePrevious = () => {
        let last = imgArray.length - 1; 
        for (let i = 0; i <= imgArray.length; i++) {
            if (contentImage.src === imgArray[i] && contentImage.src != imgArray[0]) {
                return contentImage.src = imgArray[i - 1];
            } else if (contentImage.src === imgArray[0]) {
                return contentImage.src = imgArray[last];
            }
        }
    }
    setInterval(imageNext, 10000);
    /*
if (contentImage.src === imgArray[last]) {
                   return contentImage.src = imgArray[0]
               }
                



contentImage.src === imgArray[i] && 
contentImage.src != imgArray[last] && 

for (let i = 0; i <= imgArray.length; i++) {
        const contentImage = document.createElement('img');
        contentImage.setAttribute('class', 'imagedisplay');
        slideShowContainer.appendChild(contentImage);
        contentImage.src = imgArray[i];
    }
    */

}

imgSlider(arrayOfImages, 'imageFrame');

