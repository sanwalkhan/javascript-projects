const add = document.getElementById("addbtn")
const edit = document.getElementById("editbtn")
const del= document.getElementById("delbtn")


add.addEventListener("click", addfunction)
edit.addEventListener("click", editfunction)
del.addEventListener("click", delfunction)



// add

function addfunction(){

    var li = document.createElement("li")

    var text = prompt("Enter Your Task")

    if(text == null ||  text.length == 0){
        alert("You havn't Entered Any Task")
    }
    else if(text!= null){
        var textnode = document.createTextNode('-' + ' ' + text)
        li.appendChild(textnode)
        document.getElementById("mylist").appendChild(li)
        alert("added")

    }

    else{
        alert("You haven't entered any task")
    }
}



// edit


function editfunction(){

    var node = document.querySelectorAll("li")
    var newNode = document.createElement("li")

    if(node.length == 0){
        alert("Editing Not Possible")

    }

    else{
        var task = parseInt(prompt("Which One You Want to Edit"))

        if((node.length)<task){
            alert("Enter Number In List")
        }
        else if( (node.length)>=task ){
            var text = prompt("Enter Your Task")
            if(text== null || text.length == 0){
                alert("Not Entered Any Text")
            }
            else{
                var textnode = document.createTextNode("--" + " "+ text)
                newNode.appendChild(textnode)
                document.getElementById("mylist").replaceChild(newNode,node[task - 1])
                alert("Saved")
            }
        }
    }

}


// delete


function delfunction(){
    var node = document.querySelectorAll("li")
    if(node.length == 0){
        alert("Deletion Not Possible")
    }
    else{
        var  task = parseInt(prompt("Enter Which onw you want to delete?"))
        if(task !== null){
            if((node.length)>= task){
                document.getElementById("mylist").removeChild(node[task - 1])
                alert("Deleted")
            }
            else if((node.length) < task){
                alert("Enter number within length of LIST")
            }
        }
    }
}