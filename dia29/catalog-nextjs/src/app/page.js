import Counter from "@/components/Counter";
import Image from "next/image";

export default function Home() {

  // If is "use client" this two won't be displayed
  const user= process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  const public_user = process.env.NEXT_PUBLIC_USER;
  const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;
  return (
    <div className="items-center justify-center h-full flex flex-col">
      <p>
        User: {user} <br />
        Pass: {password} <br />
        Public User: {public_user} <br />
        Backend API: {BACKEND_API}
      </p>
      <Counter />
    </div>
  );
}
