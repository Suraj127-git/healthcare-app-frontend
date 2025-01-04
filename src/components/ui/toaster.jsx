import { useToast } from "../hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map(({ id, title, description, type, open }) => (
        open && (
          <div
            key={id}
            className={`mb-2 w-full rounded-lg border p-4 shadow-lg ${
              type === "success"
                ? "bg-green-50 border-green-200"
                : type === "error"
                ? "bg-red-50 border-red-200"
                : "bg-white border-gray-200"
            }`}
          >
            {title && (
              <div className="font-medium">
                {title}
              </div>
            )}
            {description && (
              <div className="mt-1 text-sm text-gray-600">
                {description}
              </div>
            )}
          </div>
        )
      ))}
    </div>
  )
}