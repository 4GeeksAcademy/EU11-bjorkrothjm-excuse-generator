/* eslint-disable */
import "bootstrap";
import "./style.css";

// Adding functionality so that the excuseGenerator loads on each click on the button
window.onload = () => {
  // To update the excuse on page load
  // document.querySelector(".my_excuse").innerHTML = excuseGenerator();

  // To update the excuse on click on (id) button
  // -- (on load we are listening for the click > then on click the excuse generator is run)
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector(".my_excuse").innerHTML = excuseGenerator();
  });
};

// Creating a function to generate excuses
const excuseGenerator = () => {
  const excuseObject = {
    who: ["The dog", "My grandma", "His turtle", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "the keys", "the car"],
    when: [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ]
  };
  const property = Object.keys(excuseObject);
  let outputString = "";
  property.forEach(property => {
    // excuseObject[property] // -> prints the array one at a time

    // now what we need to do it to randomize the selection inside of each array
    const randomInteger = Math.floor(
      Math.random() * excuseObject[property].length
    );

    // excuseObject[property][randomInteger] // -> prints a random value of an array

    // what we need is the above and adding it to the outputString
    outputString += excuseObject[property][randomInteger] + " ";
  });
  return outputString;
};
