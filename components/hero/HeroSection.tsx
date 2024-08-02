// import SignUpOption from './SignUpOption';
// import HeroImage from './HeroImage';

import { getMetaObject } from "lib/shopify";

const signUpOptions = [
  {
    title: "Practitioner Sign Up",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    title: "Patient Sign Up",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  }
];

async function HeroSection() {
  const data =  await getMetaObject();
  const title = data.body.data.metaobjects.nodes[0].field.value;
  
  return (
    <section className="self-stretch pb-20 pl-20 pt-20 bg-zinc-100 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="text-8xl font-medium tracking-tighter leading-[105px] text-zinc-700 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              {title}
            </h1>
            <div className="flex gap-5 justify-between pr-8 mt-24 max-md:flex-wrap max-md:pr-5 max-md:mt-10">
              {/* {signUpOptions.map((option, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bcfd7bf984118a070145bc8d1f1897b9385d80e78330f31138199bac3672be6?apiKey=10f7efcca6aa42a8bb2e9c72e1504306&&apiKey=10f7efcca6aa42a8bb2e9c72e1504306"
                      alt=""
                      className="shrink-0 w-0.5 border-2 border-gray-500 border-solid aspect-[0.02] stroke-[2px] stroke-gray-500"
                    />
                  )}
                  <SignUpOption title={option.title} description={option.description} />
                </React.Fragment>
              ))} */}
            </div>
          </div>
        </div>
        {/* <HeroImage /> */}
      </div>
    </section>
  );
}

export default HeroSection;