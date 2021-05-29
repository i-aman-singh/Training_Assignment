var selectedRow=null;
var flag=true;

function onFormSubmit(){

let formData=readFromData();//Read Data from input boxes
if(selectedRow==null)
insertNewRecord(formData);
else{
  update(formData);
}
resetForm();

}

//Read Data from input boxes and store in json format.
function readFromData(){
    var fn=document.getElementById("fn").value,
    mn=document.getElementById("mn").value,
    ln=document.getElementById("ln").value,
    email=document.getElementById("email").value,
    ph=document.getElementById("ph").value,
    role=document.getElementById("role").value,
    add=document.getElementById("add").value;

//Data in JSON format.
   let newObject={
        "FirstName":fn,
        "MiddleName":mn,
        "LastName": ln,
        "Email":email,
        "PhoneNumber":ph,
        "Role":role,
        "Address":add
    };
    return newObject;
   
}

//Insert a Record in a table
function insertNewRecord(data)
{
    let table=document.getElementById("emp_list").getElementsByTagName('tbody')[0];
    let newRow=table.insertRow(table.length);
    console.log(data);
    cell1=newRow.insertCell(0);
    cell1.innerText=data.FirstName;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.MiddleName;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.LastName;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.Email;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.PhoneNumber;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.Role;
    cell7=newRow.insertCell(6);
    cell7.innerHTML=data.Address;
    cell8=newRow.insertCell(7);
    cell8.innerHTML='<a onclick="onEdit(this)"> Edit</a> <a onclick="onDelete(this)">Delete</a>';
    alert("Data Added Successfully");
}
//Edit function to edit a data from a table.
function onEdit(data){
    selectedRow=data.parentElement.parentElement;
    console.log(selectedRow);
    document.getElementById("fn").value=selectedRow.cells[0].innerHTML;
    document.getElementById("mn").value=selectedRow.cells[1].innerHTML;
    document.getElementById("ln").value=selectedRow.cells[2].innerHTML;
    document.getElementById("email").value=selectedRow.cells[3].innerHTML;
    document.getElementById("ph").value=selectedRow.cells[4].innerHTML;
    document.getElementById("role").value=selectedRow.cells[5].innerHTML;
    document.getElementById("add").value=selectedRow.cells[6].innerHTML;


}
//Reset the data present in html form.
function resetForm(){
    document.getElementById('fn').value='';
    document.getElementById('mn').value='';
    document.getElementById('ln').value='';
    document.getElementById('email').value='';
    document.getElementById('ph').value='';
    document.getElementById('role').value='';
    document.getElementById('add').value='';
}
//Update the data present in table.
function update(formData){
    selectedRow.cells[0].innerHTML=formData.FirstName;
    selectedRow.cells[1].innerHTML=formData.MiddleName;
    selectedRow.cells[2].innerHTML=formData.LastName;
    selectedRow.cells[3].innerHTML=formData.Email;
    selectedRow.cells[4].innerHTML=formData.PhoneNumber;
    selectedRow.cells[5].innerHTML=formData.Role;
    selectedRow.cells[6].innerHTML=formData.Address;
}
//Delete the data from table.
function onDelete(td){
    if(confirm('Are You Sure want to Delete ?'))
    {
    row=td.parentElement.parentElement;
    document.getElementById('emp_list').deleteRow(row.rowIndex);
    resetForm();
    }
}
function change()
{ let res=document.getElementById('a');
    if(flag)
    {
        
        res.innerText='Refresh Data';
        res=document.getElementById('emp_list');
        res.style.display="block";
        res=document.getElementById('form');
        res.style.display="block";
        flag=false;
            
    }
    

}