import { useEffect, useState } from "react";

const Timeline = () => {
  const processes = [
    `We will provide you with a shipping label and once we have received
            your device, we will promptly notify you. We understand the
            importance of timely communication and reliable service, and we
            strive to keep you informed every step of the way.`,
    `When a device is brought in for repair, our technicians conduct a
            thorough inspection to diagnose the issue and identify any
            additional problems that may need to be addressed. Our inspections
            include checking for physical damage, testing all components and
            circuits, and reviewing the device's software and settings.`,
    `Our goal is to provide a comprehensive and accurate assessment of
            the device's condition, so that we can provide our customers with a
            clear understanding of the repair process and a reliable estimate of
            the cost and timeline for the repair.`,
    `After a repair is complete, we conduct a rigorous quality assurance
            process to ensure that the device is functioning properly and meets
            our high standards for performance and reliability. We test all
            components and functions of the device, including hardware,
            software, and connectivity, to verify that everything is working as
            intended.`,
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -200px 0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("slide-right");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const blocks = document.querySelectorAll(".tl-block");
    blocks.forEach((block) => {
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="timeline" className="py-20 flex flex-col px-8">
      <div className="text-slate-100 text-5xl font-ubuntu mb-20 md:mx-auto">
        REPAIR PROCESS
      </div>

      <div className="flex flex-col md:items-center">
        {processes.map((process) => {
          return (
            <div className=" border-l-4 border-slate-200 tl-blocks md:w-[35rem]">
              <div className=" ml-10 mt-6 mb-64 text-slate-100 bg-slate-800 opacity-0 rounded-lg p-5 tl-block ">
                {process}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
