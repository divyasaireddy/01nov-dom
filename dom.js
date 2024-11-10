const image=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPynl0Q7_LxT06lkSLaOXs551mp7-owzB1w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbISPlbu2bk8HyJqM1QQ4XiUMRUfj_WpRRGA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvateXXXgUugV21tR8zLiPYoeX7Nn7UW0jA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKth1ccgTNEpKB6mhkW0N_Q9uBMS9Fvti-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4SLJzE2gvhbIP3AnkrLRqtYyiZOQIr1moA&s"
]
let mainContainer=document.getElementById("mainContainer")
mainContainer.style.display="flex"
mainContainer.style.flexWrap="wrap"
mainContainer.style.gap="10px"



for(i=0;i< image.length;i++){
let divContainer=document.createElement("div");
divContainer.style.display="flex"
divContainer.style.flexDirection="column"
divContainer.style.alignItems="center"
divContainer.style.width="300px"
divContainer.style.height="400px"
divContainer.style.borderRadius="20px"
divContainer.style.border="2px solid black"
divContainer.style.padding="20px"


let pTag=document.createElement("p")
pTag.textContent="This is an image"
pTag.style.textAlign="center"


let imgTag=document.createElement("img");
imgTag.src=image[i];
imgTag.style.width="100%"
imgTag.style.height="80%"
imgTag.style.padding="10px";
imgTag.style.borderRadius="30px"



let btnTag=document.createElement("button");
btnTag.textContent="AddtoCart"
btnTag.style.borderRadius="20px"
btnTag.style.border="none"
btnTag.style.padding="10px"
btnTag.style.display="block"
btnTag.style.margin="auto"
btnTag.style.marginBottom="10px"
btnTag.style.backgroundColor="blue"
btnTag.style.color="white"

divContainer.append(pTag,imgTag,btnTag);

mainContainer.appendChild(divContainer)

}
