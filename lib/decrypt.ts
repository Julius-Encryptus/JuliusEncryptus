import * as gibberish from "gibberish-detector";
const lexicon = [..."abcdefghijklmnopqrstuvwxyz"];

function shiftLetters(cip: string, n: number) {
  return [...cip]
    .map((char) => {
      return lexicon.findIndex((ch) => ch == char) != -1
        ? lexicon[(lexicon.findIndex((ch) => ch == char) + n) % 26]
        : char;
    })
    .join("");
}

function statAnalysis(decip: string) {
  let freq: Record<string, number> = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  const distribution: Record<string, number> = {
    a: 8.2,
    b: 1.5,
    c: 2.8,
    d: 4.3,
    e: 12.7,
    f: 2.2,
    g: 2.0,
    h: 6.1,
    i: 7.0,
    j: 0.15,
    k: 0.77,
    l: 4.0,
    m: 2.4,
    n: 6.7,
    o: 7.5,
    p: 1.9,
    q: 0.095,
    r: 6,
    s: 6.3,
    t: 9.1,
    u: 2.8,
    v: 0.98,
    w: 2.4,
    x: 0.15,
    y: 2,
    z: 0.074,
  };

  //Frequency Extraction
  for (let i = 0; i < decip.length; i++) {
    let ch = decip[i];
    if (Object.keys(freq).findIndex((key) => key == ch) != -1) {
      freq[ch] += 1;
    }
  }

  //Mean
  let xf = 0;
  let x = 0;
  Object.keys(freq).map((key) => {
    xf += freq[key] * distribution[key];
    x += distribution[key];
  });

  const mean = xf / x;

  //Mode
  let mode = "a";
  Object.keys(freq).map((key) => {
    freq[key] > freq[mode] ? (mode = key) : null;
  });

  let std = 0;
  let freq_total = 0;

  //Std Deviation
  Object.keys(freq).map((key) => {
    std += (distribution[key] - mean) ** 2;
    freq_total += freq[key];
  });

  std = (std / freq_total) ** 0.5;

  return {
    freq: freq,
    mean: mean,
    mode: mode,
    median: (distribution[mode] + 2 * mean) / 3,
    std_dev: std,
  };
}

export default function decrypt(cip: string) {
  let res_rec = [];
  let res_rec_no = [];
  for (let i = 0; i < 26; i++) {
    let curr = shiftLetters(cip, i);
    let curr_stat = gibberish.detect(curr);

    curr_stat > 50
      ? res_rec_no.push({
          ans: curr,
          quantities: {
            ...statAnalysis(curr),
            shift: i,
          },
        })
      : res_rec.push({
          ans: curr,
          quantities: {
            ...statAnalysis(curr),
            shift: i,
          },
        });
  }
  return {
    corr: res_rec,
    incorr: res_rec_no,
  };
}
