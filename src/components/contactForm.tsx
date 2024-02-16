import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

export default function ContactForm() {
  const initialFormData = {
    fullName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  }
  const [formData, setFormData] = useState(initialFormData);
  const [displayMsg, setDisplayMsg] = useState(false);
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyz32cXnYs3BYginphfpelYZXr6Dy5HD1MKrS4wkq8ADABr6hnT29BY405jTET2j4wk_w/exec'
  
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
        {displayMsg && <p>Success Message</p>}
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:account-circle" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              className="w-full outline-none px-2 bg-white "
              onChange={(e: any) => setFormData({...formData, fullName: e.target.value})}
            /> 
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:alternate-email-rounded" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="w-full outline-none px-2 bg-white "
              onChange={(e: any) => setFormData({...formData, email: e.target.value})}
            />  
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:business-center-rounded" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input
              type="text"
              placeholder="Company"
              name="company"
              className="w-full outline-none px-2 bg-white "
              onChange={(e: any) => setFormData({...formData, company: e.target.value})}
            />  
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <Icon icon="material-symbols-light:lightbulb" className="text-secondary-foreground cursor-pointer text-2xl" />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full outline-none px-2 bg-white "
              onChange={(e: any) => setFormData({...formData, subject: e.target.value})}
            />  
          </div>
          <div className="bg-white p-4 rounded-md flex items-center mt-5 mb-5">
            <textarea
              placeholder="Message"
              name="message"
              className="w-full outline-none px-2 bg-white "
              rows={10}
              onChange={(e: any) => setFormData({...formData, message: e.target.value})}
            />  
          </div>
          <Button className="rounded-none px-4  hover:bg-white/65 transition-all duration-300 ease-in-out" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
      </CardContent>
    </Card>
    </>
  );
}