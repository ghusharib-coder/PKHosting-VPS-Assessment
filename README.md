# PKHosting VPS Hosting Assessment

A responsive static VPS pricing page created as part of the TechAbout Web Developer assessment.

## How to Open

No installation or build process is required.

Open `index.html` directly in a browser.

The project uses only:

* HTML
* CSS
* JavaScript

There are no external libraries, APIs, fonts or CDN resources.

## Features

* Responsive VPS pricing page
* Four VPS plans
* Monthly / Annual billing toggle
* PKR / USD / GBP currency selector
* Annual pricing calculation
* Annual savings calculation
* Comparison table with 10 specifications
* FAQ expand/collapse
* Keyboard-accessible controls
* Screen-reader price announcements
* Billing period and currency persistence using localStorage
* Mobile responsive layout

## Pricing Logic

Annual billing uses the assessment formula:

Monthly price × 10 ÷ 12

For example:

Growth:

Rs 4,800 × 10 ÷ 12 = Rs 4,000/month

The annual total is calculated as:

Monthly price × 10

The savings amount is calculated from the difference between twelve monthly payments and the annual total.

## Currency Rates

The assessment-specified fixed rates are used:

* 1 USD = 278.50 PKR
* 1 GBP = 355.00 PKR

No exchange-rate API is used.

## Responsive Testing

The page was designed and tested for:

* 360px mobile
* 768px tablet
* 1440px desktop

The comparison table has its own horizontal scrolling area on smaller screens.

## Browser Testing

Tested in:

* Google Chrome
* Mozilla Firefox

## Accessibility

The page uses semantic HTML elements, keyboard-operable controls, visible focus states, table headings, accessible FAQ elements and an ARIA live region for price updates.

Monthly PKR prices and the comparison table are present directly in the HTML so the main pricing content remains available when JavaScript is disabled.

## Performance

The page is self-contained and does not make external network requests.

No external images, fonts, JavaScript libraries or CSS frameworks are used.

## AI Assistant Disclosure

An AI assistant was used during development for guidance, code suggestions and reviewing implementation decisions.

The final implementation was reviewed and tested manually, and I can explain the code and decisions used in the project.

## Unfinished / Possible Improvements

If this were a production website, I would improve:

* Add real checkout/order links
* Add a production contact/order flow
* Perform a full accessibility audit
* Add automated tests for pricing calculations
* Add more detailed VPS plan information
* Connect the page to a real pricing backend if required

This assessment uses invented VPS plans and prices as requested in the brief.