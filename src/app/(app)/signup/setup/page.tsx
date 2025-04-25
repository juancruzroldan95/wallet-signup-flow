import SignupSetupForm from "../../features/signup/components/SignupSetupForm";

export default function SignupSetupPage() {
  const currenciesData = [
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "gbp", label: "GBP" },
    { value: "jpy", label: "JPY" },
  ]; // await fetchCurrencies()...

  return <SignupSetupForm currencies={currenciesData} />;
}
