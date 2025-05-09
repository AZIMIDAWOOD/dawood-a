// Formulaire
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.reset();
      confirmation.classList.remove('hidden');
    });
  
    // Calculatrice
    const display = document.getElementById('calc-display');
    const toggleHistory = document.getElementById('toggle-history');
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('calc-history');
  
    window.append = function(value) {
      display.value += value;
    }
  
    window.clearDisplay = function() {
      display.value = '';
    }
  
    window.calculate = function() {
      try {
        const result = eval(display.value);
        const operation = display.value + ' = ' + result;
        display.value = result;
  
        if (toggleHistory.checked) {
          const li = document.createElement('li');
          li.textContent = operation;
          historyList.prepend(li);
        }
      } catch {
        display.value = 'Erreur';
      }
    }
  
    function updateHistoryVisibility() {
      historySection.style.display = toggleHistory.checked ? 'block' : 'none';
    }
  
    toggleHistory.addEventListener('change', updateHistoryVisibility);
    updateHistoryVisibility();
  });
  
  