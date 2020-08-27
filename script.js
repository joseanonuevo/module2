function isEmpty(){

    let eventTypes = document.getElementById('eventTypes');
    let eventTitle = document.getElementById('title');
    let From = document.getElementById('Edate');
    let To = document.getElementById('To');
    let Posting = document.getElementById('posting');

    if(eventTitle.value == "" || From.value == "" || To.value == "" || Posting == ""){
        return true;
    }
}
function testDate(){
    var temp1 = document.getElementById("Edate").value;
    var temp2 = document.getElementById("To").value;
    var temp3 = document.getElementById("Posting").value;

    var d1 = new Date(temp1);
    var d2 = new Date(temp2);
    var d3 = new Date(temp3);

    if(d3.getTime()){
        if(d3.getTime() >= d1.getTime() && d3.getTime() < d2.getTime()){
            return true;
        }else{
            return false;
        }
    }else{
        return false
    }
    }

function validate(){
    if(isEmpty()){
        alert("Enter required fields");
    }else if(testDate() == false){
        alert("Date is invalid");
    }
    if(!isEmpty() && testDate() == true){
        alert("Success");
}
}