var submit_array = [];
function submit(){
    var display_array = [];
    for(var counter = 1; counter <= 4; counter++){
        var name1 = document.getElementById("Name_"+counter).value;
        console.log(name1);
        submit_array.push(name1);
    }
    console.log(submit_array);
    var len = submit_array.length;
    console.log(len);
    for(var counter = 0; counter < len; counter++){
        display_array.push("<h4> Name - "+submit_array[counter]+"<h4>");
        console.log(display_array)
    }
document.getElementById("with_commas").innerHTML = display_array;

var without_commas_array = display_array.join(" ");
console.log(without_commas_array);
 document.getElementById("without_commas").innerHTML = without_commas_array;
document.getElementById("SUBT").style.display = "none";
document.getElementById("SRBT").style.display = "inline-block";
}

function sort(){
submit_array.sort();
console.log(submit_array);

var sort_display_array = [];

var len = submit_array.length;
console.log(len);

for(counter = 0; counter < len; counter++){
    sort_display_array.push("<h4> Name -"+submit_array[counter]+"<h4>");
    console.log(sort_display_array);
}
var without_commas_array = sort_display_array.join(" ");
document.getElementById("without_commas").innerHTML = without_commas_array;
console.log(without_commas_array)
}