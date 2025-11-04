const arabicLetters = "ابتثجحخدذرزسشصضطظعغفقكلمنهويءأإآة"; 
const englishLower = "abcdefghijklmnopqrstuvwxyz";
const englishUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const symbols = " .,!?@#%^&*()-_+=[]{};:'\"/\\|<>~`₹$€£،؛";

function keyToNumber(key, n) {
  let sum = 0;
  for (let ch of key) sum += ch.charCodeAt(0);
  return sum % n;
}

function caesarEncrypt(text, key) {
  let result = "";
  for (let ch of text) {
    if (englishLower.includes(ch)) {
      const n = englishLower.length;
      const k = keyToNumber(key, n);
      const index = englishLower.indexOf(ch);
      result += englishLower[(index + k) % n];
    } else if (englishUpper.includes(ch)) {
      const n = englishUpper.length;
      const k = keyToNumber(key, n);
      const index = englishUpper.indexOf(ch);
      result += englishUpper[(index + k) % n];
    }else if (digits.includes(ch)) {
      const n = digits.length;
      const k = keyToNumber(key, n);
      const index = digits.indexOf(ch);
      result += digits[(index + k) % n];
    } else if (symbols.includes(ch)) {
      const n = symbols.length;
      const k = keyToNumber(key, n);
      const index = symbols.indexOf(ch);
      result += symbols[(index + k) % n];
    } else if (arabicLetters.includes(ch)) { 
      const n = arabicLetters.length;
      const k = keyToNumber(key, n);
      const index = arabicLetters.indexOf(ch);
      result += arabicLetters[(index + k) % n];
    } else {
      result += ch;
    }
  }
  return result;
}

function caesarDecrypt(text, key) {
  let result = "";
  for (let ch of text) {
    if (englishLower.includes(ch)) {
      const n = englishLower.length;
      const k = keyToNumber(key, n);
      const index = englishLower.indexOf(ch);
      result += englishLower[(index - k + n) % n];
    } else if (englishUpper.includes(ch)) {
      const n = englishUpper.length;
      const k = keyToNumber(key, n);
      const index = englishUpper.indexOf(ch);
      result += englishUpper[(index - k + n) % n];
    } else if (digits.includes(ch)) {
      const n = digits.length;
      const k = keyToNumber(key, n);
      const index = digits.indexOf(ch);
      result += digits[(index - k + n) % n];
    } else if (symbols.includes(ch)) {
      const n = symbols.length;
      const k = keyToNumber(key, n);
      const index = symbols.indexOf(ch);
      result += symbols[(index - k + n) % n];
    }else if (arabicLetters.includes(ch)) { 
      const n = arabicLetters.length;
      const k = keyToNumber(key, n);
      const index = arabicLetters.indexOf(ch);
      result += arabicLetters[(index - k + n) % n];
    } else {
      result += ch;
    }
  }
  return result;
}

function encryptText() {
  const text = document.getElementById("textInput").value;
  const key = document.getElementById("keyInput").value;
  const encrypted = caesarEncrypt(text, key);
  document.getElementById("resultOutput").innerText = encrypted; 
}

function decryptText() {
  const encryptedText = document.getElementById("resultOutput").dataset.encrypted || document.getElementById("resultOutput").innerText;
  if (!encryptedText || encryptedText.includes("Result will appear here")) {
    document.getElementById("resultOutput").innerText = "⚠ Please encrypt the text first!"; 
    return;
  }
  const key = document.getElementById("keyInput").value;
  const decrypted = caesarDecrypt(encryptedText, key);
  document.getElementById("resultOutput").innerText = decrypted; 
}
