"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Spinner,
  CircularProgress,
} from "@nextui-org/react";

const Loading = () => {
  const [isOpen, Setisopen] = useState(true);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (value <= 99) {
      const interval = setInterval(() => {
        setValue((v) => (v >= 99 ? 0 : v + 10));
      }, 500);
  
      return () => clearInterval(interval);
    }
  }, [value]);
  

  return (
    <div className="relative top-0 right-0 left-0 bottom-0 h-screen">
      <Modal className="relative" backdrop="blur" hideCloseButton={true} isDismissable={false} isKeyboardDismissDisabled={true} isOpen={isOpen}>
        <ModalContent className="bg-black h-24 w-24 rounded-full absolute top-80 md:top-[30%] lg:top-[35%]">
          <>
            <ModalBody className="bg-transparent flex justify-center items-center rounded-full">
              <CircularProgress
                classNames={{
                  svg: "w-20 h-20 drop-shadow-md",
                  indicator: "stroke-white",
                  track: "stroke-white/10",
                  value: "text-lg font-medium text-white",
                }}
                value={value}
                strokeWidth={2}
                showValueLabel={true}
              />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Loading;
