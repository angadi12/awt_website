"use client";
import Commonheader from "@/components/Oursolutioncomponets/Commonheader";
import { Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const Page = () => {
  const [currentindex, setcurrentindex] = useState(0);

  const navitems = [
    "Terms of use",
    ` Cookies`,
    ` License`,
    ` Hyperlinking content`,
    ` iFrame`,
    `Content Liability`,
    `Reservation of Rights`,
    ` Removal of Links`,
    ` Disclaimer `,
  ];

  const Termsofuse = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">terms of use</h6>
          <p className="text-sm font-medium leading-7 text-justify">
            {`These terms and conditions outline the rules and regulations for the use of Angadi World Technologies Pvt Ltd's Website, located at www.angadiworldtech.com.
`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">{`By accessing this website we assume you accept these terms and conditions. Do not continue to use Angadi World Technologies if you do not agree to take all of the terms and conditions stated on this page.
`}</p>
          <p className="text-sm font-medium leading-7 text-justify">{`The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`}</p>
        </div>
      </section>
    );
  };

  const Cookies = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">Cookies</h6>
          <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
            <GoDotFill />
            {`We employ the use of cookies.`}
          </span>
          <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
            <GoDotFill />
            {`By accessing Angadi World Technologies, you agreed to use cookies in agreement with the Angadi World Technologies Pvt Ltd's Privacy Policy.
`}
          </span>
          <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
            <GoDotFill />
            {`Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.`}
          </span>
          <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
            <GoDotFill />
            {`Some of our affiliate/advertising partners may also use cookies.`}
          </span>
        </div>
      </section>
    );
  };

  const License = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">License</h6>
          <p className="text-sm font-medium leading-7 text-justify">{`Unless otherwise stated, Angadi World Technologies Pvt Ltd and/or its licensors own the intellectual property rights for all material on Angadi World Technologies. All intellectual property rights are reserved. You may access this from Angadi World Technologies for your own personal use subjected to restrictions set in these terms and conditions.`}</p>
          <div>
            <h6 className="text-sm font-bold uppercase">You must not:</h6>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              Republish material from Angadi World Technologies
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`Sell, rent or sub-license material from Angadi World Technologies
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`Reproduce, duplicate or copy material from Angadi World Technologies
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`Redistribute content from Angadi World Technologies`}
            </span>
          </div>
          <p className="text-sm font-medium leading-7 text-justify">
            {`This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Terms And Conditions Template.`}
          </p>
          <p className="text-sm font-medium leading-7 text-justify">{`Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Angadi World Technologies Pvt Ltd does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Angadi World Technologies Pvt Ltd,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Angadi World Technologies Pvt Ltd shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this
website.
`}</p>
          <p className="text-sm font-medium leading-7 text-justify">{`Angadi World Technologies Pvt Ltd reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
`}</p>
          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold uppercase">
              You warrant and represent that:
            </h6>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`You hereby grant Angadi World Technologies Pvt Ltd a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.`}
            </span>
          </div>
        </div>
      </section>
    );
  };

  const Hyperlinking = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">Hyperlinking Content</h6>

          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold uppercase">
              The following organizations may link to our Website without prior
              written approval:
            </h6>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              Government agencies
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              Search engines
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              News organizations
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
`}
            </span>
          </div>
          <p className="text-sm font-medium leading-7 text-justify">{`These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
`}</p>
          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold uppercase">{`We may consider and approve other link requests from the following types of organizations:
`}</h6>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`commonly-known consumer and/or business information sources;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">{`dot.com community sites;
`}</span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`associations or other groups representing charities;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`online directory distributors;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`internet portals;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`accounting, law and consulting firms; and
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`educational institutions and trade associations.`}
            </span>
          </div>
          <p className="text-sm font-medium leading-7 text-justify">{`We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Angadi World Technologies Pvt Ltd; and (d) the link is in the context of general resource information.
`}</p>
          <p className="text-sm font-medium leading-7 text-justify">{`These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
`}</p>
          <p className="text-sm font-medium leading-7 text-justify">{`If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Angadi World Technologies Pvt Ltd. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLS on our site to which you would like to link. Wait 2-3 weeks for a response.
`}</p>
          <div className="flex flex-col justify-center items-start gap-2">
            <h6 className="text-sm font-bold uppercase">
              Approved organizations may hyperlink to our Website as follows:
            </h6>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`By use of our corporate name; or
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`By use of the uniform resource locator being linked to; or
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              <GoDotFill />
              {`By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.
`}
            </span>
          </div>
          <p className="text-sm font-medium leading-7 text-justify">{`No use of Angadi World Technologies Pvt Ltd's logo or other artwork will be allowed for linking absent a trademark license agreement.`}</p>
        </div>
      </section>
    );
  };

  const Iframe = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">Iframe</h6>
          <p className="text-sm font-medium leading-7 text-justify">{`Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.`}</p>
        </div>
      </section>
    );
  };

  const ContentLiability = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">Content Liability</h6>
          <p className="text-sm font-medium leading-7 text-justify">{`We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous,
obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`}</p>
        </div>
      </section>
    );
  };

  const Reservationrights = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">reservation of rights</h6>
          <p className="text-sm font-medium leading-7 text-justify">{`We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.`}</p>
        </div>
      </section>
    );
  };
  const Removallinks = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">removal of links</h6>
          <p className="text-sm font-medium leading-7 text-justify">{`
If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`}</p>
        </div>
      </section>
    );
  };

  const Disclaimer = () => {
    return (
      <section className="flex justify-start items-start md:py-12 md:px-12 lg:py-12 lg:px-12 px-2 py-2">
        <div className="flex flex-col justify-center items-start md:gap-8 gap-4 lg:gap-8">
          <h6 className="text-lg font-bold uppercase">Disclaimer</h6>
          <p className="text-sm font-medium leading-7 text-justify">{`
To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.`}</p>
          <div>
            <h6 className="text-sm font-bold uppercase">
              Nothing in this disclaimer will:
            </h6>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`limit or exclude our or your liability for death or personal injury;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`limit or exclude our or your liability for fraud or fraudulent misrepresentation;
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`limit any of our or your liabilities in any way that is not permitted under applicable law; or
`}
            </span>
            <span className="text-sm font-medium leading-7 text-justify flex items-center gap-1">
              {" "}
              <GoDotFill />
              {`exclude any of our or your liabilities that may not be excluded under applicable law.
`}
            </span>
          </div>
          <p className="text-sm font-medium leading-7 text-justify">
            {`The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
`}
            <br></br>
            {`As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`}
          </p>
        </div>
      </section>
    );
  };

  const contentcomponent = [

{
  compo: <Termsofuse />,
},
{
  compo:    <Cookies />,
},
{
  compo:  <License />,
},
{
  compo: <Termsofuse />,
},



    
   {  compo:<Hyperlinking />},
  {  compo: <Iframe />},
   {  compo:<ContentLiability />},
  {  compo:<Reservationrights />},
 {   compo: <Removallinks />},
 {   compo: <Disclaimer />}
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-8 mx-auto h-auto mb-8">
      <Commonheader />

      <div className="md:flex lg:flex justify-center items-start w-full py-16 h-auto hidden">
        <div className="flex-[0.2] py-4 justify-center items-start  bg-[#FF71433B] sticky w-1/3   h-auto">
          <div>
            <h6 className="uppercase font-bold text-center text-sm mb-6">
              Table of Contents
            </h6>
          </div>

          {navitems.map((value, index) => (
            <div
              onClick={() => setcurrentindex(index)}
              key={index}
              className="flex cursor-pointer justify-between items-center pl-16 mb-4 w-full"
            >
              <p
                className={
                  currentindex === index
                    ? "capitalize text-[#FF7143] text-sm font-medium cursor-pointer"
                    : "capitalize text-sm font-medium cursor-pointer"
                }
              >
                {value}
              </p>
              <span
                className={
                  currentindex === index
                    ? "w-2 h-8 bg-[#FF7143]"
                    : "w-2 h-8 bg-transparent"
                }
              ></span>
            </div>
          ))}
        </div>

        <div className="flex-[0.8] flex-col   justify-center items- start  w-full  h-auto">
          <div>
            <h6 className="text-2xl md:text-3xl lg:text-3x font-bold px-12  tracking-wider">
              Terms & Conditions
            </h6>
          </div>
          {contentcomponent.map(
            (value, index) => currentindex === index &&
            (
              <div key={index}>
                {value.compo}
              </div>
            ) 
          )}
        </div>
      </div>

      <div className="flex md:hidden lg:hidden  flex-col justify-center items-start  w-full mx-auto py-4">
        <div>
          <h6 className="text-xl md:text-3xl lg:text-3x font-bold px-2  tracking-wider">
            Terms & Conditions
          </h6>
        </div>

        {contentcomponent.map((value, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start w-full mx-auto"
          >
            {value.compo}
            <Divider className="my-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
