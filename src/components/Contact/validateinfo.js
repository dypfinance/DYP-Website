export default function validateInfo(values){
    let errors = {}

    if(!values.email){
        errors.email = "Email Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email Address is Invalid"
    }
    if(!values.subject.trim()){
        errors.subject = "Subject is Required"
    }
   
    if(!values.message.trim()){
        errors.message = "Message is Required"
    }
    // if(values.email !== "" && values.subject !== "" && values.message !== ""){
        // var reportdata = {email:values.email, subject:values.subject, message:values.message};
        // return axios.post(`${API}/contact`,reportdata)
        // .then(function (response) {
        //     console.log(response.data);
        //     if(response.data.api_status == 200){
        //         window.location.href = "#/Thanks";  
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // }); 
        // }
        
    return errors;
}   