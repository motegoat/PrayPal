hebdateapi = await fetch("https://torahcalc.vercel.app/api/dateconverter/gregtoheb");
answer = await hebdateapi.json();
console.log(answer);
