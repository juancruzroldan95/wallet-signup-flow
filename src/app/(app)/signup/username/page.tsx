import SignupUsernameForm from "../../features/signup/components/SignupUsernameForm";

export default function SignupUsernamePage() {
  const registeredEmailsData = ["alreadytaken@gmail.com"]; // await fetchRegisteredEmails()...

  return <SignupUsernameForm registeredEmails={registeredEmailsData} />;
}
