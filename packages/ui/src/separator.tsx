import React, { FC } from "react";

type ISeparatorProps = {};

const Separator: FC<ISeparatorProps> = () => {
  return <div className="bg-primary h-10 w-[0.5px] rounded-3xl"></div>;
};

export default Separator;
