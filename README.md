# WebdriverIO-for-the-[Telnyx](https://telnyx.com/)-website
_____
### **In this project, we write, automate and output a report to the browser of several tests for the [site](https://telnyx.com/)**

## Getting started
___
### *Prerequisites* :
- Node.js 14 or above. You can download it [here](https://nodejs.org/en/download/)

### *Installation* :  
1. Clone the repo using:  
```sh 
git clone https://github.com/vitaliyy-turovskiyy/WebdriverIO-for-the-Telnyx-website.git
```
2. Install npm packages using :
```sh
npm install
```
### *Usage* :
Open the terminal and run :
```sh
   npm run wdio
   ```
For running in chrome :
```sh
   npm run test:chrome
   ```
For running in firefox :
```sh
   npm run test:firefox
   ```
For runnig in docker :
```sh
   docker-compose -f ./dockercompose.yml up
   npm run test:docker
   ```
### *Generate and open allure report* :
```sh
   npm run report
   ```
____
### The test report implemented through GitHub pages can be seen [here](https://vitaliyy-turovskiyy.github.io/CypressCucumber-Telnyx/)





![W](https://v6.webdriver.io/img/webdriverio.png) 

More information about [*WebdriverIO*](https://webdriver.io/) 

:file_folder: The file with test cases is in the **src**  folder