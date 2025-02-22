# FA Project - Agile Methodology

## Overview

The Fâ archaeological site in Barzan, Charente-Maritime, is experiencing a growing number of visitors, which has led to challenges in managing visitor traffic. To address this, a dedicated application was designed with the following objectives:

- Implement Agile methodology to foster team collaboration.
- Secure online reservation forms.
- Streamline the booking process for visitors and staff.

## Key Features

- **User Role Management:** Defines specific access levels to sensitive data, controls database operations, tracks user actions, and tailors the user experience based on roles.
- **SQL Injection Protection:** Ensures data integrity by using prepared statements and implementing strict input validation.
- **Reservation Form:** Collects the following information:
  - Full Name
  - Date of Birth
  - Complete Address
  - Arrival Date
  - Number of people (adults/children)
  - Contact Number

## Technical Architecture

The application follows the **MVC (Model-View-Controller)** design pattern, ensuring a modular and maintainable structure by separating concerns between the data (Model), user interface (View), and the logic that controls the application (Controller).

## Security Measures

- **User Role-based Permissions:** Ensures that access to sensitive data is controlled and restricts actions based on user roles, enhancing security.
- **SQL Injection Mitigation:** Utilizes prepared statements to prevent SQL injection vulnerabilities and enforces input sanitization to ensure data integrity.
- **Data Validation:** The reservation form incorporates thorough validation procedures to ensure accurate data collection and prevent malicious activities.

## Benefits

This solution improves the management of visitor flow by facilitating advance reservations and saving time for staff members. The application adheres to best practices in software development, ensuring security, reliability, and scalability for the future.

## Skills Developed

- **Security Practices:** Prepared statements, input validation, database triggers
- **Programming Languages:** HTML, CSS, JavaScript, PHP, SQL
- **Data Management:** SQL, data modeling, and analysis
- **Client Interaction:** Regular Product Owner (PO) meetings following Agile methodologies
- **Architecture:** MVC framework
- **Tools:** GitHub, Visual Studio Code (VSC), FileZilla
