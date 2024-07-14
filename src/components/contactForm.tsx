import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

interface ContactForm {
  [fullName: string]: string,
  [email: string]: string,
  [company: string]: string,
  [title: string]: string,
  [subject: string]: string,
  [message: string]: string,
}

export default function ContactForm() {
  const initialFormData: ContactForm = {
    fullName: '',
    email: '',
    company: '',
    title: '',
    subject: '',
    message: '',
  }
  const [formData, setFormData] = useState(initialFormData);
  const [displayMsg, setDisplayMsg] = useState(false);
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx1xNGAPy-wpPnaUERGkfXcvz5dPoYONMsIM78z6yLiznvGiAciUPdqpTtrF_XXBYzXfA/exec'
  
  const onFormChange = (e: any) => {
    let formDataTemp = {...formData};
    formDataTemp[e.target.name] = e.target.value;
    setFormData(formDataTemp);

    const {fullName, email, company, title, subject, message} = formData;
    const status = (fullName && email && company && title && subject && message) === '';
    setDisabledSubmit(status)
  }

  const handleSubmit = async (e: any) => {
    console.log('handleSubmit', formData);
    fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      redirect: 'follow',
      body: JSON.stringify(formData)
    }).then(response => {
      console.log('Success:', response);
      setDisplayMsg(true);
    }).catch(error => console.error('Error:', error));
    setFormData(initialFormData);
  };
  
  return (
    <>
    <Card
      className=" bg-white/35 m-2 flex p-10 flex-col justify-center mb-16"
    >
      <CardContent className="mb-0">
        <CardDescription className="text-xl line-clamp-3">
          Get in touch
        </CardDescription>
        {displayMsg && <p>We have received your message request and will be in touch shortly!</p>}
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:account-circle" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input 
              type="text"
              placeholder="Full Name"
              name="fullName"
              className="w-full outline-none px-2 bg-white "
              // onChange={(e: any) => setFormData({...formData, fullName: e.target.value})}
              onChange={onFormChange}
            /> 
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:alternate-email-rounded" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input 
              type="text"
              placeholder="Email"
              name="email"
              className="w-full outline-none px-2 bg-white "
              // onChange={(e: any) => setFormData({...formData, email: e.target.value})}
              onChange={onFormChange}
/>  
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:business-center-rounded" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input 
              type="text"
              placeholder="Company"
              name="company"
              className="w-full outline-none px-2 bg-white "
              // onChange={(e: any) => setFormData({...formData, company: e.target.value})}
              onChange={onFormChange}
/>  
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:badge" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input 
              type="text"
              placeholder="Title"
              name="title"
              className="w-full outline-none px-2 bg-white "
              // onChange={(e: any) => setFormData({...formData, title: e.target.value})}
              onChange={onFormChange}
            />  
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:lightbulb" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input 
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full outline-none px-2 bg-white "
              // onChange={(e: any) => setFormData({...formData, subject: e.target.value})}
              onChange={onFormChange}
            />  
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <textarea
              placeholder="Message"
              name="message"
              className="w-full outline-none px-2 bg-white "
              rows={10}
              // onChange={(e: any) => setFormData({...formData, message: e.target.value})}
              onChange={onFormChange}
            />  
          </div>
          <Button className="rounded-none px-4  hover:bg-white/65 transition-all duration-300 ease-in-out" type="submit" onClick={handleSubmit} disabled={disabledSubmit}>
            Submit
          </Button>
      </CardContent>
    </Card>
    </>
  );
}