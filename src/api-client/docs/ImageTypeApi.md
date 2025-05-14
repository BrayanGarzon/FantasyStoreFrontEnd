# ImageTypeApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mainImageTypesImagesCreate**](#mainimagetypesimagescreate) | **POST** /api/main/image-types/images/ | |
|[**mainImageTypesImagesDestroy**](#mainimagetypesimagesdestroy) | **DELETE** /api/main/image-types/images/{id}/ | |
|[**mainImageTypesImagesList**](#mainimagetypesimageslist) | **GET** /api/main/image-types/images/ | |
|[**mainImageTypesImagesPartialUpdate**](#mainimagetypesimagespartialupdate) | **PATCH** /api/main/image-types/images/{id}/ | |
|[**mainImageTypesImagesRetrieve**](#mainimagetypesimagesretrieve) | **GET** /api/main/image-types/images/{id}/ | |
|[**mainImageTypesImagesUpdate**](#mainimagetypesimagesupdate) | **PUT** /api/main/image-types/images/{id}/ | |

# **mainImageTypesImagesCreate**
> ImageType mainImageTypesImagesCreate(imageTypeRequest)


### Example

```typescript
import {
    ImageTypeApi,
    Configuration,
    ImageTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ImageTypeApi(configuration);

let imageTypeRequest: ImageTypeRequest; //

const { status, data } = await apiInstance.mainImageTypesImagesCreate(
    imageTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageTypeRequest** | **ImageTypeRequest**|  | |


### Return type

**ImageType**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mainImageTypesImagesDestroy**
> mainImageTypesImagesDestroy()


### Example

```typescript
import {
    ImageTypeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImageTypeApi(configuration);

let id: number; //A unique integer value identifying this image type model. (default to undefined)

const { status, data } = await apiInstance.mainImageTypesImagesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this image type model. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mainImageTypesImagesList**
> Array<ImageType> mainImageTypesImagesList()


### Example

```typescript
import {
    ImageTypeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImageTypeApi(configuration);

const { status, data } = await apiInstance.mainImageTypesImagesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ImageType>**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mainImageTypesImagesPartialUpdate**
> ImageType mainImageTypesImagesPartialUpdate()


### Example

```typescript
import {
    ImageTypeApi,
    Configuration,
    PatchedImageTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ImageTypeApi(configuration);

let id: number; //A unique integer value identifying this image type model. (default to undefined)
let patchedImageTypeRequest: PatchedImageTypeRequest; // (optional)

const { status, data } = await apiInstance.mainImageTypesImagesPartialUpdate(
    id,
    patchedImageTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedImageTypeRequest** | **PatchedImageTypeRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this image type model. | defaults to undefined|


### Return type

**ImageType**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mainImageTypesImagesRetrieve**
> ImageType mainImageTypesImagesRetrieve()


### Example

```typescript
import {
    ImageTypeApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImageTypeApi(configuration);

let id: number; //A unique integer value identifying this image type model. (default to undefined)

const { status, data } = await apiInstance.mainImageTypesImagesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this image type model. | defaults to undefined|


### Return type

**ImageType**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mainImageTypesImagesUpdate**
> ImageType mainImageTypesImagesUpdate(imageTypeRequest)


### Example

```typescript
import {
    ImageTypeApi,
    Configuration,
    ImageTypeRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ImageTypeApi(configuration);

let id: number; //A unique integer value identifying this image type model. (default to undefined)
let imageTypeRequest: ImageTypeRequest; //

const { status, data } = await apiInstance.mainImageTypesImagesUpdate(
    id,
    imageTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **imageTypeRequest** | **ImageTypeRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this image type model. | defaults to undefined|


### Return type

**ImageType**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

