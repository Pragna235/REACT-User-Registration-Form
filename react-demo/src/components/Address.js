import React from 'react'
import './Address.css'

function Address({ onChange, dno, streetNo, streetName, streetName2, city, state, country, pinCode }) {
  return (
    <div>
      <h2>Address</h2>
      <label>
        Dno:
        <input type="text" name="dno" value={dno} onChange={onChange} />
      </label>
      <label>
        Street No:
        <input type="text" name="streetNo" value={streetNo} onChange={onChange} />
      </label>
      <label>
        Street Name:
        <input type="text" name="streetName" value={streetName} onChange={onChange} />
      </label>
      <label>
        Street Name 2:
        <input type="text" name="streetName2" value={streetName2} onChange={onChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={city} onChange={onChange} />
      </label>
      <label>
        State:
        <input type="text" name="state" value={state} onChange={onChange} />
      </label>
      <label>
        Country:
        <input type="text" name="country" value={country} onChange={onChange} />
      </label>
      <label>
        Pin Code:
        <input type="text" name="pinCode" value={pinCode} onChange={onChange} />
      </label>
    </div>

  )
}

export default Address