let currentQuestion = 0;
    let attempts = 0;
    const maxAttempts = 3;
    const questions = [
      { question: 'Où l\'auteur a-t-il grandi ?', answer: 'En Afghanistan', options: ['En France', 'En Afghanistan', 'Aux États-Unis', 'En Allemagne'] },
      { question: 'Quel est le rêve de l\'auteur depuis son enfance ?', answer: 'Devenir pilote', options: ['Devenir médecin', 'Devenir pilote', 'Voyager autour du monde', 'Devenir ingénieur'] },
      { question: 'Quel événement important a eu lieu dans la vie de l\'auteur ?', answer: 'Il a quitté l\'Afghanistan pour la France', options: ['Il est devenu pilote dès son enfance', 'Il a quitté l\'Afghanistan pour la France', 'Il a travaillé dans une compagnie aérienne', 'Il a gagné un prix d\'aviation'] },
      { question: 'Pourquoi l\'auteur considère-t-il la France comme un lieu spécial ?', answer: 'Parce qu\'il y a trouvé un environnement pour réaliser son rêve', options: ['Parce qu\'il y a trouvé un environnement pour réaliser son rêve', 'Parce qu\'il y a une grande communauté d\'aviation', 'Parce qu\'il a une famille en France', 'Parce qu\'il aime la culture française'] },
      { question: 'Comment l\'auteur décrit-il son lien avec l\'aviation ?', answer: 'Une passion profonde', options: ['Un simple métier', 'Une passion profonde', 'Une obligation professionnelle', 'Un intérêt temporaire'] },
      { question: 'Quel est l\'objectif actuel de l\'auteur ?', answer: 'Réaliser son rêve de devenir pilote de ligne', options: ['Devenir ingénieur aéronautique', 'Réaliser son rêve de devenir pilote de ligne', 'Travailler dans le secteur de la technologie', 'Devenir professeur d\'aviation'] },
    ];
    let correctAnswers = [];
    let incorrectAnswers = [];

    function displayQuestion() {
      const questionElement = document.getElementById('qcm-questions');
      const question = questions[currentQuestion];
      questionElement.innerHTML = `
        <div class="qcm-question">
          <p>${question.question}</p>
          <div class="qcm-options">
            ${question.options.map((option, index) => `
              <input type="radio" name="answer" id="option${index}" value="${option}" />
              <label for="option${index}">${option}</label>
            `).join('')}
          </div>
        </div>
      `;
    }

    function checkAnswer() {
      const selectedOption = document.querySelector('input[name="answer"]:checked');
      if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        if (selectedAnswer === questions[currentQuestion].answer) {
          correctAnswers.push(questions[currentQuestion].question);
          return true;
        } else {
          incorrectAnswers.push(questions[currentQuestion].question);
          return false;
        }
      }
      return false;
    }

    function nextQuestion() {
      const isCorrect = checkAnswer();
      if (!isCorrect) {
        attempts++;
        if (attempts >= maxAttempts) {
          // Afficher le bouton Contact après 3 tentatives échouées
          document.getElementById('contact-button').style.display = 'block';
        }
      }
      
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
      } else {
        if (correctAnswers.length === questions.length) {
          // Si toutes les réponses sont correctes, rediriger vers la page Contact
          window.location.href = 'contact.html';
        } else {
          // Résumé des réponses
          document.querySelector('.summary').style.display = 'block';
          document.getElementById('correct-answers').textContent = `Réponses Correctes : ${correctAnswers.join(', ')}`;
          document.getElementById('incorrect-answers').textContent = `Réponses Incorrectes : ${incorrectAnswers.join(', ')}`;
        }
      }
    }

    // Initialiser la première question
    displayQuestion();

    // Gérer le clic sur le bouton Suivant
    document.getElementById('next-button').addEventListener('click', nextQuestion);