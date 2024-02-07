## RTCamp_QA
For Script-Review by RTCamp

This repo is created for RT Camp QA-Engineer Assignment purpose .
It consist of scripts and screenshots for test cases on Playwright framework.
I have added test case videos too at the end which were recorded during the local testings.

## Installation

```
git clone https://github.com/sanketbhor/RTCamp_QA.git
```

## Run Code

1. Open Folder
```
cd RTCAMP_QA
```

2. Install npm 
```
npm install
```

3.Install playwright
```
npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --lang=js
```

4.Test Case 1: Amazon Login 
```
npx playwright test Amazon_Login.spec.js --project=chromium --headed
```

5.Test Case 2: Product Checkout
```
npx playwright test Product_Checkout.spec.js --project=chromium --headed
```

6.Test Case 3: Search Functionality
```
npx playwright test Search_Functionality.spec.js --project=chromium --headed
```

7.Test Case 4: Wishlist Functionality
```
npx playwright test Wishlist.spec.js --project=chromium --headed
```


## Test Case Recordings

1. Test Case 1: Amazon Login

 
https://github.com/sanketbhor/RTCamp_QA/assets/66402092/7f9aef39-217c-42ed-a3e4-2a75023834b3


2. Test Case 2: Product Checkout


https://github.com/sanketbhor/RTCamp_QA/assets/66402092/f4ae8839-4f4f-4ca9-a2c4-d152b0f6e69f

3. Test Case 3: Search Functionality


https://github.com/sanketbhor/RTCamp_QA/assets/66402092/83fbe481-294b-4cc8-90e3-8d17c4e2e920

4. Test Case 4: Wishlist Functionality


https://github.com/sanketbhor/RTCamp_QA/assets/66402092/23b2de40-7528-4d08-9bba-0c22ded8e7c0


## Manual Testing Test Cases for Amazon 
```
https://docs.google.com/document/d/1ec7HmyoDnvWpQlkcztkJ1kTnmgDNjCBb3RMOXYfo8UE/edit?usp=sharing
```
This Google doc link contains RTCamp Amazon Testing Document Flow 


## Issues are Created regarding UI Testing performed on [rtcamp.](https://qa.rtcamp.net/)https://qa.rtcamp.net/ .
