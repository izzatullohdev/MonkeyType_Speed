// Time ni formatlovchi funksiyamiz:
const formatSecondsToMinutes = (seconds: number): string => {
  if (isNaN(seconds) || seconds < 0) return "0 minut 0 sekund";

  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  const minuteText = minutes > 0 ? `${minutes} minut` : "";
  const secondText = `${remainingSeconds} sekund`;

  return [minuteText, secondText].filter(Boolean).join(" ");
};

export default formatSecondsToMinutes;
