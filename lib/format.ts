const NAIRA = "\u20a6";

export function formatNaira(value: number): string {
  return `${NAIRA}${Math.round(value).toLocaleString("en-US")}`;
}

export function formatCompactNaira(value: number): string {
  const absoluteValue = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (absoluteValue >= 1_000_000_000) {
    return `${sign}${NAIRA}${formatCompactNumber(
      absoluteValue / 1_000_000_000
    )}B`;
  }

  if (absoluteValue >= 1_000_000) {
    return `${sign}${NAIRA}${formatCompactNumber(
      absoluteValue / 1_000_000
    )}M`;
  }

  if (absoluteValue >= 1_000) {
    return `${sign}${NAIRA}${formatCompactNumber(absoluteValue / 1_000)}K`;
  }

  return `${sign}${NAIRA}${Math.round(absoluteValue).toLocaleString("en-US")}`;
}

export function createWhatsAppUrl(message: string): string {
  const phoneNumber = "2349069375855";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function createTelUrl(phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/\D/g, "")}`;
}

function formatCompactNumber(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}
