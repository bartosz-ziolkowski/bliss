import { FormData } from "@/components/layout/Footer";
import toast from "react-hot-toast";

const sendEmail = (data: FormData) => {
  const apiEndpoint = "/api/email";
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
     toast.success("Email sent")
    })
    .catch((err) => {
     toast.error("Try again");
    });
};

export default sendEmail;
