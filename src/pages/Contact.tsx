import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "emailjs-com";


type FormData = {
  senderName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setSubmitted(true);
    emailjs
      .send(
        "service_sx7nmit", // Replace with EmailJS service ID
        "template_fecmel8", // Replace with EmailJS template ID
        {...data,name:"Ashok Kumar",subject:"Connecting for hiring!!!"},
        "qGUfVSMaAeX0F4YmS" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent!");
        },
        (error) => {
          console.error("Email sending failed", error);
          alert("Failed to send message.");
        }
      );
  };



  return (
    <div id="contact" className=" flex justify-center p-4">
      <div className="w-full max-w-6xl  bg-[#132B50] text-white rounded-2xl py-6">
        {/* Left Column - Contact Info */}
        <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col justify-center space-y-6 p-6 ">
            <p className="text-gray-300">Feel free to reach out to me for any inquiries or collaborations.</p>
            <div>
              <p className="text-lg font-semibold">Email:</p>
              <p className="text-gray-300">example@email.com</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Phone:</p>
              <p className="text-gray-300">+123 456 7890</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-6">
            {/* <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2> */}
            {submitted ? (<div className="flex flex-col items-center justify-center">
            <p className="text-9xl">✉️</p>
              <p className="text-green-400 text-center font-extrabold text-5xl">Thank you! I'll get back to you soon.</p>

              {/* <img src="https://i.pinimg.com/originals/2f/8b/78/2f8b78400df23ce23160c0e5f5cc9c6e.gif"/> */}
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded bg-[#1C3A67] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("senderName", { required: "Name is required" })}
                  />
                  {errors.senderName && <p className="text-red-400 text-sm mt-1">{errors.senderName.message}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded bg-[#1C3A67] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border rounded bg-[#1C3A67] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded transition">Send Message</button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
