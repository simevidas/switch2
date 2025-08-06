export default function daysSinceLaunch(datestr) {
  let date0 = +new Date('2025-06-05T00:00:00Z');
  let date = +new Date(`${datestr}T00:00:00Z`);
  return (date - date0) / (24 * 60 * 60 * 1000);
}
