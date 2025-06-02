function sayHello() {
  const userName = prompt("What's your name?");
  if (userName) {
    alert(`Hello, ${userName}!`);
  }else{
    alert(`Hello guest`);
  }
}
