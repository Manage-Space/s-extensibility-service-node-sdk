/**
 * ManageSpace Extensibility API
 * ManageSpace Extensibility API Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ImportResponse {
    /**
    * File name.
    */
    'fileName': string;
    /**
    * Location path.
    */
    'path': string;
    /**
    * File key.
    */
    'key': string;
    /**
    * ETag.
    */
    'etag': string;
    /**
    * VersionId.
    */
    'versionId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fileName",
            "baseName": "fileName",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "etag",
            "baseName": "etag",
            "type": "string"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ImportResponse.attributeTypeMap;
    }
}

