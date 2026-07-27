import { useRef, useState } from "react";

import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

import DeviceForm from "../components/DeviceForm";

const AddDeviceModal = ({ open, onClose, onSave, onTestConnection }) => {
  const formRef = useRef(null);

  const [testing, setTesting] = useState(false);

  const [saving, setSaving] = useState(false);

  const [connectionVerified, setConnectionVerified] = useState(false);

  const [connectionResult, setConnectionResult] = useState(null);

  /**
   * Reset modal state
   */
  const resetState = () => {
    formRef.current?.reset();

    setConnectionVerified(false);

    setConnectionResult(null);
  };

  /**
   * Close modal
   */
  const handleClose = () => {
    resetState();

    onClose();
  };

  /**
   * Test Connection
   */
  const handleTestConnection = async () => {
    try {
      setTesting(true);

      const values = formRef.current.getValues();

      const result = await onTestConnection(values);

      setConnectionVerified(result.success);

      setConnectionResult(result);
    } finally {
      setTesting(false);
    }
  };

  /**
   * Save Device
   */
  const handleSave = async (values) => {
    if (!connectionVerified) {
      return;
    }

    try {
      setSaving(true);

      await onSave(values);

      handleClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Add Device"
      size="xl"
      footer={
        <>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            variant="secondary"
            loading={testing}
            onClick={handleTestConnection}
          >
            Test Connection
          </Button>

          <Button
            loading={saving}
            disabled={!connectionVerified}
            onClick={() => formRef.current.submit()}
          >
            Save Device
          </Button>
        </>
      }
    >
      <DeviceForm
        ref={formRef}
        onSubmit={handleSave}
        onConnectionChange={() => {
          setConnectionVerified(false);

          setConnectionResult(null);
        }}
      />

      {connectionResult && (
        <div
          className={`mt-6 rounded-xl border p-4 ${
            connectionResult.success
              ? "border-green-300 bg-green-50"
              : "border-red-300 bg-red-50"
          }`}
        >
          <p
            className={`font-medium ${
              connectionResult.success ? "text-green-700" : "text-red-700"
            }`}
          >
            {connectionResult.message}
          </p>
        </div>
      )}
    </Modal>
  );
};

export default AddDeviceModal;
