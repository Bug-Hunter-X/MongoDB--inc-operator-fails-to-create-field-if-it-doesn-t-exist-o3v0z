# MongoDB $inc operator bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The `$inc` operator increments a numeric field by a specified value, but it won't create the field if it doesn't exist. This leads to unexpected behavior in applications that expect the field to be created and incremented.

## Bug Description
The bug lies in the incorrect usage of the `$inc` operator. In the provided code snippet, we try to increment a field named 'quantity' by 1. If the field 'quantity' doesn't exist in the document, the `$inc` operator will not create it and the update operation will fail silently.

## Solution
To resolve this issue, you should use the `$setOnInsert` operator in conjunction with `$inc` to ensure the field is created and incremented if it doesn't exist, or simply incremented if it exists.  This ensures the operation works as expected in all cases.
