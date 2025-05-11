# MainApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mainLocationCitiesList**](#mainlocationcitieslist) | **GET** /api/main/location/cities/ | |
|[**mainLocationCitiesRetrieve**](#mainlocationcitiesretrieve) | **GET** /api/main/location/cities/{id}/ | |
|[**mainLocationStatesList**](#mainlocationstateslist) | **GET** /api/main/location/states/ | |
|[**mainLocationStatesRetrieve**](#mainlocationstatesretrieve) | **GET** /api/main/location/states/{id}/ | |
|[**mainLocationStatesWithCitiesRetrieve**](#mainlocationstateswithcitiesretrieve) | **GET** /api/main/location/states/with_cities/ | |

# **mainLocationCitiesList**
> Array<City> mainLocationCitiesList()


### Example

```typescript
import {
    MainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MainApi(configuration);

const { status, data } = await apiInstance.mainLocationCitiesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<City>**

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

# **mainLocationCitiesRetrieve**
> City mainLocationCitiesRetrieve()


### Example

```typescript
import {
    MainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MainApi(configuration);

let id: number; //A unique integer value identifying this Municipios. (default to undefined)

const { status, data } = await apiInstance.mainLocationCitiesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Municipios. | defaults to undefined|


### Return type

**City**

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

# **mainLocationStatesList**
> Array<State> mainLocationStatesList()


### Example

```typescript
import {
    MainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MainApi(configuration);

const { status, data } = await apiInstance.mainLocationStatesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<State>**

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

# **mainLocationStatesRetrieve**
> State mainLocationStatesRetrieve()


### Example

```typescript
import {
    MainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MainApi(configuration);

let id: number; //A unique integer value identifying this Departamento. (default to undefined)

const { status, data } = await apiInstance.mainLocationStatesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Departamento. | defaults to undefined|


### Return type

**State**

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

# **mainLocationStatesWithCitiesRetrieve**
> State mainLocationStatesWithCitiesRetrieve()


### Example

```typescript
import {
    MainApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new MainApi(configuration);

const { status, data } = await apiInstance.mainLocationStatesWithCitiesRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**State**

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

