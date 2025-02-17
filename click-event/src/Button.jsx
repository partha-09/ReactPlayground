function Button() {
  //   let count = 0;
  //   const handleClick = (name1) => {
  //     if (count < 3) {
  //       count += 1;
  //       console.log(`You CLicked me ${count} times/s`);
  //     } else {
  //       console.log(`${name1} Stop clicking Me!`);
  //     }
  //   };
  //   const handleClick2 = (name1) => {
  //     console.log(`${name1} Stop Clicking Me`);
  //   };
  const handleClick = (e) => (e.target.textContent = "OUCH!!!");
  return <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>;
}
export default Button;
