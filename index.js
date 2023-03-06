// let myLeads =`["Subuhi"]`;
let myLeads =[];
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)



// myLeads.push("shehvwar")
// console.log(typeof myLeads)
let inputEl = document.getElementById("input-el")
// console.log(inputEl)
const ulEl = document.getElementById("ul-el")
// console.log(ulEl)

// console.log(tabBtn)


const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(myLeads)
    render(myLeads);

})

// const tabs = [{url:"https://www.linkedin.com/feed/"}]
const tabBtn = document.getElementById("tab-btn")
tabBtn.addEventListener("click", function(){


    //gran the url of current tab
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
       
    //   });

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads)
        console.log(tabs)
    })
   
    // tabs.push(tabBtn.value)
    // tabBtn.value="";
    // localStorage.setItem("tabs", JSON.stringify(tabs));
    // console.log(tabs[0].url)
    // // console.log(tabs[0].url)
})

if(leadsFromLocalStorage)
{
   myLeads = leadsFromLocalStorage;
   render(myLeads);
}
 //localStorage.setIte m("myName","subuhiShehvwarJahan");
//  let name = localStorage.getItem("myName")
//  console.log(name)
 //localStorage.clear()
// let gettingVariable = localStorage.getItem(myName)
// console.log(gettingVariable)


function render(leads)
{
    let listItems = "";
    for(let i=0; i<leads.length;i++)
{
    listItems +=  `<li>
    <a href='${ leads[i]}' target='_blank'>
    ${ leads[i]}
     </a>
     </li>` 
   // console.log(myLeads[i])
    console.log(leads)
}
ulEl.innerHTML = listItems
}
const deleteBtn = document.getElementById("dlt-btn");
console.log(deleteBtn)
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})

