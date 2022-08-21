"use strict"
window.addEventListener("load", windowLoad);

function windowLoad(){
    //initialization
    function digitsCountersInit(digitsCountersItems){
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
        if (digitsCounters){
            digitsCounters.forEach(digitsCounter => {
                digitsCountersAnimate(digitsCounter);
            }); 
        }
    }
    //animation
    function digitsCountersAnimate(digitsCounter){
        let startTimeStamp = null;
        const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
        const startValue = parseInt(digitsCounter.textContent);
        const startPosition = 0;
        const step = (timestamp) => {
            if (!startTimeStamp) startTimeStamp = timestamp;
            const progress = Math.min((timestamp - startTimeStamp) / duration, 1);
            digitsCounter.textContent = Math.floor(progress * (startPosition + startValue));
            if (progress < 1){
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // digitsCountersInit();

        
    let options = {
        threshold: 0.3
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                const targetElement = entry.target;
                const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]"); 
                if (digitsCountersItems.length){
                    digitsCountersInit(digitsCountersItems);
                }
                //чтоб не повторялась анимация
                observer.unobserve(targetElement);
            }
        });
    }, options);

    let sections = document.querySelectorAll('.includes');
    if (sections.length){
        sections.forEach(section => {
            observer.observe(section);
        })
    }
}
