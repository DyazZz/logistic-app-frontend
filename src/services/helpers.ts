export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(Number(dateStr)));
}

export function formatStatus(statusNum: number) {
  switch (statusNum) {
    case 1:
      return "Новое";
    case 2:
      return "В работе";
    case 3:
      return "Завершено";
  }
}

export function localeSearch() {}
