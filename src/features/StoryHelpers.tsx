// converts 298999 >> 4:59
export function msToMinutesAndSeconds(ms: number): string {
  const mins = Math.floor(ms / 60000);
  const secs = Number(((ms % 60000) / 1000).toFixed(0));
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function msToSeconds(msValue: number): number {
  return Math.round(msValue / 1000);
}
