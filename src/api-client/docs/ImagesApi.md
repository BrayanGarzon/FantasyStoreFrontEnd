# ImagesApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mainImageCreate**](#mainimagecreate) | **POST** /api/main/image/ | |
|[**mainImageList**](#mainimagelist) | **GET** /api/main/image/ | |

# **mainImageCreate**
> ImageSerializerRequest mainImageCreate()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let image: File; // (optional) (default to undefined)
let type: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.mainImageCreate(
    image,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **image** | [**File**] |  | (optional) defaults to undefined|
| **type** | [**number**] |  | (optional) defaults to undefined|


### Return type

**ImageSerializerRequest**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **mainImageList**
> Array<ImageSerializerRequest> mainImageList()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.mainImageList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ImageSerializerRequest>**

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

