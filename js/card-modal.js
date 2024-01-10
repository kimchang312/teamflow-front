const closeBtn = modal.querySelector(".close-area") //x 눌렀을 떄
closeBtn.addEventListener("click", e => {
    clickXOrOut();
})

modal.addEventListener("click", e => { //모달창 밖 눌렀을 때
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        clickXOrOut();
    }
})

const add_comments_btn=modal.querySelector(".add-comments-button")//댓글 추가 눌렀을 때
add_comments_btn.addEventListener("click",e=>{
    const new_comment=document.getElementById("modal-add-comments-input").value;
    if(!new_comment){
        return;
    }
    const cardId=document.querySelector(".modal-window").id;
    console.log(typeof new_comment);
    fetch(`${main_sever}cards/${cardId}/comments`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            comment:new_comment,
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

const add_title_btn=modal.querySelector(".title");//제목 눌렀을 때
add_title_btn.addEventListener("click",e=>{
    document.querySelector(".update-title").style.display="block";
})
const cancel_title_btn=document.getElementById("cancel-title-button");//취소 눌렀을 때
cancel_title_btn.addEventListener("click",e=>{
    document.querySelector(".update-title").style.display="none";
})
//수정눌렀을때
const update_title_btn=document.getElementById("update-title-button");
update_title_btn.addEventListener("click",e=>{
    const update_title_data= document.getElementById("update-title-input").value;
    if(!update_title_data){
        return;
    }
    const cardId=document.querySelector(".modal-window").id
    
    fetch(`${main_sever}column/1/cards/${cardId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            name:update_title_data,
            description:document.getElementById("modal-content").innerText,
            color:document.querySelector(".modal-window").style.backgroundColor,
            deadline:document.getElementById("modal-deadline").innerText,
            assignedUserId:Number(document.querySelector(".modal-window").dataset.assigneduserid),
            cardPosition:Number(document.querySelector(".modal-window").dataset.cardposition),
            moveToColumnId:Number(document.querySelector(".modal-window").dataset.movetocolumnid),
        })
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
})


const add_content_btn=document.getElementById("modal-content");//설명 눌렀을 때
add_content_btn.addEventListener("click",e=>{
    document.querySelector(".update-content").style.display="block";
})
const cancel_content_btn=document.getElementById("cancel-content-button");//취소 눌렀을 때
cancel_content_btn.addEventListener("click",e=>{
    document.querySelector(".update-content").style.display="none";
})
//수정눌렀을때
const update_content_btn=document.getElementById("update-content-button");
update_content_btn.addEventListener("click",e=>{
    const update_content_data= document.getElementById("update-content-input").value;
    if(!update_content_data){
        return;
    }
    const cardId=document.querySelector(".modal-window").id
    
    fetch(`${main_sever}column/1/cards/${cardId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            name:document.querySelector(".title").innerText,
            description:update_content_data,
            color:document.querySelector(".modal-window").style.backgroundColor,
            deadline:document.getElementById("modal-deadline").innerText,
            assignedUserId:Number(document.querySelector(".modal-window").dataset.assigneduserid),
            cardPosition:Number(document.querySelector(".modal-window").dataset.cardposition),
            moveToColumnId:Number(document.querySelector(".modal-window").dataset.movetocolumnid),
        })
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
})


const add_deadline_btn=document.getElementById("modal-deadline");//마감일 눌럿을 때
add_deadline_btn.addEventListener("click",e=>{
    document.querySelector(".update-deadline").style.display="block";
})
const cancel_deadline_btn=document.getElementById("cancel-deadline-button");//취소 눌렀을 때
cancel_deadline_btn.addEventListener("click",e=>{
    document.querySelector(".update-deadline").style.display="none";
})
//수정눌렀을때
const update_deadline_btn=document.getElementById("update-deadline-button");
update_deadline_btn.addEventListener("click",e=>{
    const update_deadline_data= document.getElementById("update-deadline-input").value;
    if(!update_deadline_data){
        return;
    }
    const cardId=document.querySelector(".modal-window").id
    
    fetch(`${main_sever}column/1/cards/${cardId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            name:document.querySelector(".title").innerText,
            description:document.getElementById("modal-content").innerText,
            color:document.querySelector(".modal-window").style.backgroundColor,
            deadline:update_deadline_data,
            assignedUserId:Number(document.querySelector(".modal-window").dataset.assigneduserid),
            cardPosition:Number(document.querySelector(".modal-window").dataset.cardposition),
            moveToColumnId:Number(document.querySelector(".modal-window").dataset.movetocolumnid),
        })
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
})

const add_assignedUser_btn=document.getElementById("modal-assignedUser");//할당된 유저 눌렀을 때
add_assignedUser_btn.addEventListener("click",e=>{
    document.querySelector(".update-assignedUser").style.display="block";
})
const cancel_assignedUser_btn=document.getElementById("cancel-assignedUser-button");//취소 눌렀을 때
cancel_assignedUser_btn.addEventListener("click",e=>{
    document.querySelector(".update-assignedUser").style.display="none";
})
//수정눌렀을때
const update_assignedUser_btn=document.getElementById("update-assignedUser-button");
update_assignedUser_btn.addEventListener("click",e=>{
    const update_assignedUser_data= document.getElementById("update-assignedUser-input").value;
    if(!update_assignedUser_data){
        return;
    }
    const cardId=document.querySelector(".modal-window").id
    
    fetch(`${main_sever}column/1/cards/${cardId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            name:document.querySelector(".title").innerText,
            description:document.getElementById("modal-content").innerText,
            color:document.querySelector(".modal-window").style.backgroundColor,
            deadline:document.getElementById("modal-deadline").innerText,
            assignedUserId:Number(update_assignedUser_data),
            cardPosition:Number(document.querySelector(".modal-window").dataset.cardposition),
            moveToColumnId:Number(document.querySelector(".modal-window").dataset.movetocolumnid),
        })
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
})

const change_color_btn=document.querySelector(".change-color-button");
change_color_btn.addEventListener("click",e=>{
    document.querySelector(".change-color-parent").style.display="block"
})

const change_color_change_btn=document.querySelector(".change-color-change-button");// 색갈변경 할때
change_color_change_btn.addEventListener("click",e=>{
    const change_color=document.querySelector(".change-color").value;
    if(!change_color){
        return;
    }
    const cardId=document.querySelector(".modal-window").id
    
    fetch(`${main_sever}column/1/cards/${cardId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            name:document.querySelector(".title").innerText,
            description:document.getElementById("modal-content").innerText,
            color:change_color,
            deadline:document.getElementById("modal-deadline").innerText,
            assignedUserId:Number(document.querySelector(".modal-window").dataset.assigneduserid),
            cardPosition:Number(document.querySelector(".modal-window").dataset.cardposition),
            moveToColumnId:Number(document.querySelector(".modal-window").dataset.movetocolumnid),
        })
    })
    .then(res=>{
        location.reload();
        return;
    })
    .catch(e=>{
        console.log(e);
    })
})

const change_color_cancel_btn =document.querySelector(".change-color-cancel-button");
change_color_cancel_btn.addEventListener("click",e=>{
    document.querySelector(".change-color-parent").style.display="none"
})

const delete_card=document.querySelector(".delete-button");
delete_card.addEventListener("click",e=>{
    const cardId= document.querySelector(".modal-window").id;
    if(!checkDeletObject()){
        return;
    }
    fetch(`${main_sever}column/1/cards/${cardId}`,{
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
})



function clickComment(commentId){//댓글눌렀을때 수정창과 취소버튼 나오고 삭제버튼 안보이기
    clickCancelOrUpdate(commentId,false)
}

function updateComment(commentId){
    const update_comment=document.getElementById(`${commentId}comment-input`).value;
    clickCancelOrUpdate(commentId,true);
    fetch(`${main_sever}cards/1/comments/${commentId}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body:JSON.stringify({
            comment:update_comment,
        }),
    })
    .catch(e=>{
        console.log(e);
    })

}

function deleteComment(commentId){
    if(!checkDeletObject()){
        return;
    }

    fetch(`${main_sever}cards/1/comments/${commentId}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
    .catch(e=>{
        console.log(e)
    })
}

function cancelComment(commentId){
    clickCancelOrUpdate(commentId,true);
}

function clickCancelOrUpdate(commentId,a){
    if(a){
        document.getElementById(`${commentId}comment-input`).style.display="none";
        document.getElementById(`${commentId}cancel-comment`).style.visibility="hidden";
        document.getElementById(`${commentId}delete-comment`).style.visibility="visible";
    }
    else{
        document.getElementById(`${commentId}comment-input`).style.display="block";
        document.getElementById(`${commentId}cancel-comment`).style.visibility="visible";
        document.getElementById(`${commentId}delete-comment`).style.visibility="hidden";
    }
}

function clickXOrOut(){
    document.getElementById("modal-comments").innerHTML=``;
    document.querySelector(".modal-overlay").style.visibility="hidden";
}

function checkDeletObject(){
    const delete_yes= prompt(`정말 삭제 하겠습니까? 원한다면 "네" 를 입력해 주세요 `);
    if(delete_yes!="네"){
        alert("삭제하지 않겠습니다.")
        return false;
    }
    return true;
}

const closeBtntTwo = modaltwo.querySelector(".close-areatwo")
closeBtntTwo.addEventListener("click", e => {
    unvisibleMakeCard();
})

const make_card_btn= document.querySelector(".make-card-button")
make_card_btn.addEventListener("click",e=>{
    unvisibleMakeCard();
    const columnId= document.querySelector(".modal-windowtwo").id;
    
    fetch(`${main_sever}column/${columnId}/cards`,{
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
    body:JSON.stringify({
        name:document.getElementById("make-card-title").value,
        description:document.getElementById("make-card-content").value,
        color:document.getElementById("make-card-color").value,
        deadline:document.getElementById("make-card-date").value,
        assignedUserId:Number(document.getElementById("make-card-assignedUser").value),
    }),
})
.then(res=>{
    location.reload();
    return;
})
})

function unvisibleMakeCard(){
    modaltwo.style.display = "none"
}