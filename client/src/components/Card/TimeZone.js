import React, { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import moment from "moment"


const TimeZone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState('')


  return (
    <div className='App'>
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div className='select-wrapper'>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      <h3>Output:</h3>
      <div className='code'>
        <pre
          style={{
            margin: '0 20px',
            fontWeight: 500,
            fontFamily: 'monospace',
          }}
        >
          {JSON.stringify(selectedTimezone.value, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default TimeZone;
