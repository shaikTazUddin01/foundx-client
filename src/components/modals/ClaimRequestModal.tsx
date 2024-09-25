import React from "react";
import FXModal from "./FXModal";
import FXForm from "../form/FXForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXInput from "../form/FXInput";
import FXTextArea from "../form/FXTextArea";
import { Button } from "@nextui-org/button";
import { useClaimRequist } from "@/src/hooks/useClaimRequest";
// import { useClaimRequist } from "@/src/hooks/useClaimRequest";

interface IProps {
  id: string;
  questions: string[];
}

const ClaimRequestModal = ({ id, questions }: IProps) => {
    // const {mutat}=useClaimRequist()
const {mutate}=useClaimRequist()
    const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    const claimData = {
      item: id,
      description: data?.description,
      answers:Object.keys(data).filter((answer) => answer?.startsWith("answer")).map((answer)=>data[answer])
    };
    mutate(claimData)
    console.log(claimData);
  };
  return (
    <div className="flex-1">
      <FXModal
        title="Claim Request"
        buttonText="Claim Request"
        buttonVarient="light"
        buttonClassName="w-full"
      >
        <div className="mb-5">
          <FXForm onSubmit={handleSubmit}>
            {questions?.map((question, index) => {
              return (
                <div className="mb-2">
                  <h1>
                    {`Qt-${index + 1}`} : {question} ?
                  </h1>
                  <FXInput
                    label={`Answer`}
                    name={`answer-${index + 1}`}
                  ></FXInput>
                </div>
              );
            })}
            <FXTextArea name="description" label="Description" />
            <Button className="w-full mt-2" variant="bordered" type="submit">
              Submit
            </Button>
          </FXForm>
        </div>
      </FXModal>
    </div>
  );
};

export default ClaimRequestModal;
