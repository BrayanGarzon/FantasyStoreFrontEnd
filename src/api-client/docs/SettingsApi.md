# SettingsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**mainConfigurationsList**](#mainconfigurationslist) | **GET** /api/main/configurations/ | |
|[**mainConfigurationsRetrieve**](#mainconfigurationsretrieve) | **GET** /api/main/configurations/{id}/ | |

# **mainConfigurationsList**
> Array<Settings> mainConfigurationsList()


### Example

```typescript
import {
    SettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

const { status, data } = await apiInstance.mainConfigurationsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Settings>**

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

# **mainConfigurationsRetrieve**
> Settings mainConfigurationsRetrieve()


### Example

```typescript
import {
    SettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let id: number; //A unique integer value identifying this Configuración. (default to undefined)

const { status, data } = await apiInstance.mainConfigurationsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Configuración. | defaults to undefined|


### Return type

**Settings**

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

