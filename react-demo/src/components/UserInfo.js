import React from 'react'

function UserInfo({ onChange, email, phone, linkedin }) {
  return (
    <div>
      <h2>Info</h2>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={onChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={phone} onChange={onChange} />
      </label>
      <label>
        Linkedin Address:
        <input type="text" name="linkedin" value={linkedin} onChange={onChange} />
      </label>
    </div>

  )
}

export default UserInfo