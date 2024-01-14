// images=documet.querySelector('slider-container');

// if we use querySelector we only get first img under slider-container

let sliderWrapper=document.querySelector('.slider-container');
let images=document.querySelectorAll('.slider-container img');
let img_slide=document.createElement('div');
img_slide.classList.add('image-slide');

let parent=images[0].parentNode;
parent.replaceChild(img_slide,images[0])

images.forEach((img)=>{
    img_slide.appendChild(img)
})


// cloning example
// images.forEach((img)=>{
   
//     img_slide.appendChild(img.cloneNode(true))
// })

// images.forEach((img)=>{
   
//     img_slide.appendChild(img)
// })
// images.forEach((img)=>{
   
//     sliderWrapper.appendChild(img)
// })

// cloning ends


var cur_index=0;
var length=images.length;
// add prev and next buttons
    let btnPrev=document.createElement('button')
    btnPrev.classList.add('btn-prev');
    btnPrev.innerHTML="&#10094;"
    sliderWrapper.appendChild(btnPrev)
    btnPrev.addEventListener('click',clickPrev);

    let btnNext=document.createElement('button')
    btnNext.classList.add('btn-next');
    btnNext.innerHTML="&#10095;"
    sliderWrapper.appendChild(btnNext)
    btnNext.addEventListener('click',clickNext);

    // adding dots


function loadImage()
{
    images.forEach((img,index)=>{
        if(index !=cur_index)
        {
           
            img.classList.add('d-none')
           
        }
        else{
           
            img.classList.remove('d-none')
        }
    })
}

function clickPrev()
{
    if(cur_index > 0)
    {
        cur_index=cur_index-1;
        loadImage();
    }
    else{
        cur_index=length-1;
        loadImage();
    }
  
}

function clickNext()
{
    if(cur_index === length-1)
    {
        cur_index=0;
        loadImage();
    }
    else{
        cur_index+=1;
        loadImage();
    }
}

loadImage();