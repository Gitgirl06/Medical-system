# Medical System

A comprehensive Node.js and TypeScript-based RESTful API for managing medical appointments, doctors, patients, and medical records. Built with Express and MongoDB, this project provides a scalable backend foundation for healthcare applications.

---

## Table of Contents

- Features
- Project Structure
- Getting Started
- Environment Variables
- Scripts
- API Endpoints
- Schema Overview
- Contributing
- License

---

## Features

- **Patient Management:** Create, update, and retrieve patient records.
- **Doctor Management:** Manage doctor profiles and availability.
- **Appointment Scheduling:** Book, update, and cancel appointments.
- **Medical Records:** Store and access patient medical histories.
- **MongoDB Integration:** Robust data storage using Mongoose ODM.
- **TypeScript:** Strongly typed codebase for reliability and maintainability.
- **Environment Configuration:** Secure and flexible configuration via .env.

---

## Project Structure

```
.env
.gitignore
package.json
tsconfig.json
index/
src/
  config.ts
  server.ts
  api/
    index.ts
    appointments/
      controller.ts
      routes.ts
    doctors/
      controller.ts
      routes.ts
    medical-records/
      controller.ts
      routes.ts
    patients/
      controller.ts
      routes.ts
  schema/
    appointments.schema.ts
    doctors.schema.ts
    patients.schema.ts
    records.schema.ts
```

- **src/server.ts:** Entry point for the Express server.
- **src/config.ts:** Application configuration (e.g., environment variables).
- **src/api/**: Contains route and controller logic for each domain.
- **src/schema/**: Mongoose schemas for data models.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local MongoDB instance

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/medical-system.git
   cd medical-system
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to .env and update values as needed.
   - Example:
     ```
     PORT=3000
     MONGO_URL="your-mongodb-connection-string"
     ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

5. **Build for production:**
   ```sh
   npm run build
   npm start
   ```

---

## Environment Variables

| Variable    | Description               | Example Value         |
| ----------- | ------------------------- | --------------------- |
| `PORT`      | Port for Express server   | `3000`                |
| `MONGO_URL` | MongoDB connection string | `"mongodb+srv://..."` |

---

## Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Run server in development mode (ts-node) |
| `npm run build` | Compile TypeScript to JavaScript         |
| `npm start`     | Build and start server in production     |

---

## API Endpoints

### Patients

- `GET /api/patients` — List all patients
- `POST /api/patients` — Create a new patient
- `GET /api/patients/:id` — Get patient by ID
- `PUT /api/patients/:id` — Update patient
- `DELETE /api/patients/:id` — Delete patient

### Doctors

- `GET /api/doctors` — List all doctors
- `POST /api/doctors` — Add a new doctor
- `GET /api/doctors/:id` — Get doctor by ID
- `PUT /api/doctors/:id` — Update doctor
- `DELETE /api/doctors/:id` — Remove doctor

### Appointments

- `GET /api/appointments` — List appointments
- `POST /api/appointments` — Book appointment
- `GET /api/appointments/:id` — Get appointment details
- `PUT /api/appointments/:id` — Update appointment
- `DELETE /api/appointments/:id` — Cancel appointment

### Medical Records

- `GET /api/medical-records` — List medical records
- `POST /api/medical-records` — Add new record
- `GET /api/medical-records/:id` — Get record by ID
- `PUT /api/medical-records/:id` — Update record
- `DELETE /api/medical-records/:id` — Delete record

---

## Schema Overview

- **Patients:** Personal and contact information.
- **Doctors:** Professional details and specialties.
- **Appointments:** Scheduling and status.
- **Medical Records:** Patient history and notes.

See [src/schema/patients.schema.ts](src/schema/patients.schema.ts), [src/schema/doctors.schema.ts](src/schema/doctors.schema.ts), [src/schema/appointments.schema.ts](src/schema/appointments.schema.ts), and [src/schema/records.schema.ts](src/schema/records.schema.ts) for details.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss your ideas.

---

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.

---

## Author

Kyma

---

For questions or support, please open an issue on GitHub.---

## Environment Variables

| Variable    | Description               | Example Value         |
| ----------- | ------------------------- | --------------------- |
| `PORT`      | Port for Express server   | `3000`                |
| `MONGO_URL` | MongoDB connection string | `"mongodb+srv://..."` |

---

## Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Run server in development mode (ts-node) |
| `npm run build` | Compile TypeScript to JavaScript         |
| `npm start`     | Build and start server in production     |

---

## API Endpoints

### Patients

- `GET /api/patients` — List all patients
- `POST /api/patients` — Create a new patient
- `GET /api/patients/:id` — Get patient by ID
- `PUT /api/patients/:id` — Update patient
- `DELETE /api/patients/:id` — Delete patient

### Doctors

- `GET /api/doctors` — List all doctors
- `POST /api/doctors` — Add a new doctor
- `GET /api/doctors/:id` — Get doctor by ID
- `PUT /api/doctors/:id` — Update doctor
- `DELETE /api/doctors/:id` — Remove doctor

### Appointments

- `GET /api/appointments` — List appointments
- `POST /api/appointments` — Book appointment
- `GET /api/appointments/:id` — Get appointment details
- `PUT /api/appointments/:id` — Update appointment
- `DELETE /api/appointments/:id` — Cancel appointment

### Medical Records

- `GET /api/medical-records` — List medical records
- `POST /api/medical-records` — Add new record
- `GET /api/medical-records/:id` — Get record by ID
- `PUT /api/medical-records/:id` — Update record
- `DELETE /api/medical-records/:id` — Delete record

---

## Schema Overview

- **Patients:** Personal and contact information.
- **Doctors:** Professional details and specialties.
- **Appointments:** Scheduling and status.
- **Medical Records:** Patient history and notes.

See [src/schema/patients.schema.ts](src/schema/patients.schema.ts), [src/schema/doctors.schema.ts](src/schema/doctors.schema.ts), [src/schema/appointments.schema.ts](src/schema/appointments.schema.ts), and [src/schema/records.schema.ts](src/schema/records.schema.ts) for details.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss your ideas.

---

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.

---

## Author

Kyma

---

For questions or support, please open an issue on GitHub.
