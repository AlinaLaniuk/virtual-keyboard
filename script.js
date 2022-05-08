
const buttonsMap = {
  Backquote: {
    сode: 192,
    char: { lowerCase: { en: '`', ru: 'ё' }, upperCase: { en: '~', ru: 'Ё' } },

  },
  Digit1: {
    сode: 49,
    char: { lowerCase: { en: '1', ru: '1' }, upperCase: { en: '!', ru: '!' } },

  },
  Digit2: {
    сode: 50,
    char: { lowerCase: { en: '2', ru: '2' }, upperCase: { en: '@', ru: '"' } },

  },
  Digit3: {
    сode: 51,
    char: { lowerCase: { en: '3', ru: '3' }, upperCase: { en: '#', ru: '№' } },

  },
  Digit4: {
    сode: 52,
    char: { lowerCase: { en: '4', ru: '4' }, upperCase: { en: '$', ru: ';' } },

  },
  Digit5: {
    сode: 53,
    char: { lowerCase: { en: '5', ru: '5' }, upperCase: { en: '%', ru: '%' } },

  },
  Digit6: {
    сode: 54,
    char: { lowerCase: { en: '6', ru: '6' }, upperCase: { en: '^', ru: ':' } },

  },
  Digit7: {
    сode: 55,
    char: { lowerCase: { en: '7', ru: '7' }, upperCase: { en: '&', ru: '?' } },

  },
  Digit8: {
    сode: 56,
    char: { lowerCase: { en: '8', ru: '8' }, upperCase: { en: '*', ru: '*' } },

  },
  Digit9: {
    сode: 57,
    char: { lowerCase: { en: '9', ru: '9' }, upperCase: { en: '(', ru: '(' } },

  },
  Digit0: {
    сode: 48,
    char: { lowerCase: { en: '0', ru: '0' }, upperCase: { en: ')', ru: ')' } },

  },
  Minus: {
    сode: 173,
    char: { lowerCase: { en: '-', ru: '-' }, upperCase: { en: '_', ru: '_' } },

  },
  Equal: {
    сode: 61,
    char: { lowerCase: { en: '=', ru: '=' }, upperCase: { en: '+', ru: '+' } },

  },
  Backspace: {
    сode: 8,
    char: { lowerCase: { en: 'backspace', ru: 'backspace' }, upperCase: { en: 'backspace', ru: 'backspace' } },
  },
  Tab: {
    сode: 9,
    char: { lowerCase: { en: 'tab', ru: 'tab' }, upperCase: { en: 'tab', ru: 'tab' } },
  },
  KeyQ: {
    сode: 81,
    char: { lowerCase: { en: 'q', ru: 'й' }, upperCase: { en: 'Q', ru: 'Й' } },

  },
  KeyW: {
    сode: 87,
    char: { lowerCase: { en: 'w', ru: 'ц' }, upperCase: { en: 'W', ru: 'Ц' } },

  },
  KeyE: {
    сode: 69,
    char: { lowerCase: { en: 'e', ru: 'у' }, upperCase: { en: 'E', ru: 'У' } },

  },
  KeyR: {
    сode: 82,
    char: { lowerCase: { en: 'r', ru: 'к' }, upperCase: { en: 'R', ru: 'К' } },

  },
  KeyT: {
    сode: 84,
    char: { lowerCase: { en: 't', ru: 'е' }, upperCase: { en: 'T', ru: 'Е' } },

  },
  KeyY: {
    сode: 89,
    char: { lowerCase: { en: 'y', ru: 'н' }, upperCase: { en: 'Y', ru: 'Н' } },

  },
  KeyU: {
    сode: 85,
    char: { lowerCase: { en: 'u', ru: 'г' }, upperCase: { en: 'U', ru: 'Г' } },

  },
  KeyI: {
    сode: 73,
    char: { lowerCase: { en: 'i', ru: 'ш' }, upperCase: { en: 'I', ru: 'Ш' } },

  },
  KeyO: {
    сode: 79,
    char: { lowerCase: { en: 'o', ru: 'щ' }, upperCase: { en: 'O', ru: 'Щ' } },

  },
  KeyP: {
    сode: 80,
    char: { lowerCase: { en: 'p', ru: 'з' }, upperCase: { en: 'P', ru: 'З' } },

  },
  BracketLeft: {
    сode: 219,
    char: { lowerCase: { en: '[', ru: 'х' }, upperCase: { en: '{', ru: 'Х' } },

  },
  BracketRight: {
    сode: 221,
    char: { lowerCase: { en: ']', ru: 'ъ' }, upperCase: { en: '}', ru: 'Ъ' } },

  },
  Delete: {
    сode: 46,
    char: { lowerCase: { en: 'del', ru: 'del' }, upperCase: { en: 'del', ru: 'del' } },
  },
  CapsLock: {
    сode: 20,
    char: { lowerCase: { en: 'capslock', ru: 'capslock' }, upperCase: { en: 'capslock', ru: 'capslock' } },
  },
  KeyA: {
    сode: 65,
    char: { lowerCase: { en: 'a', ru: 'ф' }, upperCase: { en: 'A', ru: 'Ф' } },

  },
  KeyS: {
    сode: 83,
    char: { lowerCase: { en: 's', ru: 'ы' }, upperCase: { en: 'S', ru: 'Ы' } },

  },
  KeyD: {
    сode: 68,
    char: { lowerCase: { en: 'd', ru: 'в' }, upperCase: { en: 'D', ru: 'В' } },

  },
  KeyF: {
    сode: 70,
    char: { lowerCase: { en: 'f', ru: 'а' }, upperCase: { en: 'F', ru: 'А' } },

  },
  KeyG: {
    сode: 71,
    char: { lowerCase: { en: 'g', ru: 'п' }, upperCase: { en: 'G', ru: 'П' } },

  },
  KeyH: {
    сode: 72,
    char: { lowerCase: { en: 'h', ru: 'р' }, upperCase: { en: 'H', ru: 'Р' } },

  },
  KeyJ: {
    сode: 74,
    char: { lowerCase: { en: 'j', ru: 'о' }, upperCase: { en: 'J', ru: 'О' } },

  },
  KeyK: {
    сode: 75,
    char: { lowerCase: { en: 'k', ru: 'л' }, upperCase: { en: 'K', ru: 'Л' } },

  },
  KeyL: {
    сode: 76,
    char: { lowerCase: { en: 'l', ru: 'д' }, upperCase: { en: 'L', ru: 'Д' } },

  },
  Semicolon: {
    сode: 59,
    char: { lowerCase: { en: ';', ru: 'ж' }, upperCase: { en: ':', ru: 'Ж' } },

  },
  Quote: {
    сode: 222,
    char: { lowerCase: { en: "'", ru: 'э' }, upperCase: { en: '"', ru: 'Э' } },

  },
  Enter: {
    сode: 13,
    char: { lowerCase: { en: 'enter', ru: 'enter' }, upperCase: { en: 'enter', ru: 'enter' } },
  },
  ShiftLeft: {
    сode: 16,
    char: { lowerCase: { en: 'shift', ru: 'shift' }, upperCase: { en: 'shift', ru: 'shift' } },
  },
  Backslash: {
    сode: 220,
    char: { lowerCase: { en: '\\', ru: '\\' }, upperCase: { en: '|', ru: '/' } },

  },
  KeyZ: {
    сode: 90,
    char: { lowerCase: { en: 'z', ru: 'я' }, upperCase: { en: 'Z', ru: 'Я' } },

  },
  KeyX: {
    сode: 88,
    char: { lowerCase: { en: 'x', ru: 'ч' }, upperCase: { en: 'X', ru: 'Ч' } },

  },
  KeyC: {
    сode: 67,
    char: { lowerCase: { en: 'c', ru: 'с' }, upperCase: { en: 'C', ru: 'С' } },

  },
  KeyV: {
    сode: 86,
    char: { lowerCase: { en: 'v', ru: 'м' }, upperCase: { en: 'V', ru: 'М' } },

  },
  KeyB: {
    сode: 66,
    char: { lowerCase: { en: 'b', ru: 'и' }, upperCase: { en: 'B', ru: 'И' } },

  },
  KeyN: {
    сode: 78,
    char: { lowerCase: { en: 'n', ru: 'т' }, upperCase: { en: 'N', ru: 'Т' } },

  },
  KeyM: {
    сode: 77,
    char: { lowerCase: { en: 'm', ru: 'ь' }, upperCase: { en: 'M', ru: 'Ь' } },

  },
  Comma: {
    сode: 188,
    char: { lowerCase: { en: ',', ru: 'б' }, upperCase: { en: '<', ru: 'Б' } },

  },
  Period: {
    сode: 190,
    char: { lowerCase: { en: '.', ru: 'ю' }, upperCase: { en: '>', ru: 'Ю' } },

  },
  Slash: {
    сode: 191,
    char: { lowerCase: { en: '/', ru: '.' }, upperCase: { en: '?', ru: ',' } },

  },

  ArrowUp: {
    сode: 38,
    char: { lowerCase: { en: '△', ru: '△' }, upperCase: { en: '△', ru: '△' } },
  },
  ShiftRight: {
    сode: 16,
    char: { lowerCase: { en: 'shift', ru: 'shift' }, upperCase: { en: 'shift', ru: 'shift' } },
  },
  ControlLeft: {
    сode: 17,
    char: { lowerCase: { en: 'ctrl', ru: 'ctrl' }, upperCase: { en: 'ctrl', ru: 'ctrl' } },
  },
  OSLeft: {
    сode: 91,
    char: { lowerCase: { en: '⊞Win', ru: '⊞Win' }, upperCase: { en: '⊞Win', ru: '⊞Win' } },
  },
  AltLeft: {
    сode: 18,
    char: { lowerCase: { en: 'alt', ru: 'alt' }, upperCase: { en: 'alt', ru: 'alt' } },
  },
  Space: {
    сode: 32,
    char: { lowerCase: { en: ' ', ru: ' ' }, upperCase: { en: ' ', ru: ' ' } },
  },
  AltRight: {
    сode: 18,
    char: { lowerCase: { en: 'alt', ru: 'alt' }, upperCase: { en: 'alt', ru: 'alt' } },
  },
  ControlRight: {
    сode: 17,
    char: { lowerCase: { en: 'ctrl', ru: 'ctrl' }, upperCase: { en: 'ctrl', ru: 'ctrl' } },
  },
  ArrowLeft: {
    сode: 37,
    char: { lowerCase: { en: '◁', ru: '◁' }, upperCase: { en: '◁', ru: '◁' } },

  },
  ArrowDown: {
    сode: 40,
    char: { lowerCase: { en: '▽', ru: '▽' }, upperCase: { en: '▽', ru: '▽' } },

  },
  ArrowRight: {
    сode: 39,
    char: { lowerCase: { en: '▷', ru: '▷' }, upperCase: { en: '▷', ru: '▷' } },

  },
};


const keyBoard = {
  createKeyboard() {
    //Создание дивов и кнопок
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const textArea = document.createElement('textarea');
    textArea.classList.add('text__area');
    const keyBoardWrapper = document.createElement('div');
    keyBoardWrapper.classList.add('keyBoard__wrapper');
    document.body.append(wrapper);
    wrapper.append(textArea);
    wrapper.append(keyBoardWrapper);
    const buttonsArray = Object.keys(buttonsMap);
    buttonsArray.forEach((keyName) => {
      const button = document.createElement('div');
      button.dataset.char = keyName;
      button.classList.add('button');
      if (keyName === 'Backspace') {
        button.classList.add('backspace_button')
      } else if (keyName === 'Tab') {
        button.classList.add('tab_button')
      } else if (keyName === 'Delete') {
        button.classList.add('delete_button')
      } else if (keyName === 'CapsLock') {
        button.classList.add('capslock_and_leftshift_button')
      } else if (keyName === 'Enter') {
        button.classList.add('enter_button')
      } else if (keyName === 'ShiftLeft') {
        button.classList.add('capslock_and_leftshift_button')
      } else if (keyName === 'ControlLeft') {
        button.classList.add('control_button')
      } else if (keyName === 'ControlRight') {
        button.classList.add('control_button')
      } else if (keyName === 'Space') {
        button.classList.add('space_button')
      } else if (keyName === 'OSLeft') {
        button.classList.add('OSLeft_button')
      }
      button.textContent = buttonsMap[keyName].char.lowerCase.en;
      keyBoardWrapper.append(button);
    })

    const buttons = document.querySelectorAll('.button');

    let currentLanguage = 'en';
    let currentCase = 'lowerCase';
    document.body.addEventListener('keydown', (event) => {

      //Переключатель языка
      if (event.code === 'AltLeft' && event.shiftKey
        || event.code === 'ShiftLeft' && event.altKey
        || event.code === 'AltRight' && event.shiftKey
        || event.code === 'ShiftRight' && event.altKey) {
        if (currentLanguage === 'en') {
          for (let i = 0; i < buttons.length; i++) {
            const russianChar = buttonsMap[buttons[i].dataset.char].char.lowerCase.ru;
            buttons[i].textContent = russianChar;
          }
          currentLanguage = 'ru';

        } else if (currentLanguage === 'ru') {
          for (let i = 0; i < buttons.length; i++) {
            const englishChar = buttonsMap[buttons[i].dataset.char].char.lowerCase.en;
            buttons[i].textContent = englishChar;
          }
          currentLanguage = 'en';

        }
      }
      //Капитализация


      // Введение символов в текстэрию по нажатию клавиши
      if (buttonsMap[event.code]) {
        event.preventDefault();
        if (event.code === 'Backspace') {
          if (textArea.selectionStart !== 0 && textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'start')
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'start')
          }
        } else if (event.code === 'Tab') {
          textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end')
        } else if (event.code === 'Delete') {
          if (textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'start')
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end')
          }
        } else if (event.code === 'Enter') {
          textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end')
        } else if (event.code === 'CapsLock') {
          if (currentCase === 'lowerCase') {
            for (let i = 0; i < buttons.length; i++) {
              const upperCaseChar = buttonsMap[buttons[i].dataset.char].char.upperCase[currentLanguage];
              buttons[i].textContent = upperCaseChar;
            }
            currentCase = 'upperCase';
          } else if (currentCase === 'upperCase') {
            for (let i = 0; i < buttons.length; i++) {
              const lowerCaseChar = buttonsMap[buttons[i].dataset.char].char.lowerCase[currentLanguage];
              buttons[i].textContent = lowerCaseChar;
            }
            currentCase = 'lowerCase';

          }
        } else {

          textArea.setRangeText(buttonsMap[event.code].char[currentCase][currentLanguage], textArea.selectionStart, textArea.selectionEnd, 'end')

        }
      }

    })
    //Введение символов в текстэрию по клику мыши


    keyBoardWrapper.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('button')) {
        if (event.target.dataset.char === 'Backspace') {
          if (textArea.selectionStart !== 0 && textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'start')
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'start')
          }
        } else if (event.target.dataset.char === 'Tab') {
          textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end')
        } else if (event.target.dataset.char === 'Delete') {
          if (textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'start')
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end')
          }
        } else if (event.target.dataset.char === 'Enter') {
          textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end')
        } else if (event.target.dataset.char === 'AltLeft' || event.target.dataset.char === 'AltRight' || event.target.dataset.char === 'OSLeft' || event.target.dataset.char === 'ControlRight' || event.target.dataset.char === 'ControlLeft') {
          textArea.setSelectionRange(textArea.selectionStart, textArea.selectionEnd);
        } else if (event.target.dataset.char === 'CapsLock') {
            if (currentCase === 'lowerCase') {
              for (let i = 0; i < buttons.length; i++) {
                const upperCaseChar = buttonsMap[buttons[i].dataset.char].char.upperCase[currentLanguage];
                buttons[i].textContent = upperCaseChar;
              }
              currentCase = 'upperCase';
            } else if (currentCase === 'upperCase') {
              for (let i = 0; i < buttons.length; i++) {
                const lowerCaseChar = buttonsMap[buttons[i].dataset.char].char.lowerCase[currentLanguage];
                buttons[i].textContent = lowerCaseChar;
              }
              currentCase = 'lowerCase';

            }
        } else {
          textArea.setRangeText(buttonsMap[event.target.dataset.char].char[currentCase][currentLanguage], textArea.selectionStart, textArea.selectionEnd, 'end')
        }
      }
    })

  }
}



window.addEventListener('DOMContentLoaded', function () {
  keyBoard.createKeyboard();
});