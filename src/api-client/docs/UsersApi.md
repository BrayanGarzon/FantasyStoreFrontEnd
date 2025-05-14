# UsersApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersCurrentRetrieve**](#userscurrentretrieve) | **GET** /api/users/current/ | Obtiene el Usuario Actual utilizando el token en el HEADER|
|[**usersDeliveriesList**](#usersdeliverieslist) | **GET** /api/users/deliveries/ | |
|[**usersRegisterCreate**](#usersregistercreate) | **POST** /api/users/register/ | Registrar un nuevo Usuario|
|[**usersUploadImageProfileUpdate**](#usersuploadimageprofileupdate) | **PUT** /api/users/upload-image-profile/{id} | Cargar imagen de perfil|
|[**usersUserCreate**](#usersusercreate) | **POST** /api/users/user/{username}/ | Actualizar un usuario|
|[**usersUserDestroy**](#usersuserdestroy) | **DELETE** /api/users/user/{username}/ | Elimina un usuario, solo el usuario se puede eliminar a si mismo|
|[**usersUserRetrieve**](#usersuserretrieve) | **GET** /api/users/user/{username}/ | Obtiene la información de un usuario mediante el nombre usuario|

# **usersCurrentRetrieve**
> User usersCurrentRetrieve()

Obtiene el Usuario Actual utilizando el token en el HEADER

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.usersCurrentRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**User**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Usted no tiene permiso para ver este usuario |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDeliveriesList**
> Array<User> usersDeliveriesList()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.usersDeliveriesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<User>**

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

# **usersRegisterCreate**
> User usersRegisterCreate(registerRequest)

Registrar un nuevo Usuario

### Example

```typescript
import {
    UsersApi,
    Configuration,
    RegisterRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let registerRequest: RegisterRequest; //

const { status, data } = await apiInstance.usersRegisterCreate(
    registerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerRequest** | **RegisterRequest**|  | |


### Return type

**User**

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

# **usersUploadImageProfileUpdate**
> User usersUploadImageProfileUpdate()

Cargar imagen del perfil

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: number; // (default to undefined)
let avatar: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.usersUploadImageProfileUpdate(
    id,
    avatar
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
| **avatar** | [**File**] |  | (optional) defaults to undefined|


### Return type

**User**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Datos inválidos |  -  |
|**401** | No autorizado |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUserCreate**
> User usersUserCreate(userUpdateRequest)

Actualizar un usario

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserUpdateRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let username: string; // (default to undefined)
let userUpdateRequest: UserUpdateRequest; //

const { status, data } = await apiInstance.usersUserCreate(
    username,
    userUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateRequest** | **UserUpdateRequest**|  | |
| **username** | [**string**] |  | defaults to undefined|


### Return type

**User**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**404** | El Usuario no existe |  -  |
|**400** | Datos inválidos |  -  |
|**401** | Usted no tiene permiso para actualizar este usuario |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUserDestroy**
> usersUserDestroy()

Elimina un usuario, solo el usuario se puede eliminar a si mismo

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let username: string; // (default to undefined)

const { status, data } = await apiInstance.usersUserDestroy(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|


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
|**201** | Eliminación exitosa del usuario |  -  |
|**404** | El Usuario no existe |  -  |
|**400** | Usted no tiene permiso para eliminar este usuario |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUserRetrieve**
> User usersUserRetrieve()

Obtiene la información de un usuario mediante el nombre usuario

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let username: string; // (default to undefined)

const { status, data } = await apiInstance.usersUserRetrieve(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] |  | defaults to undefined|


### Return type

**User**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**404** | El Usuario no existe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

