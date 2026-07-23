const NotificationFilter = () => {
  return (
    <select
      className="
                mb-6
                rounded-lg
                border
                border-gray-300
                px-4
                py-2
            "
    >
      <option>All</option>

      <option>Critical</option>

      <option>Warning</option>

      <option>Info</option>

      <option>Success</option>
    </select>
  );
};

export default NotificationFilter;
