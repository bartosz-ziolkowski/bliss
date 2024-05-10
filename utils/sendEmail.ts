import { FormData } from "@/components/layout/Footer";
import toast from "react-hot-toast";

const sendEmail = async (data: FormData) => {
  try {
    const apiEndpoint = "/api/email";
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Email sent");
    } else {
      throw new Error("Failed to send email");
    }
  } catch (err) {
    toast.error("Try again");
  }
};

export default sendEmail;
