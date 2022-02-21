var array=[];
var array2=[];

// to add item in todo list
function addTodo(){
    var todo = document.getElementById('new-task').value;
    
    array.push(todo);
    display(array);
   
}
function display(addItem){
    html = document.getElementById('incomplete-tasks');
    html.innerHTML = " ";
    for (var i=0;i<addItem.length;i++){
        html.innerHTML += '<li><input onchange="completed('+i+')" type="checkbox"><label>'+addItem[i]+'</label><input type="text"><button class="edit" onclick="editTodo('+i+')">Edit</button><button class="delete" onclick="deleteTodo('+i+')">Delete</button></li>'
    }
}
//to delete item in todo list
function deleteTodo(arrDel){
    for(var i=0;i<array.length;i++){
        if(i==arrDel){
            array.splice(i,1);
        }
    }
    display(array);
}
//to edit and update value in the todo list
function editTodo(arrEdi){
    for(var i=0;i<array.length;i++){
        if(i==arrEdi){
        html1 = '<input id="new-task" type="text"><button id="addBtn" onclick="addTodo()">Add</button><button id ="updateBtn" onclick="updateTodo('+i+')">Update</button>'
        document.getElementById('first-section').innerHTML=html1;
        document.getElementById('new-task').value=array[arrEdi];
        document.getElementById('addBtn').style.display="none";
        document.getElementById('updateBtn').style.display="block";
        }
    }
}
function updateTodo(arrUpt){
    document.getElementById('addBtn').style.display="block";
    document.getElementById('updateBtn').style.display="none";
    array[arrUpt]=document.getElementById('new-task').value;
    display(array);
    
}
//for checkbox
function completed(arrCheck){
    var temp = array[arrCheck];
    array2.push(temp);
    for(var i=0;i<array.length;i++){
        if(i==arrCheck){
        array.splice(i,1);
    }
    }
    display(array);
    displayCompleted();
}
function displayCompleted(){
    html = document.getElementById('completed-tasks');
    html.innerHTML=" ";
    for(var i=0;i<array2.length;i++){
        html.innerHTML +='<li><input type="checkbox" checked><label>'+array2[i]+'</label><input type="text"><button class="edit" onclick="editTodo1('+i+')">Edit</button><button class="delete" onclick="deleteTodo1('+i+')">Delete</button></li>'
    }
}
function deleteTodo1(checkDel){
    for(var i=0;i<array2.length;i++){
        if(i==checkDel){
            array2.splice(i,1);
        }
    }
    displayCompleted(array2);
}