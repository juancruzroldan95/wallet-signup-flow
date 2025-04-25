import SignupKycForm from "../../features/signup/components/SignupKycForm";

const countriesData = [
  { value: "canada", label: "Canada", isSupported: true },
  { value: "usa", label: "United States", isSupported: true },
  { value: "mex", label: "Mexico", isSupported: true },
  { value: "col", label: "Colombia", isSupported: true },
  { value: "uru", label: "Uruguay", isSupported: false },
  { value: "chi", label: "Chile", isSupported: true },
  { value: "arg", label: "Argentina", isSupported: true },
]; // Mock data - simulates a fetch from the backend - await fetchCountries()...

export default function SignupKycPage() {
  return <SignupKycForm countries={countriesData} />;
}
