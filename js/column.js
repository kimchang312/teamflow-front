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
}