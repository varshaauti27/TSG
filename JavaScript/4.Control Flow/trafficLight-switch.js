var direction = prompt("Should we STOP, SLOW, or GO?");
switch (direction) {
    case "STOP":
        console.log("STOP!");
        alert("STOP!");
        break;
    case "SLOW":
        console.log("SLOW DOWN!");
        alert("SLOW DOWN!");
        break;
    default:
        console.log("GO!");
        alert("GO!");
}