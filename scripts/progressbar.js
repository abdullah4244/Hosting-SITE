const progressbars = document.querySelectorAll('.progress-item .progressbar .progressdone');
const numberbars =document.querySelectorAll('.card-item .heading .number');

const boxes =document.querySelectorAll('.last-section .hosting-section .hosting-cards .card-item .progress-item');
console.log(boxes);


function isInViewport(element) {
    
    const rect = element.getBoundingClientRect();
    console.log(rect);
    console.log(window.innerHeight);
    console.log(rect.bottom)
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
document.addEventListener('scroll', function () {
    boxes.forEach(box=>{
        if(isInViewport(box)){
            progressbars.forEach(progress => {
                setTimeout(()=> {
                    progress.style.width = '99%';
                }, 500);    
            })};
    })
  
        

}, {
    passive: true
});

