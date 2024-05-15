
// i am learn to javascript date get method tody




const d = new Date("2021-03-25");
let x = d.getFullYear();

console.log(x);

{
  const d = new Date();
  const x = d.getFullYear();
  console.log(x);
}


{
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("2021-03-25");
  let month = months[d.getMonth()];
  console.log(month);
}



{
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date("2004-08-25");
  let x = month[d.getMonth()];
  console.log(x);
}


{
  const d = new Date("2004-8-15");
  const x = d.getDate();
  console.log(x);
}



{
  const d = new Date();
  const x = d.getDate();
  console.log(x);
}




{
  const d = new Date("2004-08-15");
  const x = d.getHours();
  console.log(x);
}


{
  const d = new Date("2004-08-15");
  const x = d.getMinutes();
  console.log(x);
}

{
  const d = new Date("2004-8-15");
  const x = d.getSeconds();
  console.log(x);
}

{
  const d = new Date("2004-8-15");
  const x = d.getMilliseconds();
  console.log(x);
}





