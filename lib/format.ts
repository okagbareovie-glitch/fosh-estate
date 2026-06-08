export function formatNaira(value: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);
}

export function createWhatsAppUrl(message: string): string {
  const phoneNumber = "2349069375855";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function createTelUrl(phoneNumber: string): string {
  return `tel:${phoneNumber.replace(/\D/g, "")}`;
}
