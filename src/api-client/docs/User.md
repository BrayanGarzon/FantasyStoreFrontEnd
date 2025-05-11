# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**avatar** | **string** |  | [optional] [readonly] [default to undefined]
**rol** | **string** |  | [optional] [readonly] [default to undefined]
**first_name** | **string** |  | [optional] [default to undefined]
**last_name** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [default to undefined]
**username** | **string** |  | [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**status** | [**StatusEnum**](StatusEnum.md) |  | [optional] [default to undefined]
**status_delivery** | [**StatusDeliveryEnum**](StatusDeliveryEnum.md) |  | [optional] [default to undefined]
**full_name** | **string** |  | [optional] [readonly] [default to undefined]
**identification** | **string** |  | [optional] [default to undefined]
**rates** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    id,
    avatar,
    rol,
    first_name,
    last_name,
    email,
    username,
    phone,
    status,
    status_delivery,
    full_name,
    identification,
    rates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
