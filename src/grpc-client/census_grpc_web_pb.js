/**
 * @fileoverview gRPC-Web generated client stub for dataexplorer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.dataexplorer = require('./census_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dataexplorer.CensusClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dataexplorer.CensusPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dataexplorer.SpatialRequest,
 *   !proto.dataexplorer.SpatialResponse>}
 */
const methodDescriptor_Census_SpatialQuery = new grpc.web.MethodDescriptor(
  '/dataexplorer.Census/SpatialQuery',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.dataexplorer.SpatialRequest,
  proto.dataexplorer.SpatialResponse,
  /**
   * @param {!proto.dataexplorer.SpatialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.SpatialResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dataexplorer.SpatialRequest,
 *   !proto.dataexplorer.SpatialResponse>}
 */
const methodInfo_Census_SpatialQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dataexplorer.SpatialResponse,
  /**
   * @param {!proto.dataexplorer.SpatialRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.SpatialResponse.deserializeBinary
);


/**
 * @param {!proto.dataexplorer.SpatialRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.SpatialResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusClient.prototype.spatialQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/SpatialQuery',
      request,
      metadata || {},
      methodDescriptor_Census_SpatialQuery);
};


/**
 * @param {!proto.dataexplorer.SpatialRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.SpatialResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusPromiseClient.prototype.spatialQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/SpatialQuery',
      request,
      metadata || {},
      methodDescriptor_Census_SpatialQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dataexplorer.OsmRequest,
 *   !proto.dataexplorer.OsmResponse>}
 */
const methodDescriptor_Census_OsmQuery = new grpc.web.MethodDescriptor(
  '/dataexplorer.Census/OsmQuery',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.dataexplorer.OsmRequest,
  proto.dataexplorer.OsmResponse,
  /**
   * @param {!proto.dataexplorer.OsmRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.OsmResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dataexplorer.OsmRequest,
 *   !proto.dataexplorer.OsmResponse>}
 */
const methodInfo_Census_OsmQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dataexplorer.OsmResponse,
  /**
   * @param {!proto.dataexplorer.OsmRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.OsmResponse.deserializeBinary
);


/**
 * @param {!proto.dataexplorer.OsmRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.OsmResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusClient.prototype.osmQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/OsmQuery',
      request,
      metadata || {},
      methodDescriptor_Census_OsmQuery);
};


/**
 * @param {!proto.dataexplorer.OsmRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.OsmResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusPromiseClient.prototype.osmQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/OsmQuery',
      request,
      metadata || {},
      methodDescriptor_Census_OsmQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dataexplorer.DatasetRequest,
 *   !proto.dataexplorer.DatasetResponse>}
 */
const methodDescriptor_Census_DatasetQuery = new grpc.web.MethodDescriptor(
  '/dataexplorer.Census/DatasetQuery',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.dataexplorer.DatasetRequest,
  proto.dataexplorer.DatasetResponse,
  /**
   * @param {!proto.dataexplorer.DatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.DatasetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dataexplorer.DatasetRequest,
 *   !proto.dataexplorer.DatasetResponse>}
 */
const methodInfo_Census_DatasetQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dataexplorer.DatasetResponse,
  /**
   * @param {!proto.dataexplorer.DatasetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.DatasetResponse.deserializeBinary
);


/**
 * @param {!proto.dataexplorer.DatasetRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.DatasetResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusClient.prototype.datasetQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/DatasetQuery',
      request,
      metadata || {},
      methodDescriptor_Census_DatasetQuery);
};


/**
 * @param {!proto.dataexplorer.DatasetRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.DatasetResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusPromiseClient.prototype.datasetQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/DatasetQuery',
      request,
      metadata || {},
      methodDescriptor_Census_DatasetQuery);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.dataexplorer.TargetedCensusRequest,
 *   !proto.dataexplorer.TargetedCensusResponse>}
 */
const methodDescriptor_Census_ExecuteTargetedCensusQuery = new grpc.web.MethodDescriptor(
  '/dataexplorer.Census/ExecuteTargetedCensusQuery',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.dataexplorer.TargetedCensusRequest,
  proto.dataexplorer.TargetedCensusResponse,
  /**
   * @param {!proto.dataexplorer.TargetedCensusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.TargetedCensusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dataexplorer.TargetedCensusRequest,
 *   !proto.dataexplorer.TargetedCensusResponse>}
 */
const methodInfo_Census_ExecuteTargetedCensusQuery = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dataexplorer.TargetedCensusResponse,
  /**
   * @param {!proto.dataexplorer.TargetedCensusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.dataexplorer.TargetedCensusResponse.deserializeBinary
);


/**
 * @param {!proto.dataexplorer.TargetedCensusRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.TargetedCensusResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusClient.prototype.executeTargetedCensusQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/ExecuteTargetedCensusQuery',
      request,
      metadata || {},
      methodDescriptor_Census_ExecuteTargetedCensusQuery);
};


/**
 * @param {!proto.dataexplorer.TargetedCensusRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dataexplorer.TargetedCensusResponse>}
 *     The XHR Node Readable Stream
 */
proto.dataexplorer.CensusPromiseClient.prototype.executeTargetedCensusQuery =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dataexplorer.Census/ExecuteTargetedCensusQuery',
      request,
      metadata || {},
      methodDescriptor_Census_ExecuteTargetedCensusQuery);
};


module.exports = proto.dataexplorer;

