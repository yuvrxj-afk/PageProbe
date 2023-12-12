import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const UpgradeButton = () => {
  return (
    <Button className="w-full">
      Upgrade now <ArrowRight className="h-4 w-4 ml-1.5" />
    </Button>
  );
};

export default UpgradeButton;
