#### Recursively rename files of extension
`for /R %x in (*.*) do ren "%x" *.webp`


#### Register ZeroSSL certificate
1. Generate .crt and .key files online using ZeroSSL
2. Convert to PFC using OpenSSL - `openssl pkcs12 -inkey private.key -in certificate.crt -export -out certificate.pfx`
3. Enter security credentials (optional)
4. certificate is for domain ? 5a) : 6b)
5a. Open Computer Certificates and install under Personal Store
5b. Open Certificate and find Thumbprint Id
5c. Bind thumbprint to Accredo ports (6569/6571) for 0.0.0.0 and 192.168.1.10 using netsh

Add: `netsh http add sslcert ipport={IP_ADDR}:{PORT} certhash={THUMBPRINT} appid={00112233-4455-6677-8899-AABBCCDDEEFF}`

Delete: `netsh http del sslcert ipport={IP_ADDR}:{PORT}`
    
6a. Open IIS and install certificate under Web Hosting Store
6b. Assign certificate to website
