import ButtonOutline from "../components/ButtonOutline";
import Header from "../components/Header";
import Slider from "../components/Spinner";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      {/* <Slider /> */}
      <div className="flex flex-col h-screen bg-[url(https://storage-prtl-co.imgix.net/endor/articles/2927/images/1615201708_c-shutterstock_1129318118.jpg)]">
        <Header />
        {/* Hero */}
        <div className="flex flex-col md:flex-row flex-1 text-white mt-auto]">
          <div className="md:w-[35rem] m-auto px-10">
            <div className=" text-5xl md:text-7xl font-ubuntu">
              REPAIR <br /> DONE <br />
              RIGHT.
            </div>
            <div className="text-lg md:text-xl mt-6">
              Bring to the table win-win survival strategies to ensure proactive
              domination.
            </div>
          </div>
          <ButtonOutline className="text-2xl m-auto">Learn More</ButtonOutline>
        </div>
      </div>

      <div className=" bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 px-10 py-20 md:py-4 flex flex-col md:flex-row justify-center text-zinc-900 gap-10 items-center">
        <h2 className="text-2xl font-bold">FREE ESTIMATE</h2>
        <p className="md:w-[35rem]">
          Precision Reworks provides a complimentary price estimation service
          for all repair works. Our skilled technicians will carefully assess
          your device, determine the required repairs, and furnish you with a
          detailed cost breakdown of the necessary procedures
        </p>
        <button className="rounded-2xl bg-orange-500 py-2 px-5 text-white hover:bg-orange-700 transition-colors ease-in duration-150 text-xl select-none">
          Get Started
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 px-10 md:px-[2rem] lg:px-[5%] mt-20 py-20 gap-32 md:gap-4 text-white">
        <div className="rounded-2xl flex flex-col text-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-green-400 h-32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="117.28 0 277.45 512"
          >
            <g>
              <path d="M341.601,0H170.397c-29.29,0-53.12,23.828-53.12,53.121v405.758c0,29.29,23.83,53.121,53.12,53.121h171.204 c29.292,0,53.121-23.832,53.121-53.117V53.121C394.722,23.828,370.893,0,341.601,0z M255.999,480.622 c-11.869,0-21.526-9.658-21.526-21.526c0-11.871,9.656-21.526,21.526-21.526c11.869,0,21.526,9.655,21.526,21.526 C277.525,470.964,267.868,480.622,255.999,480.622z M363.274,67.271v340.156h-214.55V67.271H363.274z"></path>
            </g>
          </svg>

          <div>
            <h2 className="font-bold text-2xl mx-auto mb-4">iPhone Repair</h2>
            <p>We restore devices as close to OEM quality as possible.</p>
            <button className="rounded-2xl bg-orange-500 mt-8 py-2 px-5 hover:bg-orange-700 transition-colors ease-in duration-150 text-lg mx-auto">
              Request a Quote
            </button>
          </div>
        </div>

        <div className="rounded-2xl flex flex-col text-center gap-3">
          <svg
            className="fill-green-400 h-32"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            viewBox="20 0 188 228"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <g>
                    <path d="M20,0v228h188V0H20z M200,220H28V8h172V220z"></path>
                    <path d="M76.532,145.118l-20.924,10.62c-1.912,0.648-3.707,1.578-5.342,2.77c-8.92,6.48-10.906,19.012-4.426,27.934 c3.908,5.379,10.016,8.238,16.209,8.238c4.074,0,8.188-1.238,11.73-3.812c1.637-1.192,3.076-2.609,4.281-4.226l31.504-31.604 l-0.05,0.822c1.482,0.09,2.978,0.14,4.486,0.14c38.598,0,70-31.402,70-70c0-38.598-31.402-70-70-70c-38.598,0-70,31.402-70,70 C44,110.168,56.34,132.323,76.532,145.118z M72.182,181.207c-0.15,0.152-0.289,0.312-0.414,0.488 c-0.746,1.035-1.654,1.945-2.692,2.699c-5.356,3.902-12.871,2.703-16.764-2.656c-3.889-5.352-2.697-12.871,2.658-16.762 c1.037-0.754,2.182-1.336,3.4-1.726c0.201-0.066,0.398-0.144,0.588-0.242l63.482-32.219L72.182,181.207z M114,24 c34.188,0,62,27.812,62,62c0,33.27-26.361,60.426-59.284,61.862l29.04-29.132c1.389-1.391,1.558-3.586,0.404-5.176 c-1.154-1.59-3.287-2.098-5.047-1.215l-56.104,28.476C64.647,130.02,52,109.035,52,86C52,51.812,79.812,24,114,24z"></path>
                    <path d="M114,112c14.336,0,26-11.664,26-26s-11.664-26-26-26S88,71.664,88,86S99.664,112,114,112z M114,68 c9.926,0,18,8.074,18,18s-8.074,18-18,18s-18-8.074-18-18S104.074,68,114,68z"></path>
                    <circle cx="188" cy="20" r="8"></circle>
                    <circle cx="188" cy="208" r="8"></circle>
                    <circle cx="40" cy="20" r="8"></circle>
                    <circle cx="40" cy="208" r="8"></circle>
                    <circle cx="60" cy="176" r="8"></circle>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <div>
            <h2 className="font-bold text-2xl mx-auto mb-4">Data Recovery</h2>
            <p>Your data is fully restored and securely delivered to you.</p>
            <button className="rounded-2xl bg-orange-500 mt-8 py-2 px-5 hover:bg-orange-700 transition-colors ease-in duration-150 text-lg mx-auto">
              Request a Quote
            </button>
          </div>
        </div>

        <div className="rounded-2xl flex flex-col text-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="83.099 57.613 187.987 222.748"
            className="fill-none stroke-green-400 h-32"
          >
            <g
              id="SVGRepo_iconCarrier"
              transform="matrix(10.854651, 0, 0, 12.337209, 45.54491, 27.294985)"
            >
              <path
                d="M10 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V13"
                strokeLinejoin="round"
                // style="fill-rule: nonzero; paint-order: fill; fill-opacity: 0; fill: none; stroke-linecap: round; stroke: rgb(0, 0, 0);"
                strokeWidth="0.9600000000000002"
              />
              <path
                d="M12 16V20"
                stroke-linejoin="round"
                // style="fill-rule: nonzero; paint-order: fill; fill-opacity: 0; fill: none; stroke-linecap: round; stroke: rgb(0, 0, 0);"
                stroke-width="0.9600000000000002"
              />
              <path
                d="M8 20H16"
                stroke-linejoin="round"
                // style="fill-rule: nonzero; paint-order: fill; fill-opacity: 0; fill: none; stroke-linecap: round; stroke: rgb(0, 0, 0);"
                stroke-width="0.9600000000000002"
              />
            </g>
            <g id="g-3" transform="matrix(1, 0, 0, 1, 353.574554, 86.327583)">
              <g id="Environment / Water_Drop">
                <path
                  id="Vector"
                  d="M -99.788 25.902 C -99.788 31.225 -101.764 36.332 -105.281 40.096 C -107.277 42.234 -109.678 43.84 -112.291 44.829 M -87.287 27.239 C -87.287 -1.367 -116.458 -23.617 -116.458 -23.617 C -116.458 -23.617 -145.629 -1.367 -145.629 27.239 C -145.629 35.669 -142.555 43.754 -137.085 49.715 C -131.614 55.676 -124.194 59.021 -116.457 59.021 C -108.721 59.021 -101.302 55.674 -95.831 49.713 C -90.36 43.752 -87.287 35.669 -87.287 27.239 Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style={{
                    fillOpacity: 0,
                    paintOrder: "fill",
                    fill: "none",
                    strokeWidth: "9px",
                  }}
                />
              </g>
            </g>
          </svg>

          <div>
            <h2 className="font-bold text-2xl mx-auto mb-4">Water Damage</h2>
            <p>
              Our experts work swiftly to remove rust and circuit corrosion.
            </p>
            <button className="rounded-2xl bg-orange-500 mt-8 py-2 px-5 hover:bg-orange-700 transition-colors ease-in duration-150 text-lg mx-auto">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
      <Timeline />
    </>
  );
}
