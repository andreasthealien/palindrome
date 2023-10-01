const inputNumbers = document.querySelector("#inputCheck");
const hr = document.querySelector("hr");
const palTrue = document.querySelector(".palindromeMessage");
const palFalse = document.querySelector(".noPalindromeMessage");

function classOperation(whatToSelect, theClass, operation) {
  const selectedItem = document.querySelector(whatToSelect);
  const classUsed = "." + theClass;

  if (operation === "remove") {
    selectedItem.classList.remove(classUsed)
  }
  if (operation === "add") {
    selectedItem.classList.add(classUsed)
  }
  if (operation === "toggle") {
    selectedItem.classList.toggle(classUsed)
  }
}//class change on selected, the class we be using, add toggle remove

function checkPalindrome(numberToCheck) {
  const number = parseInt(numberToCheck);
  const numberString = String(number);
  const numberLength = parseInt(String(number).length);

  if (numberLength === 0) {
    return false;
  } else if (numberLength === 1) {
    return true;
  } else if (numberLength > 1) {
    if (numberLength % 2 === 0) {
      const halfNumberLength = numberLength / 2;
      let firstPart = numberString.slice(0, halfNumberLength);
      let secondPart = numberString.slice(halfNumberLength);

      secondPart = secondPart.split("");
      secondPart = secondPart.reverse();
      secondPart = secondPart.join("");

      if (firstPart === secondPart) {
        return true
      } else if (firstPart !== secondPart) {
        return false;
      }
    } else if (numberLength % 2 === 1) {
      const halfNumberLength = numberLength / 2;
      let firstPart = numberString.slice(0, halfNumberLength);
      let secondPart = numberString.slice(halfNumberLength);
      secondPart = secondPart.slice(1);

      secondPart = secondPart.split("");
      secondPart = secondPart.reverse();
      secondPart = secondPart.join("");

      if (firstPart === secondPart) {
        return true
      } else if (firstPart !== secondPart) {
        return false;
      }
    }
  }
} //true(is palin) or false

function checkIfNum(stringToCheck) {
  const checkItem = parseInt(stringToCheck);
  if (!isNaN(checkItem)) {
    return true;
  } else if (isNaN(checkItem)) {
    return false;
  }
} //true(is Int) or false

function onCheck() {
  const value = document.querySelector("#inputCheck").value;
  if (checkIfNum(value)) {
    if (checkPalindrome(value)) {
      hr.classList.add("showB")
      palTrue.classList.add("showB")
      palFalse.classList.remove("showB")
    } else {
      hr.classList.add("showB")
      palTrue.classList.remove("showB")
      palFalse.classList.add("showB")
    }
  } else {
    hr.classList.add("showB")
    palTrue.classList.remove("showB")
    palFalse.classList.add("showB")
  }
}

addEventListener("keydown", (event) => {
  if(event.key==="Enter"){
    onCheck();
  }
});