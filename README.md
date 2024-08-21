
# Poll Form Application

Welcome to the Poll Form Application! This project is a full-stack web application designed to create and manage a multi-step poll form where users can answer a series of questions, see a summary of their responses, and submit their answers to a backend for storage in a PostgreSQL database.



## Features

- **Multi-Step Poll Form**: Users can navigate through a series of questions, each with customizable options.
- **Vertical Carousel Navigation**: The poll form features a smooth, vertically sliding carousel for question navigation.
- **Real-Time Summary**: Users can review their answers before submitting the form.
- **PostgreSQL Integration**: All submitted responses are securely stored in a PostgreSQL database.
- **Responsive and Modern UI**: Built with Material-UI, the interface is sleek and user-friendly.

## Technologies Used

- **Frontend**: React, Material-UI, Axios
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **State Management**: React Context API
- **Testing**: Jest, React Testing Library
- **Other Tools**: Nodemon, pgAdmin

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14.x or later)
- **npm** or **yarn**
- **PostgreSQL** (v12.x or later)
- **pgAdmin** (Optional, for managing your PostgreSQL database)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:Soban71/React_Assessment.git

   cd poll-form-app
   ```

2. **Set Up the Backend**:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```

   - Install the necessary dependencies:
     ```bash
     npm install but in this case already node module available
     ```

   - Create a `.env` file in the `backend` directory:
     ```bash
     touch .env
     ```

   - Add the following environment variables to the `.env` file:
     ```plaintext
     PORT=5000
     PGUSER=your_postgresql_username
     PGHOST=localhost
     PGPASSWORD=your_postgresql_password
     PGDATABASE=poll_database
     PGPORT=5432
     ```

   - Set up the PostgreSQL database using pgAdmin or the PostgreSQL CLI. Create a database named `poll_database` and execute the following SQL command to create the `poll_results` table:
     ```sql
     CREATE TABLE poll_results (
         id SERIAL PRIMARY KEY,
         user_name VARCHAR(255),
         answers JSONB,
         submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

   - Start the backend server:
     ```bash
     npm run dev
     ```

3. **Set Up the Frontend**:

   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```

   - Install the necessary dependencies:
     ```bash
     npm install
     ```

   - Start the frontend development server:
     ```bash
     npm start
     ```

### Running the Application

- **Frontend**: Open your browser and navigate to `http://localhost:3000` to interact with the poll form.
- **Backend**: The backend server should be running on `http://localhost:5000` and will handle API requests and database operations.

### Running Tests

If you have tests set up, you can run them using the following command:

```bash
npm test
```

This will execute all unit tests and provide you with feedback on the success or failure of each test.

## Project Structure

Here's a brief overview of the project's structure:

```
poll-form-app/
├── backend/
│   ├── index.js        # Backend server
│   └── .env            # Environment variables for the backend
├── frontend/
│   ├── src/
│   │   ├── components/  # React components (PollForm, Summary, carousel etc..)
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # Entry point for the React app
│   └── public/          # Static assets
└── README.md
```

## Usage

1. **Complete the Poll**: Navigate through the questions in the poll form.
2. **Submit Your Responses**: After reviewing your answers on the summary page, enter your name and submit your responses.
3. **View Data in Database**: Use pgAdmin or a PostgreSQL client to view the submitted data in the `poll_results` table.

## API Endpoints

### POST /api/submit-poll

- **Description**: Submits the user's poll responses to the backend.
- **Request Body**:
  ```json
  {
    "userName": "John Doe",
    "answers": {
      "How was your week overall?": "Good",
      "Would you recommend us?": "Yes",
      "How satisfied are you with our service?": "Very Satisfied"
    }
  }
  ```
- **Response**: 
  ```json
  {
    "message": "Poll submitted successfully!"
  }
  ```

