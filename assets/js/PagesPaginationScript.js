let pages = [
      {id: 1, text: "<h3>Довгаль Д.Ф.</h3> <p>Всім бажаю успіхів у навчанні та стати поліцейським.</p><div class='tab'><input id='tab-one' type='checkbox'><label for='tab-one'>Учбові матеріали:</label><div class='tab-content'><ul><li><a href='https://pp16-20.pp.ua/educational-materials.html'>Сторінка з учбовими матеріалами;</a></li><li><a href='https://pp16-20.pp.ua/TTH.html'>Тактико-технічні характеристики зброї;</a></li><li><a href='https://pp16-20.pp.ua/test-kku.html'>Тестування ККУ;</a></li><li><a href='https://pp16-20.pp.ua/test-kpk.html'>Тестування КПКУ;</a></li></ul></div></div>", active: true},
      {id: 2, text: "<h3>Григор`єв В.С.</h3> <p>Да прибуде з нами сила. Бажаю служити в управлінні патрульної поліції</p>", active: false},
      {id: 3, text: "<h3>Клєвцов В.І.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 4, text: "<h3>Панова В.С.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 5, text: "<h3>Боярчук М.Ю.</h3> <p>Людина нірвана, бажаю стати поліцейським.</p>", active: false},
      {id: 6, text: "<h3>Григоренко А.А.</h3> <p>Цікавлюсь ІТ, іграми та спортом. Раніше вивчав програмування. Вирішив стати поліцейським.</p>", active: false},
      {id: 7, text: "<h3>Денежний П.М.</h3> <p>Всім терпіння і вихованності.</p>", active: false},
      {id: 8, text: "<h3>Єгоров І.В.</h3> <p>Відрахований</p>", active: false},
      {id: 9, text: "<h3>Закарлюка С.О.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 10, text: "<h3>Кущ О.П.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 11, text: "<h3>Луговськой М.А.</h3> <p>Hakuna Matata.</p>", active: false},
      {id: 12, text: "<h3>Ніцевич О.А.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 13, text: "<h3>Остапчук Д.М.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 14, text: "<h3>Река О.В.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 15, text: "<h3>Савенкова Ж.М.</h3>  <p>Відрахована</p>", active: false},
      {id: 16, text: "<h3>Ципляков М.М.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 17, text: "<h3>Ципляков Д.М.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 18, text: "<h3>Сегеда Д.В.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 19, text: "<h3>Шапка В.П.</h3> <p>Неперевершена, бажаю працювати в патрульній поліції.</p>", active: false},
      {id: 20, text: "<h3>Удод В.Е.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 21, text: "<h3>Назаренко Д.В.</h3> <p>Інформація відсутня.</p>", active: false},
      {id: 22, text: "<h3>Стаценко Я. </h3> <p>Інформація відсутня.</p>", active: false},
      {id: 23, text: "<h3>Головченко Д.О.</h3> <p>Всім міцного здоров`я.</p>", active: false},
      {id: 24, text: "<h3>Мельник О.А.</h3> <p>Успіхів у навчанні.</p>", active: false}
    ];

    // UI Elements
    const pagesContainer = document.querySelector(".pages"),
          buttonsContainer = document.querySelector(".paginator"),
          numButtonsContainer = document.querySelector(".page-nums");

    // Clear pages
    function clearPages() {
      while(pagesContainer.firstChild) {
        pagesContainer.firstChild.remove();
      }
    }

    // Clear Buttons
    function clearButtons() {
      while(numButtonsContainer.firstChild) {
        numButtonsContainer.firstChild.remove();
      }
    }

    // Render buttons
    function renderButtons(activePage) {
      clearButtons();

      pages.forEach(function(current) {
        const button = document.createElement("button");
        button.className = "page-num";
        button.type = "button";
        button.title = current.id;
        button.textContent = current.id;

        if(current.id === activePage.id) {
          button.classList.add("active");
        } else {
            button.classList.remove("active");
        }

        numButtonsContainer.appendChild(button);
      })
    }

    // Main render
    function render() {
      clearPages();

      let activePage = pages.find(function(current) {
        return current.active === true;
      })

      const div = document.createElement("div");
      div.className = "page";
      div.dataset.id = activePage.id;
      div.innerHTML = activePage.text;

      pagesContainer.appendChild(div);

      setTimeout(function() {
        div.classList.add("active");
      }, 10);

      renderButtons(activePage)
    }

    // Event listeners for button clicks

    // Buttons with page numbers click event
    numButtonsContainer.addEventListener("click", function(e) {
      if(e.target.classList.contains("page-num")) {

        const activePage = pages.find(function(current) {
          return current.active;
        })

        if(e.target.title != activePage.id) {

          pages.forEach(function(current) {
           current.active = false;
         })

          pages[e.target.title - 1].active = true;
          render();
        }
      }
    })

    // Arrow buttons click event
    buttonsContainer.addEventListener("click", function(e) {
      let activePage = pages.find(function(current) {
          return current.active === true;
        });

      if(e.target.className === "arrow-left") {

        if(pages[0].active === true) {
          pages[activePage.id - 1].active = false;
          pages[pages.length - 1].active = true;
          render();

        } else {
            pages[activePage.id - 1].active = false;
            pages[(activePage.id - 1) - 1].active = true;
            render();
          }

      } else if(e.target.className === "arrow-right") {
          if(pages[pages.length - 1].active === true) {
            pages[activePage.id - 1].active = false;
            pages[0].active = true;
            render();

          } else {
              pages[activePage.id - 1].active = false;
              pages[(activePage.id - 1) + 1].active = true;
              render();
            }

      } else return;
    })

    // Initial render of the app
    render();
