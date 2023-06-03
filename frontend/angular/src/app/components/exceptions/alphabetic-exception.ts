export class NoAlphabeticInputException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NoAlphabeticInputException';
  }
}
