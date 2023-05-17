/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here

  // To update the excuse on page load
  // document.querySelector(".my_excuse").innerHTML = excuseGenerator();

  // To update the excuse on click on (id) button
  // -- (on load we are listening for the click > then on click the excuse generator is run)
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector(".my_excuse").innerHTML = excuseGenerator();
  });
};

const excuseGenerator = () => {
  const excuse_object = {
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
  let property = Object.keys(excuse_object);
  let out_string = "";
  property.forEach(function(property) {
    // excuse_object[property] // -> prints the array one at a time

    // now what we need to do it to randomize the selection inside of each array
    let random_int = Math.floor(Math.random() * excuse_object[property].length);

    // excuse_object[property][random_int] // -> prints a random value of an array

    // what we need is the above and adding it to the output string
    out_string += excuse_object[property][random_int] + " ";
  });
  return out_string;
};
