import { Popconfirm } from "antd";

interface IProps {
  handleConfirm: () => void;
  handleCancel: () => void;
  children: React.ReactNode;
  title?: string;
}

const PopConfirm = ({
  handleConfirm,
  handleCancel,
  title,
  children,
}: IProps) => (
  <Popconfirm
    title={title}
    description="Are you sure you want to delete task?"
    onConfirm={handleConfirm}
    onCancel={handleCancel}
    okText="OK"
    cancelText="Cancel"
  >
    {children}
  </Popconfirm>
);

export default PopConfirm;
