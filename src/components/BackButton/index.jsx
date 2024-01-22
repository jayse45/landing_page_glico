import React from 'react';
import { Button, Img } from "components";

const BackButton = ({ onClick }) => {
 return (
    <Button
          className="flex items-center justify-start ml-16 md:min-w-full"
          onClick={onClick}
          leftIcon={
            <Img
              className="h-5 mt-px mr-2.5"
              src="images/img_arrowdown.svg"
              alt="arrow_down"
            />
          }
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-gray-700 font-medium text-[15px] text-left">
            Back
          </div>
        </Button>
 )
}

export { BackButton };