// app_25


function Timer(){
    const seconds = document.querySelector('body #container .list .item .seconds');
    if(seconds.textContent > 0){
        if(Number(seconds.textContent)<=10){
            seconds.textContent = `0${Number(seconds.textContent)-1}`;
        }
        else{
            seconds.textContent = Number(seconds.textContent)-1;
        }
    }
    else if(seconds.textContent == 0){
        const minutes = document.querySelector('body #container .list .item .minutes');
        if(minutes.textContent > 0){
            seconds.textContent = 59;
            if(Number(minutes.textContent)<=10){
                minutes.textContent = `0${Number(minutes.textContent)-1}`;
            }
            else{
                minutes.textContent = Number(minutes.textContent)-1;
            }
        }
        else if(minutes.textContent == 0){
            const hours = document.querySelector('body #container .list .item .hours');
            if(hours.textContent > 0){
                seconds.textContent = 60-1;
                minutes.textContent = 60-1;
                if(Number(hours.textContent)<=10){
                    hours.textContent = `0${Number(hours.textContent)-1}`;
                }
                else{
                    hours.textContent = Number(hours.textContent)-1;
                }
            }
            else if(hours.textContent == 0){
                const days = document.querySelector('body #container .list .item .days');
                if(days.textContent > 0){
                    seconds.textContent = 60-1;
                    minutes.textContent = 60-1;
                    hours.textContent = 23;
                    if(Number(days.textContent)<=10){
                        days.textContent = `0${Number(days.textContent)-1}`;
                    }
                    else{
                        days.textContent = Number(days.textContent)-1;
                    }
                }
                else if(days.textContent == 0 && Number(seconds.textContent) == 0 && Number(minutes.textContent) == 0 && Number(hours.textContent) == 0){
                    clearInterval(stop);
                    console.log('done !');
                }
                
            }
        }
    }
}
const stop = setInterval(Timer,1000);
