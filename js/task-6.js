
// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount. Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// const input = document.querySelector("input[number]");
// const create = document.querySelector("button[data-create]");
// const destroy = document.querySelector("button[data-destroy]");
// const box = document.querySelector("#boxes");

// let sizes = 30;

// create.addEventListener("click", createMarkup);
// destroy.addEventListener("click", handleDestroy);

// function handleDestroy() {
// box.innerHTML = "";
// input.value = "";
// sizes = 30;
// }

// function createMarkup () {
// if (Number(input.value) < 0 || Number(input.value) > 100) {
// console.log("error");
// return;
// }
// createBoxes(+input.value);
// }

// function createBoxes(amount) {
// box.innerHTML = "";
// sizes = 30;
// const arr = [];

//     for (let i = 0, i < amount, i++) {
//         const myBox = document.createElement("div");
//         myBox.style.width = "${sizes}px";
//         myBox.style.height = "${sizes}px";
//         myBox.style.backgroundColor = getRandomHexColor();
//         arr.push(myBox);
//         sizes += 10;
//     }

//     box.append(...arr);
// };



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



  const input = document.querySelector("#controls input");
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");

 
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    const elements = []; 
    let size = 30; 

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      elements.push(div); 
      size += 10; 
    }

    boxesContainer.append(...elements); 
  }

  
  function destroyBoxes() {
    boxesContainer.innerHTML = ""; 
  }

 
  createButton.addEventListener("click", () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      destroyBoxes(); 
      createBoxes(amount); 
      input.value = ""; 
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  });

  destroyButton.addEventListener("click", () => {
    destroyBoxes(); 
    input.value = ""; 
  });
