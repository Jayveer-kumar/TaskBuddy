const AddBtn=document.getElementById("Add");
const SeeBtn=document.getElementById("See");
const PendingBtn=document.getElementById("Pending");
const CompleteBtn=document.getElementById("Complete");
const closeBtn= document.querySelector(".closeIcon");
const submitBtn=document.querySelector("#submit");

let TaskContainer=document.querySelector(".TaskContainer");
const formContainer = document.querySelector(".seeContainer");
// Add Button Functainality
AddBtn.addEventListener("click", () => {
    if (formContainer.classList.contains("show")) {
        // If visible, remove the class and hide after animation
        formContainer.classList.remove("show");
        setTimeout(() => {
            formContainer.style.display = "none";
        }, 500); // Match the transition duration in CSS
    } else {
        // If hidden, show the form
        formContainer.style.display = "block";
        setTimeout(() => {
            formContainer.classList.add("show");
        }, 10); // Small delay to trigger CSS transition
    }
});

closeBtn.addEventListener("click",()=>{
    if (formContainer.classList.contains("show")) {
        // If visible, remove the class and hide after animation
        formContainer.classList.remove("show");
        setTimeout(() => {
            formContainer.style.display = "none";
        }, 500); // Match the transition duration in CSS
    } else {
        // If hidden, show the form
        formContainer.style.display = "block";
        setTimeout(() => {
            formContainer.classList.add("show");
        }, 10); // Small delay to trigger CSS transition
    }
});


document.addEventListener("DOMContentLoaded",()=>{
    const toggelbtnDiv=document.querySelector(".toggelDiv");
    const linkContainer=document.querySelector(".linkContainer");
    const allLinksContainer=document.querySelector("#allLinks");
    const showNavbar=document.querySelector(".showNavbar");
    const toggelButtonContent=document.getElementById("toggelButtonContent");

    toggelbtnDiv.addEventListener("click", () => {
        console.log("Toggle Button Activated:");
        if (showNavbar.classList.contains("Show")) {
            showNavbar.classList.remove("Show");
            setTimeout(() => {
                // Move each child of allLinksContainer into showNavbar
                while (allLinksContainer.firstChild) {
                    showNavbar.appendChild(allLinksContainer.firstChild);
                }
                toggelButtonContent.textContent = "Back";
                showNavbar.classList.add("visiable");
            }, 30);
        } else {
            showNavbar.classList.remove("visiable");
            setTimeout(() => {
                toggelButtonContent.textContent = "More";
                showNavbar.classList.add("Show");
    
                // Move links back into allLinksContainer
                while (showNavbar.firstChild) {
                    allLinksContainer.appendChild(showNavbar.firstChild);
                }
                linkContainer.appendChild(allLinksContainer);
            }, 1000);
        } 
});
    
   // Handel Resize

   window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
        // Move links back to the original container if screen size increases
        if (!linkContainer.contains(allLinksContainer)) {
            linkContainer.appendChild(allLinksContainer);
        }
    }
});

})


submitBtn.addEventListener("click",()=>{ 
    let userTaskContainer=document.createElement("div");
    userTaskContainer.classList.add("userTaskContainer");  // Here Now Ok 

    // Image Concept 
    const imageInput = document.getElementById("image"); // The file input element
    const file = imageInput.files[0]; // Get the selected file
    let userTaskImageContainer = document.createElement("div");
    let userTaskImage = document.createElement("img");
    if (file) {
        const reader = new FileReader(); // Create a FileReader to read the file

        reader.onload = function (event) {
            userTaskImageContainer.classList.add("userTaskImage");
            userTaskImage.src = event.target.result; // The base64 data URL of the image
            userTaskImageContainer.appendChild(userTaskImage);

            // Add image container to the parent
            userTaskContainer.insertBefore(userTaskImageContainer, userTaskContainer.firstChild);
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    } else {
        console.error("No file selected");
    }

    // Title Container 
    let titleContainer=document.createElement("div");
    titleContainer.classList.add("userTaskTitle");
    let usertitleHead=document.createElement("h6");
    usertitleHead.textContent="Title";
    let userTitle=document.createElement("span");
    userTitle.textContent=document.getElementById("TitleofTask").value.trim();
    usertitleHead.appendChild(userTitle);
    titleContainer.appendChild(usertitleHead);
    userTaskContainer.appendChild(titleContainer); // i thing First steps is complete .
    
    // console.log(document.getElementById("TitleofTask").value.trim().length);

    // Description Container
    let descriptionContainer=document.createElement("div");
    descriptionContainer.classList.add("userTaskDescription");
    let userDescriptionHead=document.createElement("h6");
    userDescriptionHead.textContent="Description";

    // Show Description Logic    
    let Descriptionlength=document.getElementById("DescriptionofTask").value.trim().length;
    if(Descriptionlength>30){
       let showDescription=document.createElement("div");
       showDescription.classList.add("showDescription");
       let showDescriptionSpan=document.createElement("span");
       showDescriptionSpan.textContent=document.getElementById("DescriptionofTask").value.trim();
       showDescription.appendChild(showDescriptionSpan);
       descriptionContainer.appendChild(userDescriptionHead);
       descriptionContainer.appendChild(showDescription);
       userTaskContainer.appendChild(descriptionContainer);
    }else{
        let descriptionSpan=document.createElement("span");
        descriptionSpan.textContent=document.getElementById("DescriptionofTask").value.trim();
        userDescriptionHead.appendChild(descriptionSpan);
        descriptionContainer.appendChild(userDescriptionHead);
        userTaskContainer.appendChild(descriptionContainer);
    }
    

    // Start Date 
    let dateContainer=document.createElement("div");
    dateContainer.classList.add("userTaskStartDate");
    let dateContainerHead=document.createElement("h6");
    dateContainerHead.textContent="Starting Date";
    let userDateContainer=document.createElement("span");
    userDateContainer.textContent=document.getElementById("startdate").value;
    dateContainerHead.appendChild(userDateContainer); 
    dateContainer.appendChild(dateContainerHead);
    userTaskContainer.appendChild(dateContainer); // Starting Date 


    // Deadline Container
    let deadlineContainer=document.createElement("div");
    deadlineContainer.classList.add("userTaskEndingDate");
    let userDeadlineHead=document.createElement("h6");
    userDeadlineHead.textContent="Ending Date";
    let userDeadline=document.createElement("span");
    userDeadline.textContent=document.getElementById("Deadline").value;
    userTaskContainer.dataset.startdate = document.getElementById("startdate").value;

    userDeadlineHead.appendChild(userDeadline);
    deadlineContainer.appendChild(userDeadlineHead);
    userTaskContainer.appendChild(deadlineContainer); // Deadline Container 

    // Priority Container
    let priorityContainer=document.createElement("div");
    priorityContainer.classList.add("userTaskPriority");
    let userPriorityHead=document.createElement("h6");
    userPriorityHead.textContent="Priority";
    let userPriority=document.createElement("span");
    userPriority.textContent=document.getElementById("priority").value;

    userTaskContainer.dataset.priority = document.getElementById("priority").value;

    getPriority(document.getElementById("priority").value);
    userPriorityHead.appendChild(userPriority);
    priorityContainer.appendChild(userPriorityHead);
    userTaskContainer.appendChild(priorityContainer); // Priority

    let categoryContainer=document.createElement("div");
    categoryContainer.classList.add("userTaskCategory");
    let userCategoryHead=document.createElement("h6");
    userCategoryHead.textContent="Category";
    let userCategory=document.createElement("span");    
    userCategory.textContent=document.getElementById("category").value;
    userTaskContainer.dataset.category = document.getElementById("category").value; 
    userCategoryHead.appendChild(userCategory);
    categoryContainer.appendChild(userCategoryHead);
    userTaskContainer.appendChild(categoryContainer);// Category

     // Now Clear Input Field 
     document.getElementById("TitleofTask").value='';
     document.getElementById("DescriptionofTask").value='';
     document.getElementById("startdate").value='';
     document.getElementById("Deadline").value='';
     document.getElementById("image").value='';
    setTimeout(() => {
        TaskContainer.appendChild(userTaskContainer);       
        increaseTaskCount(TaskContainer);
    }, 50);

    // Close Form Box

    if (formContainer.classList.contains("show")) {
        // If visible, remove the class and hide after animation
        formContainer.classList.remove("show");
        setTimeout(() => {
            formContainer.style.display = "none";
        }, 500); // Match the transition duration in CSS
    } else {
        // If hidden, show the form
        formContainer.style.display = "block";
        setTimeout(() => {
            formContainer.classList.add("show");
        }, 10); // Small delay to trigger CSS transition
    }    
});

let priorityArray=[];
function getPriority(priority){    
priorityArray.push(priority);
}

function increaseTaskCount( getNewTask){
    console.log("New Task Added : ");
    console.log(" I print Only Length : ",TaskContainer.childElementCount);   
    console.log("New Priority is : ",priorityArray);    
}



// Event Listeners

document.querySelector("select").addEventListener("change",(e)=>{
  if((e.target.value=="By Priority")){
    byPriority();
  } else if((e.target.value=="By Category")){
    byCategory();
  } else if ((e.target.value=="By Nearest Date")) {
     byNearestDate();
  } else{
   allTask();
  }
})

// By Priority

function allTask() {
    console.log("Show All Task Method Is Called : ");
    let allTaskNode = TaskContainer.childNodes;
    const childArray = Array.from(allTaskNode).filter(
        (node) => node.nodeType === Node.ELEMENT_NODE
    );

    TaskContainer.innerHTML = '';
    childArray.forEach((task) => {
        TaskContainer.appendChild(task);
    });
}


function byPriority(){
  console.log("By Priority Function Called : ");
  let allTaskNode=TaskContainer.childNodes;   
  const childArray = Array.from(allTaskNode).filter(
    (node) => node.nodeType === Node.ELEMENT_NODE
  );

  const priorityMap={
    "High":3,
    "Medium":2,
    "Low":1
};


childArray.sort((a,b)=>{
   const priorityA = priorityMap[a.dataset.priority || "Medium"];
   const priorityB = priorityMap[b.dataset.priority || "Medium"];

    console.log("Comparing:", a.dataset.priority, priorityA, "and", b.dataset.priority, priorityB);
    return priorityB-priorityA;
})

TaskContainer.innerHTML='';
childArray.forEach((task)=>{
    TaskContainer.appendChild(task);
})

console.log("Task Sorted by Priority : ");

}
function byCategory() {
    console.log("By Category Function Called : ");
    let allTaskNode = TaskContainer.childNodes;
    const childArray = Array.from(allTaskNode).filter(
        (node) => node.nodeType === Node.ELEMENT_NODE
    );

    childArray.sort((a, b) => {
        const categoryA = a.dataset.category || "";
        const categoryB = b.dataset.category || "";
        console.log("Comparing categories:", categoryA, "and", categoryB);
        return categoryA.localeCompare(categoryB);
    });

    TaskContainer.innerHTML = '';
    childArray.forEach((task) => {
        TaskContainer.appendChild(task);
    });

    console.log("Task Sorted by Category : ");
}


function byNearestDate() {
    console.log("By Nearest Date Function Called : ");
    let allTaskNode = TaskContainer.childNodes;
    const childArray = Array.from(allTaskNode).filter(
        (node) => node.nodeType === Node.ELEMENT_NODE
    );

    childArray.sort((a, b) => {
        const dateA = new Date(a.dataset.startdate);
        const dateB = new Date(b.dataset.startdate);
        console.log("Comparing dates:", dateA, "and", dateB);
        return dateA - dateB;
    });

    TaskContainer.innerHTML = '';
    childArray.forEach((task) => {
        TaskContainer.appendChild(task);
    });

    console.log("Task Sorted by Nearest Date : ");
}
