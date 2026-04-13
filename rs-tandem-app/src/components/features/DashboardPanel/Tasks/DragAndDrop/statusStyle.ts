export function getStatusStyle(status: "ok" | "err" | "revealed" | undefined) {
    switch (status) {
    case "ok":
      return "border-teal-400 bg-teal-50 cursor-default";
    case "err":
      return "border-red-400 bg-red-50 cursor-grab active:cursor-grabbing";
    case "revealed":
      return "border-yellow-400 bg-white cursor-default";
    default:
      return "border-gray-200 bg-gray-50 hover:border-gray-300 cursor-grab active:cursor-grabbing";
  }
}