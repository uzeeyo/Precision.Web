import { NextPage } from "next";
import DropDownMenu from "../components/DropDownMenu";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Head from "next/head";

interface Props {}

const Contact: NextPage<Props> = ({}) => {
  const damageTypes = [
    "Cracked Glass",
    "Water Damage",
    "Bad Battery",
    "Charge Issue",
    "Camera",
    "Sound/Microphone",
  ];

  const issueTypes = ["Device Malfunction", "Inquiry"];

  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 border-2 rounded-lg border-slate-500 mx-4 md:mx-auto max-w-[60rem] mb-4">
        <div className="flex flex-col border-2 rounded-lg border-slate-800 bg-slate-800 m-[-2px] overflow-hidden">
          <div className="p-8">
            <div className="flex flex-row items-center">
              <svg
                className="stroke-green-400 mr-2"
                height={"20px"}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="Communication / Phone">
                    <path
                      id="Vector"
                      d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </g>
              </svg>
              <div className="text-xl ">Phone</div>
            </div>
            <a href="tel:+15748890734">(574) 889-0734</a>
            <div className="flex flex-row items-center">
              <svg
                className="stroke-green-400 mr-2"
                viewBox="0 0 24 24"
                height={"20px"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></rect>
                </g>
              </svg>
              <div className="text-xl">Email</div>
            </div>
            <a href="mailto:service@precisionreworks.com">
              service@precisionreworks.com
            </a>
          </div>
          <iframe
            className="mt-auto h-[24rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.491202328719!2d-80.1936608494447!3d25.77426597930719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69e3d47a59b%3A0x38a85b8d7ae9ac04!2sMiami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sng!4v1620100462391!5m2!1sen!2sng&mode=dark"
            allowFullScreen={false}
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex flex-col p-4 ">
          <div className="mx-auto mb-8">
            <label htmlFor="issueType">Issue:</label>
            <DropDownMenu className="ml-4" options={issueTypes} />
          </div>

          <form>
            <ul className="flex flex-col">
              <TextInput
                id="name"
                placeholder="Name"
                className="mb-4"
              ></TextInput>

              <TextInput
                id="email"
                placeholder="E-Mail"
                className="mb-4"
              ></TextInput>
              <TextInput
                id="make"
                placeholder="Make"
                className="mb-4"
              ></TextInput>

              <TextInput
                id="model"
                placeholder="Model"
                className="mb-4"
              ></TextInput>

              <div className="flex flex-row items-top mb-2">
                <div>Damage Type</div>
                <DropDownMenu className="ml-auto" options={damageTypes} />
              </div>

              <h3>Details</h3>
              <textarea className=" max-w-[30rem] resize-none min-h-[15rem] bg-transparent focus:outline-none border-2 border-slate-500 focus:border-green-300 p-2 mt-2 rounded-lg"></textarea>
              <button className="px-5 py-2 bg-orange-500 rounded-xl mt-5 self-end">
                Submit
              </button>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
