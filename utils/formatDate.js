export function formatDate(date) {
  const d = new Date(date);
  console.log(date);
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  console.log(dtf);
  const [{ value: mo }, , { value: da }, , { value: ye }] =
    dtf.formatToParts(d);

  return `${da} ${mo} ${ye}`;
}
