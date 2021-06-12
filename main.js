var student_array = [];

function submit() {
    var display_array = [];

    for (var i = 1; i <= 4; i++) {
        var name = document.getElementById("student" + i).value;
        student_array.push(name);
    }
    console.log(student_array);

    var x = student_array.length;
    for (var j = 0; j<x; j++) {
        display_array.push("<h4>Name - "+student_array[j]+"</h4>");
    }
document.getElementById("display_name_with_commas").innerHTML=display_array;

var no_comma = display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=no_comma;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    student_array.sort();
    var display_array = [];
    var x = student_array.length;
    for (var k = 0; k<x; k++) {
        display_array.push("<h4>Name - "+student_array[k]+"</h4>");
    }
var no_comma = display_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=no_comma;
}
