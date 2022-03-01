const games = [
    {
        // id:0,
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        // id:1,
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        // id:2,
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

// PlayStation URL:
// Switch URL:
//     Xbox URL:
let psurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png\n";
let swurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png\n";
let xburl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png\n";




function product(index){
    let item = games[index];
    let that = this;
    let html=`<p>name: ${item.name} <br> price: $ ${item.price}</p>`;

    let platimgurl="";
    if (item.platform === "playstation")
        platimgurl = psurl;
    else if (item.platform === "xbox")
        platimgurl = xburl;
    else if (item.platform === "switch")
        platimgurl = swurl;

    this.ele=document.createElement("div");

    this.platimg=document.createElement("img");
    this.platimg.src=platimgurl;
    this.platimg.style.height="30px";
    this.platimg.style.width="30px";
    this.platimg.style.display="block";
    this.platimg.style.textAlign = "right";
    this.ele.appendChild(this.platimg);


    this.pic=document.createElement("img");
    this.pic.src=item.img;
    this.ele.appendChild(this.pic);





    this.info=document.createElement("div");
    this.info.innerHTML=html;
    this.ele.appendChild(this.info);

    this.ele.addEventListener("click", function(){
        //var popUp = window.popUp(that.pic, that.info);
        var popUp = window.popUp(index);
    });

    this.ele.className="product " +item.platform;
    document.body.appendChild(this.ele);
}

//function popUp(pic, info) {
function popUp(index) {
    //console.log("smells");
    let item = games[index];
    let ele=document.createElement("div");
    let html=`<p>name: ${item.name} <br> price: ${item.price} <br> description: ${item.description}</p>`;

    let platcolor="";
    if (item.platform === "playstation")
        platcolor = "blue";
    else if (item.platform === "xbox")
        platcolor = "green";
    else if (item.platform === "switch")
        platcolor = "red";

    html += `<p style="color: ${platcolor}">platform: ${item.platform}</p>`;
    //these are the diagonal quotes next to the 1


    let pic=document.createElement("img");
    pic.src=item.img;

    ele.className="popUp";
    ele.style.display="block";

    document.body.appendChild(ele);
    ele.appendChild(pic);

    let info = document.createElement("p");
    info.innerHTML = html;

    ele.appendChild(info);



    // this line does something with the popUP, I think it calls the element

//    now hide the popUp - wiring up the event handler that will hide the pop up
    ele.addEventListener("click", function (){
        ele.style.display="none";
    });
}

for (let i = 0; i < games.length; i++){
    //let thisproduct = new product(games[i]);
    let thisproduct = new product(i);

}






















// let productEle = document.body.querySelector(".product");
//
// function writeitems(){
//     productEle.innerHTML="";
//     for (let i=0; i<games.length; i++){
//         elemaker(games[i])
//     }
// }


