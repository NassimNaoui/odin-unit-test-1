export function capitalize(string) {
  const firstLetter = string[0].toUpperCase();
  const otherLetters = string.slice(1);
  const capitalized = firstLetter + otherLetters;
  return capitalized;
}

export function reverseString(string) {
  const lengthString = string.length - 1;
  let tempArray = [];
  for (let i = lengthString; i >= 0; i--) {
    tempArray.push(string[i]);
  }
  return tempArray.join("");
}

export const calculator = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    return a / b;
  },
};

export function analyseArray(array) {
  const len = array.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = sum + array[i];
  }

  const avg = Math.round(sum / len, 0);
  const min = Math.min(...array);
  const max = Math.max(...array);

  const object = {
    average: avg,
    min: min,
    max: max,
    length: len,
  };
  return object;
}

export function caesarCipher(text, shift) {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Gestion des minuscules
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
      // Gestion des majuscules
      else if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // Autres caractères inchangés
      return char;
    })
    .join("");
}
