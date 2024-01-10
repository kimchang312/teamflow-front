function clickColumnTitle(tagId){
    seeColumnUpdateParent(tagId,1)
}

function cancelColumnTitle(tagId){
    seeColumnUpdateParent(tagId,0)
}

function updateCoulmnTitle(tagId,columnId){
    
    seeColumnUpdateParent(tagId,0);
    const new_column_title= document.getElementById(`${tagId}Column-input`).value;
    
    fetch(`${main_sever}boards/1/columns/${columnId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            name:new_column_title,
        }),
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
}

function seeColumnUpdateParent(tagId,a){
    a?
    document.querySelector(`.column-update-parent${tagId}`).style.display="block":
    document.querySelector(`.column-update-parent${tagId}`).style.display="none";
}

function makeCard(columnId){
    document.querySelector(".modal-overlaytwo").style.display="flex";
    document.querySelector(".modal-windowtwo").setAttribute("id",`${columnId}`)
}

function deleteColumn(columnId){
    if(!checkDeletObject()){
        return;
    }
    fetch(`${main_sever}boards/1/columns/${columnId}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
}

const add_column_btn=document.getElementById("create-column-inboard");
add_column_btn.addEventListener("click",e=>{
    document.querySelector(".create-column-parent").style.display="block";
    
})

const cancel_create_column_btn=document.getElementById("cancel-create-column-button");
cancel_create_column_btn.addEventListener("click",e=>{
    document.querySelector(".create-column-parent").style.display="none";
})

const create_column_btn=document.getElementById("create-column-button")
create_column_btn.addEventListener("click",e=>{
    document.querySelector(".create-column-parent").style.display="none";
    const column_name=document.getElementById("create-column-input").value;
    if(!column_name){
        return;
    }
    fetch(`${main_sever}boards/1/columns`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            name:column_name,
        }),
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
})



function dragoverCard(event){
    event.preventDefault();
}

function dropCard(event,cardId){
    event.preventDefault();
    console.log(cardId)
}

function dragoverColumn(event){
    event.preventDefault();
}

function dropColumn(event,columnId){
    event.preventDefault();
    console.log(columnId);
}