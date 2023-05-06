import { NextPage } from "next";
import Header from "../components/Header";
import ButtonOutline from "../components/ButtonOutline";
import Head from "next/head";

interface Props {}

const Services: NextPage<Props> = ({}) => {
  const services = [
    {
      title: "Free Diagnostics",
      description:
        "Our team will assess your device to identify the issue and provide you with a diagnosis free of charge. We believe in transparency and want our customers to be informed about the repairs needed.",
      image:
        "https://images.squarespace-cdn.com/content/v1/54d407c1e4b0f3d6934d7586/1634145227174-GG7TA6FDUQLFVOD1OMHN/10+benefits+of+computer+repair.jpg",
    },
    {
      title: "Board Repair",
      description:
        "We specialize in repairing and replacing components on printed circuit boards (PCBs) for a variety of devices, including smartphones, tablets, laptops, and gaming consoles.",
      image:
        "https://sprtech.com.my/wp-content/uploads/2022/04/SPR-SmartPhone-Repair-2-e1655959562209.jpg",
    },
    {
      title: "Data Recovery",
      description:
        " If you've lost important data due to a hardware failure or software issue, we can help. Our experts can recover lost data from damaged or corrupted storage devices, including hard drives, solid-state drives (SSDs), and memory cards.",
      image:
        "https://cdn.windowsreport.com/wp-content/uploads/2019/11/HDD-Disk.jpg",
    },
    {
      title: "Water Damage",
      description:
        "Water damage is a common issue with electronics, but it doesn't have to mean the end of your device. Our team has the tools and expertise to repair water-damaged electronics and restore them to working condition.",
      image:
        "https://t4.ftcdn.net/jpg/02/91/22/03/360_F_291220312_Vhpjv1beMHB6jAhk4yWVjrxrue2ourCG.jpg",
    },
    {
      title: "Screen Repair",
      description:
        "Cracked or damaged screens can make your device difficult or impossible to use. We offer screen repair services for a range of devices, including smartphones, tablets, and laptops.",
      image:
        "https://www.ptc.net.au/wp-content/uploads/2021/06/iStock-933640670-1.jpg",
    },
    {
      title: "Charging Port Replacement",
      description:
        "If your device is no longer charging properly, it may be due to a faulty charging port. We can replace charging ports on a variety of devices, ensuring that your device stays powered up.",
      image:
        "https://www.rockitrepairs.com/wp-content/uploads/s3chargingportrepairupclose.jpg",
    },
    {
      title: "Battery Replacement",
      description:
        "If your device's battery is no longer holding a charge or is draining quickly, we can replace it with a new one. This can extend the life of your device and save you money in the long run.",
      image:
        "https://img.grouponcdn.com/deal/2imgYcxSo8B8TU1uVuzPHzcRkvMK/2i-1500x900/v1/t600x362.jpg",
    },
    {
      title: "Console Repair",
      description:
        "We offer repair services for a variety of gaming consoles, including PlayStation, Xbox, and Nintendo. Whether your console is overheating, not turning on, or experiencing other issues, we can diagnose and repair the problem.",
      image:
        "https://images.cellphonerepair.com/denham-springs-la/wp-content/uploads/sites/605/2019/12/game-console-repair-denham-springs-la.jpg",
    },
    {
      title: "Small Electronics Repair",
      description:
        "We also offer repair services for a range of small electronics, including headphones, cameras, and drones. Our team can diagnose and repair issues with these devices, saving you the cost of buying a new one.",
      image:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2015/05/ifixit-repair-guide-apple-watch-02.png?w=498&h=372&quality=82&strip=all&ssl=1",
    },
  ];

  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Header />
      <div className="flex flex-col md:mx-auto md:min-w-[50rem] md:max-w-[70rem] md:gap-20 my-20">
        {services.map((service, index) => {
          let align = "";
          if (index % 2 == 0) {
            align = "md:ml-auto  md:before:-right-10 ";
          } else {
            align = "md:before:-left-10 bg-slate-800";
          }

          return (
            <div
              className={`flex flex-col md:bg-slate-800 md:rounded-lg md:max-w-[30rem] relative md:before:h-full md:before:absolute md:before:top-0 md:before:border md:before:border-slate-500  ${align}`}
            >
              <img className=" rounded-t-lg object-cover" src={service.image} />
              <div className="p-10 md:p-8 ">
                <div className="text-3xl font-ubuntu mb-4">{service.title}</div>
                <div>{service.description}</div>
                <ButtonOutline className="ml-auto mt-8">
                  Request A Quote
                </ButtonOutline>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
