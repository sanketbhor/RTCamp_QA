## RTCamp_QA
For Script-Review by RTCamp

This repo is created for RT Camp QA-Engineer Assignment purpose .
It consist of scripts and screenshots for test cases on Playwright framework.

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


2.Test Case 2: Product Checkout

