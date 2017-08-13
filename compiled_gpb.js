/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    msg.User = (function() {

        /**
         * Properties of a User.
         * @memberof msg
         * @interface IUser
         * @property {string} [name] User name
         */

        /**
         * Constructs a new User.
         * @memberof msg
         * @classdesc Represents a User.
         * @constructor
         * @param {msg.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User name.
         * @member {string}name
         * @memberof msg.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof msg.User
         * @static
         * @param {msg.IUser=} [properties] Properties to set
         * @returns {msg.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link msg.User.verify|verify} messages.
         * @function encode
         * @memberof msg.User
         * @static
         * @param {msg.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link msg.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.User
         * @static
         * @param {msg.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof msg.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof msg.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.User)
                return object;
            let message = new $root.msg.User();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.User
         * @static
         * @param {msg.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof msg.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    msg.WorldCreate = (function() {

        /**
         * Properties of a WorldCreate.
         * @memberof msg
         * @interface IWorldCreate
         * @property {string} [key] WorldCreate key
         */

        /**
         * Constructs a new WorldCreate.
         * @memberof msg
         * @classdesc Represents a WorldCreate.
         * @constructor
         * @param {msg.IWorldCreate=} [properties] Properties to set
         */
        function WorldCreate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldCreate key.
         * @member {string}key
         * @memberof msg.WorldCreate
         * @instance
         */
        WorldCreate.prototype.key = "";

        /**
         * Creates a new WorldCreate instance using the specified properties.
         * @function create
         * @memberof msg.WorldCreate
         * @static
         * @param {msg.IWorldCreate=} [properties] Properties to set
         * @returns {msg.WorldCreate} WorldCreate instance
         */
        WorldCreate.create = function create(properties) {
            return new WorldCreate(properties);
        };

        /**
         * Encodes the specified WorldCreate message. Does not implicitly {@link msg.WorldCreate.verify|verify} messages.
         * @function encode
         * @memberof msg.WorldCreate
         * @static
         * @param {msg.IWorldCreate} message WorldCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldCreate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified WorldCreate message, length delimited. Does not implicitly {@link msg.WorldCreate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.WorldCreate
         * @static
         * @param {msg.IWorldCreate} message WorldCreate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldCreate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldCreate message from the specified reader or buffer.
         * @function decode
         * @memberof msg.WorldCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.WorldCreate} WorldCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldCreate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.WorldCreate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldCreate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.WorldCreate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.WorldCreate} WorldCreate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldCreate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldCreate message.
         * @function verify
         * @memberof msg.WorldCreate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldCreate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a WorldCreate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.WorldCreate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.WorldCreate} WorldCreate
         */
        WorldCreate.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.WorldCreate)
                return object;
            let message = new $root.msg.WorldCreate();
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a WorldCreate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.WorldCreate
         * @static
         * @param {msg.WorldCreate} message WorldCreate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldCreate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this WorldCreate to JSON.
         * @function toJSON
         * @memberof msg.WorldCreate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldCreate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorldCreate;
    })();

    msg.WorldJoin = (function() {

        /**
         * Properties of a WorldJoin.
         * @memberof msg
         * @interface IWorldJoin
         * @property {string} [key] WorldJoin key
         */

        /**
         * Constructs a new WorldJoin.
         * @memberof msg
         * @classdesc Represents a WorldJoin.
         * @constructor
         * @param {msg.IWorldJoin=} [properties] Properties to set
         */
        function WorldJoin(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldJoin key.
         * @member {string}key
         * @memberof msg.WorldJoin
         * @instance
         */
        WorldJoin.prototype.key = "";

        /**
         * Creates a new WorldJoin instance using the specified properties.
         * @function create
         * @memberof msg.WorldJoin
         * @static
         * @param {msg.IWorldJoin=} [properties] Properties to set
         * @returns {msg.WorldJoin} WorldJoin instance
         */
        WorldJoin.create = function create(properties) {
            return new WorldJoin(properties);
        };

        /**
         * Encodes the specified WorldJoin message. Does not implicitly {@link msg.WorldJoin.verify|verify} messages.
         * @function encode
         * @memberof msg.WorldJoin
         * @static
         * @param {msg.IWorldJoin} message WorldJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldJoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            return writer;
        };

        /**
         * Encodes the specified WorldJoin message, length delimited. Does not implicitly {@link msg.WorldJoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.WorldJoin
         * @static
         * @param {msg.IWorldJoin} message WorldJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldJoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldJoin message from the specified reader or buffer.
         * @function decode
         * @memberof msg.WorldJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.WorldJoin} WorldJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldJoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.WorldJoin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldJoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.WorldJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.WorldJoin} WorldJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldJoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldJoin message.
         * @function verify
         * @memberof msg.WorldJoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldJoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            return null;
        };

        /**
         * Creates a WorldJoin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.WorldJoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.WorldJoin} WorldJoin
         */
        WorldJoin.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.WorldJoin)
                return object;
            let message = new $root.msg.WorldJoin();
            if (object.key != null)
                message.key = String(object.key);
            return message;
        };

        /**
         * Creates a plain object from a WorldJoin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.WorldJoin
         * @static
         * @param {msg.WorldJoin} message WorldJoin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldJoin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.key = "";
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            return object;
        };

        /**
         * Converts this WorldJoin to JSON.
         * @function toJSON
         * @memberof msg.WorldJoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldJoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorldJoin;
    })();

    msg.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof msg
         * @interface IError
         * @property {string} [type] Error type
         * @property {string} [description] Error description
         */

        /**
         * Constructs a new Error.
         * @memberof msg
         * @classdesc Represents an Error.
         * @constructor
         * @param {msg.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error type.
         * @member {string}type
         * @memberof msg.Error
         * @instance
         */
        Error.prototype.type = "";

        /**
         * Error description.
         * @member {string}description
         * @memberof msg.Error
         * @instance
         */
        Error.prototype.description = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof msg.Error
         * @static
         * @param {msg.IError=} [properties] Properties to set
         * @returns {msg.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link msg.Error.verify|verify} messages.
         * @function encode
         * @memberof msg.Error
         * @static
         * @param {msg.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link msg.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Error
         * @static
         * @param {msg.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Error();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof msg.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Error)
                return object;
            let message = new $root.msg.Error();
            if (object.type != null)
                message.type = String(object.type);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Error
         * @static
         * @param {msg.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = "";
                object.description = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof msg.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Error;
    })();

    msg.Ok = (function() {

        /**
         * Properties of an Ok.
         * @memberof msg
         * @interface IOk
         */

        /**
         * Constructs a new Ok.
         * @memberof msg
         * @classdesc Represents an Ok.
         * @constructor
         * @param {msg.IOk=} [properties] Properties to set
         */
        function Ok(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Ok instance using the specified properties.
         * @function create
         * @memberof msg.Ok
         * @static
         * @param {msg.IOk=} [properties] Properties to set
         * @returns {msg.Ok} Ok instance
         */
        Ok.create = function create(properties) {
            return new Ok(properties);
        };

        /**
         * Encodes the specified Ok message. Does not implicitly {@link msg.Ok.verify|verify} messages.
         * @function encode
         * @memberof msg.Ok
         * @static
         * @param {msg.IOk} message Ok message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ok.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Ok message, length delimited. Does not implicitly {@link msg.Ok.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Ok
         * @static
         * @param {msg.IOk} message Ok message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ok.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ok message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Ok
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Ok} Ok
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ok.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Ok();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ok message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Ok
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Ok} Ok
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ok.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ok message.
         * @function verify
         * @memberof msg.Ok
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ok.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Ok message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Ok
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Ok} Ok
         */
        Ok.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Ok)
                return object;
            return new $root.msg.Ok();
        };

        /**
         * Creates a plain object from an Ok message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Ok
         * @static
         * @param {msg.Ok} message Ok
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ok.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Ok to JSON.
         * @function toJSON
         * @memberof msg.Ok
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ok.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ok;
    })();

    msg.WorldJoined = (function() {

        /**
         * Properties of a WorldJoined.
         * @memberof msg
         * @interface IWorldJoined
         * @property {number} [worldId] WorldJoined worldId
         */

        /**
         * Constructs a new WorldJoined.
         * @memberof msg
         * @classdesc Represents a WorldJoined.
         * @constructor
         * @param {msg.IWorldJoined=} [properties] Properties to set
         */
        function WorldJoined(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorldJoined worldId.
         * @member {number}worldId
         * @memberof msg.WorldJoined
         * @instance
         */
        WorldJoined.prototype.worldId = 0;

        /**
         * Creates a new WorldJoined instance using the specified properties.
         * @function create
         * @memberof msg.WorldJoined
         * @static
         * @param {msg.IWorldJoined=} [properties] Properties to set
         * @returns {msg.WorldJoined} WorldJoined instance
         */
        WorldJoined.create = function create(properties) {
            return new WorldJoined(properties);
        };

        /**
         * Encodes the specified WorldJoined message. Does not implicitly {@link msg.WorldJoined.verify|verify} messages.
         * @function encode
         * @memberof msg.WorldJoined
         * @static
         * @param {msg.IWorldJoined} message WorldJoined message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldJoined.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.worldId != null && message.hasOwnProperty("worldId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.worldId);
            return writer;
        };

        /**
         * Encodes the specified WorldJoined message, length delimited. Does not implicitly {@link msg.WorldJoined.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.WorldJoined
         * @static
         * @param {msg.IWorldJoined} message WorldJoined message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorldJoined.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorldJoined message from the specified reader or buffer.
         * @function decode
         * @memberof msg.WorldJoined
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.WorldJoined} WorldJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldJoined.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.WorldJoined();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.worldId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WorldJoined message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.WorldJoined
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.WorldJoined} WorldJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorldJoined.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorldJoined message.
         * @function verify
         * @memberof msg.WorldJoined
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorldJoined.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.worldId != null && message.hasOwnProperty("worldId"))
                if (!$util.isInteger(message.worldId))
                    return "worldId: integer expected";
            return null;
        };

        /**
         * Creates a WorldJoined message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.WorldJoined
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.WorldJoined} WorldJoined
         */
        WorldJoined.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.WorldJoined)
                return object;
            let message = new $root.msg.WorldJoined();
            if (object.worldId != null)
                message.worldId = object.worldId | 0;
            return message;
        };

        /**
         * Creates a plain object from a WorldJoined message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.WorldJoined
         * @static
         * @param {msg.WorldJoined} message WorldJoined
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorldJoined.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.worldId = 0;
            if (message.worldId != null && message.hasOwnProperty("worldId"))
                object.worldId = message.worldId;
            return object;
        };

        /**
         * Converts this WorldJoined to JSON.
         * @function toJSON
         * @memberof msg.WorldJoined
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorldJoined.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WorldJoined;
    })();

    msg.Person = (function() {

        /**
         * Properties of a Person.
         * @memberof msg
         * @interface IPerson
         * @property {string} [name] Person name
         * @property {number} [id] Person id
         * @property {string} [email] Person email
         * @property {Array.<msg.Person.IPhoneNumber>} [phones] Person phones
         */

        /**
         * Constructs a new Person.
         * @memberof msg
         * @classdesc Represents a Person.
         * @constructor
         * @param {msg.IPerson=} [properties] Properties to set
         */
        function Person(properties) {
            this.phones = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Person name.
         * @member {string}name
         * @memberof msg.Person
         * @instance
         */
        Person.prototype.name = "";

        /**
         * Person id.
         * @member {number}id
         * @memberof msg.Person
         * @instance
         */
        Person.prototype.id = 0;

        /**
         * Person email.
         * @member {string}email
         * @memberof msg.Person
         * @instance
         */
        Person.prototype.email = "";

        /**
         * Person phones.
         * @member {Array.<msg.Person.IPhoneNumber>}phones
         * @memberof msg.Person
         * @instance
         */
        Person.prototype.phones = $util.emptyArray;

        /**
         * Creates a new Person instance using the specified properties.
         * @function create
         * @memberof msg.Person
         * @static
         * @param {msg.IPerson=} [properties] Properties to set
         * @returns {msg.Person} Person instance
         */
        Person.create = function create(properties) {
            return new Person(properties);
        };

        /**
         * Encodes the specified Person message. Does not implicitly {@link msg.Person.verify|verify} messages.
         * @function encode
         * @memberof msg.Person
         * @static
         * @param {msg.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.phones != null && message.phones.length)
                for (let i = 0; i < message.phones.length; ++i)
                    $root.msg.Person.PhoneNumber.encode(message.phones[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link msg.Person.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Person
         * @static
         * @param {msg.IPerson} message Person message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Person.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Person();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                case 4:
                    if (!(message.phones && message.phones.length))
                        message.phones = [];
                    message.phones.push($root.msg.Person.PhoneNumber.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Person
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Person} Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Person.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Person message.
         * @function verify
         * @memberof msg.Person
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Person.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phones != null && message.hasOwnProperty("phones")) {
                if (!Array.isArray(message.phones))
                    return "phones: array expected";
                for (let i = 0; i < message.phones.length; ++i) {
                    let error = $root.msg.Person.PhoneNumber.verify(message.phones[i]);
                    if (error)
                        return "phones." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Person
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Person} Person
         */
        Person.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Person)
                return object;
            let message = new $root.msg.Person();
            if (object.name != null)
                message.name = String(object.name);
            if (object.id != null)
                message.id = object.id | 0;
            if (object.email != null)
                message.email = String(object.email);
            if (object.phones) {
                if (!Array.isArray(object.phones))
                    throw TypeError(".msg.Person.phones: array expected");
                message.phones = [];
                for (let i = 0; i < object.phones.length; ++i) {
                    if (typeof object.phones[i] !== "object")
                        throw TypeError(".msg.Person.phones: object expected");
                    message.phones[i] = $root.msg.Person.PhoneNumber.fromObject(object.phones[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Person
         * @static
         * @param {msg.Person} message Person
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Person.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.phones = [];
            if (options.defaults) {
                object.name = "";
                object.id = 0;
                object.email = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phones && message.phones.length) {
                object.phones = [];
                for (let j = 0; j < message.phones.length; ++j)
                    object.phones[j] = $root.msg.Person.PhoneNumber.toObject(message.phones[j], options);
            }
            return object;
        };

        /**
         * Converts this Person to JSON.
         * @function toJSON
         * @memberof msg.Person
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Person.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * PhoneType enum.
         * @enum {string}
         * @property {number} MOBILE=0 MOBILE value
         * @property {number} HOME=1 HOME value
         * @property {number} WORK=2 WORK value
         */
        Person.PhoneType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MOBILE"] = 0;
            values[valuesById[1] = "HOME"] = 1;
            values[valuesById[2] = "WORK"] = 2;
            return values;
        })();

        Person.PhoneNumber = (function() {

            /**
             * Properties of a PhoneNumber.
             * @memberof msg.Person
             * @interface IPhoneNumber
             * @property {string} [number] PhoneNumber number
             * @property {msg.Person.PhoneType} [type] PhoneNumber type
             */

            /**
             * Constructs a new PhoneNumber.
             * @memberof msg.Person
             * @classdesc Represents a PhoneNumber.
             * @constructor
             * @param {msg.Person.IPhoneNumber=} [properties] Properties to set
             */
            function PhoneNumber(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PhoneNumber number.
             * @member {string}number
             * @memberof msg.Person.PhoneNumber
             * @instance
             */
            PhoneNumber.prototype.number = "";

            /**
             * PhoneNumber type.
             * @member {msg.Person.PhoneType}type
             * @memberof msg.Person.PhoneNumber
             * @instance
             */
            PhoneNumber.prototype.type = 0;

            /**
             * Creates a new PhoneNumber instance using the specified properties.
             * @function create
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {msg.Person.IPhoneNumber=} [properties] Properties to set
             * @returns {msg.Person.PhoneNumber} PhoneNumber instance
             */
            PhoneNumber.create = function create(properties) {
                return new PhoneNumber(properties);
            };

            /**
             * Encodes the specified PhoneNumber message. Does not implicitly {@link msg.Person.PhoneNumber.verify|verify} messages.
             * @function encode
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {msg.Person.IPhoneNumber} message PhoneNumber message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhoneNumber.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.number);
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                return writer;
            };

            /**
             * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link msg.Person.PhoneNumber.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {msg.Person.IPhoneNumber} message PhoneNumber message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PhoneNumber.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PhoneNumber message from the specified reader or buffer.
             * @function decode
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.Person.PhoneNumber} PhoneNumber
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhoneNumber.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Person.PhoneNumber();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.number = reader.string();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.Person.PhoneNumber} PhoneNumber
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PhoneNumber.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PhoneNumber message.
             * @function verify
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PhoneNumber.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isString(message.number))
                        return "number: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.Person.PhoneNumber} PhoneNumber
             */
            PhoneNumber.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.Person.PhoneNumber)
                    return object;
                let message = new $root.msg.Person.PhoneNumber();
                if (object.number != null)
                    message.number = String(object.number);
                switch (object.type) {
                case "MOBILE":
                case 0:
                    message.type = 0;
                    break;
                case "HOME":
                case 1:
                    message.type = 1;
                    break;
                case "WORK":
                case 2:
                    message.type = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.Person.PhoneNumber
             * @static
             * @param {msg.Person.PhoneNumber} message PhoneNumber
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PhoneNumber.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.number = "";
                    object.type = options.enums === String ? "MOBILE" : 0;
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    object.number = message.number;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.msg.Person.PhoneType[message.type] : message.type;
                return object;
            };

            /**
             * Converts this PhoneNumber to JSON.
             * @function toJSON
             * @memberof msg.Person.PhoneNumber
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PhoneNumber.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PhoneNumber;
        })();

        return Person;
    })();

    msg.AddressBook = (function() {

        /**
         * Properties of an AddressBook.
         * @memberof msg
         * @interface IAddressBook
         * @property {Array.<msg.IPerson>} [people] AddressBook people
         */

        /**
         * Constructs a new AddressBook.
         * @memberof msg
         * @classdesc Represents an AddressBook.
         * @constructor
         * @param {msg.IAddressBook=} [properties] Properties to set
         */
        function AddressBook(properties) {
            this.people = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressBook people.
         * @member {Array.<msg.IPerson>}people
         * @memberof msg.AddressBook
         * @instance
         */
        AddressBook.prototype.people = $util.emptyArray;

        /**
         * Creates a new AddressBook instance using the specified properties.
         * @function create
         * @memberof msg.AddressBook
         * @static
         * @param {msg.IAddressBook=} [properties] Properties to set
         * @returns {msg.AddressBook} AddressBook instance
         */
        AddressBook.create = function create(properties) {
            return new AddressBook(properties);
        };

        /**
         * Encodes the specified AddressBook message. Does not implicitly {@link msg.AddressBook.verify|verify} messages.
         * @function encode
         * @memberof msg.AddressBook
         * @static
         * @param {msg.IAddressBook} message AddressBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressBook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.people != null && message.people.length)
                for (let i = 0; i < message.people.length; ++i)
                    $root.msg.Person.encode(message.people[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddressBook message, length delimited. Does not implicitly {@link msg.AddressBook.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.AddressBook
         * @static
         * @param {msg.IAddressBook} message AddressBook message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressBook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddressBook message from the specified reader or buffer.
         * @function decode
         * @memberof msg.AddressBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.AddressBook} AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressBook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.AddressBook();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.people && message.people.length))
                        message.people = [];
                    message.people.push($root.msg.Person.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddressBook message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.AddressBook
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.AddressBook} AddressBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressBook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddressBook message.
         * @function verify
         * @memberof msg.AddressBook
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddressBook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.people != null && message.hasOwnProperty("people")) {
                if (!Array.isArray(message.people))
                    return "people: array expected";
                for (let i = 0; i < message.people.length; ++i) {
                    let error = $root.msg.Person.verify(message.people[i]);
                    if (error)
                        return "people." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddressBook message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.AddressBook
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.AddressBook} AddressBook
         */
        AddressBook.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.AddressBook)
                return object;
            let message = new $root.msg.AddressBook();
            if (object.people) {
                if (!Array.isArray(object.people))
                    throw TypeError(".msg.AddressBook.people: array expected");
                message.people = [];
                for (let i = 0; i < object.people.length; ++i) {
                    if (typeof object.people[i] !== "object")
                        throw TypeError(".msg.AddressBook.people: object expected");
                    message.people[i] = $root.msg.Person.fromObject(object.people[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddressBook message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.AddressBook
         * @static
         * @param {msg.AddressBook} message AddressBook
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddressBook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.people = [];
            if (message.people && message.people.length) {
                object.people = [];
                for (let j = 0; j < message.people.length; ++j)
                    object.people[j] = $root.msg.Person.toObject(message.people[j], options);
            }
            return object;
        };

        /**
         * Converts this AddressBook to JSON.
         * @function toJSON
         * @memberof msg.AddressBook
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddressBook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddressBook;
    })();

    return msg;
})();

export { $root as default };
