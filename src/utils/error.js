class EDUIFError extends Error {
  constructor (message) {
    super(message);
    this.name = '[EDUIF Error]';
  }
}

export const throwError = (name, message) => {
  throw new EDUIFError(`[${name}] ${message}`);
};
