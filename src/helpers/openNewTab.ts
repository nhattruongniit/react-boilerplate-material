export default function openNewTab(link: string) {
  const win = window.open(link, '_blank');
  win && win.focus();
}
