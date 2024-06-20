import Image from "next/image";
import Index1 from "../../components/toothzy/css/index"
import CrudComponent from "../../components/crud"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Index1 />
      <p className=" text-blue-300">hello</p>
    </main>
  );
}
