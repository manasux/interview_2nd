import Head from "next/head";
import Left from "../components/HomePage/Left";
import Right from "../components/HomePage/Right";

//to center --> flex flex-col items-center justify-center min-h-screen py-2

export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>UI demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex' >
     
       <div className=" hidden md:block lg:h-screen lg:w-1/4 " style={{backgroundColor:'#17162a'}}>
       <Left/>
       </div>
       <div className=" h-screen w-3/4 md:w-1/2 lg:w-3/4" style={{background:'#151516'}}>
       <Right/>
       </div>
      </div>
    </div>
  );
}
