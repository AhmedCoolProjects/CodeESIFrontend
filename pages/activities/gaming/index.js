import Head from "next/head";
import NoProjects from "@comp/cards/NoProjects";

function Index() {
  return (
    <div>
      <Head>
        <title>CODE ESI | Gaming</title>
      </Head>
      <div className="w-full py-5">
        <h1 className="text-center font-semibold text-3xl opacity-90">
          CODE Gaming
        </h1>
        <div className="w-full flex flex-col items-center justify-center min-h-[400px] h-full">
          <NoProjects msg="No Gaming Yet!" />
        </div>
      </div>
    </div>
  );
}

export default Index;
