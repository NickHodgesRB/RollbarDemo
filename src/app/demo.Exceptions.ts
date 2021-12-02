


export class thisError extends Error {
  constructor(message?: string) {
    // 'Error' breaks prototype chain here
    super(message);

  // Set the prototype explicitly.
  Object.setPrototypeOf(this, thisError.prototype);
  }
}

export class thatError extends Error {
    constructor(message?: string) {
      // 'Error' breaks prototype chain here
      super(message);
  
// Set the prototype explicitly.
Object.setPrototypeOf(this, thatError.prototype);
    }
  }

export class anotherError extends Error {
    constructor(message?: string) {
      // 'Error' breaks prototype chain here
      super(message);
  
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, anotherError.prototype);
    }
  }

export class impossibleError extends Error {
    constructor(message?: string) {
      // 'Error' breaks prototype chain here
      super(message);
  
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, impossibleError.prototype);
    }
  }
