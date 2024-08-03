import React from "react";
import FeatureCard from "../Components/FeatureCard";

const features = [
  {
    icon: "https://programmatorenepal.vercel.app/logo.png", // Replace with your icon path
    title: "Eliminate no-shows",
    description:
      "Ask customers to pay upfront with PayPal, Stripe or Worldpay. Transfer and cancellation policies can also be set.",
  },
  {
    icon: "https://programmatorenepal.vercel.app/logo.png", // Replace with your icon path
    title: "Waivers sorted before class",
    description:
      "Attach waivers and other documents to your booking form. Add marketing, GDPR, T&C's and photo consent fields.",
  },
  {
    icon: "https://programmatorenepal.vercel.app/logo.png", // Replace with your icon path
    title: "Automatic emailing",
    description:
      "Automatic confirmation and reminder emails for attendees including all the need-to-know information.",
  },
  {
    icon: "https://programmatorenepal.vercel.app/logo.png", // Replace with your icon path
    title: "Sell more spaces",
    description:
      "Single, group, course, termly, family, child and early-bird tickets options. Set ticket allowances and cut-off times.",
  },
  {
    icon: "https://programmatorenepal.vercel.app/logo.png", // Replace with your icon path
    title: "Keep customers returning",
    description:
      "Use discount codes, block-booking discounts, passes and waiting lists to grow your business.",
  },
  {
    icon: "https://programmatorenepal.vercel.app/logo.png", // Replace with your icon path
    title: "Start your class on time",
    description:
      "Check in attendees in class with our attendee register. Have all the information you need at your fingertips.",
  },
];

const Documentation = () => (
  <div className="min-h-screen bg-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Features that grow your business
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          See all features
        </button>
      </div>
    </div>
  </div>
);

export default Documentation;
