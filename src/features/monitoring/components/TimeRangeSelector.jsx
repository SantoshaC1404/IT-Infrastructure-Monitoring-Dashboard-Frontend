const TimeRangeSelector = ({ hours, days, onHoursChange, onDaysChange }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <label className="mb-1 block text-xs text-gray-500">Hours</label>

        {/* <select
          value={hours}
          onChange={(e) => onHoursChange(Number(e.target.value))}
          className="rounded-lg border px-3 py-2"
        >
          <option value={1}>1 Hour</option>
          <option value={6}>6 Hours</option>
          <option value={12}>12 Hours</option>
          <option value={24}>24 Hours</option>
        </select> */}

        <select
          value={hours}
          onChange={(e) => {
            onHoursChange(e.target.value);
            onDaysChange("");
          }}
        >

          {/* <option value={0.5}>30 Minutes</option> */}
          <option value={1}>1 Hour</option>
          <option value={6}>6 Hours</option>
          <option value={12}>12 Hours</option>
          <option value={24}>24 Hours</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-xs text-gray-500">Days</label>

        {/* <select
          value={days}
          onChange={(e) => onDaysChange(Number(e.target.value))}
          className="rounded-lg border px-3 py-2"
        >
          <option value={1}>1 Day</option>
          <option value={3}>3 Days</option>
          <option value={7}>7 Days</option>
          <option value={30}>30 Days</option>
        </select> */}

        <select
          value={days}
          onChange={(e) => {
            onDaysChange(e.target.value);
            onHoursChange("");
          }}
        >
          <option value={1}>1 Day</option>
          <option value={3}>3 Days</option>
          <option value={7}>7 Days</option>
          <option value={30}>30 Days</option>
        </select>
      </div>
    </div>
  );
};

export default TimeRangeSelector;
