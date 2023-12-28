# Buyer/Customer Interface Documentation

## Important Changes required for deployment

As the URL for both the backend, vendor and buyer's interface will change during final production;
Some codebase variables will need to be updated to allow the use of these new URLs
Such as the link in the footer that redirects to the vendor/admin interface as well as the multiple backend requests
As such the URLs have all been stored in a variable for easy use and can be updated before deployment in a new URL

To make this changes;
Navigate to, src/config/data.js
Open the file in any notepad editor and replace the values of each variables
The current structure is as follows

```js
	export const backendURL = 'https://ubrikkbk.herokuapp.com';
	export const vendorURL = 'https://ubrikkvndr.herokuapp.com';
	export const formspreeAPI = 'mlezeavj';
```

To change the backendURL to a new URL such as 'https://back.ubrikk.com', simply

```js
	export const backendURL = 'https://back.ubrikk.com';
```

And the changes will be made across all usage in the application.

The formspreeAPI should be updated to the new API that will be used to receive the support messages
Simply create an account at formspree and get the API key for integration and replace it.