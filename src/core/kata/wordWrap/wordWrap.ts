export function wordWrap(text: string, numCharsPerLine: number) {
  const textToWrap = TextToWrap.create(text);
  return textToWrap.wrap(
    NumCharsPerLine.create(numCharsPerLine)
  );
}

class NumCharsPerLine {
  private constructor(private readonly numCharsPerLine: number) {}
  static isNumCharsPerLineLessThanZero(numCharsPerLine: number) {
    return numCharsPerLine < 0;
  }

  static create(numCharsPerLine: number) {
    if (NumCharsPerLine.isNumCharsPerLineLessThanZero(numCharsPerLine)) {
      throw new Error("Error longitud de tamaño linea");
    }
    return new NumCharsPerLine(numCharsPerLine);
  }

  value() {
    return this.numCharsPerLine;
  }
}

class TextToWrap {
  private constructor(private readonly textToWrapped: string) {}
  static create(textToWrap: string) {
    if (textToWrap == null) {
      return new TextToWrap("");
    }
    return new TextToWrap(textToWrap);
  }
  value() {
    return this.textToWrapped;
  }
  isLengthLessOrEqualsOf(numCharsPerLine: NumCharsPerLine) {
    return this.value().length <= numCharsPerLine.value();
  }
  splitByWhiteSpaces() {
    return this.value().split(" ");
  }
  splitByPositions(startPosition: number, endPosition: number) {
    return this.value().substring(startPosition, endPosition);
  }
  splitFromPosition(startPosition: number) {
    return this.value().substring(startPosition);
  }

  wrapByNumCharsPerLine(numCharsPerLine: NumCharsPerLine) {
    if (this.isLengthLessOrEqualsOf(numCharsPerLine)) {
      return this.value();
    }
    const wrappedText = this.splitByPositions(0,numCharsPerLine.value()) + "\n";
    const unWrappedText = TextToWrap.create(this.splitFromPosition(numCharsPerLine.value()));
    return wrappedText.concat(unWrappedText.wrapByNumCharsPerLine(numCharsPerLine));
  }

  wrap(numCharsPerLine: NumCharsPerLine) {
    const spitedTextElems: string[] = this.splitByWhiteSpaces();
    return spitedTextElems
      .map(function (val, index) {
        const unWrappedText = TextToWrap.create(val);
        return unWrappedText.wrapByNumCharsPerLine(numCharsPerLine);
      })
      .join("\n");
  }
}
