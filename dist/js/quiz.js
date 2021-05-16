function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }
  
  let questions = [
    {
      id: 1,
      question: "Which is NOT a function of a loader?",
      
      answer: "translation",
      options: [
        "allocation",
        "translation",
        "relocation",
        "loading",
      ]
    },
    {
      id: 2,
      question: " What happens when you perform a bitwise operation on these numbers?The result of the expression 4^12 is:",
      answer: "8",
      options: [
        "2",
        "4",
        "12",
        "8"
      ]
    },
    {
      id: 3,
      question: "The value obtained in the function is given back to the main by using ________ keyword?",
      answer: "return",
      options: [
        "static",
        " return",
        "final",
        "this"
      ]
    },
  
  {
    id: 4,
    question:"The equivalent pointer expression by using the array element a[i][j][k][2]",
    answer: "*(*(*(*(a+i)+j)+k)+2)",
    options: [
        "((((a+m)+n)+o)+p)",

        "*(*(*(*(a+i)+j)+k)+2)",
        
        "*( (((a+m)+n)+o+p)",
        
        "*( ((a+m)+n+o+p)",
    ]
  },
  
  {
  id: 5,
  question: "To print a float value which format specifier can be used?",
  answer: "%f",
  options: [
    "%f",
    "%lf",
    "%LF",
    "None of these"
  ]
  },
  
  {
  id: 6,
  question: "To print a float value which format specifier can be used??",
  answer: "#include < file",
  options: [
    "#include <file>",
    "#include “file”",
    "#include < file",
    "All of the above are invalid.",
  ]
  },
  
  {
  id: 7,
  question: " What actually get pass when you pass an array as a function argument?",
  answer:  "Base address of the array",
  options: [
    "First value of elements in array",

    "Base address of the array",
    
    "All value of element in array",
    
    "Address of the last element of array",]
  },
  {
  id: 8,
  question: "Which of the following does not initialize ptr to null (assuming variable declaration of a as int a=0;)?",
  answer: "int *ptr = &a;",
  options: [
     "int *ptr = &a;",
     "int *ptr = &a – &a;",
     "int *ptr = a – a;",
     "All of the mentioned",
  ]
  },
  {
  id: 9,
  question:"Which of the following are themselves a collection of different data types?,",
  answer: "structures",
  options: [
    "string",
    "structures",
    "char",
    "all of the mentioned",
    
  ]
  },
  {
  id: 10,
  question: " Which operator connects the structure name to its member name?",
  answer: ".",
  options: [
    "-",
    "<-",
    ".",
    "None of these",
  ]
  },
  ];
  
  
  
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 1;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  
