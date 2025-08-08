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
  children?: React.ReactNode;
  confirmLoading?: boolean;
}

const AntModal = ({
  title = "Confirm Action",
  okText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  isOpen,
  onClose,
  danger = false,
  children,
  confirmLoading = false,
  ...rest
}: IAntModalProps) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={onConfirm}
      onCancel={onClose}
      okText={okText}
      confirmLoading={confirmLoading}
      cancelText={cancelText}
      okButtonProps={{ danger }}
      {...rest}>
      {children}
    </Modal>
  );
};

export default AntModal;
