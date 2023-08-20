function clickCard(target){
    //console.log('works');
    const getPrice = document.getElementById('get-price');
    const itemName = target.parentNode.childNodes[1].innerText;
    const li =document.createElement("li");
    li.innerText =itemName;
    console.log(li.innerText);

}