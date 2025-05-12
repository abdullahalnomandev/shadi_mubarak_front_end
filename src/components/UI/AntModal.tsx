import { Modal, ModalProps } from "antd";

interface IAntModalProps extends Omit<ModalProps, "onOk" | "onCancel"> {
  title?: string;
  okText?: string;
  cancelText?: string;
  onConfirm: () => void;
  isOpen: boolean;
  onClose: () => void;
  content?: React.ReactNode;
  danger?: boolean;
}

const AntModal = ({
  title = "Confirm Action",
  okText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  isOpen,
  onClose,
  content,
  danger = false,
  ...rest
}: IAntModalProps) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={onConfirm}
      onCancel={onClose}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={{ danger }}
      {...rest}
    >
      {content}
    </Modal>
  );
};

export default AntModal;
