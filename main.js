function Szamol(){
    let kapacitas = parseFloat(document.querySelector("#Kapacitás").value);
    let kapacitasJel = ConvertToNumber(document.querySelector("#KapacitásJel").value);
    let sebesseg = parseFloat(document.querySelector("#Sebesség").value);
    let sebessegJel = ConvertToNumber(document.querySelector("#SebességJel").value);
    let eredmeny = document.querySelector("#Eredmény");

    let kulonbseg = (kapacitasJel-sebessegJel) === 0 ? 1 : (kapacitasJel-sebessegJel);

    eredmeny.innerHTML = convertMsToTime(kapacitas / sebesseg * Math.pow(1000, kulonbseg));
}

const ConvertToNumber = (jel) => ["KB", "MB", "GB", "TB"].indexOf(jel.substring(0, 2)) + 1;

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds %= 60;
    minutes %= 60;

    return `${hours}:${minutes}:${seconds}`;
}