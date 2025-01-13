{
  let wordSplit = () => {
    const array = [];
    const word = "Orange Jordan";
    let splitted = word.split(" ");
    array.push(splitted);
    console.log(array);
  };
  wordSplit();
}
console.log("2-");
{
  let hidingNumber = () => {
    const phoneNumber = "0776807777";
    const hidden = phoneNumber.replace(phoneNumber.slice(0, 7), "*******");
    console.log(hidden);
  };
  hidingNumber();
}
console.log("3-");
{
  let hidingEmail = () => {
    let email = "mohammad@gmail.com";
    let hidden = email.replace(email.split("@")[0].slice(-4), "****");
    console.log(hidden);
  };
  hidingEmail();
}
console.log("4-");
{
  const text = "coding academy by orange";

  let Cap = (words) => {
    return words
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  console.log(Cap(text));
}

console.log("6-");
{
  let flip = () => {
    const array = 92485;
    const newArray = array.toString().split("");
    const reversed = newArray.reverse();
    const joined = reversed.join("");
    console.log(joined);
  };
  flip();
}

console.log("7-");
{
  let swap = () => {
    let a = 3;
    let b = 4;
    console.log(`Before swap: ${a}, ${b}`);
    [a, b] = [b, a];
    console.log(a, b);
  };
  let swap2 = () => {
    let a = 3;
    let b = 4;
    let temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a, b);
  };
  let swap3 = () => {
    let a = 3;
    let b = 4;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
  };
  swap();
  swap2();
  swap3();
}

console.log("8-");
{
  let delIndexed = () => {
    const name = "Orange";
    const newArray = name.split("");
    newArray.splice(3, 1);
    let joined = newArray.join("");
    console.log(joined);
  };

  delIndexed();
}

console.log("9-");
{
  let merge = () => {
    const word = ["ora", "nge"];
    let joined = word.join("");
    console.log(joined);
  };
  merge();
}

console.log("10-");
{
  const check = () => {
    const letter = "o";
    const word = "orange";

    const test1 = new RegExp(`${letter}&`, "g");
    const test2 = new RegExp(`^${letter}`, "g");

    if (test1.test(word) || test2.test(word)) {
      console.log("True");
    } else {
      console.log("False");
    }
  };

  check();
}

console.log("11-");
{
  let spliter = () => {
    const array = [];
    const text = "Coding Academy By Orange";
    let splitted = text.split(" ");
    array.push(splitted);
    console.log(array);
  };
  spliter();
}

console.log("12-");
{
  let reOrder = () => {
    const word = "orange";
    const newArray = word.split("");
    const sorted = newArray.sort();
    const joined = sorted.join("");
    console.log(joined);
  };
  reOrder();
}

console.log("13-");
{
  let measureTime = () => {
    const start = performance.now();
    const end = performance.now();
    console.log(`${end - start} ms`);
  };
  measureTime();
}
