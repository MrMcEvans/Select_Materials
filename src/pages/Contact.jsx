import Form from "../components/Form";
import { useEffect } from 'react';


export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <h1>Contact Page</h1>
      <Form />
    </div>
  );
}
