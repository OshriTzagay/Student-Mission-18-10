// 1.	צרו מחלקה של סטודנט, עם שדות שם פרטי, שם משפחה, גיל וממוצע ציונים.
// 2.	צרו MAP שמכיל 3 סטודנטים, הKEY הוא השם הפרטי של הסטודנט והערך הוא האובייקט.


class Student {
    name;
    lastname;
    age;
    gradesAvg;

    constructor(name,lastname,age,gradesAvg){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.gradesAvg = gradesAvg;

    }
}
let stud1 = new Student ("Amir","Man",27,99);
let stud2 = new Student ("Avtamo","Admaso",26,33);
let stud3 = new Student ("Yoni","Tagania",30,100);
studentArray = [];
studentArray.push(stud1,stud2,stud3)
let studMap = new Map ();

studentArray.forEach(item => {
    studMap.set(item.name,item)
});
console.log(studMap);

let Container = document.getElementById("Container");

studentArray.forEach(item => {
    Container.innerHTML += `<div class = "studsDiv">${item.name} </div>`
});

let studsDiv = document.getElementsByClassName("studsDiv")

    for (let i = 0; i < studsDiv.length; i++) {
        studsDiv[i].onmouseover = function (){
            studsDiv[i].style.fontSize ="70px";
            studsDiv[i].style.borderTop ="solid black 3px";
            studsDiv[i].style.borderBottom ="solid black 3px";
            studsDiv[i].style.backgroundColor ="white";
            studsDiv[i].style.boxShadow = "5px red"

       studsDiv[i].innerHTML=`:${studentArray[i].name},${studentArray[i].lastname},${studentArray[i].age},${studentArray[i].gradesAvg} ` 
       
    }
}





