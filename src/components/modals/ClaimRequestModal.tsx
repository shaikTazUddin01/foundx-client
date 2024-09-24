import React from "react";
import FXModal from "./FXModal";

const ClaimRequestModal = () => {
  return (
    <div className="flex-1">
      <FXModal
        title="Claim Request"
        buttonText="Claim Request"
        buttonVarient="light"
        buttonClassName="w-full"
      >
        <h1>This is Claim requist</h1>
      </FXModal>
    </div>
  );
};

export default ClaimRequestModal;
