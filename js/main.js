const num =1;

function GetBoard(boardId/*:number*/){
    fetch(`${main_sever}board/${boardId}`,{
        method:"GET",
    })
    .then(res=>{
        return res.json();
    })
    .then(data=>{
       
            let boardParent/*:HTMLElement*/= document.getElementById("boardParent");
            let childboard/*:HTMLElement*/= document.createElement("div");
            
            boardParent?.appendChild(childboard);
            childboard.innerHTML=`
            <div id="oneBoardName" style="background-color:${data.data.backgroundColor};">${data.data.name}
            </div> 
            <div class="one_board" id="oneBoard">
            </div>
            `
            for(let i=0; i<data.data.columns.length;i++){
                let columnParent=document.getElementById("oneBoard");
                let columnCild =document.createElement("div");
                columnParent.appendChild(columnCild);
                columnCild.innerHTML=`
                <div class="one_column" ><div class="column-title" id="${i}Column" >
                <div onclick="clickColumnTitle(${i})">
                ${data.data.columns[i].name}
                </div>
                <div class="column-update-parent${i}" style="display:none">
                <input type="text" id="${i}Column-input"></input>
                <button id="update-${i}Column-button" onclick="updateCoulmnTitle(${i},${data.data.columns[i].id})">수정</button>
                <button id="cancel-${i}Column-button" onclick="cancelColumnTitle(${i})">취소</button>
                </div>
                </div>
                `
                
                data.data.columns[i].cards.map((el)=>{
                    let cardParent=document.getElementById(`${i}Column`);
                    let cardCild=document.createElement("div");
                    cardParent.appendChild(cardCild);
                    cardCild.innerHTML=`
                    <div onclick="cardModal(${el.id})" class="one_card" id="${el.id}Card" style="background-color:${el.color}" >${el.name} <br> 댓글:${el.comments.length}개</div>
                    `
                })

                let cardParent =document.getElementById(`${i}Column`);
                let addCardButton=document.createElement("div");
                cardParent.appendChild(addCardButton);
                addCardButton.innerHTML=`
                <div onclick="makeCard(${data.data.columns[i].id})"class="add_card_button" id="oneAddCardButton" style="text-align: left">+카드추가하기<div>
                `
            }
            
    })
    .catch((e=>{
        console.log(e);
    }))
}

function cardModal(cardId){
    fetch(`${main_sever}column/1/cards/${cardId}`,{
        method:"GET",
    })
    .then(res=>{
        return res.json();
    })
    .then(data=>{//카드 구현 부분
        data= data.data
        console.log(data);
        document.querySelector(".modal-overlay").style.visibility="visible";
        document.querySelector(".modal-window").style.backgroundColor=`${data.color}`
        document.querySelector(".modal-window").setAttribute("id",`${cardId}`);
        document.querySelector(".modal-window").setAttribute("data-assigneduserid",`${data.assignedUserId}`);
        document.querySelector(".modal-window").setAttribute("data-cardposition",`${data.orderNum}`);
        document.querySelector(".modal-window").setAttribute("data-movetocolumnid",`${data.columnId}`);
        document.getElementById("modal-title").innerHTML=`${data.name}`//카드 이름
        document.getElementById("modal-column-list").innerHTML=`${data.status}`
        document.getElementById("modal-content").innerHTML=`${data.describe}`
        document.getElementById("modal-deadline").innerHTML=`${data.deadline}`
        document.getElementById("modal-assignedUser").innerHTML=`${data.assignedUserName}`

        if(!data.comments.length){
            document.getElementById("modal-comments").innerHTML=``;
        }
        else{
            for(let i of data.comments){//댓글 구현 부분
                const comments_parent= document.getElementById("modal-comments");
                let commentsChild=document.createElement("div");
                comments_parent.appendChild(commentsChild);
                commentsChild.innerHTML=`<div class="comments-child" id="${i.id}comment" onclick="clickComment(${i.id})">${i.user.name}:${i.comment}
                </div>
                <input type="text" class="update-comment-input" id="${i.id}comment-input" style="display:none"></input>
                <button onclick="updateComment(${i.id})" class="update-comment-button" id="${i.id}update-comment">수정</button>
                <button onclick="deleteComment(${i.id})" class="delete-comment-button" id="${i.id}delete-comment">삭제</button>
                <button onclick="cancelComment(${i.id})" class="cancel-comment-button" id="${i.id}cancel-comment" style="visibility:hidden">취소</button>
                `
            }
        }
        
    })
    .catch((e=>{
        console.log(e);
    }))
}



GetBoard(num);

