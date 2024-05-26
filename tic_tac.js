
let game_info=document.querySelector(".game-info");
let boxes=document.querySelectorAll(".box");
let player_x=document.querySelector(".player-x");
let player_o=document.querySelector(".player-o");
let start_div=document.querySelector(".start-div");
let container=document.querySelector(".container");

let new_btn=document.querySelector(".new-btn");
let hr=document.querySelector(".line");


let current_player="";
let gamegrid;

let winposition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function gameInit()
{

    // current_player="X";
    start_div.classList.remove("hide");
    container.classList.remove("opacity");
    player_x.addEventListener("click",function()
    {
        current_player="X";
        game_info.textContent=`Player turn-${current_player}`;
        start_div.classList.add("hide");
        container.classList.add("opacity");

        boxes.forEach(function(box)
        {
            box.textContent="";
            // box.style.backgroundColor="";
            box.style.pointerEvents="all";
        });

    });

    player_o.addEventListener("click",function()
    {
        current_player="O";
        game_info.textContent=`Player turn-${current_player}`;
        start_div.classList.add("hide");
        container.classList.add("opacity");

        boxes.forEach(function(box)
        {
            box.textContent="";
            // box.style.backgroundColor="";
            box.style.pointerEvents="all";
        });

    })

   
    gamegrid=["","","","","","","","",""];
    new_btn.classList.remove("active");
    // hr.style.visibility="hidden";
    hr.classList="line";

}

gameInit();

function changeplayer()
{
    if(current_player=="X")
        {
            current_player="O";
        }
    else
    {
        current_player="X"
    }

    game_info.textContent=`Player turn-${current_player}`;
}

function checkwin()
{
    let ans="";
    winposition.forEach(function(position)
    {
        if(gamegrid[position[0]]!=="" && gamegrid[position[1]]!=="" && gamegrid[position[2]]!=="" && gamegrid[position[0]]===gamegrid[position[1]] && gamegrid[position[1]]==gamegrid[position[2]])
            {
                ans=current_player;

                game_info.textContent=`Player won-${current_player}`;

                    if(position[0]===0 && position[1]===1)
                        {
                            hr.classList.add("hractive0r");
                        }
                    else if(position[0]===3)
                        {
                            hr.classList.add("hractive3r");
                        }
                    else if(position[0]===6)
                        {
                            hr.classList.add("hractive6r");
                        }
                    else if(position[0]===0 && position[1]===3)
                        {
                            hr.classList.add("hractive0c");
                        }
                    else if(position[0]===1)
                        {
                            hr.classList.add("hractive1c");
                        }
                    else if(position[0]===2 && position[1]===5)
                        {
                            hr.classList.add("hractive2c");
                        }
                    else if(position[0]===0 && position[1]===4)
                        {
                            hr.classList.add("hractive0d");
                        }
                    else if(position[0]===2 && position[1]===4)
                        {
                            hr.classList.add("hractive2d"); 
                        }

                    new_btn.classList.add("active");
                    boxes.forEach(function(box)
                    {
                        box.style.pointerEvents = "none";
                    })
            }

    });

            let count=0;
            gamegrid.forEach(function(element)
            {
                if(element!=="")
                    {
                        count++;
                    }
            });

            if(count===9 && ans==="")
                {
                    game_info.textContent="Game Tied";
                    new_btn.classList.add("active");
                }


                // changeplayer();
            if(ans==="" && count!==9)
                {
                    changeplayer();
                }

}

boxes.forEach(function(box, index)
    {
        box.addEventListener("click",function()
         {
            box.textContent=current_player;
            gamegrid[index]=current_player;
            box.style.pointerEvents = "none";
            checkwin();
            // console.log(box.className);
            
         })
    })


new_btn.addEventListener("click",gameInit);