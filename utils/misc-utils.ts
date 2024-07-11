export function formatDateToSlash(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function incrementDateByDays(date: Date, numDays: number) {
  return date.setDate(date.getDate() + numDays);
}

export function castToFormData(data: Object) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value)
  })
  return formData
}