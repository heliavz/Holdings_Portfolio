function formatDate(dateString) {
  if (!dateString) return "-";
  const [year, month, day] = dateString.split("-");
  const safeDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
  if (isNaN(safeDate)) return "-";
  return safeDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default formatDate;
