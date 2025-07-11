const formData = {
    email: "", 
    message: "", 
};
const form= document.querySelector(".feedback-form");
const STORAGE_KEY = 'feedback-form-state';

populateForm();

form.addEventListener("input", onFormInput);

form.addEventListener("submit", handleSubmit);


function onFormInput(event){
    const {name, value} = event.target;

    if (name) {
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
};

function populateForm() {
    const savedData=localStorage.getItem(STORAGE_KEY);

    if (savedData){
        const parsedData = JSON.parse(savedData)
        if (parsedData.email){
            form.elements.email.value = parsedData.email;
            formData.email = parsedData.email;
        };
        if (parsedData.message){
            form.elements.message.value = parsedData.message;
            formData.message = parsedData.message;
        }
    }
    
};

function handleSubmit(event){
    event.preventDefault();

    

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    
    if (email==='' || message===''){
    alert('All form fields must be filled in');
    return;
    };

    console.log(`Submitted data:`, {email, message} );


    localStorage.removeItem(STORAGE_KEY);
    form.reset();

    formData.email ='';
    formData.message='';
  
};