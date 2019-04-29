/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/widgets/DetailedParticipantInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DetailedParticipantInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.DetailedWidgetParticipantSetInfo = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.DetailedParticipantInfo);
  }
}(this, function(ApiClient, DetailedParticipantInfo) {
  'use strict';




  /**
   * The DetailedWidgetParticipantSetInfo model module.
   * @module model/widgets/DetailedWidgetParticipantSetInfo
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>DetailedWidgetParticipantSetInfo</code>.
   * @alias module:model/widgets/DetailedWidgetParticipantSetInfo
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DetailedWidgetParticipantSetInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/DetailedWidgetParticipantSetInfo} obj Optional instance to populate.
   * @return {module:model/widgets/DetailedWidgetParticipantSetInfo} The populated <code>DetailedWidgetParticipantSetInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('memberInfos')) {
        obj['memberInfos'] = ApiClient.convertToType(data['memberInfos'], [DetailedParticipantInfo]);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique identifier of the participant set. This cannot be changed as part of the PUT call.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Array of ParticipantInfo objects, containing participant-specific data (e.g. email). All participants in the array belong to the same set
   * @member {Array.<module:model/widgets/DetailedParticipantInfo>} memberInfos
   */
  exports.prototype['memberInfos'] = undefined;
  /**
   * Index indicating sequential signing group (specified for hybrid routing). This cannot be changed as part of the PUT call.
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * Role assumed by all participants in the set (signer, approver etc.). This cannot be changed as part of the PUT call.
   * @member {module:model/widgets/DetailedWidgetParticipantSetInfo.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "SIGNER"
     * @const
     */
    "SIGNER": "SIGNER",
    /**
     * value: "SENDER"
     * @const
     */
    "SENDER": "SENDER",
    /**
     * value: "APPROVER"
     * @const
     */
    "APPROVER": "APPROVER",
    /**
     * value: "ACCEPTOR"
     * @const
     */
    "ACCEPTOR": "ACCEPTOR",
    /**
     * value: "CERTIFIED_RECIPIENT"
     * @const
     */
    "CERTIFIED_RECIPIENT": "CERTIFIED_RECIPIENT",
    /**
     * value: "FORM_FILLER"
     * @const
     */
    "FORM_FILLER": "FORM_FILLER",
    /**
     * value: "DELEGATE_TO_SIGNER"
     * @const
     */
    "DELEGATE_TO_SIGNER": "DELEGATE_TO_SIGNER",
    /**
     * value: "DELEGATE_TO_APPROVER"
     * @const
     */
    "DELEGATE_TO_APPROVER": "DELEGATE_TO_APPROVER",
    /**
     * value: "DELEGATE_TO_ACCEPTOR"
     * @const
     */
    "DELEGATE_TO_ACCEPTOR": "DELEGATE_TO_ACCEPTOR",
    /**
     * value: "DELEGATE_TO_CERTIFIED_RECIPIENT"
     * @const
     */
    "DELEGATE_TO_CERTIFIED_RECIPIENT": "DELEGATE_TO_CERTIFIED_RECIPIENT",
    /**
     * value: "DELEGATE_TO_FORM_FILLER"
     * @const
     */
    "DELEGATE_TO_FORM_FILLER": "DELEGATE_TO_FORM_FILLER",
    /**
     * value: "SHARE"
     * @const
     */
    "SHARE": "SHARE"  };


  return exports;
}));

