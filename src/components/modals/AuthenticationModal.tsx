import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthenticationModal({id}:{id:string}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className="flex-1" onPress={onOpen} variant="light">
        Claim Request
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 justify-center items-center"></ModalHeader>
              <ModalBody>
                <div className="flex gap-2">
                  <Link href={`/login?redirect=found-items/${id}`} className="flex-1"><Button className="w-full" >Login</Button></Link>
                  <div className="w-[1px] bg-default-200"></div>

                  <Link href={`/register?redirect=found-items/${id}`} className="flex-1"><Button className="w-full"> Register</Button></Link>
                </div>
              </ModalBody>
              {/* <ModalFooter>
                  <Button color="primary" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
