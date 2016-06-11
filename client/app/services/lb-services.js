// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Fecha
 * @header lbServices.Fecha
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Fecha` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Fecha",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Fechas/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Fecha.partidos.findById() instead.
        "prototype$__findById__partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fechas/:id/partidos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Fecha.partidos.destroyById() instead.
        "prototype$__destroyById__partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fechas/:id/partidos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Fecha.partidos.updateById() instead.
        "prototype$__updateById__partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fechas/:id/partidos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Fecha.partidos() instead.
        "prototype$__get__partidos": {
          isArray: true,
          url: urlBase + "/Fechas/:id/partidos",
          method: "GET"
        },

        // INTERNAL. Use Fecha.partidos.create() instead.
        "prototype$__create__partidos": {
          url: urlBase + "/Fechas/:id/partidos",
          method: "POST"
        },

        // INTERNAL. Use Fecha.partidos.destroyAll() instead.
        "prototype$__delete__partidos": {
          url: urlBase + "/Fechas/:id/partidos",
          method: "DELETE"
        },

        // INTERNAL. Use Fecha.partidos.count() instead.
        "prototype$__count__partidos": {
          url: urlBase + "/Fechas/:id/partidos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#create
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Fechas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#createMany
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Fechas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#upsert
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Fechas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#exists
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Fechas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#findById
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Fechas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#find
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Fechas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#findOne
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Fechas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#updateAll
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Fechas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#deleteById
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Fechas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#count
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Fechas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#prototype$updateAttributes
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Fechas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fecha#createChangeStream
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Fechas/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Partido.fecha() instead.
        "::get::Partido::fecha": {
          url: urlBase + "/Partidos/:id/fecha",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Fecha#updateOrCreate
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Fecha#update
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Fecha#destroyById
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Fecha#removeById
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Fecha#modelName
    * @propertyOf lbServices.Fecha
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Fecha`.
    */
    R.modelName = "Fecha";

    /**
     * @ngdoc object
     * @name lbServices.Fecha.partidos
     * @header lbServices.Fecha.partidos
     * @object
     * @description
     *
     * The object `Fecha.partidos` groups methods
     * manipulating `Partido` instances related to `Fecha`.
     *
     * Call {@link lbServices.Fecha#partidos Fecha.partidos()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Fecha#partidos
         * @methodOf lbServices.Fecha
         *
         * @description
         *
         * Queries partidos of Fecha.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::get::Fecha::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fecha.partidos#count
         * @methodOf lbServices.Fecha.partidos
         *
         * @description
         *
         * Counts partidos of Fecha.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.partidos.count = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::count::Fecha::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fecha.partidos#create
         * @methodOf lbServices.Fecha.partidos
         *
         * @description
         *
         * Creates a new instance in partidos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.create = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::create::Fecha::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fecha.partidos#createMany
         * @methodOf lbServices.Fecha.partidos
         *
         * @description
         *
         * Creates a new instance in partidos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.createMany = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::createMany::Fecha::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fecha.partidos#destroyAll
         * @methodOf lbServices.Fecha.partidos
         *
         * @description
         *
         * Deletes all partidos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.partidos.destroyAll = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::delete::Fecha::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fecha.partidos#destroyById
         * @methodOf lbServices.Fecha.partidos
         *
         * @description
         *
         * Delete a related item by id for partidos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partidos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.partidos.destroyById = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::destroyById::Fecha::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fecha.partidos#findById
         * @methodOf lbServices.Fecha.partidos
         *
         * @description
         *
         * Find a related item by id for partidos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partidos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.findById = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::findById::Fecha::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Fecha.partidos#updateById
         * @methodOf lbServices.Fecha.partidos
         *
         * @description
         *
         * Update a related item by id for partidos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partidos
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.updateById = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::updateById::Fecha::partidos"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Partido
 * @header lbServices.Partido
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Partido` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Partido",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Partidos/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Partido.fecha() instead.
        "prototype$__get__fecha": {
          url: urlBase + "/Partidos/:id/fecha",
          method: "GET"
        },

        // INTERNAL. Use Partido.local() instead.
        "prototype$__get__local": {
          url: urlBase + "/Partidos/:id/local",
          method: "GET"
        },

        // INTERNAL. Use Partido.visitante() instead.
        "prototype$__get__visitante": {
          url: urlBase + "/Partidos/:id/visitante",
          method: "GET"
        },

        // INTERNAL. Use Partido.goles.findById() instead.
        "prototype$__findById__goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/goles/:fk",
          method: "GET"
        },

        // INTERNAL. Use Partido.goles.destroyById() instead.
        "prototype$__destroyById__goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/goles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.goles.updateById() instead.
        "prototype$__updateById__goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/goles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Partido.tarjetas.findById() instead.
        "prototype$__findById__tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/tarjetas/:fk",
          method: "GET"
        },

        // INTERNAL. Use Partido.tarjetas.destroyById() instead.
        "prototype$__destroyById__tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/tarjetas/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.tarjetas.updateById() instead.
        "prototype$__updateById__tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/tarjetas/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Partido.goles() instead.
        "prototype$__get__goles": {
          isArray: true,
          url: urlBase + "/Partidos/:id/goles",
          method: "GET"
        },

        // INTERNAL. Use Partido.goles.create() instead.
        "prototype$__create__goles": {
          url: urlBase + "/Partidos/:id/goles",
          method: "POST"
        },

        // INTERNAL. Use Partido.goles.destroyAll() instead.
        "prototype$__delete__goles": {
          url: urlBase + "/Partidos/:id/goles",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.goles.count() instead.
        "prototype$__count__goles": {
          url: urlBase + "/Partidos/:id/goles/count",
          method: "GET"
        },

        // INTERNAL. Use Partido.tarjetas() instead.
        "prototype$__get__tarjetas": {
          isArray: true,
          url: urlBase + "/Partidos/:id/tarjetas",
          method: "GET"
        },

        // INTERNAL. Use Partido.tarjetas.create() instead.
        "prototype$__create__tarjetas": {
          url: urlBase + "/Partidos/:id/tarjetas",
          method: "POST"
        },

        // INTERNAL. Use Partido.tarjetas.destroyAll() instead.
        "prototype$__delete__tarjetas": {
          url: urlBase + "/Partidos/:id/tarjetas",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.tarjetas.count() instead.
        "prototype$__count__tarjetas": {
          url: urlBase + "/Partidos/:id/tarjetas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#create
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Partidos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#createMany
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Partidos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#upsert
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Partidos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#exists
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Partidos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#findById
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Partidos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#find
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Partidos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#findOne
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Partidos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#updateAll
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Partidos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#deleteById
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Partidos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#count
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Partidos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#prototype$updateAttributes
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Partidos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partido#createChangeStream
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Partidos/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Fecha.partidos.findById() instead.
        "::findById::Fecha::partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fechas/:id/partidos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Fecha.partidos.destroyById() instead.
        "::destroyById::Fecha::partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fechas/:id/partidos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Fecha.partidos.updateById() instead.
        "::updateById::Fecha::partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Fechas/:id/partidos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Fecha.partidos() instead.
        "::get::Fecha::partidos": {
          isArray: true,
          url: urlBase + "/Fechas/:id/partidos",
          method: "GET"
        },

        // INTERNAL. Use Fecha.partidos.create() instead.
        "::create::Fecha::partidos": {
          url: urlBase + "/Fechas/:id/partidos",
          method: "POST"
        },

        // INTERNAL. Use Fecha.partidos.createMany() instead.
        "::createMany::Fecha::partidos": {
          isArray: true,
          url: urlBase + "/Fechas/:id/partidos",
          method: "POST"
        },

        // INTERNAL. Use Fecha.partidos.destroyAll() instead.
        "::delete::Fecha::partidos": {
          url: urlBase + "/Fechas/:id/partidos",
          method: "DELETE"
        },

        // INTERNAL. Use Fecha.partidos.count() instead.
        "::count::Fecha::partidos": {
          url: urlBase + "/Fechas/:id/partidos/count",
          method: "GET"
        },

        // INTERNAL. Use Equipo.partidos.findById() instead.
        "::findById::Equipo::partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/partidos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Equipo.partidos.destroyById() instead.
        "::destroyById::Equipo::partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/partidos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.partidos.updateById() instead.
        "::updateById::Equipo::partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/partidos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Equipo.partidos() instead.
        "::get::Equipo::partidos": {
          isArray: true,
          url: urlBase + "/Equipos/:id/partidos",
          method: "GET"
        },

        // INTERNAL. Use Equipo.partidos.create() instead.
        "::create::Equipo::partidos": {
          url: urlBase + "/Equipos/:id/partidos",
          method: "POST"
        },

        // INTERNAL. Use Equipo.partidos.createMany() instead.
        "::createMany::Equipo::partidos": {
          isArray: true,
          url: urlBase + "/Equipos/:id/partidos",
          method: "POST"
        },

        // INTERNAL. Use Equipo.partidos.destroyAll() instead.
        "::delete::Equipo::partidos": {
          url: urlBase + "/Equipos/:id/partidos",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.partidos.count() instead.
        "::count::Equipo::partidos": {
          url: urlBase + "/Equipos/:id/partidos/count",
          method: "GET"
        },

        // INTERNAL. Use Gol.partido() instead.
        "::get::Gol::partido": {
          url: urlBase + "/Gols/:id/partido",
          method: "GET"
        },

        // INTERNAL. Use Tarjeta.partido() instead.
        "::get::Tarjeta::partido": {
          url: urlBase + "/Tarjeta/:id/partido",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Partido#updateOrCreate
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Partido#update
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Partido#destroyById
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Partido#removeById
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Partido#modelName
    * @propertyOf lbServices.Partido
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Partido`.
    */
    R.modelName = "Partido";


        /**
         * @ngdoc method
         * @name lbServices.Partido#fecha
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Fetches belongsTo relation fecha.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fecha` object.)
         * </em>
         */
        R.fecha = function() {
          var TargetResource = $injector.get("Fecha");
          var action = TargetResource["::get::Partido::fecha"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido#local
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Fetches belongsTo relation local.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        R.local = function() {
          var TargetResource = $injector.get("Equipo");
          var action = TargetResource["::get::Partido::local"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido#visitante
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Fetches belongsTo relation visitante.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        R.visitante = function() {
          var TargetResource = $injector.get("Equipo");
          var action = TargetResource["::get::Partido::visitante"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Partido.goles
     * @header lbServices.Partido.goles
     * @object
     * @description
     *
     * The object `Partido.goles` groups methods
     * manipulating `Gol` instances related to `Partido`.
     *
     * Call {@link lbServices.Partido#goles Partido.goles()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Partido#goles
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Queries goles of Partido.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::get::Partido::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.goles#count
         * @methodOf lbServices.Partido.goles
         *
         * @description
         *
         * Counts goles of Partido.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.goles.count = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::count::Partido::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.goles#create
         * @methodOf lbServices.Partido.goles
         *
         * @description
         *
         * Creates a new instance in goles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.create = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::create::Partido::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.goles#createMany
         * @methodOf lbServices.Partido.goles
         *
         * @description
         *
         * Creates a new instance in goles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.createMany = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::createMany::Partido::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.goles#destroyAll
         * @methodOf lbServices.Partido.goles
         *
         * @description
         *
         * Deletes all goles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.goles.destroyAll = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::delete::Partido::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.goles#destroyById
         * @methodOf lbServices.Partido.goles
         *
         * @description
         *
         * Delete a related item by id for goles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for goles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.goles.destroyById = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::destroyById::Partido::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.goles#findById
         * @methodOf lbServices.Partido.goles
         *
         * @description
         *
         * Find a related item by id for goles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for goles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.findById = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::findById::Partido::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.goles#updateById
         * @methodOf lbServices.Partido.goles
         *
         * @description
         *
         * Update a related item by id for goles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for goles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.updateById = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::updateById::Partido::goles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Partido.tarjetas
     * @header lbServices.Partido.tarjetas
     * @object
     * @description
     *
     * The object `Partido.tarjetas` groups methods
     * manipulating `Tarjeta` instances related to `Partido`.
     *
     * Call {@link lbServices.Partido#tarjetas Partido.tarjetas()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Partido#tarjetas
         * @methodOf lbServices.Partido
         *
         * @description
         *
         * Queries tarjetas of Partido.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::get::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.tarjetas#count
         * @methodOf lbServices.Partido.tarjetas
         *
         * @description
         *
         * Counts tarjetas of Partido.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tarjetas.count = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::count::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.tarjetas#create
         * @methodOf lbServices.Partido.tarjetas
         *
         * @description
         *
         * Creates a new instance in tarjetas of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.create = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::create::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.tarjetas#createMany
         * @methodOf lbServices.Partido.tarjetas
         *
         * @description
         *
         * Creates a new instance in tarjetas of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.createMany = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::createMany::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.tarjetas#destroyAll
         * @methodOf lbServices.Partido.tarjetas
         *
         * @description
         *
         * Deletes all tarjetas of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tarjetas.destroyAll = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::delete::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.tarjetas#destroyById
         * @methodOf lbServices.Partido.tarjetas
         *
         * @description
         *
         * Delete a related item by id for tarjetas.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tarjetas
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tarjetas.destroyById = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::destroyById::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.tarjetas#findById
         * @methodOf lbServices.Partido.tarjetas
         *
         * @description
         *
         * Find a related item by id for tarjetas.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tarjetas
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.findById = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::findById::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Partido.tarjetas#updateById
         * @methodOf lbServices.Partido.tarjetas
         *
         * @description
         *
         * Update a related item by id for tarjetas.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tarjetas
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.updateById = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::updateById::Partido::tarjetas"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Equipo
 * @header lbServices.Equipo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Equipo` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Equipo",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Equipos/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Equipo.partidos.findById() instead.
        "prototype$__findById__partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/partidos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Equipo.partidos.destroyById() instead.
        "prototype$__destroyById__partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/partidos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.partidos.updateById() instead.
        "prototype$__updateById__partidos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/partidos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Equipo.jugadores.findById() instead.
        "prototype$__findById__jugadores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/jugadores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Equipo.jugadores.destroyById() instead.
        "prototype$__destroyById__jugadores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/jugadores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.jugadores.updateById() instead.
        "prototype$__updateById__jugadores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/jugadores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Equipo.partidos() instead.
        "prototype$__get__partidos": {
          isArray: true,
          url: urlBase + "/Equipos/:id/partidos",
          method: "GET"
        },

        // INTERNAL. Use Equipo.partidos.create() instead.
        "prototype$__create__partidos": {
          url: urlBase + "/Equipos/:id/partidos",
          method: "POST"
        },

        // INTERNAL. Use Equipo.partidos.destroyAll() instead.
        "prototype$__delete__partidos": {
          url: urlBase + "/Equipos/:id/partidos",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.partidos.count() instead.
        "prototype$__count__partidos": {
          url: urlBase + "/Equipos/:id/partidos/count",
          method: "GET"
        },

        // INTERNAL. Use Equipo.jugadores() instead.
        "prototype$__get__jugadores": {
          isArray: true,
          url: urlBase + "/Equipos/:id/jugadores",
          method: "GET"
        },

        // INTERNAL. Use Equipo.jugadores.create() instead.
        "prototype$__create__jugadores": {
          url: urlBase + "/Equipos/:id/jugadores",
          method: "POST"
        },

        // INTERNAL. Use Equipo.jugadores.destroyAll() instead.
        "prototype$__delete__jugadores": {
          url: urlBase + "/Equipos/:id/jugadores",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.jugadores.count() instead.
        "prototype$__count__jugadores": {
          url: urlBase + "/Equipos/:id/jugadores/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#create
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Equipos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#createMany
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Equipos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#upsert
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Equipos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#exists
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Equipos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#findById
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Equipos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#find
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Equipos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#findOne
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Equipos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#updateAll
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Equipos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#deleteById
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Equipos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#count
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Equipos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#prototype$updateAttributes
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Equipos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Equipo#createChangeStream
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Equipos/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Partido.local() instead.
        "::get::Partido::local": {
          url: urlBase + "/Partidos/:id/local",
          method: "GET"
        },

        // INTERNAL. Use Partido.visitante() instead.
        "::get::Partido::visitante": {
          url: urlBase + "/Partidos/:id/visitante",
          method: "GET"
        },

        // INTERNAL. Use Jugador.equipo() instead.
        "::get::Jugador::equipo": {
          url: urlBase + "/Jugadors/:id/equipo",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Equipo#updateOrCreate
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Equipo#update
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Equipo#destroyById
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Equipo#removeById
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Equipo#modelName
    * @propertyOf lbServices.Equipo
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Equipo`.
    */
    R.modelName = "Equipo";

    /**
     * @ngdoc object
     * @name lbServices.Equipo.partidos
     * @header lbServices.Equipo.partidos
     * @object
     * @description
     *
     * The object `Equipo.partidos` groups methods
     * manipulating `Partido` instances related to `Equipo`.
     *
     * Call {@link lbServices.Equipo#partidos Equipo.partidos()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Equipo#partidos
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Queries partidos of Equipo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::get::Equipo::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.partidos#count
         * @methodOf lbServices.Equipo.partidos
         *
         * @description
         *
         * Counts partidos of Equipo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.partidos.count = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::count::Equipo::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.partidos#create
         * @methodOf lbServices.Equipo.partidos
         *
         * @description
         *
         * Creates a new instance in partidos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.create = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::create::Equipo::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.partidos#createMany
         * @methodOf lbServices.Equipo.partidos
         *
         * @description
         *
         * Creates a new instance in partidos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.createMany = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::createMany::Equipo::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.partidos#destroyAll
         * @methodOf lbServices.Equipo.partidos
         *
         * @description
         *
         * Deletes all partidos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.partidos.destroyAll = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::delete::Equipo::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.partidos#destroyById
         * @methodOf lbServices.Equipo.partidos
         *
         * @description
         *
         * Delete a related item by id for partidos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partidos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.partidos.destroyById = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::destroyById::Equipo::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.partidos#findById
         * @methodOf lbServices.Equipo.partidos
         *
         * @description
         *
         * Find a related item by id for partidos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partidos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.findById = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::findById::Equipo::partidos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.partidos#updateById
         * @methodOf lbServices.Equipo.partidos
         *
         * @description
         *
         * Update a related item by id for partidos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partidos
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partidos.updateById = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::updateById::Equipo::partidos"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Equipo.jugadores
     * @header lbServices.Equipo.jugadores
     * @object
     * @description
     *
     * The object `Equipo.jugadores` groups methods
     * manipulating `Jugador` instances related to `Equipo`.
     *
     * Call {@link lbServices.Equipo#jugadores Equipo.jugadores()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Equipo#jugadores
         * @methodOf lbServices.Equipo
         *
         * @description
         *
         * Queries jugadores of Equipo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R.jugadores = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::get::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.jugadores#count
         * @methodOf lbServices.Equipo.jugadores
         *
         * @description
         *
         * Counts jugadores of Equipo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.jugadores.count = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::count::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.jugadores#create
         * @methodOf lbServices.Equipo.jugadores
         *
         * @description
         *
         * Creates a new instance in jugadores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R.jugadores.create = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::create::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.jugadores#createMany
         * @methodOf lbServices.Equipo.jugadores
         *
         * @description
         *
         * Creates a new instance in jugadores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R.jugadores.createMany = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::createMany::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.jugadores#destroyAll
         * @methodOf lbServices.Equipo.jugadores
         *
         * @description
         *
         * Deletes all jugadores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.jugadores.destroyAll = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::delete::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.jugadores#destroyById
         * @methodOf lbServices.Equipo.jugadores
         *
         * @description
         *
         * Delete a related item by id for jugadores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for jugadores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.jugadores.destroyById = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::destroyById::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.jugadores#findById
         * @methodOf lbServices.Equipo.jugadores
         *
         * @description
         *
         * Find a related item by id for jugadores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for jugadores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R.jugadores.findById = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::findById::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Equipo.jugadores#updateById
         * @methodOf lbServices.Equipo.jugadores
         *
         * @description
         *
         * Update a related item by id for jugadores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for jugadores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R.jugadores.updateById = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::updateById::Equipo::jugadores"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Jugador
 * @header lbServices.Jugador
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Jugador` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Jugador",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Jugadors/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Jugador.equipo() instead.
        "prototype$__get__equipo": {
          url: urlBase + "/Jugadors/:id/equipo",
          method: "GET"
        },

        // INTERNAL. Use Jugador.goles.findById() instead.
        "prototype$__findById__goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/goles/:fk",
          method: "GET"
        },

        // INTERNAL. Use Jugador.goles.destroyById() instead.
        "prototype$__destroyById__goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/goles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.goles.updateById() instead.
        "prototype$__updateById__goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/goles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Jugador.tarjetas.findById() instead.
        "prototype$__findById__tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/tarjetas/:fk",
          method: "GET"
        },

        // INTERNAL. Use Jugador.tarjetas.destroyById() instead.
        "prototype$__destroyById__tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/tarjetas/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.tarjetas.updateById() instead.
        "prototype$__updateById__tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/tarjetas/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Jugador.goles() instead.
        "prototype$__get__goles": {
          isArray: true,
          url: urlBase + "/Jugadors/:id/goles",
          method: "GET"
        },

        // INTERNAL. Use Jugador.goles.create() instead.
        "prototype$__create__goles": {
          url: urlBase + "/Jugadors/:id/goles",
          method: "POST"
        },

        // INTERNAL. Use Jugador.goles.destroyAll() instead.
        "prototype$__delete__goles": {
          url: urlBase + "/Jugadors/:id/goles",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.goles.count() instead.
        "prototype$__count__goles": {
          url: urlBase + "/Jugadors/:id/goles/count",
          method: "GET"
        },

        // INTERNAL. Use Jugador.tarjetas() instead.
        "prototype$__get__tarjetas": {
          isArray: true,
          url: urlBase + "/Jugadors/:id/tarjetas",
          method: "GET"
        },

        // INTERNAL. Use Jugador.tarjetas.create() instead.
        "prototype$__create__tarjetas": {
          url: urlBase + "/Jugadors/:id/tarjetas",
          method: "POST"
        },

        // INTERNAL. Use Jugador.tarjetas.destroyAll() instead.
        "prototype$__delete__tarjetas": {
          url: urlBase + "/Jugadors/:id/tarjetas",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.tarjetas.count() instead.
        "prototype$__count__tarjetas": {
          url: urlBase + "/Jugadors/:id/tarjetas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#create
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Jugadors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#createMany
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Jugadors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#upsert
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Jugadors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#exists
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Jugadors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#findById
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Jugadors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#find
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Jugadors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#findOne
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Jugadors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#updateAll
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Jugadors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#deleteById
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Jugadors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#count
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Jugadors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#prototype$updateAttributes
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Jugadors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Jugador#createChangeStream
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Jugadors/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Equipo.jugadores.findById() instead.
        "::findById::Equipo::jugadores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/jugadores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Equipo.jugadores.destroyById() instead.
        "::destroyById::Equipo::jugadores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/jugadores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.jugadores.updateById() instead.
        "::updateById::Equipo::jugadores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Equipos/:id/jugadores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Equipo.jugadores() instead.
        "::get::Equipo::jugadores": {
          isArray: true,
          url: urlBase + "/Equipos/:id/jugadores",
          method: "GET"
        },

        // INTERNAL. Use Equipo.jugadores.create() instead.
        "::create::Equipo::jugadores": {
          url: urlBase + "/Equipos/:id/jugadores",
          method: "POST"
        },

        // INTERNAL. Use Equipo.jugadores.createMany() instead.
        "::createMany::Equipo::jugadores": {
          isArray: true,
          url: urlBase + "/Equipos/:id/jugadores",
          method: "POST"
        },

        // INTERNAL. Use Equipo.jugadores.destroyAll() instead.
        "::delete::Equipo::jugadores": {
          url: urlBase + "/Equipos/:id/jugadores",
          method: "DELETE"
        },

        // INTERNAL. Use Equipo.jugadores.count() instead.
        "::count::Equipo::jugadores": {
          url: urlBase + "/Equipos/:id/jugadores/count",
          method: "GET"
        },

        // INTERNAL. Use Gol.jugador() instead.
        "::get::Gol::jugador": {
          url: urlBase + "/Gols/:id/jugador",
          method: "GET"
        },

        // INTERNAL. Use Tarjeta.jugador() instead.
        "::get::Tarjeta::jugador": {
          url: urlBase + "/Tarjeta/:id/jugador",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Jugador#updateOrCreate
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Jugador#update
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Jugador#destroyById
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Jugador#removeById
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Jugador#modelName
    * @propertyOf lbServices.Jugador
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Jugador`.
    */
    R.modelName = "Jugador";


        /**
         * @ngdoc method
         * @name lbServices.Jugador#equipo
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Fetches belongsTo relation equipo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Equipo` object.)
         * </em>
         */
        R.equipo = function() {
          var TargetResource = $injector.get("Equipo");
          var action = TargetResource["::get::Jugador::equipo"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Jugador.goles
     * @header lbServices.Jugador.goles
     * @object
     * @description
     *
     * The object `Jugador.goles` groups methods
     * manipulating `Gol` instances related to `Jugador`.
     *
     * Call {@link lbServices.Jugador#goles Jugador.goles()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Jugador#goles
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Queries goles of Jugador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::get::Jugador::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.goles#count
         * @methodOf lbServices.Jugador.goles
         *
         * @description
         *
         * Counts goles of Jugador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.goles.count = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::count::Jugador::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.goles#create
         * @methodOf lbServices.Jugador.goles
         *
         * @description
         *
         * Creates a new instance in goles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.create = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::create::Jugador::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.goles#createMany
         * @methodOf lbServices.Jugador.goles
         *
         * @description
         *
         * Creates a new instance in goles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.createMany = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::createMany::Jugador::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.goles#destroyAll
         * @methodOf lbServices.Jugador.goles
         *
         * @description
         *
         * Deletes all goles of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.goles.destroyAll = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::delete::Jugador::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.goles#destroyById
         * @methodOf lbServices.Jugador.goles
         *
         * @description
         *
         * Delete a related item by id for goles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for goles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.goles.destroyById = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::destroyById::Jugador::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.goles#findById
         * @methodOf lbServices.Jugador.goles
         *
         * @description
         *
         * Find a related item by id for goles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for goles
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.findById = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::findById::Jugador::goles"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.goles#updateById
         * @methodOf lbServices.Jugador.goles
         *
         * @description
         *
         * Update a related item by id for goles.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for goles
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R.goles.updateById = function() {
          var TargetResource = $injector.get("Gol");
          var action = TargetResource["::updateById::Jugador::goles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Jugador.tarjetas
     * @header lbServices.Jugador.tarjetas
     * @object
     * @description
     *
     * The object `Jugador.tarjetas` groups methods
     * manipulating `Tarjeta` instances related to `Jugador`.
     *
     * Call {@link lbServices.Jugador#tarjetas Jugador.tarjetas()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Jugador#tarjetas
         * @methodOf lbServices.Jugador
         *
         * @description
         *
         * Queries tarjetas of Jugador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::get::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.tarjetas#count
         * @methodOf lbServices.Jugador.tarjetas
         *
         * @description
         *
         * Counts tarjetas of Jugador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.tarjetas.count = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::count::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.tarjetas#create
         * @methodOf lbServices.Jugador.tarjetas
         *
         * @description
         *
         * Creates a new instance in tarjetas of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.create = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::create::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.tarjetas#createMany
         * @methodOf lbServices.Jugador.tarjetas
         *
         * @description
         *
         * Creates a new instance in tarjetas of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.createMany = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::createMany::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.tarjetas#destroyAll
         * @methodOf lbServices.Jugador.tarjetas
         *
         * @description
         *
         * Deletes all tarjetas of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tarjetas.destroyAll = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::delete::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.tarjetas#destroyById
         * @methodOf lbServices.Jugador.tarjetas
         *
         * @description
         *
         * Delete a related item by id for tarjetas.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tarjetas
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.tarjetas.destroyById = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::destroyById::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.tarjetas#findById
         * @methodOf lbServices.Jugador.tarjetas
         *
         * @description
         *
         * Find a related item by id for tarjetas.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tarjetas
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.findById = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::findById::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Jugador.tarjetas#updateById
         * @methodOf lbServices.Jugador.tarjetas
         *
         * @description
         *
         * Update a related item by id for tarjetas.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for tarjetas
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R.tarjetas.updateById = function() {
          var TargetResource = $injector.get("Tarjeta");
          var action = TargetResource["::updateById::Jugador::tarjetas"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Gol
 * @header lbServices.Gol
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Gol` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Gol",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Gols/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Gol.partido() instead.
        "prototype$__get__partido": {
          url: urlBase + "/Gols/:id/partido",
          method: "GET"
        },

        // INTERNAL. Use Gol.jugador() instead.
        "prototype$__get__jugador": {
          url: urlBase + "/Gols/:id/jugador",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#create
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Gols",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#createMany
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Gols",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#upsert
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Gols",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#exists
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Gols/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#findById
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Gols/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#find
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Gols",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#findOne
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Gols/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#updateAll
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Gols/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#deleteById
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Gols/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#count
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Gols/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#prototype$updateAttributes
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Gols/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Gol#createChangeStream
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Gols/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Partido.goles.findById() instead.
        "::findById::Partido::goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/goles/:fk",
          method: "GET"
        },

        // INTERNAL. Use Partido.goles.destroyById() instead.
        "::destroyById::Partido::goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/goles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.goles.updateById() instead.
        "::updateById::Partido::goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/goles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Partido.goles() instead.
        "::get::Partido::goles": {
          isArray: true,
          url: urlBase + "/Partidos/:id/goles",
          method: "GET"
        },

        // INTERNAL. Use Partido.goles.create() instead.
        "::create::Partido::goles": {
          url: urlBase + "/Partidos/:id/goles",
          method: "POST"
        },

        // INTERNAL. Use Partido.goles.createMany() instead.
        "::createMany::Partido::goles": {
          isArray: true,
          url: urlBase + "/Partidos/:id/goles",
          method: "POST"
        },

        // INTERNAL. Use Partido.goles.destroyAll() instead.
        "::delete::Partido::goles": {
          url: urlBase + "/Partidos/:id/goles",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.goles.count() instead.
        "::count::Partido::goles": {
          url: urlBase + "/Partidos/:id/goles/count",
          method: "GET"
        },

        // INTERNAL. Use Jugador.goles.findById() instead.
        "::findById::Jugador::goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/goles/:fk",
          method: "GET"
        },

        // INTERNAL. Use Jugador.goles.destroyById() instead.
        "::destroyById::Jugador::goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/goles/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.goles.updateById() instead.
        "::updateById::Jugador::goles": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/goles/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Jugador.goles() instead.
        "::get::Jugador::goles": {
          isArray: true,
          url: urlBase + "/Jugadors/:id/goles",
          method: "GET"
        },

        // INTERNAL. Use Jugador.goles.create() instead.
        "::create::Jugador::goles": {
          url: urlBase + "/Jugadors/:id/goles",
          method: "POST"
        },

        // INTERNAL. Use Jugador.goles.createMany() instead.
        "::createMany::Jugador::goles": {
          isArray: true,
          url: urlBase + "/Jugadors/:id/goles",
          method: "POST"
        },

        // INTERNAL. Use Jugador.goles.destroyAll() instead.
        "::delete::Jugador::goles": {
          url: urlBase + "/Jugadors/:id/goles",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.goles.count() instead.
        "::count::Jugador::goles": {
          url: urlBase + "/Jugadors/:id/goles/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Gol#updateOrCreate
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Gol#update
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Gol#destroyById
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Gol#removeById
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Gol` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Gol#modelName
    * @propertyOf lbServices.Gol
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Gol`.
    */
    R.modelName = "Gol";


        /**
         * @ngdoc method
         * @name lbServices.Gol#partido
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Fetches belongsTo relation partido.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partido = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::get::Gol::partido"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Gol#jugador
         * @methodOf lbServices.Gol
         *
         * @description
         *
         * Fetches belongsTo relation jugador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R.jugador = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::get::Gol::jugador"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Tarjeta
 * @header lbServices.Tarjeta
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Tarjeta` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Tarjeta",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Tarjeta/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Tarjeta.partido() instead.
        "prototype$__get__partido": {
          url: urlBase + "/Tarjeta/:id/partido",
          method: "GET"
        },

        // INTERNAL. Use Tarjeta.jugador() instead.
        "prototype$__get__jugador": {
          url: urlBase + "/Tarjeta/:id/jugador",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#create
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Tarjeta",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#createMany
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Tarjeta",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#upsert
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Tarjeta",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#exists
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Tarjeta/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#findById
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Tarjeta/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#find
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Tarjeta",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#findOne
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Tarjeta/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#updateAll
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Tarjeta/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#deleteById
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Tarjeta/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#count
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Tarjeta/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#prototype$updateAttributes
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Tarjeta/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#createChangeStream
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Tarjeta/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Partido.tarjetas.findById() instead.
        "::findById::Partido::tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/tarjetas/:fk",
          method: "GET"
        },

        // INTERNAL. Use Partido.tarjetas.destroyById() instead.
        "::destroyById::Partido::tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/tarjetas/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.tarjetas.updateById() instead.
        "::updateById::Partido::tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Partidos/:id/tarjetas/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Partido.tarjetas() instead.
        "::get::Partido::tarjetas": {
          isArray: true,
          url: urlBase + "/Partidos/:id/tarjetas",
          method: "GET"
        },

        // INTERNAL. Use Partido.tarjetas.create() instead.
        "::create::Partido::tarjetas": {
          url: urlBase + "/Partidos/:id/tarjetas",
          method: "POST"
        },

        // INTERNAL. Use Partido.tarjetas.createMany() instead.
        "::createMany::Partido::tarjetas": {
          isArray: true,
          url: urlBase + "/Partidos/:id/tarjetas",
          method: "POST"
        },

        // INTERNAL. Use Partido.tarjetas.destroyAll() instead.
        "::delete::Partido::tarjetas": {
          url: urlBase + "/Partidos/:id/tarjetas",
          method: "DELETE"
        },

        // INTERNAL. Use Partido.tarjetas.count() instead.
        "::count::Partido::tarjetas": {
          url: urlBase + "/Partidos/:id/tarjetas/count",
          method: "GET"
        },

        // INTERNAL. Use Jugador.tarjetas.findById() instead.
        "::findById::Jugador::tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/tarjetas/:fk",
          method: "GET"
        },

        // INTERNAL. Use Jugador.tarjetas.destroyById() instead.
        "::destroyById::Jugador::tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/tarjetas/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.tarjetas.updateById() instead.
        "::updateById::Jugador::tarjetas": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Jugadors/:id/tarjetas/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Jugador.tarjetas() instead.
        "::get::Jugador::tarjetas": {
          isArray: true,
          url: urlBase + "/Jugadors/:id/tarjetas",
          method: "GET"
        },

        // INTERNAL. Use Jugador.tarjetas.create() instead.
        "::create::Jugador::tarjetas": {
          url: urlBase + "/Jugadors/:id/tarjetas",
          method: "POST"
        },

        // INTERNAL. Use Jugador.tarjetas.createMany() instead.
        "::createMany::Jugador::tarjetas": {
          isArray: true,
          url: urlBase + "/Jugadors/:id/tarjetas",
          method: "POST"
        },

        // INTERNAL. Use Jugador.tarjetas.destroyAll() instead.
        "::delete::Jugador::tarjetas": {
          url: urlBase + "/Jugadors/:id/tarjetas",
          method: "DELETE"
        },

        // INTERNAL. Use Jugador.tarjetas.count() instead.
        "::count::Jugador::tarjetas": {
          url: urlBase + "/Jugadors/:id/tarjetas/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#updateOrCreate
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#update
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#destroyById
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#removeById
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Tarjeta` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Tarjeta#modelName
    * @propertyOf lbServices.Tarjeta
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Tarjeta`.
    */
    R.modelName = "Tarjeta";


        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#partido
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Fetches belongsTo relation partido.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partido` object.)
         * </em>
         */
        R.partido = function() {
          var TargetResource = $injector.get("Partido");
          var action = TargetResource["::get::Tarjeta::partido"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Tarjeta#jugador
         * @methodOf lbServices.Tarjeta
         *
         * @description
         *
         * Fetches belongsTo relation jugador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Jugador` object.)
         * </em>
         */
        R.jugador = function() {
          var TargetResource = $injector.get("Jugador");
          var action = TargetResource["::get::Tarjeta::jugador"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
