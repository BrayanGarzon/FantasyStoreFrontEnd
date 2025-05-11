# CarouselApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mainCarouselCarouselCreate**](#maincarouselcarouselcreate) | **POST** /api/main/carousel/carousel/ | |
|[**mainCarouselCarouselDestroy**](#maincarouselcarouseldestroy) | **DELETE** /api/main/carousel/carousel/{id}/ | |
|[**mainCarouselCarouselList**](#maincarouselcarousellist) | **GET** /api/main/carousel/carousel/ | |
|[**mainCarouselCarouselPartialUpdate**](#maincarouselcarouselpartialupdate) | **PATCH** /api/main/carousel/carousel/{id}/ | |
|[**mainCarouselCarouselRetrieve**](#maincarouselcarouselretrieve) | **GET** /api/main/carousel/carousel/{id}/ | |
|[**mainCarouselCarouselUpdate**](#maincarouselcarouselupdate) | **PUT** /api/main/carousel/carousel/{id}/ | |

# **mainCarouselCarouselCreate**
> CarouselItemRequest mainCarouselCarouselCreate(carouselItemRequestRequest)


### Example

```typescript
import {
    CarouselApi,
    Configuration,
    CarouselItemRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CarouselApi(configuration);

let carouselItemRequestRequest: CarouselItemRequestRequest; //

const { status, data } = await apiInstance.mainCarouselCarouselCreate(
    carouselItemRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carouselItemRequestRequest** | **CarouselItemRequestRequest**|  | |


### Return type

**CarouselItemRequest**

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

# **mainCarouselCarouselDestroy**
> mainCarouselCarouselDestroy()


### Example

```typescript
import {
    CarouselApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarouselApi(configuration);

let id: number; //A unique integer value identifying this carousel item model. (default to undefined)

const { status, data } = await apiInstance.mainCarouselCarouselDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this carousel item model. | defaults to undefined|


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

# **mainCarouselCarouselList**
> Array<CarouselItemResponse> mainCarouselCarouselList()


### Example

```typescript
import {
    CarouselApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarouselApi(configuration);

const { status, data } = await apiInstance.mainCarouselCarouselList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CarouselItemResponse>**

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

# **mainCarouselCarouselPartialUpdate**
> CarouselItemRequest mainCarouselCarouselPartialUpdate()


### Example

```typescript
import {
    CarouselApi,
    Configuration,
    PatchedCarouselItemRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CarouselApi(configuration);

let id: number; //A unique integer value identifying this carousel item model. (default to undefined)
let patchedCarouselItemRequestRequest: PatchedCarouselItemRequestRequest; // (optional)

const { status, data } = await apiInstance.mainCarouselCarouselPartialUpdate(
    id,
    patchedCarouselItemRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedCarouselItemRequestRequest** | **PatchedCarouselItemRequestRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this carousel item model. | defaults to undefined|


### Return type

**CarouselItemRequest**

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

# **mainCarouselCarouselRetrieve**
> CarouselItemResponse mainCarouselCarouselRetrieve()


### Example

```typescript
import {
    CarouselApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarouselApi(configuration);

let id: number; //A unique integer value identifying this carousel item model. (default to undefined)

const { status, data } = await apiInstance.mainCarouselCarouselRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this carousel item model. | defaults to undefined|


### Return type

**CarouselItemResponse**

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

# **mainCarouselCarouselUpdate**
> CarouselItemRequest mainCarouselCarouselUpdate(carouselItemRequestRequest)


### Example

```typescript
import {
    CarouselApi,
    Configuration,
    CarouselItemRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CarouselApi(configuration);

let id: number; //A unique integer value identifying this carousel item model. (default to undefined)
let carouselItemRequestRequest: CarouselItemRequestRequest; //

const { status, data } = await apiInstance.mainCarouselCarouselUpdate(
    id,
    carouselItemRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carouselItemRequestRequest** | **CarouselItemRequestRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this carousel item model. | defaults to undefined|


### Return type

**CarouselItemRequest**

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

