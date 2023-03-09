var estudents=["Daniel","Alberto","Salomon","Sacarias"]

function greetEstudents(estudent){
    console.log(`hello, ${estudent}`)
   
}

for(var estudent of estudents){
    greetEstudents(estudent)
}


for(var i=0;i < estudents.length;i++){
    greetEstudents(estudents[i])
}

// 


var persons=["Juan","Sofia","Maria","Rosa"]


function greetPersons(person){
       console.log(`Hello  ${person}`)
}

while(persons.length>0){
    console.log(persons)
    var person = persons.shift();
    greetPersons(person)

}




 