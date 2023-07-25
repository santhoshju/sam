var row = null;
formsubmit =() => {
    var dataEntered = retrivedata();
    var readData = readingDatafromLocalStorage(dataEntered);
    if(row == null){
    insertData(readData);
    msg.innerHTML = "Data Entered!";
    }else{
    upDate();
    msg.innerHTML = "Data Updated!";
    }
    document.getElementById("form").reset();
}

retrivedata = () =>{
    var name1 = document.getElementById("name").value;

    var job = document.getElementById("job").value;

    var exprience = document.getElementById("ex").value;

    var arr = [name1,job,exprience];
    if(arr.includes("")){
        alert("fill all the input boxes");
    }else{
        return arr;
    }
}

readingDatafromLocalStorage = (dataEntered) => {
    var n = localStorage.setItem("Name",dataEntered[0]);
    var j = localStorage.setItem("job",dataEntered[1]);
    var e = localStorage.setItem("Experience",dataEntered[2]);

    var n1= localStorage.getItem("Name",dataEntered[0]);
    var j1= localStorage.getItem("job",dataEntered[1]);
    var e1= localStorage.getItem("Experience",dataEntered[2]);

    var arr = [n1,j1,e1];
    return arr;

}

insertData = (readData) => {
    var row = table.insertRow();

    // Another Way
    /*var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);   
    var cell3 = row.insertCell(2);

    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];*/
    
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick = editRow(this) >Edit</button><button  onclick = removeRow(this)>Delete</button>`;

}

editRow = (tableRow) =>{
   row = tableRow.parentElement.parentElement;
   document.getElementById("name").value = row.cells[0].innerHTML;
   document.getElementById("job").value = row.cells[1].innerHTML;
   document.getElementById("ex").value = row.cells[2].innerHTML;
}

upDate = () =>{
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("ex").value;
    row = null;
}

removeRow = (tableRow) => {
    var ans = confirm("Are you sure you want to delete this recors?");
    if(ans==true){
        row = tableRow.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    }
    //document.getElementById("table").remove();
}