# FA Project - Agile Method

## Overview

The Fâ archaeological site in Barzan, Charente-Maritime, is growing in popularity, leading to visitor flow management challenges. To address this, a dedicated application was developed with the following goals:

- Adopt the Agile method to encourage team collaboration
- Secure online booking forms
- Simplify the booking process for visitors and staff

## Features

- **User-specific permissions:** To restrict access to sensitive data, control actions on the database, track user activity, and customize the experience according to roles.
- **SQL injection prevention:** Using prepared queries and strict input filtering.
- **Booking form:** Collects the following information from users:
  - Name, surname
  - Date of birth
  - Full address
  - Arrival date
  - Number of people (adults/children)
  - Phone number

## Technical Architecture

The application follows the **MVC (Model-View-Controller)** architecture, ensuring a clean separation of concerns.

## Security Measures

- **User Permissions:** Ensures data security by limiting access based on roles.
- **SQL Injection Prevention:** Prepared queries and input validation filters prevent SQL injection attacks.
- **Secure Data Collection:** The booking form guarantees data integrity and prevents malicious manipulation.

## Benefits

This solution streamlines visitor flow management, simplifies advance bookings, and frees up time for the staff. By adopting best practices in development and security, the application ensures robustness and sustainability.

## Skills Developed

- **Security:** Prepared queries, filters, triggers
- **Programming Languages:** HTML, CSS, JavaScript, PHP, SQL
- **Data Analysis:** SQL, MEA, data analysis
- **Client Relationship:** Regular meetings with the PO (Product Owner) using Agile methodology
- **Architecture:** MVC
- **Tools:** GitHub, Visual Studio Code, FileZilla
