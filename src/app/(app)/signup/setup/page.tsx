import SignupSetupForm from "../../features/signup/components/SignupSetupForm";

const currenciesData = [
  { value: "usd", label: "USD" },
  { value: "eur", label: "EUR" },
  { value: "gbp", label: "GBP" },
  { value: "jpy", label: "JPY" },
]; // await fetchCurrencies()...

export default function SignupSetupPage() {
  return <SignupSetupForm currencies={currenciesData} />;
}
