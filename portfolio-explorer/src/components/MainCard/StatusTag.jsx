function StatusTag({ status }) {
  let bg = "";
  let color = "";
  let dotColor = "";

  switch (status) {
    case "Active":
      bg = "bg-success";
      color = "text-[#15803D]";
      dotColor = "bg-[#15803D]";
      break;
    case "Ongoing":
      bg = "bg-[#DBEAFE]";
      color = "text-[#1D4ED8]";
      dotColor = "bg-[#1D4ED8]";
      break;
    case "Due Diligence":
      bg = "bg-warning";
      color = "text-[#92400E]";
      dotColor = "bg-[#92400E]";
      break;
    default:
      bg = "bg-border";
      color = "text-muted-text";
      dotColor = "bg-muted-text";
  }

  return (
    <span
      className={`inline-flex items-center rounded-[32px] px-4 py-2 ${bg} ${color} text-sm font-medium`}
    >
      <span className={`w-2 h-2 rounded-full mr-2 ${dotColor}`}></span>
      {status}
    </span>
  );
}

export default StatusTag;
