const correctAnswers = ['B', 'B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
    ];

    //Check answers
    userAnswers.forEach((answers, index) => {
        if(answers === correctAnswers[index]){
          score += 20;   
        }
    });

    // Show result on page 
    result.querySelector('span').textContent = `${score}%`;
    result.style.display = 'block';
    // console.log(score);
    scrollTo(0,0);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 20);
});

    
