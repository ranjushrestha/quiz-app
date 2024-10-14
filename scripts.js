const  quizData  = [
    {
    question: 'how old is Florida?',
        a: '10',
        b: '18',
        c: '26',
        d: '22',
        correct: 'c',
    }, {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'JavaScrip',
        d: 'Python',
        correct: 'c'
    }, {
        question: 'Who is the president of USA?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Kamala HArris',
        d: 'Ivan ',
        correct: 'b',
    },  {
        question: 'What does HTML stand for?',
        a: 'Hypertext Mark Up Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Application Programming Interface',
        correct: 'a',
    }, {
        question: 'What year was JavaScript launched?',
        a: '2018',
        b: '2019',
        c: '2020',
        d: '1995',
        correct: 'd',
    }
];
   const questionEl = document.getElementById ("question");
   const a_text = document.getElementById("a_text");
   const b_text = document.getElementById("b_text");
   const c_text = document.getElementById("c_text");
   const d_text = document.getElementById("d_text");
   const submitBtn = document.getElementById("submit");


   let currentQuiz = 0;


   loadQuiz();

   function loadQuiz() {
        const currentQuizData = quizData[currentQuiz];

        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;

   }
    submitBtn.addEventListener("click", () => {
        currentQuiz++;
        loadQuiz();
    });
  

    

   
