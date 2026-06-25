let Rock=document.querySelector("#rock");
let Paper=document.querySelector("#paper"); // they store all the images now we can directly show them in your_choice div as any of them is clicked.
let Scissors=document.querySelector("#scissors");
let your_choice_div=document.querySelector("#your_choice"); // your_choice div;
let com_choice_div=document.querySelector("#com_choice"); // com_choice div;


let arr=[Rock,Paper,Scissors]; // as we will randomly generate a com_choice by generating a random index from 0-2 and com will choose the move in accordance to the index generated.
// function for generating random number between 0 to 2.
function random_generate(){
    return Math.floor(Math.random()*(2-0+1))+0;
}

let arr2=["Rock","Paper","Scissors"]; // will be used by compare function to find out the winner.
let your_choice_p=document.querySelector("#your_choice_para");
let com_choice_p=document.querySelector("#com_choice_para"); 


Rock.addEventListener("click",()=>{
    // your_choice_div.innerHTML="";
    // let new_img=document.createElement("img");
    // new_img=Rock.cloneNode(false); // false makes it shallow copy instead of deep.
    // your_choice_div.append(new_img);
    // your_choice_p.innerText="Your Choice";
    
    // let num=random_generate();
    // let com_move=arr[num]; // random choice of computer.
    // com_choice_p.innerText="Computer Choice";
    // let new_img_com=document.createElement("img");
    // new_img_com=com_move.cloneNode();
    // com_choice_div.innerHTML="";
    // com_choice_div.append(new_img_com);
    // Evaluation("Rock",arr2[num]); // passed 
    playGame("Rock",Rock); // passed the choosen move as string and its Node through which we will get image using cloneNode().
})
Paper.addEventListener("click",()=>{
    // your_choice_div.innerHTML="";
    // let new_img=document.createElement("img");
    // new_img=Paper.cloneNode(false); // false makes it shallow copy instead of deep.
    // your_choice_div.append(new_img);
    // your_choice_p.innerText="Your Choice";
    
    // let num=random_generate();
    // let com_move=arr[num]; // random choice of computer.
    // com_choice_p.innerText="Computer Choice";
    // let new_img_com=document.createElement("img");
    // new_img_com=com_move.cloneNode();
    // com_choice_div.innerHTML="";
    // com_choice_div.append(new_img_com);
    // Evaluation("Paper",arr2[num]);
    playGame("Paper",Paper); // passed the choosen move as string and its Node through which we will get image using cloneNode().
})
Scissors.addEventListener("click",()=>{
    // your_choice_div.innerHTML="";
    // let new_img=document.createElement("img");
    // new_img=Scissors.cloneNode(false);// false makes it shallow copy instead of deep.
    // your_choice_div.append(new_img);
    // your_choice_p.innerText="Your Choice";
    
    // let num=random_generate();
    // let com_move=arr[num]; // random choice of computer.
    // com_choice_p.innerText="Computer Choice";
    // let new_img_com=document.createElement("img");
    // new_img_com=com_move.cloneNode();
    // com_choice_div.innerHTML="";
    // com_choice_div.append(new_img_com);
    // Evaluation("Scissors",arr2[num]);
    playGame("Scissors",Scissors); // passed the choosen move as string and its Node through which we will get image using cloneNode().
})
function playGame(move_choosed,Node){ // takes parameter as move choosen in string like->"Rock","Scissors", etc and Node i.e the image of the move like Rock,Scissors,etc , so we can use clone Node on it and copy that image directly and show it on your_choice.
    your_choice_div.innerHTML=""; // removing the previous image that was there.
    // now create a new img element that will store the image of the choosen move and we can insert in your_choice div , so we will directly make a clone out of Rock , Paper ,Scissors images made earlier as same pic we need to display in your move..
    let new_img=Node.cloneNode(false); // false make a shallow copy , now new_img is similar as the Node , but not same as it is a shallow copy.
    // now currently your_choice_div is empty so we can insert thind image in it.
    new_img.className="new_images";
    // Why did i changed the class --> because we used cloneNode() and  it copies all the attribute like class, id and apply them for new_img Node so all the effects (like making outline when hovered and cursor becoming pointer) will be applied to the cloned nodes .
    // And we dont want these properties to apply for clones nodes as we don't want that when we hover on the your choice and com choice images they get border or feels like they are clickable , we want them as just to show them.
    your_choice_div.append(new_img);
    your_choice_p.innerText="Your Move";
    // now randomly generating a com_choice by generating a random index between 0 and 2.
    let indx=random_generate();
    let com_move=arr[indx]; // so com_move stores the randomly generated Node out of Rock,Paper,Scissors.
    com_choice_div.innerHTML=""; // remove the previous choice.
    let new_img_com=com_move.cloneNode(false); // so we cloned the image of the move selected by computer from the previous image element made as Rock,Paper,Scissors.
    // false says that it is a shallow copy not a deep so any changes you make to this element like we  changed the class of this new_img_com so it will not affect the class of real Rock,Paper,Scissors. 
    new_img_com.className="new_images";
    // Why did i changed the class --> because we used cloneNode() and  it copies all the attribute like class, id and apply them for new_img Node so all the effects (like making outline when hovered and cursor becoming pointer) will be applied to the cloned nodes .
    // And we dont want these properties to apply for clones nodes as we don't want that when we hover on the your choice and com choice images they get border or feels like they are clickable , we want them as just to show them.
    com_choice_div.append(new_img_com);
    com_choice_p.innerText="Computer's Move";
    // now pass the moves choosed to Evaluation.
    Evaluation(move_choosed,arr2[indx]); // so both passed as string.
}

let winning={
    "Rock":"Scissors",
    "Paper":"Rock",    // all the winning pairs your_move:com_move , will be used to find who won.
    "Scissors":"Paper"
};
let res=document.querySelector("#result");
let your_score=document.querySelector("#your_score");
let com_score=document.querySelector("#com_score");
function Evaluation(your_move,com_move){ // to find which player won this particular move.
    if(your_move==com_move){
        res.innerText="It's a Draw!";
        res.style.color="grey";
    }
    else{
        let win=false;
        // code if you  would have used winning as array ->[["Paper","Rock"],["Scissors","Paper"],["Rock","Scissors"]].
        // Problem -> using loop again and again.
       
        // for(let i=0;i<winning.length;i++){
        //     if(winning[i]==curr_combination){ // it will not work as in js arrays are compared by refrence and value.
        //         win=true;
        //         break;
        //     } 
        //     if(winning[i][0]==curr_combination[0] && winning[i][1]==curr_combination[1]){
        //         win=true;
        //         break;
        //     }
        // }
        if(winning[your_move]==com_move){
            win=true;
        }
        if(win==true){
            res.innerText="Hurray! You Won";
            res.style.color="green";
            let num=Number(your_score.innerText)
            num++;
            your_score.innerText=num;
        }
        else{
            res.innerText="Sorry! You Lose";
            res.style.color="red";
            let num=Number(com_score.innerText)
            num++;
            com_score.innerText=num;
        }
    }
}
let reset=document.querySelector("#reset");
reset.addEventListener("click",(e)=>{
    res.innerText="";
    your_choice_div.innerHTML="";
    com_choice_div.innerHTML="";
    your_choice_p.innerText="";
    com_choice_p.innerText="";
    com_score.innerText=0;
    your_score.innerText=0;
})