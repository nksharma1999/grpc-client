import * as jspb from 'google-protobuf'



export class PingRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    message: string,
  }
}

export class PongResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): PongResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PongResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PongResponse): PongResponse.AsObject;
  static serializeBinaryToWriter(message: PongResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PongResponse;
  static deserializeBinaryFromReader(message: PongResponse, reader: jspb.BinaryReader): PongResponse;
}

export namespace PongResponse {
  export type AsObject = {
    message: string,
  }
}

export class NumberRequest extends jspb.Message {
  getMaxval(): number;
  setMaxval(value: number): NumberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NumberRequest): NumberRequest.AsObject;
  static serializeBinaryToWriter(message: NumberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumberRequest;
  static deserializeBinaryFromReader(message: NumberRequest, reader: jspb.BinaryReader): NumberRequest;
}

export namespace NumberRequest {
  export type AsObject = {
    maxval: number,
  }
}

export class NumberResponse extends jspb.Message {
  getNum(): number;
  setNum(value: number): NumberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NumberResponse): NumberResponse.AsObject;
  static serializeBinaryToWriter(message: NumberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumberResponse;
  static deserializeBinaryFromReader(message: NumberResponse, reader: jspb.BinaryReader): NumberResponse;
}

export namespace NumberResponse {
  export type AsObject = {
    num: number,
  }
}

