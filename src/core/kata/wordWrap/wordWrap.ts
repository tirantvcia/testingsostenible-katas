export function wordWrap(text: string, numCharsPerLine: number) {
  const textToWrapped = TextToWrapped.create(text);
  return textToWrapped.wrap(
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

class TextToWrapped {
  private constructor(private readonly textToWrapped: string) {}
  static create(textToWrapped: string) {
    if (textToWrapped == null) {
      return new TextToWrapped("");
    }
    return new TextToWrapped(textToWrapped);
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
  splitByPositions(posInicial: number, posFinal: number) {
    return this.value().substring(posInicial, posFinal) + "\n";
  }
  splitFromPosition(posInicial: number) {
    return this.value().substring(posInicial);
  }

  wrapByNumCharsPerLine(numCharsPerLine: NumCharsPerLine) {
    if (this.isLengthLessOrEqualsOf(numCharsPerLine)) {
      return this.value();
    }
    const wrappedText = this.splitByPositions(0,numCharsPerLine.value());
    const unWrappedText = TextToWrapped.create(this.splitFromPosition(numCharsPerLine.value()));
    return wrappedText.concat(unWrappedText.wrapByNumCharsPerLine(numCharsPerLine));
  }

  wrap(numCharsPerLine: NumCharsPerLine) {
    const spitedTextElems: string[] = this.splitByWhiteSpaces();
    return spitedTextElems
      .map(function (val, index) {
        const unWrappedText = TextToWrapped.create(val);
        return unWrappedText.wrapByNumCharsPerLine(numCharsPerLine);
      })
      .join("\n");
  }
}
