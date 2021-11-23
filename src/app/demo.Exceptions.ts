


export class thisError extends Error {
  constructor(message?: string) {
    // 'Error' breaks prototype chain here
    super(message);

    // restore prototype chain
    const actualProto = new.target.prototype;

    if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); } else { this.__proto__ = actualProto; }
  }
}

export class thatError extends Error {
    constructor(message?: string) {
      // 'Error' breaks prototype chain here
      super(message);
  
      // restore prototype chain
      const actualProto = new.target.prototype;
  
      if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); } else { this.__proto__ = actualProto; }
    }
  }

export class anotherError extends Error {
    constructor(message?: string) {
      // 'Error' breaks prototype chain here
      super(message);
  
      // restore prototype chain
      const actualProto = new.target.prototype;
  
      if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); } else { this.__proto__ = actualProto; }
    }
  }

export class impossibleError extends Error {
    constructor(message?: string) {
      // 'Error' breaks prototype chain here
      super(message);
  
      // restore prototype chain
      const actualProto = new.target.prototype;
  
      if (Object.setPrototypeOf) { Object.setPrototypeOf(this, actualProto); } else { this.__proto__ = actualProto; }
    }
  }
