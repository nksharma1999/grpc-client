/**
 * @fileoverview gRPC-Web generated client stub for randomPackage
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: proto/random.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_random_pb from '../proto/random_pb'; // proto import: "proto/random.proto"


export class RandomClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorPingPong = new grpcWeb.MethodDescriptor(
    '/randomPackage.Random/PingPong',
    grpcWeb.MethodType.UNARY,
    proto_random_pb.PingRequest,
    proto_random_pb.PongResponse,
    (request: proto_random_pb.PingRequest) => {
      return request.serializeBinary();
    },
    proto_random_pb.PongResponse.deserializeBinary
  );

  pingPong(
    request: proto_random_pb.PingRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_random_pb.PongResponse>;

  pingPong(
    request: proto_random_pb.PingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_random_pb.PongResponse) => void): grpcWeb.ClientReadableStream<proto_random_pb.PongResponse>;

  pingPong(
    request: proto_random_pb.PingRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_random_pb.PongResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/randomPackage.Random/PingPong',
        request,
        metadata || {},
        this.methodDescriptorPingPong,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/randomPackage.Random/PingPong',
    request,
    metadata || {},
    this.methodDescriptorPingPong);
  }

  methodDescriptorRandomNumber = new grpcWeb.MethodDescriptor(
    '/randomPackage.Random/RandomNumber',
    grpcWeb.MethodType.SERVER_STREAMING,
    proto_random_pb.NumberRequest,
    proto_random_pb.NumberResponse,
    (request: proto_random_pb.NumberRequest) => {
      return request.serializeBinary();
    },
    proto_random_pb.NumberResponse.deserializeBinary
  );

  randomNumber(
    request: proto_random_pb.NumberRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<proto_random_pb.NumberResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/randomPackage.Random/RandomNumber',
      request,
      metadata || {},
      this.methodDescriptorRandomNumber);
  }

}
