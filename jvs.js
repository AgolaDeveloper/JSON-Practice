 devs= {  "developer1": {
    "name": "Agola",
    "age": "24",
    "position": "Senior software Developer",
    "salary": "USD 8200"
},
    "developer2": {
    "name": "Owino",
    "age": "23",
    "position": "Junior software Developer",
    "salary": "USD 2200"
}
}

var obj= JSON.parse(devs);

var values="";
 for(var i in obj)
    values+= obj[i].name;

var nam= obj.developer1.name;
document.getElementByClassName("jsn").innerHTML= values;