import React, { FC } from "react";
import Carousel from "./Carousel";
import PwaInstallation from "./PwaInstallation";
import PushNotification from "./PushNotification";

type IInstallationCarouselProps = {};

const InstallationCarousel: FC<IInstallationCarouselProps> = () => {
  return (
    <div className="container">
      <Carousel>
        <PushNotification />
        <PwaInstallation />
      </Carousel>
    </div>
  );
};

export default InstallationCarousel;
