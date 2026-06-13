# BASE URL    : https://use.api.co.id/regional/indonesia
# x-api-co-id : (siapkan di env saja variable nya)

# TEMPAT LAHIR GUNAKAN API INI UNTUK GET KOTA TEMPAT KELAHIRAN ( tanpa filter pagination)
## Dokumentasi 
### /regional/indonesia/regencies
    Get all regencies/cities in Indonesia.

    Query Parameters
    province_code (optional): Filter by province code
    name (optional): Filter by regency name
    page (optional): Page number
    Note: Pagination size is fixed at 100 items per page and cannot be configured
    Parameters
    Cancel
    Name	Description
    x-api-co-id
    string
    (header)
    Your API key for authentication

    x-api-co-id
    province_code
    string
    (query)
    Filter by province code (optional)

    province_code
    name
    string
    (query)
    Filter by regency name (optional)

    name
    page
    integer
    (query)
    Page number (optional)

    1
    Execute
    Responses
    Code	Description	Links
    200	
    Successful response

    Media type

    application/json
    Controls Accept header.
    Examples

    Success - All Regencies
    Example Value
    {
    "is_success": true,
    "message": "Success",
    "data": [
        {
        "code": "1101",
        "name": "KABUPATEN SIMEULUE",
        "province_code": "11",
        "province": "ACEH"
        },
        {
        "code": "1102",
        "name": "KABUPATEN ACEH SINGKIL",
        "province_code": "11",
        "province": "ACEH"
        },
        {
        "code": "1201",
        "name": "KABUPATEN TAPANULI TENGAH",
        "province_code": "12",
        "province": "SUMATERA UTARA"
        }
    ],
    "paging": {
        "page": 1,
        "size": 100,
        "total_item": 514,
        "total_page": 6
    }
    }
    No links
    401	
    Unauthorized

    Media type

    application/json
    Examples

    Missing API Key
    Example Value
    {
    "is_success": false,
    "message": "Missing API key in x-api-co-id header"
    }
    No links
    429	
    Too Many Requests

    Media type

    application/json
    Examples

    Rate Limit Exceeded
    Example Value
    {
    "is_success": false,
    "message": "Rate limit exceeded. Please try again later"
    }


# ALAMAT GUNAKAN FLOW INI
## Dokumentasi
### /regional/indonesia/provinces
    Get all provinces in Indonesia.

    Query Parameters
    name (optional): Filter by province name (case-insensitive partial match)
    page (optional): Page number (default: 1)
    Note: Pagination size is fixed at 100 items per page and cannot be configured
    Examples
    # Search provinces by name GET /regional/indonesia/provinces?name=jawa
    # With pagination GET /regional/indonesia/provinces?page=1 ```
    Parameters
    Cancel
    Name	Description
    x-api-co-id
    string
    (header)
    Your API key for authentication

    x-api-co-id
    name
    string
    (query)
    Filter by province name (case-insensitive partial match)

    jawa
    page
    integer
    (query)
    Page number

    1
    Execute
    Responses
    Code	Description	Links
    200	
    Successful response

    Media type

    application/json
    Controls Accept header.
    Examples

    Success - All Provinces
    Example Value
    {
    "is_success": true,
    "message": "Success",
    "data": [
        {
        "code": "11",
        "name": "ACEH"
        },
        {
        "code": "12",
        "name": "SUMATERA UTARA"
        },
        {
        "code": "13",
        "name": "SUMATERA BARAT"
        }
    ],
    "paging": {
        "page": 1,
        "size": 100,
        "total_item": 34,
        "total_page": 1
    }
    }
    No links
    401	
    Unauthorized

    Media type

    application/json
    Examples

    Missing API Key
    Example Value
    {
    "is_success": false,
    "message": "Missing API key in x-api-co-id header"
    }
    No links
    429	
    Too Many Requests

    Media type

    application/json
    Examples

    Rate Limit Exceeded
    Example Value
    {
    "is_success": false,
    "message": "Rate limit exceeded. Please try again later"
    }

### /regional/indonesia/provinces/{code}
    Get a specific province by code, including all regencies in that province.

    Path Parameters
    code (required): Province code (2 digits)
    Examples
    # Get Jakarta province (code 31) GET /regional/indonesia/provinces/31 ```
    Parameters
    Cancel
    Name	Description
    x-api-co-id
    string
    (header)
    Your API key for authentication

    x-api-co-id
    code *
    string
    (path)
    Province code (2 digits)

    11
    Execute
    Responses
    Code	Description	Links
    200	
    Successful response

    Media type

    application/json
    Controls Accept header.
    Examples

    Success - Province with Regencies
    Example Value
    {
    "is_success": true,
    "message": "Success",
    "data": {
        "code": "11",
        "name": "ACEH"
    }
    }
    No links
    401	
    Unauthorized

    Media type

    application/json
    Examples

    Missing API Key
    Example Value
    {
    "is_success": false,
    "message": "Missing API key in x-api-co-id header"
    }
    No links
    404	
    Not Found

    Media type

    application/json
    Examples

    Province Not Found
    Example Value
    {
    "is_success": false,
    "message": "Province not found"
    }
    No links
    429	
    Too Many Requests

    Media type

    application/json
    Examples

    Rate Limit Exceeded
    Example Value
    {
    "is_success": false,
    "message": "Rate limit exceeded. Please try again later"
    }

### /regional/indonesia/provinces/{code}/regencies
    Get all regencies/cities in a specific province.

    Path Parameters
    code (required): Province code
    Query Parameters
    name (optional): Filter by regency name
    page (optional): Page number
    Note: Pagination size is fixed at 100 items per page and cannot be configured
    Parameters
    Cancel
    Name	Description
    x-api-co-id
    string
    (header)
    Your API key for authentication

    x-api-co-id
    code *
    string
    (path)
    Province code

    11
    name
    string
    (query)
    Filter by regency name (optional)

    name
    page
    integer
    (query)
    Page number (optional)

    1
    Execute
    Responses
    Code	Description	Links
    200	
    Successful response

    Media type

    application/json
    Controls Accept header.
    Examples

    Success - Regencies in Province
    Example Value
    {
    "is_success": true,
    "message": "Success",
    "data": [
        {
        "code": "1101",
        "name": "KABUPATEN SIMEULUE",
        "province_code": "11",
        "province": "ACEH"
        },
        {
        "code": "1102",
        "name": "KABUPATEN ACEH SINGKIL",
        "province_code": "11",
        "province": "ACEH"
        }
    ],
    "paging": {
        "page": 1,
        "size": 100,
        "total_item": 23,
        "total_page": 1
    }
    }
    No links
    401	
    Unauthorized

    Media type

    application/json
    Examples

    Missing API Key
    Example Value
    {
    "is_success": false,
    "message": "Missing API key in x-api-co-id header"
    }
    No links
    404	
    Not Found

    Media type

    application/json
    Examples

    Province Not Found
    Example Value
    {
    "is_success": false,
    "message": "Province not found"
    }
    No links
    429	
    Too Many Requests

    Media type

    application/json
    Examples

    Rate Limit Exceeded
    Example Value
    {
    "is_success": false,
    "message": "Rate limit exceeded. Please try again later"
    }

### /regional/indonesia/regencies/{code}/districts
    Get all districts in a specific regency.

    Path Parameters
    code (required): Regency code
    Query Parameters
    name (optional): Filter by district name
    page (optional): Page number
    Note: Pagination size is fixed at 100 items per page and cannot be configured
    Parameters
    Cancel
    Name	Description
    x-api-co-id
    string
    (header)
    Your API key for authentication

    x-api-co-id
    code *
    string
    (path)
    Regency code

    1101
    name
    string
    (query)
    Filter by district name (optional)

    name
    page
    integer
    (query)
    Page number (optional)

    1
    Execute
    Responses
    Code	Description	Links
    200	
    Successful response

    Media type

    application/json
    Controls Accept header.
    Examples

    Success - Districts in Regency
    Example Value
    {
    "is_success": true,
    "message": "Success",
    "data": [
        {
        "code": "110101",
        "name": "TEUPAH SELATAN",
        "regency_code": "1101",
        "regency": "KABUPATEN SIMEULUE",
        "province_code": "11",
        "province": "ACEH"
        },
        {
        "code": "110102",
        "name": "SIMEULUE TIMUR",
        "regency_code": "1101",
        "regency": "KABUPATEN SIMEULUE",
        "province_code": "11",
        "province": "ACEH"
        }
    ],
    "paging": {
        "page": 1,
        "size": 100,
        "total_item": 10,
        "total_page": 1
    }
    }
    No links
    401	
    Unauthorized

    Media type

    application/json
    Examples

    Missing API Key
    Example Value
    {
    "is_success": false,
    "message": "Missing API key in x-api-co-id header"
    }
    No links
    404	
    Not Found

    Media type

    application/json
    Examples

    Regency Not Found
    Example Value
    {
    "is_success": false,
    "message": "Regency not found"
    }
    No links
    429	
    Too Many Requests

    Media type

    application/json
    Examples

    Rate Limit Exceeded
    Example Value
    {
    "is_success": false,
    "message": "Rate limit exceeded. Please try again later"
    }

### /regional/indonesia/districts/{code}/villages
    Get all villages in a specific district.

    Path Parameters
    code (required): District code
    Query Parameters
    name (optional): Filter by village name
    page (optional): Page number
    Note: Pagination size is fixed at 100 items per page and cannot be configured
    Parameters
    Cancel
    Name	Description
    x-api-co-id
    string
    (header)
    Your API key for authentication

    x-api-co-id
    code *
    string
    (path)
    District code

    110101
    name
    string
    (query)
    Filter by village name (optional)

    name
    page
    integer
    (query)
    Page number (optional)

    1
    Execute
    Responses
    Code	Description	Links
    200	
    Successful response

    Media type

    application/json
    Controls Accept header.
    Examples

    Success - Villages in District
    Example Value
    {
    "is_success": true,
    "message": "Success",
    "data": [
        {
        "code": "1101010001",
        "name": "LATIUNG",
        "district_code": "110101",
        "district": "TEUPAH SELATAN",
        "regency_code": "1101",
        "regency": "KABUPATEN SIMEULUE",
        "province_code": "11",
        "province": "ACEH",
        "postal_codes": [
            "23891"
        ],
        "is_courier_support": true
        },
        {
        "code": "1101010002",
        "name": "LABUHAN BAJAU",
        "district_code": "110101",
        "district": "TEUPAH SELATAN",
        "regency_code": "1101",
        "regency": "KABUPATEN SIMEULUE",
        "province_code": "11",
        "province": "ACEH",
        "postal_codes": [
            "23891"
        ],
        "is_courier_support": true
        }
    ],
    "paging": {
        "page": 1,
        "size": 100,
        "total_item": 18,
        "total_page": 1
    }
    }
    No links
    401	
    Unauthorized

    Media type

    application/json
    Examples

    Missing API Key
    Example Value
    {
    "is_success": false,
    "message": "Missing API key in x-api-co-id header"
    }
    No links
    404	
    Not Found

    Media type

    application/json
    Examples

    District Not Found
    Example Value
    {
    "is_success": false,
    "message": "District not found"
    }
    No links
    429	
    Too Many Requests

    Media type

    application/json
    Examples

    Rate Limit Exceeded
    Example Value
    {
    "is_success": false,
    "message": "Rate limit exceeded. Please try again later"
    }

### /regional/indonesia/postal-codes (pakai vilage code agat tidak get all postal code)
    Get all postal codes. This endpoint requires a premium subscription.

    Query Parameters
    village_code (optional): Filter by village code
    postal_code (optional): Filter by postal code
    page (optional): Page number
    Note: Pagination size is fixed at 100 items per page and cannot be configured
    Error Responses
    403 Forbidden: User is not a premium member
    401 Unauthorized: User not authenticated
    Parameters
    Cancel
    Name	Description
    x-api-co-id
    string
    (header)
    Your API key for authentication

    x-api-co-id
    village_code
    string
    (query)
    Filter by village code (optional)

    village_code
    postal_code
    string
    (query)
    Filter by postal code (optional)

    postal_code
    page
    integer
    (query)
    Page number (optional)

    1
    Execute
    Responses
    Code	Description	Links
    200	
    Successful response

    Media type

    application/json
    Controls Accept header.
    Examples

    Success - All Postal Codes
    Example Value
    {
    "is_success": true,
    "message": "Success",
    "data": [
        {
        "id": 1,
        "postal_code": "23891",
        "village_code": "1101010001",
        "village": "LATIUNG",
        "district_code": "110101",
        "district": "TEUPAH SELATAN",
        "regency_code": "1101",
        "regency": "KABUPATEN SIMEULUE",
        "province_code": "11",
        "province": "ACEH"
        },
        {
        "id": 2,
        "postal_code": "12210",
        "village_code": "3174050001",
        "village": "GROGOL UTARA",
        "district_code": "317405",
        "district": "KEBAYORAN LAMA",
        "regency_code": "3174",
        "regency": "KOTA JAKARTA SELATAN",
        "province_code": "31",
        "province": "DKI JAKARTA"
        }
    ],
    "paging": {
        "page": 1,
        "size": 100,
        "total_item": 87657,
        "total_page": 877
    }
    }
    No links
    401	
    Unauthorized

    Media type

    application/json
    Examples

    Missing API Key
    Example Value
    {
    "is_success": false,
    "message": "Missing API key in x-api-co-id header"
    }
    No links
    403	
    Forbidden - Premium Required

    Media type

    application/json
    Examples

    Error - Not Premium
    Example Value
    {
    "is_success": false,
    "message": "This endpoint is for premium members only"
    }
    No links
    429	
    Too Many Requests

    Media type

    application/json
    Examples

    Rate Limit Exceeded
    Example Value
    {
    "is_success": false,
    "message": "Rate limit exceeded. Please try again later"
    }