import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto max-width mb-20 px-4 lg:px-8 flex-grow">
        <section className="glass mb-8">
          <h1 className="text-2xl text-black md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Bio
          </h1>
          <p className="text-black py-4">{personalDetails.about1}</p>
          <p className="text-black">{personalDetails.about2}</p>
          <p className="text-black py-4">{personalDetails.about3}</p>
          <p className="text-black">{personalDetails.about4}</p>
        </section>

        <section className="glass mb-8">
          <h1 className="text-2xl text-black md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Work Experience
          </h1>
          {React.Children.toArray(
            workDetails.map(
              ({
                Position,
                Company,
                Company_Link,
                Location,
                Type,
                Duration,
              }) => (
                <Work
                  position={Position}
                  company={Company}
                  companyLink={Company_Link}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              ),
            ),
          )}
        </section>

        <section className="glass">
          <h1 className="text-2xl text-black md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Education
          </h1>
          {React.Children.toArray(
            eduDetails.map(
              ({
                Position,
                Company,
                Company_Link,
                Location,
                Type,
                Duration,
              }) => (
                <Work
                  position={Position}
                  company={Company}
                  companyLink={Company_Link}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              ),
            ),
          )}
        </section>
      </main>
    </div>
  );
}

export default About;
