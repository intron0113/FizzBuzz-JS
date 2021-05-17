"use strict";
{
  document.getElementById("btn").onclick = function fizzbuzz() {
    const fizzNum = Number(document.getElementById("text1").value);
    const buzzNum = Number(document.getElementById("text2").value);
    const fbArry = [];
    const fbText = [];
    const fbResult = document.createElement("div");
    fbResult.textContent = "fbResult";
    const body = document.querySelector("body");
    body.appendChild(fbResult);

    if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum)) {
      fbResult.textContent = "整数値を入力してください";
      return;
    }

    for (let i = 1; i < 100; i++) {
      const fizzCondition = (function () {
        if (fizzNum === 0) {
          return i === 0;
        } else {
          return i % fizzNum === 0;
        }
      })();

      const buzzCondition = (function () {
        if (buzzNum === 0) {
          return i === 0;
        } else {
          return i % buzzNum === 0;
        }
      })();

      if (fizzCondition && buzzCondition) {
        fbArry.push("FizzBuzz" + i);
      } else if (fizzCondition) {
        fbArry.push("Fizz" + i);
      } else if (buzzCondition) {
        fbArry.push("Buzz" + i);
      }
    }

    for (const item of fbArry) {
      fbText.push(`<p>${item}</p>`);
    }

    const fbHTML = fbText.join("");

    fbResult.innerHTML = fbHTML;
  };
}
