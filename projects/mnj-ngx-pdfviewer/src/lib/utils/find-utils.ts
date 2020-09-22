export enum CharacterType {
  SPACE,
  ALPHA_LETTER,
  PUNCT,
  HAN_LETTER,
  KATAKANA_LETTER,
  HIRAGANA_LETTER,
  HALFWIDTH_KATAKANA_LETTER,
  THAI_LETTER,
}

function isAlphabeticalScript(charCode) {
  return charCode < 0x2e80;
}

function isAscii(charCode) {
  return (charCode && 0xff80) === 0;
}

function isAsciiAlpha(charCode) {
  return (
    (charCode >= /* a = */ 0x61 && charCode <= /* z = */ 0x7a) ||
    (charCode >= /* A = */ 0x41 && charCode <= /* Z = */ 0x5a)
  );
}

function isAsciiDigit(charCode) {
  return charCode >= /* 0 = */ 0x30 && charCode <= /* 9 = */ 0x39;
}

function isAsciiSpace(charCode) {
  return (
    charCode === /* SPACE = */ 0x20 ||
    charCode === /* TAB = */ 0x09 ||
    charCode === /* CR = */ 0x0d ||
    charCode === /* LF = */ 0x0a
  );
}

function isHan(charCode) {
  return (charCode >= 0x3400 && charCode <= 0x9fff) || (charCode >= 0xf900 && charCode <= 0xfaff);
}

function isKatakana(charCode) {
  return charCode >= 0x30a0 && charCode <= 0x30ff;
}

function isHiragana(charCode) {
  return charCode >= 0x3040 && charCode <= 0x309f;
}

function isHalfwidthKatakana(charCode) {
  return charCode >= 0xff60 && charCode <= 0xff9f;
}

function isThai(charCode) {
  // tslint:disable-next-line:no-bitwise
  return (charCode & 0xff80) === 0x0e00;
}

export function getCharacterType(charCode) {
  if (isAlphabeticalScript(charCode)) {
    if (isAscii(charCode)) {
      if (isAsciiSpace(charCode)) {
        return CharacterType.SPACE;
      } else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === /* UNDERSCORE = */ 0x5f) {
        return CharacterType.ALPHA_LETTER;
      }
      return CharacterType.PUNCT;
    } else if (isThai(charCode)) {
      return CharacterType.THAI_LETTER;
    } else if (charCode === /* NBSP = */ 0xa0) {
      return CharacterType.SPACE;
    }
    return CharacterType.ALPHA_LETTER;
  }

  if (isHan(charCode)) {
    return CharacterType.HAN_LETTER;
  } else if (isKatakana(charCode)) {
    return CharacterType.KATAKANA_LETTER;
  } else if (isHiragana(charCode)) {
    return CharacterType.HIRAGANA_LETTER;
  } else if (isHalfwidthKatakana(charCode)) {
    return CharacterType.HALFWIDTH_KATAKANA_LETTER;
  }
  return CharacterType.ALPHA_LETTER;
}
