import Form from "../components/Form";
export default function Contact() {
  return (
    <div className="">
      <h1>Contact Page</h1>
      <Form />
      <div>
        <h2>Select Materials</h2>
        <a href="tel:336.269.8738" alt="Phone number">
          Phone
        </a>
        <a href="mailto:andrewmcevans1@gmail.com" alt="email address">
          Email
        </a>
      </div>
    </div>
  );
}
