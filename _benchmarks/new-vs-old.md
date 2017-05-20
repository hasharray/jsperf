---
title: New vs Old
setup: |
  const KEY_CODES = {
      BACKSPACE: 8,
      SPACE: 32,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPS: 20,
      ESC: 27,
      PGUP: 33,
      PGDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INS: 45,
      DEL: 46,
      0: 48,
      1: 49,
      2: 50,
      3: 51,
      4: 52,
      5: 53,
      6: 54,
      7: 55,
      8: 56,
      9: 57,
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      g: 71,
      h: 72,
      i: 73,
      j: 74,
      k: 75,
      l: 76,
      m: 77,
      n: 78,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83,
      t: 84,
      u: 85,
      v: 86,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      NUM0: 96,
      NUM1: 97,
      NUM2: 98,
      NUM3: 99,
      NUM4: 100,
      NUM5: 101,
      NUM6: 102,
      NUM7: 103,
      NUM8: 104,
      NUM9: 105,
      MULTIPLY: 106,
      PLUS: 107,
      MINUS: 109,
      DOT: 110,
      NUMSLASH: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      EQUAL: 187,
      COMMA: 188,
      FSLASH: 191,
      BSLASH: 220
  };
  
  
  module.exports = KEY_CODES;
  ​
  const KEY_MODIFIERS = [ 'altKey', 'ctrlKey', 'metaKey' ];
  const VALID_CHAR_REGEX = /[0-9]/;
  ​
  /*
   * Returns true if the keycode is in the range of those representing numpad
   * inputs.
   */
  const isNumpadCharCode = keyCode =>
        keyCode >= keyCodes.NUM0 && keyCode <= keyCodes.NUM9;
  ​
  /*
   * Returns true if the given event has the given modifier.
   */
  const eventHasModifier = event => modifier =>
        !!event[modifier];
  ​
  /*
   * Returns true if the keyboard event has any of the modifiers in KEY_MODIFIERS.
   */
  const eventHasActiveModifier = event =>
        KEY_MODIFIERS.some(eventHasModifier(event));
  ​
  /*
   * Returns the given keycode, adjusted for the offset of 48 if the keycode is a
   * numpad input.
   */
  const getNumpadAdjustedKeyCode = keyCode =>
        isNumpadCharCode(keyCode)
          ? keyCode - 48
          : keyCode;
  ​
  /*
   * Given a keydown or keyup event, returns the printable character that was
   * pressed, attempting to use `event.keyCode`.
   */
  const getKeyLegacy = event =>
        eventHasActiveModifier(event)
          ? null
          : String.fromCharCode(getNumpadAdjustedKeyCode(event.keyCode));
  ​
  /*
   * Returns true if the passed value matches the VALID_CHAR_REGEX.
   */
  const isValidEntry = value =>
        !!value && VALID_CHAR_REGEX.test(value);
  ​
  /*
   * Returns the passed key if it's valid, otherwise returns null.
   */
  const onlyIfValid = key =>
        isValidEntry(key)
          ? key
          : null;
  ​
  /*
   * Given a keydown or keyup event, returns the printable character that was
   * pressed. Attempts to use `event.key` which newer browsers support and is way
   * more accurate than keyCode (See
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key and
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).
   */
  const getPinInput = event =>
        onlyIfValid(event.key || getKeyLegacy(event));
  ​
  /*
   * Returns true if the given keydown or keyup event matches the given key (in
   * browsers supporting `event.key`) or keyCode (in legacy browsers).
   */
  const isKey = key => keyCode => event =>
        event.key
          ? event.key === key
          : event.keyCode === keyCode;
  ​
  /*
   * Returns true if the given keydown or keyup event is for a tab.
   */
  const isTab = isKey('Tab')(keyCodes.TAB);
  ​
  /*
   * Returns true if the given keydown or keyup event is for a backspace.
   */
  const isBackspace = isKey('Backspace')(keyCodes.BACKSPACE);
  ​
  /*
   * Returns true if the given keydown or keyup event is for a delete.
   */
  const isDelete = isKey('Delete')(keyCodes.DELETE);
  ​
  /*
   * Returns true if the passed keyCode is for a printable character.
   */
  const isPrintableCharacterKeyCode = keyCode =>
        keyCode >= keyCodes['0'] && keyCode <= keyCodes.NUMSLASH;
  ​
  /*
   * Returns true if the passed key is printable (browsers will return a
   * multi-letter name for all unprintable characters, so checking for length ===
   * 1 does this properly).
   */
  const isPrintableCharacterKey = key =>
        key
          ? key.length === 1
          : false;
  ​
  /*
   * Given a keydown or keyup event, returns true if the event is for a printable
   * character.
   */
  const isPrintableCharacter = event =>
        !eventHasActiveModifier(event) && (
            isPrintableCharacterKey(event.key) || isPrintableCharacterKeyCode(event.keyCode)
        );
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
   * Returns true if the keycode is in the range of those representing numpad inputs.
   */
  function isNumpadCharCode1(keyCode) {
      return keyCode >= keyCodes.NUM0 && keyCode <= keyCodes.NUM9;
  }
  
  /*
   * Returns true if the keyboard event has any of the modifiers in KEY_MODIFIERS.
   */
  function eventHasActiveModifier1(event) {
      return KEY_MODIFIERS.some(mod => event[mod]);
  }
  
  /*
   * Given a keydown or keyup event, returns the printable character that was
   * pressed, attempting to use `event.keyCode`.
   */
  function getKeyLegacy1(event) {
      const { keyCode } = event;
  
      // Don't allow modifiers.
      if (eventHasActiveModifier1(event)) {
          return null;
      }
  
      // Numpad charcodes don't work properly with String.fromCharCode, so if the
      // event contains one of those charcodes, subtract 48 to convert it to a
      // regular number input.
      return String.fromCharCode(isNumpadCharCode1(keyCode) ? keyCode - 48 : keyCode);
  }
  
  /*
   * Returns true if the passed value matches the VALID_CHAR_REGEX.
   */
  function isValidEntry1(value) {
      return !!value && VALID_CHAR_REGEX.test(value);
  }
  
  /*
   * Given a keydown or keyup event, returns the printable character that was
   * pressed. Attempts to use `event.key` which newer browsers support and is way
   * more accurate than keyCode (See
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key and
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).
   */
  function getPinInput1(event) {
      const key = event.key || getKeyLegacy1(event);
  
      return isValidEntry1(key) ? key : null;
  }
  
  function isKey1(event, key, keyCode) {
      return event.key ? event.key === key : event.keyCode === keyCode;
  }
  
  /*
   * Given a keydown or keyup event, returns true if the event is for a tab press.
   */
  function isTab1(event) {
      return isKey1(event, 'Tab', keyCodes.TAB);
  }
  
  /*
   * Given a keydown or keyup event, returns true if the event is for a backspace press.
   */
  function isBackspace1(event) {
      return isKey1(event, 'Backspace', keyCodes.BACKSPACE);
  }
  
  /*
   * Given a keydown or keyup event, returns true if the event is for a delete press.
   */
  function isDelete1(event) {
      return isKey1(event, 'Delete', keyCodes.DELETE);
  }
  
  /*
   * Given a keydown or keyup event, returns true if the event is for a printable
   * character.
   */
  function isPrintableCharacter1(event) {
      if (eventHasActiveModifier1(event)) {
          return false;
      }
  
      if (event.key) {
          return event.key.length === 1;
      }
  
      return event.keyCode >= keyCodes['0'] && event.keyCode <= keyCodes.NUMSLASH;
  }
tests:
  -
    name: New
    code: |
      isPrintableCharacter({ key: 'a' });
  -
    name: Old
    code: |
      isPrintableCharacter1({ key: 'a' });
---
Testing a functional style vs a less-functional one
