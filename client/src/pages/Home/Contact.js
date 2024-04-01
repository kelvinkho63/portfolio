import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center">
        <div className="flex flex-col">
          <p className="text-black text-md">{"{"}</p>
          {Object.keys(contact).map((key) => (
            key !== '_id' &&
            <p className="ml-5">
              <span className="text-black text-md">{key}</span> :{" "}
              <span className="text-black text-md">{contact[key]}</span>
            </p>
          ))}
          <p className="text-black text-md">{"}"}</p>
        </div>
        <div className="h-[300px]">
        <lottie-player
          src="https://lottie.host/97a740e5-9ed5-4d3f-9ff5-b8c5e6d536ea/tDkU74nX6Z.json"
          background="transparent"
          speed="1"
          mode="normal"
          autoplay
        ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
