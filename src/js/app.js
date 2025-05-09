function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden'); // Pour basculer l'affichage du menu
    menu.classList.toggle('flex-col'); // Pour empiler les éléments du menu verticalement
    menu.classList.toggle('gap-2'); // Optionnel : pour un espacement agréable entre les éléments
  }
  
  const routes = {
    home: `
      <section class="text-center">
        <h1 class="text-5xl font-bold text-primary mb-4">Bienvenue sur DawoodSite</h1>
        <p class="text-lg">Un site moderne, responsive et élégant avec Tailwind & DaisyUI.</p>
      </section>
    `,
    about: `
      <section>
        <h1 class="text-4xl font-semibold text-secondary">À propos</h1>
        <p class="mt-4 max-w-xl">Ce site a été conçu pour démontrer la puissance de Tailwind CSS combinée à DaisyUI, avec un thème personnalisé et un routage léger.</p>
      </section>
    `,
    contact: `
      <section class="max-w-md">
        <h1 class="text-3xl font-semibold text-accent">Contact</h1>
        <form class="form-control space-y-4 mt-4">
          <input type="text" placeholder="Nom" class="input input-bordered w-full" />
          <input type="email" placeholder="Email" class="input input-bordered w-full" />
          <textarea placeholder="Message" class="textarea textarea-bordered w-full"></textarea>
          <button class="btn btn-primary w-full">Envoyer</button>
        </form>
      </section>
    `,
    qcm: `
      <section class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-semibold text-primary mb-4">QCM - Testez vos connaissances</h1>
        <form class="space-y-6">
          <div class="question">
            <p class="text-lg font-semibold">1. Quelle est la couleur du ciel ?</p>
            <div class="space-y-2">
              <label class="radio">
                <input type="radio" name="q1" /> Bleu
              </label>
              <label class="radio">
                <input type="radio" name="q1" /> Rouge
              </label>
              <label class="radio">
                <input type="radio" name="q1" /> Vert
              </label>
            </div>
          </div>
          <div class="question">
            <p class="text-lg font-semibold">2. Quelle est la capitale de la France ?</p>
            <div class="space-y-2">
              <label class="radio">
                <input type="radio" name="q2" /> Paris
              </label>
              <label class="radio">
                <input type="radio" name="q2" /> Madrid
              </label>
              <label class="radio">
                <input type="radio" name="q2" /> Rome
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-full">Envoyer vos réponses</button>
        </form>
      </section>
    `
  };
  
  function navigateTo(route) {
    const app = document.getElementById('app');
    app.innerHTML = routes[route] || routes['home'];
  }
  
  // Charge la page d’accueil par défaut
  window.addEventListener('DOMContentLoaded', () => navigateTo('home'));

  function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('hidden');
  }


  // Initialise EmailJS avec ton USER ID
  (function() {
    emailjs.init("0gejX7eb3xYjF-4TC"); // ← remplace par ton user ID
  })();

  // Fonction pour envoyer le formulaire
  function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('service_w3o2am1', 'template_rdwuqea', '#contactForm')
      .then(function () {
        document.getElementById("confirmation").classList.remove("hidden");
        document.getElementById("contactForm").reset();

        setTimeout(() => {
          document.getElementById("confirmation").classList.add("hidden");
        }, 3000);
      }, function (error) {
        alert("Erreur lors de l'envoi : " + error.text);
      });
  }


  
