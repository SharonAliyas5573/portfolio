import React from "react";
import Typewriter from "typewriter-effect";



function Type() {
  
  return (
    <Typewriter
      options={{
        strings: [
          "\tBack End Developer",
          "\tCyber Security",
          "\tOpen Source Contributor",
          "\tFreelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;