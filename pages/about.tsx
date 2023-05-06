import { NextPage } from "next";
import Header from "../components/Header";
import Head from "next/head";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="flex flex-col bg-fixed min-h-screen bg-[url(https://storage-prtl-co.imgix.net/endor/articles/2927/images/1615201708_c-shutterstock_1129318118.jpg)]">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 border-2 rounded-lg bg-slate-600 bg-opacity-80 border-slate-400 mx-8 max-w-[60rem] md:mx-auto my-10">
          <div className="flex flex-col items-center p-8  m-[-2px] bg-slate-800 rounded-lg shadow-md">
            <img className="rounded-full h-60 w-60" src="/images/jordan.jpg" />
            <div className="mt-4 text-3xl font-ubuntu">Jordan Minott</div>
            <div className="text-xl text-slate-300">Owner</div>
            <div className="flex flex-row gap-8 mt-10">
              <div className="flex flex-col items-center">
                <img className="rounded-full w-32" src="/images/jeff.jpg" />
                <div className="text-xl">Jeff Garret</div>
                <div className="text-sm text-slate-300">Technician</div>
              </div>
              <div className="flex flex-col items-center">
                <img className="rounded-full w-32" src="/images/aaron.jpg" />
                <div className="text-xl">Aaron Ng</div>
                <div className="text-sm text-slate-300">Technician</div>
              </div>
            </div>
          </div>
          <div className=" indent-8 overflow-hidden rounded-lg p-8 ">
            <p>
              We are a team of highly skilled technicians dedicated to providing
              fast and reliable electronic repair services to our valued
              customers. With years of experience in the industry, we have
              developed a reputation for delivering top-notch service and
              exceptional quality repairs.
            </p>
            <br />
            <p>
              At Precision Reworks, we understand how frustrating it can be when
              your electronic devices malfunction. That's why we strive to
              provide prompt and efficient service to get your devices back up
              and running as quickly as possible. We use only the best quality
              parts and cutting-edge technology to ensure that your device is
              repaired to the highest standards.
            </p>
            <br />
            <p>
              Our team is comprised of certified technicians who are experts in
              diagnosing and repairing a wide range of electronic devices,
              including smartphones, laptops, tablets, and more. We pride
              ourselves on our attention to detail and our commitment to
              providing the best customer service possible. Thank you for
              choosing Precision Reworks for your electronic repair needs. We
              look forward to serving you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
