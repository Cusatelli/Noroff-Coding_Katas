# IPv4 Validation
Create a function that takes a string (IPv4 address in standard dot-decimal format) and returns true if the IP is valid or false if it's not. For information on IPv4 formatting, please refer to the resources in the Resources section.

### Examples
```
isValidIP("1.2.3.4") ➞ true
```

```
isValidIP("1.2.3") ➞ false
``` 

```
isValidIP("1.2.3.4.5") ➞ false
```

```
isValidIP("123.45.67.89") ➞ true
```

```
isValidIP("123.456.78.90") ➞ false
```

```
isValidIP("123.045.067.089") ➞ false
```

### Notes
- IPv6 addresses are not valid.
- Leading zeros are not valid ("123.045.067.089" should return false).
- You can expect a single string for every test case.
- Numbers may only be between 1 and 255.
- The last digit may not be zero, but any other might.

### Resources
IPv4 and IPv6 Address Formatting

<a href="https://www.ibm.com/support/knowledgecenter/en/STCMML8/com.ibm.storage.ts3500.doc/opg_3584_IPv4_IPv6_addresses.html">https://www.ibm.com/support/knowledgecenter/en/STCMML8/com.ibm.storage.ts3500.doc/opg_3584_IPv4_IPv6_addresses.html</a>
