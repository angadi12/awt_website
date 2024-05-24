import React from "react";
import Image from "next/image";

import IdentityAccess from "../../../../public/Solutionasset/Services/IdentityAccess.png";
import Keymanagement from "../../../../public/Solutionasset/Services/Keymanagement.png";
import WebApplication from "../../../../public/Solutionasset/Services/WebApplication.png";
import Securityhub from "../../../../public/Solutionasset/Services/Securityhub.png";
import Shield from "../../../../public/Solutionasset/Services/Shield.png";
import Guardduty from "../../../../public/Solutionasset/Services/Guardduty.png";
import ARTIFACT from "../../../../public/Solutionasset/Services/ARTIFACT.png";
import CloudTrail from "../../../../public/Solutionasset/Services/CloudTrail.png";

const Cloudsolutions = () => {
  const carddata = [
    {
      icon: IdentityAccess,
      color: "#9747FF",
      titile: "Identity & Access Management",
      text: "Securely manage access to AWS services for enhanced security.",
    },
    {
      icon: Keymanagement,
      color: "#FF7143",
      titile: "Key Management Service",
      text: "Safeguard data with secure management of encryption keys.",
    },
    {
      icon: WebApplication,
      color: "#FFC700",
      titile: "Web Application Firewall",
      text: "Safeguard web applications by shielding them from potential exploits.",
    },
    {
      icon: Securityhub,
      color: "#1877F2",
      titile: "Security Hub",
      text: "Centralized monitoring for enhanced visibility into security posture.",
    },
    {
      icon: Shield,
      color: "#ED0000",
      titile: "Shield",
      text: "Protect applications with robust defense against DDoS attacks.",
    },
    {
      icon: Guardduty,
      color: "#309E3A",
      titile: "GuardDuty",
      text: "Detect and respond swiftly to potential security threats effectively.",
    },
    {
      icon: ARTIFACT,
      color: "#4D2A15",
      titile: "Artifact",
      text: " Access certifications & compliance reports for  assurance.",
    },
    {
      icon: CloudTrail,
      color: "#C837AB",
      titile: "CloudTrail",
      text: "Monitor AWS account activity meticulously to facilitate auditing.",
    },
  ];

  return (
    <section className="flex flex-col w-full  gap-8 md:py-8 lg:py-8 py-0">
      <div className="w-11/12 mx-auto">
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider">
          Our Graphic Design Services.
        </h6>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 justify-center w-11/12 mx-auto py-8 justify-items-center items-center gap-8">
        {carddata.map((value, index) => (
          <div
            key={index}
            className="ring-1 ring-gray-300 p-4 h-60 flex justify-center items-start gap-4 flex-col"
          >
            <div
              style={{ backgroundColor: value.color }}
              className="relative w-16 mb-4 h-16 flex justify-center items-center  rounded-full"
            >
              <Image className="w-10 h-10" src={value.icon} alt="icon" />
            </div>
            <h6 className="uppercase font-bold ">{value.titile}</h6>
            <p className="text-xs font-medium w-full">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cloudsolutions;
