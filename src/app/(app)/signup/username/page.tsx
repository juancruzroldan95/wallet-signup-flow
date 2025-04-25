import SignupUsernameForm from "../../features/signup/components/SignupUsernameForm";

const registeredEmailsData = ["alreadytaken@gmail.com"]; // await fetchRegisteredEmails()...

export default function SignupUsernamePage() {
  return <SignupUsernameForm registeredEmails={registeredEmailsData} />;
}
