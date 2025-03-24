import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
      <>
        <div className="w-full h-[200px] bg-[url('../public/img/rec.png')] bg-center bg-cover drop-shadow-xl">
          <div className="w-full h-full bg-[url('../public/img/palms.png')] bg-center bg-cover">
            <h1 className="w-full h-full flex items-center justify-center font">Memory Box</h1>
          </div>
        </div>
        <Navbar></Navbar>
      </>
  );
}
