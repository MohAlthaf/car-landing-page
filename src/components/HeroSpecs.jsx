import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

const HeroSpecs = (props) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mt-8">
        <span className="bg-container-color p-1.5 rounded-full">
          <Icon
            icon={props.icon}
            width="14"
            height="14"
            className="text-white-color rounded-full lg:w-6 lg:h-6"
          />
        </span>
      </div>
      <p className="text-h2-mobile lg:text-h2-desktop font-medium mt-2">
        {props.value}
      </p>
      <p className="text-small-mobile lg:text-small-desktop text-Text-color-light">
        {props.description}
      </p>
    </div>
  );
};

HeroSpecs.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroSpecs;
