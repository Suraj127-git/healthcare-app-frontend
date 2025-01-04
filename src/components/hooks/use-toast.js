import { useEffect, useState } from "react"

const TOAST_TIMEOUT = 5000

const useToast = () => {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setToasts((toasts) => toasts.filter((toast) => toast.open))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function toast({ title, description, type = "default", duration = TOAST_TIMEOUT }) {
    const id = Math.random().toString(36).substr(2, 9)
    const toast = {
      id,
      title,
      description,
      type,
      open: true,
    }

    setToasts((toasts) => [...toasts, toast])

    if (duration !== Infinity) {
      setTimeout(() => {
        setToasts((toasts) =>
          toasts.map((t) => (t.id === toast.id ? { ...t, open: false } : t))
        )
      }, duration)
    }

    return toast
  }

  return {
    toast,
    toasts,
    setToasts,
  }
}

export { useToast }