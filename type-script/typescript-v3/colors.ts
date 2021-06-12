export function hexToRgba(hex: string): { r: number; g: number; b: number } {
  if (hex.length === 3) {
    let hr = hex[0];
    let hg = hex[1];
    let hb = hex[2];
    return hexToRgba(`${hr}${hr}${hg}${hg}${hb}${hb}`);
  }

  let [r, g, b] = [0, 2, 4]
    .map((offset) => hex.substr(offset, offset + 2))
    .map((hexCh) => parseInt(hexCh, 16));

  return { r, g, b };
}

export function rgbToHex(r: number, g: number, b: number): string {
    
}
