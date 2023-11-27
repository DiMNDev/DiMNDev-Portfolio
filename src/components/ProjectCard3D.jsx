import React, { useEffect, useState } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitURL,
  previewURL,
  tag,
}) => {
  let projectImages = imgUrl;

  //Define state for img slides
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(currentSlide);

  const previousSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? projectImages.length - 1 : currentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === projectImages.length - 1 ? 0 : currentSlide + 1
    );
  };

  const [rotation, setRotation] = useState(() =>
    tag === "Web"
      ? ["left-3d", "center-3d", "right-3d"]
      : ["left-3d-m", "center-3d-m", "right-3d-m"]
  );

  useEffect(() => {
    setRotation(changeRotation(currentSlide));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const changeRotation = (changeTo) => {
    switch (changeTo) {
      case 0:
        return tag === "Web"
          ? ["left-3d", "center-3d", "right-3d"]
          : ["left-3d-m", "center-3d-m", "right-3d-m"];
      case 1:
        return tag === "Web"
          ? ["right-3d", "left-3d", "center-3d"]
          : ["right-3d-m", "left-3d-m", "center-3d-m"];
      case 2:
        return tag === "Web"
          ? ["center-3d", "right-3d", "left-3d"]
          : ["center-3d-m", "right-3d-m", "left-3d-m"];
    }
  };

  return (
    <div>
      <div className={`h-full rounded-t-xl relative group mt-24 w-full`}>
        <div className="flex justify-around items-center perspective">
          <div
            className="group/leftArrow w-[32px] h-[32px] p-1 cursor-pointer absolute left-0 rounded-xl border-2 border-[#adb7be] hover:border-purple-500 bg-[#1818189c] hover:bg-[#181818c2] flex items-center z-10 transition-all"
            onClick={previousSlide}
          >
            <ChevronLeftIcon className=" w-[32px] h-[32px] text-[#adb7be]  group-hover/leftArrow:text-white transition-all" />
          </div>
          <div
            className="group/rightArrow w-[32px] h-[32px] p-1 cursor-pointer absolute right-0 rounded-xl border-2 border-[#adb7be] hover:border-purple-500 bg-[#1818189c] hover:bg-[#181818c2] flex items-center z-10 transition-all"
            onClick={nextSlide}
          >
            <ChevronRightIcon className=" w-[32px] h-[32px] text-[#adb7be]  group-hover/rightArrow:text-white transition-all" />
          </div>
          {imgUrl.map((img, index) => (
            //Next wants you to use Image from Next for image optimization, I'm choosing to ignore it for now
            // eslint-disable-next-line @next/next/no-img-element
            <Image
              key={index}
              alt={`Image ${index + 1}`}
              className={
                tag === "Mobile"
                  ? `${rotation[index]} grannyShift card-3d select-none`
                  : `${rotation[index]} grannyShift card-3d select-none`
              }
              height={1000}
              width={1000}
              src={img}
            />
          ))}
        </div>
      </div>
      <div
        id="projectFooter"
        className="flex justify-between text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4"
      >
        <div id="left">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#adb7be]">{description}</p>
        </div>
        <div id="right" className="flex">
          <Link
            href={gitURL}
            className="h-14 w-14 border-2 relative mr-2 rounded-full border-[#adb7be] hover:border-purple-500 group/link transition-all"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all" />
          </Link>
          <Link
            href={previewURL}
            className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-purple-500 group/link transition-all"
          >
            <EyeIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
