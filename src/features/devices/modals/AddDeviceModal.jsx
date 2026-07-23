import { useState } from "react";

import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

import DeviceForm from "../components/DeviceForm";
import { defaultDevice } from "../data/defaultDevice";

const AddDeviceModal = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState(defaultDevice);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCancel = () => {
    setFormData(defaultDevice);
    onClose();
  };

  const handleSave = () => {
    onSave(formData);

    setFormData(defaultDevice);

    onClose();
  };

  const handleTestConnection = () => {
    console.log("Testing connection...", formData);

    // Later:
    // POST /devices/test-connection
  };

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      title="Add Device"
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>

          <Button variant="secondary" onClick={handleTestConnection}>
            Test Connection
          </Button>

          <Button onClick={handleSave}>Save Device</Button>
        </>
      }
    >
      <DeviceForm formData={formData} onChange={handleChange} />
    </Modal>
  );
};

export default AddDeviceModal;
