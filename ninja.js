const correctAnswers = ['A', 'B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.results');

form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the default acction
    
    // create a score based on answers
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,];

    // check anwsers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // show results on page
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    // score animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 40);
});