function tocarSom(event){
    
           
    
    if(event.code === 'KeyQ'){
        let audio = document.querySelector('#s_keyq');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keyq');
        div.classList.add('active');
    }

    if(event.code === 'KeyW'){
        let audio = document.querySelector('#s_keyw');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keyw');
        div.classList.add('active');
    }

    if(event.code === 'KeyE'){
        let audio = document.querySelector('#s_keye');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keye');
        div.classList.add('active');
    }

    if(event.code === 'KeyA'){
        let audio = document.querySelector('#s_keya');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keya');
        div.classList.add('active');
    }

    if(event.code === 'KeyS'){
        let audio = document.querySelector('#s_keys');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keys');
        div.classList.add('active');
    }

    if(event.code === 'KeyD'){
        let audio = document.querySelector('#s_keyd');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keyd');
        div.classList.add('active');
    }

    if(event.code === 'KeyZ'){
        let audio = document.querySelector('#s_keyz');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keyz');
        div.classList.add('active');
    }

    if(event.code === 'KeyX'){
        let audio = document.querySelector('#s_keyx');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keyx');
        div.classList.add('active');
    }

    if(event.code === 'KeyC'){
        let audio = document.querySelector('#s_keyc');
        audio.currentTime = 0;
        audio.play();
        let div = document.querySelector('.keyc');
        div.classList.add('active');
    }
}

function limpar(){
    let elements = document.querySelectorAll('.active');
        
        elements.forEach((element) => {
            element.classList.remove('active');
            
        });

}



document.body.addEventListener('keydown', tocarSom);
document.body.addEventListener('keyup', limpar)