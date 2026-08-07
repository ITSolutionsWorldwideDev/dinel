import React from "react";
import SignupForm from "./SignUpForm";
import FormSideImage from "../../ui/FormSideImage";
import { Form } from "lucide-react";

const SignUp = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SignupForm />
      <FormSideImage
        image="/d28660e78278ab38b2bf73fd7d7c3d6703e2b540.jpg"
        heading="Join Today"
        desc="Create your account and discover amazing career opportunities"
      />
    </div>
  );
};

export default SignUp;
