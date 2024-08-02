import React from 'react'
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header with Home Button */}
      <header className="bg-primary text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
          <button 
            onClick={handleGoHome} 
            className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-4 rounded-lg shadow-md">
            Return Home
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 bg-white text-gray-800 mt-6 mb-12 rounded-lg shadow-md">
        <p className="text-sm text-gray-600 mb-4">Last updated: August 02, 2024</p>
        <p className="mb-4">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law protects
          You.
        </p>
        <p className="mb-4">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the{" "}
          <a
            href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Free Privacy Policy Generator
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold my-4 border-b-2 border-blue-500 pb-2">Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold mt-4">Interpretation</h3>
        <p className="mb-4">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions shall
          have the same meaning regardless of whether they appear in singular or
          in plural.
        </p>

        <h3 className="text-xl font-semibold mt-4">Definitions</h3>
        <p className="mb-4">For the purposes of this Privacy Policy:</p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <p className="font-semibold">
              <strong>Account</strong>
            </p>
            <p>
              means a unique account created for You to access our Service or
              parts of our Service.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Affiliate</strong>
            </p>
            <p>
              means an entity that controls, is controlled by or is under common
              control with a party, where "control" means ownership of 50% or
              more of the shares, equity interest or other securities entitled to
              vote for election of directors or other managing authority.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Application</strong>
            </p>
            <p>
              refers to Programmatore, the software program provided by the
              Company.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Company</strong>
            </p>
            <p>
              (referred to as either "the Company", "We", "Us" or "Our" in this
              Agreement) refers to Programmatore .
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Cookies</strong>
            </p>
            <p>
              are small files that are placed on Your computer, mobile device or
              any other device by a website, containing the details of Your
              browsing history on that website among its many uses.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Country</strong>
            </p>
            <p>
              refers to: Nepal
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Device</strong>
            </p>
            <p>
              means any device that can access the Service such as a computer, a
              cellphone or a digital tablet.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Personal Data</strong>
            </p>
            <p>
              is any information that relates to an identified or identifiable
              individual.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Service</strong>
            </p>
            <p>
              refers to the Application or the Website or both.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Service Provider</strong>
            </p>
            <p>
              means any natural or legal person who processes the data on behalf
              of the Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the
              Service on behalf of the Company, to perform services related to
              the Service or to assist the Company in analyzing how the Service is
              used.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Third-party Social Media Service</strong>
            </p>
            <p>
              refers to any website or any social network website through which
              a User can log in or create an account to use the Service.
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Usage Data</strong>
            </p>
            <p>
              refers to data collected automatically, either generated by the use
              of the Service or from the Service infrastructure itself (for
              example, the duration of a page visit).
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>Website</strong>
            </p>
            <p>
              refers to Programmatore, accessible from{" "}
              <a
                href="https://programmatore.bandhanpokhrel.com.np"
                rel="external nofollow noopener"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                https://programmatore.bandhanpokhrel.com.np
              </a>
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <strong>You</strong>
            </p>
            <p>
              means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual is
              accessing or using the Service, as applicable.
            </p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold my-4 border-b-2 border-blue-500 pb-2">Collecting and Using Your Personal Data</h2>

        <h3 className="text-xl font-semibold mt-4">Types of Data Collected</h3>

        <h4 className="text-lg font-semibold mt-4">Personal Data</h4>
        <p className="mb-4">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>First name and last name</li>
          <li>Usage Data</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Usage Data</h4>
        <p className="mb-4">Usage Data is collected automatically when using the Service.</p>
        <p className="mb-4">
          Usage Data may include information such as Your Device's Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data.
        </p>
        <p className="mb-4">
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID, the
          IP address of Your mobile device, Your mobile operating system, the type
          of mobile Internet browser You use, unique device identifiers and other
          diagnostic data.
        </p>
        <p className="mb-4">
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a mobile
          device.
        </p>

        <h3 className="text-xl font-semibold mt-4">Tracking Technologies and Cookies</h3>
        <p className="mb-4">
          We use Cookies and similar tracking technologies to track the activity
          on Our Service and hold certain information. Tracking technologies
          used are beacons, tags, and scripts to collect and track information and
          to improve and analyze Our Service. The technologies We use may
          include:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <p className="font-semibold">Cookies or Browser Cookies.</p>
            <p>
              A cookie is a small file placed on Your Device. You can instruct
              Your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if You do not accept cookies, You may not be
              able to use some portions of our Service.
            </p>
          </li>
          <li>
            <p className="font-semibold">Web Beacons.</p>
            <p>
              Certain sections of our Service and our emails may contain small
              electronic files known as web beacons (also referred to as clear
              gifs, pixel tags, and single-pixel gifs) that permit the Company,
              for example, to count users who have visited those pages or opened
              an email and for other related website statistics (for example,
              recording the popularity of a certain section and verifying system
              and server integrity).
            </p>
          </li>
        </ul>
        <p className="mb-4">
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
          remain on Your personal computer or mobile device when You go offline,
          while Session Cookies are deleted as soon as You close Your web
          browser. Learn more about cookies and how to manage them in the{" "}
          <a
            href="https://www.allaboutcookies.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            AllAboutCookies website
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold mt-4">Use of Your Personal Data</h3>
        <p className="mb-4">
          The Company may use Personal Data for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <p className="font-semibold">To provide and maintain our Service.</p>
            <p>
              Including to monitor the usage of our Service.
            </p>
          </li>
          <li>
            <p className="font-semibold">To notify You about changes to our Service.</p>
          </li>
          <li>
            <p className="font-semibold">To allow You to participate in interactive features of our Service when You choose to do so.</p>
          </li>
          <li>
            <p className="font-semibold">To provide customer support.</p>
          </li>
          <li>
            <p className="font-semibold">To gather analysis or valuable information so that we can improve our Service.</p>
          </li>
          <li>
            <p className="font-semibold">To monitor the usage of our Service.</p>
          </li>
          <li>
            <p className="font-semibold">To detect, prevent and address technical issues.</p>
          </li>
          <li>
                      <p className="font-semibold">To provide You with news, special offers </p>
                  </li>
                  </ul>
          </main>
          </div>)

  }

export default PrivacyPolicy;
