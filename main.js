const submit = document.querySelector('#hook-options');
const answer = document.querySelector('#hook-answer');
submit.addEventListener('change', (event) => {
    let number = +event.target.value;
    if (isNaN(Number(event.target.value))){
        if (event.target.value.toLowerCase().slice(0,2) === 'no')
            answer.innerHTML = `That's Right! We Aren't Alone!`;
        else if (event.target.value.toLowerCase().slice(0,3) === 'yes')
            answer.innerHTML = `Hmm, let's discover more and see if you change your mind!`;
        else {
            answer.innerHTML = `Oops I don't quite understand that answer, but it's ok!`;
        }
    }
    else if (number < 8){
        answer.innerHTML = `Hmm, that's not quite right 🤔, there are already 8 planets in our solar system. That's ok though! Let's relearn them! `;
    }
    else if (number === 8){
        answer.innerHTML = `Yes! Those are just simply planets that exist within our solar system though!`
    }
    else if ((number > 8) && (number < 5921)){
        answer.innerHTML = `Good guess! What if I told you there were more than that!`
    }
    else if (number === 5921){
        answer.innerHTML = `Wow! How did you know that! There are currently 8 planets and 1 dwarf planet within our solar system and 5912 discovered exoplanets!`
    }
    else {
        answer.innerHTML = `Possibly in the future! We are discovering more planets constantly!`
    }
    answer.innerHTML += `
                            Ready to continue? <br>
                            <button id='continue'>Continue</button>
                        `;
    document.getElementById("continue").addEventListener("click", function() {
        window.location.href = "main/";
    });
});