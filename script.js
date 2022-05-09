const buttonsMap = {
  Backquote: {
    char: { lowerCase: { en: '`', ru: 'ё' }, upperCase: { en: '~', ru: 'Ё' } },
  },
  Digit1: {
    char: { lowerCase: { en: '1', ru: '1' }, upperCase: { en: '!', ru: '!' } },
  },
  Digit2: {
    char: { lowerCase: { en: '2', ru: '2' }, upperCase: { en: '@', ru: '"' } },
  },
  Digit3: {
    char: { lowerCase: { en: '3', ru: '3' }, upperCase: { en: '#', ru: '№' } },
  },
  Digit4: {
    char: { lowerCase: { en: '4', ru: '4' }, upperCase: { en: '$', ru: ';' } },
  },
  Digit5: {
    char: { lowerCase: { en: '5', ru: '5' }, upperCase: { en: '%', ru: '%' } },
  },
  Digit6: {
    char: { lowerCase: { en: '6', ru: '6' }, upperCase: { en: '^', ru: ':' } },
  },
  Digit7: {
    char: { lowerCase: { en: '7', ru: '7' }, upperCase: { en: '&', ru: '?' } },
  },
  Digit8: {
    char: { lowerCase: { en: '8', ru: '8' }, upperCase: { en: '*', ru: '*' } },
  },
  Digit9: {
    char: { lowerCase: { en: '9', ru: '9' }, upperCase: { en: '(', ru: '(' } },
  },
  Digit0: {
    char: { lowerCase: { en: '0', ru: '0' }, upperCase: { en: ')', ru: ')' } },
  },
  Minus: {
    char: { lowerCase: { en: '-', ru: '-' }, upperCase: { en: '_', ru: '_' } },
  },
  Equal: {
    char: { lowerCase: { en: '=', ru: '=' }, upperCase: { en: '+', ru: '+' } },
  },
  Backspace: {
    char: { lowerCase: { en: 'backspace', ru: 'backspace' }, upperCase: { en: 'backspace', ru: 'backspace' } },
  },
  Tab: {
    char: { lowerCase: { en: 'tab', ru: 'tab' }, upperCase: { en: 'tab', ru: 'tab' } },
  },
  KeyQ: {
    char: { lowerCase: { en: 'q', ru: 'й' }, upperCase: { en: 'Q', ru: 'Й' } },
  },
  KeyW: {
    char: { lowerCase: { en: 'w', ru: 'ц' }, upperCase: { en: 'W', ru: 'Ц' } },
  },
  KeyE: {
    char: { lowerCase: { en: 'e', ru: 'у' }, upperCase: { en: 'E', ru: 'У' } },
  },
  KeyR: {
    char: { lowerCase: { en: 'r', ru: 'к' }, upperCase: { en: 'R', ru: 'К' } },
  },
  KeyT: {
    char: { lowerCase: { en: 't', ru: 'е' }, upperCase: { en: 'T', ru: 'Е' } },
  },
  KeyY: {
    char: { lowerCase: { en: 'y', ru: 'н' }, upperCase: { en: 'Y', ru: 'Н' } },
  },
  KeyU: {
    char: { lowerCase: { en: 'u', ru: 'г' }, upperCase: { en: 'U', ru: 'Г' } },
  },
  KeyI: {
    char: { lowerCase: { en: 'i', ru: 'ш' }, upperCase: { en: 'I', ru: 'Ш' } },
  },
  KeyO: {
    char: { lowerCase: { en: 'o', ru: 'щ' }, upperCase: { en: 'O', ru: 'Щ' } },
  },
  KeyP: {
    char: { lowerCase: { en: 'p', ru: 'з' }, upperCase: { en: 'P', ru: 'З' } },
  },
  BracketLeft: {
    char: { lowerCase: { en: '[', ru: 'х' }, upperCase: { en: '{', ru: 'Х' } },
  },
  BracketRight: {
    char: { lowerCase: { en: ']', ru: 'ъ' }, upperCase: { en: '}', ru: 'Ъ' } },
  },
  Delete: {
    char: { lowerCase: { en: 'del', ru: 'del' }, upperCase: { en: 'del', ru: 'del' } },
  },
  CapsLock: {
    char: { lowerCase: { en: 'capslock', ru: 'capslock' }, upperCase: { en: 'capslock', ru: 'capslock' } },
  },
  KeyA: {
    char: { lowerCase: { en: 'a', ru: 'ф' }, upperCase: { en: 'A', ru: 'Ф' } },
  },
  KeyS: {
    char: { lowerCase: { en: 's', ru: 'ы' }, upperCase: { en: 'S', ru: 'Ы' } },
  },
  KeyD: {
    char: { lowerCase: { en: 'd', ru: 'в' }, upperCase: { en: 'D', ru: 'В' } },
  },
  KeyF: {
    char: { lowerCase: { en: 'f', ru: 'а' }, upperCase: { en: 'F', ru: 'А' } },
  },
  KeyG: {
    char: { lowerCase: { en: 'g', ru: 'п' }, upperCase: { en: 'G', ru: 'П' } },
  },
  KeyH: {
    char: { lowerCase: { en: 'h', ru: 'р' }, upperCase: { en: 'H', ru: 'Р' } },
  },
  KeyJ: {
    char: { lowerCase: { en: 'j', ru: 'о' }, upperCase: { en: 'J', ru: 'О' } },
  },
  KeyK: {
    char: { lowerCase: { en: 'k', ru: 'л' }, upperCase: { en: 'K', ru: 'Л' } },
  },
  KeyL: {
    char: { lowerCase: { en: 'l', ru: 'д' }, upperCase: { en: 'L', ru: 'Д' } },
  },
  Semicolon: {
    char: { lowerCase: { en: ';', ru: 'ж' }, upperCase: { en: ':', ru: 'Ж' } },
  },
  Quote: {
    char: { lowerCase: { en: "'", ru: 'э' }, upperCase: { en: '"', ru: 'Э' } },
  },
  Enter: {
    char: { lowerCase: { en: 'enter', ru: 'enter' }, upperCase: { en: 'enter', ru: 'enter' } },
  },
  ShiftLeft: {
    char: { lowerCase: { en: 'shift', ru: 'shift' }, upperCase: { en: 'shift', ru: 'shift' } },
  },
  Backslash: {
    char: { lowerCase: { en: '\\', ru: '\\' }, upperCase: { en: '|', ru: '/' } },
  },
  KeyZ: {
    char: { lowerCase: { en: 'z', ru: 'я' }, upperCase: { en: 'Z', ru: 'Я' } },
  },
  KeyX: {
    char: { lowerCase: { en: 'x', ru: 'ч' }, upperCase: { en: 'X', ru: 'Ч' } },
  },
  KeyC: {
    char: { lowerCase: { en: 'c', ru: 'с' }, upperCase: { en: 'C', ru: 'С' } },
  },
  KeyV: {
    char: { lowerCase: { en: 'v', ru: 'м' }, upperCase: { en: 'V', ru: 'М' } },
  },
  KeyB: {
    char: { lowerCase: { en: 'b', ru: 'и' }, upperCase: { en: 'B', ru: 'И' } },
  },
  KeyN: {
    char: { lowerCase: { en: 'n', ru: 'т' }, upperCase: { en: 'N', ru: 'Т' } },
  },
  KeyM: {
    char: { lowerCase: { en: 'm', ru: 'ь' }, upperCase: { en: 'M', ru: 'Ь' } },
  },
  Comma: {
    char: { lowerCase: { en: ',', ru: 'б' }, upperCase: { en: '<', ru: 'Б' } },
  },
  Period: {
    char: { lowerCase: { en: '.', ru: 'ю' }, upperCase: { en: '>', ru: 'Ю' } },
  },
  Slash: {
    char: { lowerCase: { en: '/', ru: '.' }, upperCase: { en: '?', ru: ',' } },
  },
  ArrowUp: {
    char: { lowerCase: { en: '△', ru: '△' }, upperCase: { en: '△', ru: '△' } },
  },
  ShiftRight: {
    char: { lowerCase: { en: 'shift', ru: 'shift' }, upperCase: { en: 'shift', ru: 'shift' } },
  },
  ControlLeft: {
    char: { lowerCase: { en: 'ctrl', ru: 'ctrl' }, upperCase: { en: 'ctrl', ru: 'ctrl' } },
  },
  MetaLeft: {
    char: { lowerCase: { en: '⊞Win', ru: '⊞Win' }, upperCase: { en: '⊞Win', ru: '⊞Win' } },
  },
  AltLeft: {
    char: { lowerCase: { en: 'alt', ru: 'alt' }, upperCase: { en: 'alt', ru: 'alt' } },
  },
  Space: {
    char: { lowerCase: { en: ' ', ru: ' ' }, upperCase: { en: ' ', ru: ' ' } },
  },
  AltRight: {
    char: { lowerCase: { en: 'alt', ru: 'alt' }, upperCase: { en: 'alt', ru: 'alt' } },
  },
  ControlRight: {
    char: { lowerCase: { en: 'ctrl', ru: 'ctrl' }, upperCase: { en: 'ctrl', ru: 'ctrl' } },
  },
  ArrowLeft: {
    char: { lowerCase: { en: '◁', ru: '◁' }, upperCase: { en: '◁', ru: '◁' } },
  },
  ArrowDown: {
    char: { lowerCase: { en: '▽', ru: '▽' }, upperCase: { en: '▽', ru: '▽' } },
  },
  ArrowRight: {
    char: { lowerCase: { en: '▷', ru: '▷' }, upperCase: { en: '▷', ru: '▷' } },
  },
};

class KeyBoard {
  constructor() {
    this.currentLanguage = localStorage.getItem('currentLanguage') || 'en';
    this.currentCase = 'lowerCase';
  }

  createKeyboard() {
    const wrapper = document.createElement('div');
    const contentWrapper = document.createElement('div');
    const textArea = document.createElement('textarea');
    const keyBoardWrapper = document.createElement('div');
    const infoBlock = document.createElement('div');
    const switchLang = document.createElement('div');
    const devInfo = document.createElement('div');
    contentWrapper.classList.add('contentWrapper');
    infoBlock.classList.add('info_block');
    switchLang.classList.add('switch-lang');
    devInfo.classList.add('dev-info');
    wrapper.classList.add('wrapper');
    textArea.classList.add('text__area');
    keyBoardWrapper.classList.add('keyBoard__wrapper');
    document.body.append(wrapper);
    wrapper.append(contentWrapper);
    contentWrapper.append(textArea);
    contentWrapper.append(keyBoardWrapper);
    contentWrapper.append(infoBlock);
    infoBlock.append(switchLang);
    infoBlock.append(devInfo);
    switchLang.textContent = 'Переключение языка - Alt+Shift';
    devInfo.textContent = 'Разработано для Windows OS';
    const buttonsArray = Object.keys(buttonsMap);
    buttonsArray.forEach((keyName) => {
      const button = document.createElement('div');
      button.dataset.keyName = keyName;
      button.classList.add('button');
      if (keyName === 'Backspace') {
        button.classList.add('backspace_button');
      } else if (keyName === 'Tab') {
        button.classList.add('tab_button');
      } else if (keyName === 'Delete') {
        button.classList.add('delete_button');
      } else if (keyName === 'CapsLock') {
        button.classList.add('capslock_and_leftshift_button');
      } else if (keyName === 'Enter') {
        button.classList.add('enter_button');
      } else if (keyName === 'ShiftLeft') {
        button.classList.add('capslock_and_leftshift_button');
      } else if (keyName === 'ControlLeft') {
        button.classList.add('control_button');
      } else if (keyName === 'ControlRight') {
        button.classList.add('control_button');
      } else if (keyName === 'Space') {
        button.classList.add('space_button');
      } else if (keyName === 'MetaLeft') {
        button.classList.add('metaLeft_button');
      }
      button.textContent = buttonsMap[keyName].char.lowerCase[this.currentLanguage];
      keyBoardWrapper.append(button);
    });

    const buttons = document.querySelectorAll('.button');
    document.body.addEventListener('keydown', (event) => {
      const { code } = event;
      if (buttonsMap[code]) {
        event.preventDefault();
        keyBoardWrapper.querySelector(`div[data-key-name=${code}]`).classList.add('button_active');
        if (code === 'Backspace') {
          if (textArea.selectionStart !== 0 && textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'start');
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'start');
          }
        } else if (code === 'Tab') {
          textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end');
        } else if (code === 'Delete') {
          if (textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'start');
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end');
          }
        } else if (code === 'Enter') {
          textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
        } else if (code === 'CapsLock') {
          if (this.currentCase === 'lowerCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const upperCaseChar = buttonsMap[buttons[i].dataset.keyName].char.upperCase[this.currentLanguage];
              buttons[i].textContent = upperCaseChar;
            }
            this.currentCase = 'upperCase';
          } else if (this.currentCase === 'upperCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const lowerCaseChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase[this.currentLanguage];
              buttons[i].textContent = lowerCaseChar;
            }
            this.currentCase = 'lowerCase';
          }
        } else if ((code === 'AltLeft' && event.shiftKey)
          || (code === 'AltRight' && event.shiftKey)) {
          if (this.currentLanguage === 'en') {
            for (let i = 0; i < buttons.length; i += 1) {
              const russianChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase.ru;
              buttons[i].textContent = russianChar;
            }
            this.currentLanguage = 'ru';
          } else if (this.currentLanguage === 'ru') {
            for (let i = 0; i < buttons.length; i += 1) {
              const englishChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase.en;
              buttons[i].textContent = englishChar;
            }
            this.currentLanguage = 'en';
          }
        } else if (code === 'ShiftLeft' || code === 'ShiftRight') {
          if (event.altKey) {
            if (this.currentLanguage === 'en') {
              for (let i = 0; i < buttons.length; i += 1) {
                const russianChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase.ru;
                buttons[i].textContent = russianChar;
              }
              this.currentLanguage = 'ru';
            } else if (this.currentLanguage === 'ru') {
              for (let i = 0; i < buttons.length; i += 1) {
                const englishChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase.en;
                buttons[i].textContent = englishChar;
              }
              this.currentLanguage = 'en';
            }
          }
          if (this.currentCase === 'lowerCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const upperCaseChar = buttonsMap[buttons[i].dataset.keyName].char.upperCase[this.currentLanguage];
              buttons[i].textContent = upperCaseChar;
            }
            this.currentCase = 'upperCase';
          } else if (this.currentCase === 'upperCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const lowerCaseChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase[this.currentLanguage];
              buttons[i].textContent = lowerCaseChar;
            }
            this.currentCase = 'lowerCase';
          }
        } else if (!(
          code === 'AltLeft'
          || code === 'AltRight'
          || code === 'MetaLeft'
          || code === 'ControlRight'
          || code === 'ControlLeft'
        )) {
          textArea.setRangeText(
            buttonsMap[code].char[this.currentCase][this.currentLanguage],
            textArea.selectionStart,
            textArea.selectionEnd,
            'end',
          );
        }
      }
    });

    document.body.addEventListener('keyup', (event) => {
      const { code } = event;
      if (buttonsMap[code]) {
        event.preventDefault();
        keyBoardWrapper.querySelector(`div[data-key-name=${code}]`).classList.remove('button_active');
      }

      if ((code === 'ShiftLeft' || code === 'ShiftRight')) {
        if (this.currentCase === 'lowerCase') {
          for (let i = 0; i < buttons.length; i += 1) {
            const upperCaseChar = buttonsMap[buttons[i].dataset.keyName].char.upperCase[this.currentLanguage];
            buttons[i].textContent = upperCaseChar;
          }
          this.currentCase = 'upperCase';
        } else if (this.currentCase === 'upperCase') {
          for (let i = 0; i < buttons.length; i += 1) {
            const lowerCaseChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase[this.currentLanguage];
            buttons[i].textContent = lowerCaseChar;
          }
          this.currentCase = 'lowerCase';
        }
      }
    });
    const mouseoutHandler = (mouseoutEvent) => {
      mouseoutEvent.currentTarget.classList.remove('button_active');
      mouseoutEvent.currentTarget.removeEventListener('mouseout', mouseoutHandler);
    };
    keyBoardWrapper.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('button')) {
        event.target.classList.add('button_active');
        event.target.addEventListener('mouseout', mouseoutHandler);
        if (event.target.dataset.keyName === 'Backspace') {
          if (textArea.selectionStart !== 0 && textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart - 1, textArea.selectionEnd, 'start');
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'start');
          }
        } else if (event.target.dataset.keyName === 'Tab') {
          textArea.setRangeText('\t', textArea.selectionStart, textArea.selectionEnd, 'end');
        } else if (event.target.dataset.keyName === 'Delete') {
          if (textArea.selectionStart === textArea.selectionEnd) {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd + 1, 'start');
          } else {
            textArea.setRangeText('', textArea.selectionStart, textArea.selectionEnd, 'end');
          }
        } else if (event.target.dataset.keyName === 'Enter') {
          textArea.setRangeText('\n', textArea.selectionStart, textArea.selectionEnd, 'end');
        } else if (
          event.target.dataset.keyName === 'AltLeft'
          || event.target.dataset.keyName === 'AltRight'
          || event.target.dataset.keyName === 'MetaLeft'
          || event.target.dataset.keyName === 'ControlRight'
          || event.target.dataset.keyName === 'ControlLeft'
        ) {
          document.body.classList.add('alt_ctrl');
        } else if (event.target.dataset.keyName === 'ShiftLeft' || event.target.dataset.keyName === 'ShiftRight') {
          if (event.altKey) {
            if (this.currentLanguage === 'en') {
              for (let i = 0; i < buttons.length; i += 1) {
                const russianChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase.ru;
                buttons[i].textContent = russianChar;
              }
              this.currentLanguage = 'ru';
            } else if (this.currentLanguage === 'ru') {
              for (let i = 0; i < buttons.length; i += 1) {
                const englishChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase.en;
                buttons[i].textContent = englishChar;
              }
              this.currentLanguage = 'en';
            }
          }
          if (this.currentCase === 'lowerCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const upperCaseChar = buttonsMap[buttons[i].dataset.keyName].char.upperCase[this.currentLanguage];
              buttons[i].textContent = upperCaseChar;
            }
            this.currentCase = 'upperCase';
          } else if (this.currentCase === 'upperCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const lowerCaseChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase[this.currentLanguage];
              buttons[i].textContent = lowerCaseChar;
            }
            this.currentCase = 'lowerCase';
          }
        } else if (event.target.dataset.keyName === 'CapsLock') {
          if (this.currentCase === 'lowerCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const upperCaseChar = buttonsMap[buttons[i].dataset.keyName].char.upperCase[this.currentLanguage];
              buttons[i].textContent = upperCaseChar;
            }
            this.currentCase = 'upperCase';
          } else if (this.currentCase === 'upperCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const lowerCaseChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase[this.currentLanguage];
              buttons[i].textContent = lowerCaseChar;
            }
            this.currentCase = 'lowerCase';
          }
        } else {
          textArea.setRangeText(
            buttonsMap[event.target.dataset.keyName].char[this.currentCase][this.currentLanguage],
            textArea.selectionStart,
            textArea.selectionEnd,
            'end',
          );
        }
      }
    });
    keyBoardWrapper.addEventListener('mouseup', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('button')) {
        if ((event.target.dataset.keyName === 'ShiftLeft' || event.target.dataset.keyName === 'ShiftRight')) {
          if (this.currentCase === 'lowerCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const upperCaseChar = buttonsMap[buttons[i].dataset.keyName].char.upperCase[this.currentLanguage];
              buttons[i].textContent = upperCaseChar;
            }
            this.currentCase = 'upperCase';
          } else if (this.currentCase === 'upperCase') {
            for (let i = 0; i < buttons.length; i += 1) {
              const lowerCaseChar = buttonsMap[buttons[i].dataset.keyName].char.lowerCase[this.currentLanguage];
              buttons[i].textContent = lowerCaseChar;
            }
            this.currentCase = 'lowerCase';
          }
        }

        event.target.classList.remove('button_active');
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const virtualKeyboard = new KeyBoard();
  virtualKeyboard.createKeyboard();
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('currentLanguage', virtualKeyboard.currentLanguage);
  });
});
