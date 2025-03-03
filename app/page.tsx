import Link from "next/link";
import LoginField from "./components/LoginField";

export default function Home() {
  return (
    <main><h1>Liste anzeigen für:</h1>
      <LoginField></LoginField>
    </main>
  );
}
