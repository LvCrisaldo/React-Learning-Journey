import { useEffect } from "react"

export default function Count({ number }) {
useEffect(() => {
  document.title = `You clicked ${number} times`;

  return () => {
    document.title = 'Counter Website';
  }
}, [number]);

const text = `The value is ${number}`;

return <span className="count">{text}
</span>
}
