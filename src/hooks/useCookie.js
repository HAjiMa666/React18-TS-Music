import { useState } from 'react'
const useCookie = () => {
  const [cookie, setCookie] = useState(
    localStorage.getItem('cookie') ?? undefined
  )
  return cookie
}

export default useCookie
