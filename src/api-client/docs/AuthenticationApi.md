# AuthenticationApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authenticationGenerateCodeCreate**](#authenticationgeneratecodecreate) | **POST** /api/authentication/generate-code | Generar codigo de seguridad para el cambio de contraeña|
|[**authenticationLoginCreate**](#authenticationlogincreate) | **POST** /api/authentication/login/ | |
|[**authenticationLogoutCreate**](#authenticationlogoutcreate) | **POST** /api/authentication/logout/ | |
|[**authenticationRecoverPasswordCodeCreate**](#authenticationrecoverpasswordcodecreate) | **POST** /api/authentication/recover-password-code | Restablecer la contraseña|
|[**authenticationRefreshCreate**](#authenticationrefreshcreate) | **POST** /api/authentication/refresh/ | |
|[**authenticationUpdatePasswordCreate**](#authenticationupdatepasswordcreate) | **POST** /api/authentication/update-password/ | Actualizar contraseña|
|[**authenticationValidateCodeCreate**](#authenticationvalidatecodecreate) | **POST** /api/authentication/validate-code | |

# **authenticationGenerateCodeCreate**
> GeneralMessage authenticationGenerateCodeCreate(resetPasswordRequestRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResetPasswordRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let resetPasswordRequestRequest: ResetPasswordRequestRequest; //

const { status, data } = await apiInstance.authenticationGenerateCodeCreate(
    resetPasswordRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordRequestRequest** | **ResetPasswordRequestRequest**|  | |


### Return type

**GeneralMessage**

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

# **authenticationLoginCreate**
> TokenOutput authenticationLoginCreate(customTokenObtainPairRequest)

Iniciar Sesión

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    CustomTokenObtainPairRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let customTokenObtainPairRequest: CustomTokenObtainPairRequest; //

const { status, data } = await apiInstance.authenticationLoginCreate(
    customTokenObtainPairRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customTokenObtainPairRequest** | **CustomTokenObtainPairRequest**|  | |


### Return type

**TokenOutput**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticationLogoutCreate**
> authenticationLogoutCreate(logoutRequest)

Cerrar sesión

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    LogoutRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let logoutRequest: LogoutRequest; //

const { status, data } = await apiInstance.authenticationLogoutCreate(
    logoutRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **logoutRequest** | **LogoutRequest**|  | |


### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Cierre de sesión exitoso |  -  |
|**401** | Usted no tiene permiso para ver este usuario |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticationRecoverPasswordCodeCreate**
> GeneralMessage authenticationRecoverPasswordCodeCreate(resetPasswordRequest)

restablecer la contraseña atraves de codigo de seguridad

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResetPasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let resetPasswordRequest: ResetPasswordRequest; //

const { status, data } = await apiInstance.authenticationRecoverPasswordCodeCreate(
    resetPasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordRequest** | **ResetPasswordRequest**|  | |


### Return type

**GeneralMessage**

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

# **authenticationRefreshCreate**
> TokenRefresh authenticationRefreshCreate(tokenRefreshRequest)

Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TokenRefreshRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let tokenRefreshRequest: TokenRefreshRequest; //

const { status, data } = await apiInstance.authenticationRefreshCreate(
    tokenRefreshRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenRefreshRequest** | **TokenRefreshRequest**|  | |


### Return type

**TokenRefresh**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authenticationUpdatePasswordCreate**
> GeneralMessage authenticationUpdatePasswordCreate(updatePasswordRequest)

Actualizar contraseña

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    UpdatePasswordRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let updatePasswordRequest: UpdatePasswordRequest; //

const { status, data } = await apiInstance.authenticationUpdatePasswordCreate(
    updatePasswordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePasswordRequest** | **UpdatePasswordRequest**|  | |


### Return type

**GeneralMessage**

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

# **authenticationValidateCodeCreate**
> ValidateCodeRequest authenticationValidateCodeCreate(resetPasswordCodeValidateRequestRequest)


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    ResetPasswordCodeValidateRequestRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let resetPasswordCodeValidateRequestRequest: ResetPasswordCodeValidateRequestRequest; //

const { status, data } = await apiInstance.authenticationValidateCodeCreate(
    resetPasswordCodeValidateRequestRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordCodeValidateRequestRequest** | **ResetPasswordCodeValidateRequestRequest**|  | |


### Return type

**ValidateCodeRequest**

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

