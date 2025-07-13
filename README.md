# Stack Smart Guide 

Stack smart guide is a web pallet calculator that provides logistics professionals with a recommended vehicle size based on cargo dimensions, weight and load height. The site analyses the data provided and suggests from small vans to large freight trucks depending on the size of the load. 

The site can be accessed by this [link](https://munashemuk2.github.io/StackSmartGuide/)

![Responsive Mockup](screenshots/mockup.jpg)

### Target audience:

- Transportation planners and freight forwarders 


### Purpose and Value of Stack Smart Guide to users: 

The site makes freight planning easier for logistics professionals as the guide suggests the ideal vehicle size based on the cargo they will be transporting.  In return, their planning will be more efficient, ensures safe transportation as goods will not be overloaded over the vehicle weight capacity and they will choose the right vehicle that fits all goods which reduces costs of sending replacement vehicles to their clients due to miscalculation errors. 

### Planning 

Defined the core purpose: smart stacking and vehicle recommendation.Outlined key pages: Home, Vehicle Guide, Contact. Identified target users: logistics professionals

### Core Site Formula applied in JavaScript

 ### How to Determine if Pallets Fit in a Vehicle

 1.	Check the Total Pallet Length Against the Vehicle Length

- Multiply the length of a single pallet by the total number of pallets.
- If the combined pallet length is equal to or less than the van's length, proceed to check the width.
- If the total length exceeds the van’s length, rearrangement might be necessary.

2.	Adjust the Pallet Orientation to Fit the Space

- Pallets can be rotated to reduce the total length taken up inside the vehicle.
- Example: If a pallet is 120 cm (length) × 100 cm (width), it can be rotated so that the 100 cm width becomes the length instead, potentially making the load fit better.

3.	Check the Width of the Pallets Against the Vehicle Width

- After adjusting or confirming the length, check if pallets fit within the vehicle’s width.
- Apply the same logic: If width exceeds the van’s limit, consider rotating the pallets to balance the fit.

4.	Consider Stackability (If Applicable)

- If the pallets are stackable, multiply the height of one pallet by the number stacked until reaching the vehicle’s height limit.
- StackSmartGuide does not account for stackable pallets, so this step is omitted in its calculations.

### Total volume

Total pallet dimensions = Length × Width × Height
-	Length: The length of the pallet.
-	Width: The width of the pallet.
-	Height: The height of the pallet.

For example: 
120cm (length) × 100cm (width) × 150 cm (height) = 1,800,000 cubic centimetres (cm³)

### Final Decision

- If the combined pallet dimensions fit within the vehicle’s length, width, and height, then the vehicle is suitable.
- If not, a larger vehicle may be needed.
- Total volume was also used in JS to recommend the appropriate vehicle size, ensuring efficient and safe transportation.
---

### User stories:

_First time visitors_

1. As a logistics professional I want a simple and intuitive, easy-to-use platform that simplifies complex logistics calculations.

2. As a logistics professional I want key dimensions unit inputs that ensure the correct sized vehicle is recommended 

3. As a logistics professional I want to see Stack Smart Guide’s contact details in case I have any questions on how to use the guide tool 

_Returning visitors_

1. As a logistics professional, I want accurate cargo calculations and vehicle recommendations to ensure optimal transport solutions.

2. As a logistics professional, I want to see updated features 

3.	As a logistics professional, professional I want to see Stack Smart Guide’s contact details in case there are any issues with the calculator

_Frequent users_

1. As a logistics professional I want consistent and dependable results for freight planning

## Features

+ ### Logo

    - Placed at the top of the page is the company logo "StackSmartGuide" on the left

    ![Logo](screenshots/logo.jpg)

---

+ ### Home Page

    - Features: 

    ![Home Page](screenshots/landingpage.jpg)

        * Guide introduction with steps on how to use the guide 
        * Form with inputs/ select options to collect data for vehicle recommendation 
        * Calculate button to show results based on user inputs and reset button to bring form back to its initial state and allow user to fill in new information 

---

+ #### Footer

    - Footer contains a contact email and number to allow users to report issues and ask questions on how to effectively use the guide
​
    ![Footer](screenshots/footer.jpg)
​
---
## Technologies Used

- [If else statements](https://www.shecodes.io) - Used to Access Properties Inside an Object for If Else Statements
- [VSCode](https://code.visualstudio.com/)  Used as the main code editor
- [GitHub](https://github.com/) code host for the site
- Code institute tutorials for understanding how to access elements in the DOM through JavaScript
---

### Solved bugs

1. Had an issue with the select options for the pallet types showing as strings despite the select type being a number. Rectified this by adding .value to the variable in JavaScript and listing the pallet size dimensions 

2. The site buttons were not working on the page when trying to add an event listener for clicks in a form. Resolved this by taking out the form tags and putting the form data in a div container instead.

3. The two buttons on the home page were not staying in one position when screen size changed so placed them in a div and used flex box 

### Testing

1. Deployed the site early so I could catch deployment specific bugs early on live site 

2. Verified that all UI elements ( buttons, form inputs, accordion) operate as expected.

3. Confirmed vehicle recommendation logic runs correctly with varied pallet types, dimensions, and weight inputs.

4. Performed manual walkthroughs replicating real user scenarios—changing pallet types, submitting form, reading output.

5. Manually Tested website functionality by using the site as an end user. This involved entering various input combinations into the form fields, triggering the calculateTotal() function via the ‘Calculate’ button and ensuring that the vehicle recommendation output appeared correctly from the vanOutput element. 


### Unsolved bugs

1. On the vehicle guide page the main header was appearing lower on the page and could not push it updwards by attempting to add margin. As the space at the top is only small I left the header as it is. 

### Future development 

Future development will focus on optimizing the functionality of the pallet calculator so it can calculate stackable pallets and provide vehicle recommendation based on manual length and width input. 

---
## Design

### Color Scheme

![Color pallet](screenshots/color-pallete.jpg)

- The colour scheme for the site is blue, orange and white 

- Blue to instil user trust and convey reliability and professionalism so the site visitors feel assured about the accuracy of the information from the site. 

-	Orange to draw users’ attention to the logo and to highlight the vehicle recommendation output box 

- The white backgrounds make text and the site content clearer.

### Typography


- Chose open/public sans Google Font as they increase readability and clarity. Due to this it will be easy for users to scan through data and numerical values 

### Wireframes 

#### Mobile/Tablets/Desktop devices

- [Wireframe link](https://www.canva.com/design/DAGsg5tEPug/F1DLTwL4BDx1LUsQqJEtiQ/edit)

### Wireframe Reasoning 

1. The wireframe prioritizes clarity and usability, ensuring users can quickly understand the purpose of the Smart Pallet Calculator.

2. Input fields on the pallet calculator form/contant us page are logically grouped to guide the user through step-by-step data entry

3. The calculate and reset button on home page and submit button on contact us page are positioned to reinforce final action after data is entered

4. Images added on the vehicle guide page as an aid to indicate vehicle sizes in each section 


---

## Testing

Please refer to the [TESTING.md](testing.md) file for all test-related information 

## Compatibility

In order to confirm the correct functionality, responsiveness, and appearance:

+ The website was tested on popular browsers : Chrome and Microsoft edge

    - Chrome:

    ![Chrome](screenshots/chrome.jpg)

     - Microsoft Edge:

    ![Microsoft Edge](screenshots/MicrosoftEdge.jpg)

---

## Responsiveness


+ Also checked the website's responsiveness in devtools - Chrome.

    - Extra small devices:

    ![XS devices](screenshots/xs-devices.jpg)

    ---

    - Small devices:

    ![Small devices](screenshots/smalldevices.jpg)

    ---

    - Medium devices:

    ![Medium devices](screenshots/medium-devices.jpg)

    ---
    
     - large/Xl devices:

    ![Extra large devices](screenshots/largexl.jpg)
---
## Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Pallet Data Form | | | | | |
| Number of pallets input | Enter number | number is displayed | Yes | Yes | - |
| Pallet height input | Enter number | number is displayed | Yes | Yes | - |
| Weight per pallet input | Enter number | number is displayed | Yes | Yes | - |
| Select pallet type | Select one of the 2 predifined pallet types  | pallet type is displayed | Yes | Yes | - |
| Buttons | | | | | |
| Calculate button | Click on the calculate button | An output of a vehicle recommendation is displayed | Yes | Yes | - |
| Reset button| Click on the reset button| The pallet data form refreshes all numbers entered by user are reset | Yes | Yes | - |
---

## Validator testing
+ ### HTML
  #### Landing Page
   
    ![Landing Page HTML Validator](screenshots/htmlvalidator.jpg)

     - No errors or warnings were found when passing through the official W3C validator.

    
+ ### CSS
  No errors or warnings were found when passing through the official W3C (Jigsaw) validator 
    ![CSS](screenshots/cssvalidator.jpg)

 ---

+ ## LightHouse report

    - Lighthouse in devtools confirmed the site has optimal perfoamce. See below: 
    
  ### Home page

  ![Landing Page Lighthouse](screenshots/lighthouse.jpg)

---

+ ### JSHint

 No errors or warnings were found when passing through the JS code in JSHint. Only  warnings indicating that the version of JSHint does not support key word 'const' as  this is supported Javascript version ES6. Also reset form indicated as unused variable but it is used to to reset pallet calculator form.

   ![JSHint](screenshots/jshint.jpg)

---


## Deployment

### Deployment to GitHub Pages

- The site was deployed to GitHub pages. Using the following steps: 
  - In the [GitHub repository](https://github.com/MunasheMuk2/StackSmartGuide), clicked on the Settings tab 
  - Selected the main branch under default branch and clicked on code 
  - Under deployments was a ribbon display to indicate the successful deployment.

The live link can be found [here](https://munashemuk2.github.io/StackSmartGuide/)

### Local Deployment

In order to make a local copy of this project clone it in your IDE Terminal using the following command:

- `git clone https://github.com/MunasheMuk2/StackSmartGuide`


---

## Future improvements
- Add more pallet types to the select options  
- Allow users to manually type in their pallet length and width

---

 #### Tools

    - [Favicon](https://favicon.io/favicon-converter/) generating an emoji fav icon 
    - [Canva](https://www.canva.com/) Wireframes created in canva
    - Used chatgpt and dev tools to test some of the Javascript code 
  
---

### Credits

All work done by myself - my two accounts MunasheMuk and MunasheMuk2 showing in error in git hub as contributors



## Acknowledgments

- [Code Institute](https://codeinstitute.net/) All slack community members willing to help at any time of the day. 

---