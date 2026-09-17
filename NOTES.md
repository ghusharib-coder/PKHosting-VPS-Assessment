# Notes

## PKHosting Pricing Section Observations

### 1. Billing Period Toggle

PKHosting uses a billing-period selector such as Monthly and Annually.

**Consequence:** Users can compare short-term and longer-term pricing without leaving the pricing section. I used the same approach in the assessment page with a simple Monthly/Annually toggle.

### 2. Plan Cards Show Pricing and Resources Together

The VPS pricing section places the plan price together with important resources such as vCPU, RAM, storage and traffic.

**Consequence:** Users can compare the cost and resources of a plan without opening another page. I followed this pattern by keeping the main VPS resources visible inside each pricing card.

### 3. Annual Pricing Shows the Annual Total

PKHosting shows both the monthly equivalent and the yearly amount for annual billing.

**Consequence:** Showing both values makes the actual yearly commitment clearer. My annual cards therefore show the calculated monthly equivalent, annual total and savings.

### 4. Plan Labels Help Users Understand Different Options

The VPS plans use labels such as "Most Popular", "Best Value", "High Memory" and "Power" to give users additional context.

**Consequence:** These labels help users quickly identify plans for different use cases. I used a "Most Popular" label on the Growth plan as required by the assessment.

### 5. VPS Specifications Are Detailed

The VPS page provides technical specifications including vCPU, RAM, storage, traffic and root/SSH access.

**Consequence:** Technical buyers need more information than just the price before choosing a VPS. I therefore added a separate comparison table with ten specification rows.

### 6. Optional VPS Extras Are Separated From Base Plans

PKHosting lists additional services such as Windows licensing, backups, extra IPv4, extra storage and private networking separately from the base VPS plans.

**Consequence:** Separating optional costs makes the base plan easier to understand and avoids hiding additional charges inside the main price. My assessment page keeps the four base plans focused on their core resources.

---

## Trade-offs

### State Persistence

I used localStorage to remember the selected billing period and currency.

This means that if a user selects Annual and USD and reloads the page, those selections remain active. No server, API or external storage is required.

### Payment Methods

I kept the footer payment section limited to four customer-facing options:

* Bank Transfer
* JazzCash
* EasyPaisa
* Credit / Debit Card

---

## Assessment Notes

The VPS plans and prices in this assessment are invented sample data as requested in the brief.

The page does not connect to PKHosting accounts, payment systems or external APIs.
