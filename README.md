/# My Financial Management REST API

A Simple REST API built with Node.js, Express, and Firebase, designed to manage financial data including users, expenses, and income tracking.

 Features

-User Management
-Expense Tracking
- Income Management
-Secure Database with Firebase
-Real-time Updates
- Error Handling



### Prerequisites
- Node.js
- NPM
- Firebase 

### Installation Steps


2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory
   - Add the following configurations:
   ```env
   PORT=3000
FIREBASE_PROJECT_ID=simple-rest-api-43b2a
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@simple-rest-api-43b2a.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2OUBSHsg2weKR\nKynusHewpZm55wjPfxYKQjLIBoMQff73fy9/JnXusjy74VPqwO+oYA3VQHyvE6O3\nNRXfzKTFGx6OuCgG/EJzNz3Nvdyw1P0aSqgMwu3L52P3E7Trp0OBD4Tp8p4SNKJb\nEVvekKBVBOgqCUTO+4Vk8BP3bR2vbtYfF/8J4VF8ufuAnU/0SMXvrqbTE2/Bd74c\nQ01mIjefyDZ8ICzg7KEHQagEAyLIZTIhPrRruIgqZBRyDoRG18fGai7P8hYEhDmk\n93DPUEjtQoNTwUjhoH67eUaRVFI+ZBzHL9vTTCbkzDVRCJ2T+YmEdrDTQGQZgWZc\nuUEQaJQBAgMBAAECggEAJBUIEHq56GXR6C7k2belq5vO6cm+q9+dTKC5D3SCpVRd\nlUJg9Et4VLCEaCuBA1361ptWgeCID97Sryda0nriMYliLp52hpOS0N+iZEfxGC7E\ng10/E2/RyGtkFvuW+oafTkH1bqG0/SPg9ilkyJhYtx0Gn7RAJMAXNNp5CahYlXEF\nr2bPyt9AB3O9IicY+DPkF3Gz7izdtfN854SWYzcjwCe8FVe/4Sj+gR4aI/vYTgHO\nYJYIL2uOUO54DeLqrR4nEL4lgrYkUHR3KDK7+iQSUF6Q1Vi+iLq3DxolaAqbg49x\nPT4Qnk8Kg0BVF7A0FMm8i8LVoKBBCQMUKKt8uRILsQKBgQD3bj6WAQZODd4fgOEA\nzKCNtl/faWK1KQ3BWF6O/xLoLD2ETkigVNKXqdTWAMDENtik8egAJ+HSayL5nD1k\n05V6U0DPe6gb4omniOjAEd/MmO3WWaZ+BPf/Q1OdNHVz0E6bF2GxxvSbI/DOgpR8\nOFqdhMHmPy0hgOIJ0H8KgGdQVQKBgQC8iN9D9CQf2JnrY2mhSwfe/bdEP8Eazv7K\n5QuWp/i+O8h6F9RocsE2Kcl5VlSwty+1KgsxYsGgc6n0iaaUc54R5T1pBKMpzTcf\nBxbpxhlDP/mDIyVFGiSbIWcMGACrnAKDY7YjpjOCAJlE6ioeTONeYxqnrAG1qOUs\nOJdMT4Vw/QKBgQDa1trr+UQGTSWkX2yiNFncfO0WwDLZX9IWq34Wo2uphVdzaXm6\ntMr98OuZy1izMn8yg/JaEOweGzv34UQ7pReT9YZg/FGXOCnfz6tsFWMHpkrVRr2G\nwAZH8thFNlybbiXX7jot7nXxsTwOqleB9qXOo9iLOF1GQKOrYoi6VQ8LcQKBgQCG\nw9fD/TntQakUZyVUVAu2S+m6cVAZV6ktYvgbosndQWKWU35TguO1Ub1gbGNxRiBm\nAT2q+YqqpMLxt4tJRjPRWunArb3r3XLvTOQGCsJ4Hby/DlpPwNY1xXShYm7oPEZX\noOjLJrxeywrEBhZBPniwOWsOO5elQKtAJtuPgrBCCQKBgHSu2r57IKh0iAXpixRp\nRygn9s4aqS14zoZdLVT7HRkF+5VXCh6EULxFUuigiA4Z+/dsD9dwSv4CalHXqBSV\nV2G25kNCTsQgZT3SMp0/67+57RUMxvW39U1pfpRn+kCHl94DMMiXu1N6VPjzHTEh\ngu5MDLp0HZdKqDZeaSrWchVQ\n-----END PRIVATE KEY-----\n"
   ```

4. **Start the Server**
   ```bash
   npm run dev
   ```
   The server will start on http://localhost:3000

## API Endpoints

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/users | Get all users |
| POST   | /api/users | Create new user |
| PUT    | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

### Expenses
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/expenses | Get all expenses |
| POST   | /api/expenses | Create expense |
| PUT    | /api/expenses/:id | Update expense |
| DELETE | /api/expenses/:id | Delete expense |

### Income
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/income | Get all income |
| POST   | /api/income | Create income |
| PUT    | /api/income/:id | Update income |
| DELETE | /api/income/:id | Delete income |

## Example API Usage

### Create User
```http
POST http://localhost:3000/ap;i/users
Key: Content-Type
Value: application/json

{
    "name": "Chisom Ilekuba",
    "email": "chisomilekuba@example.com",
    "password": "1234567"
}
```

### Record Expense
```http
POST http://localhost:3000/api/expenses
Content-Type: application/json

{
    "userId": "user_id",
    "amount": 100,
    "category": "Shopping",
    "description": "Valentine Sales"
}
```

### Record Income
```http
POST http://localhost:3000/api/income
Content-Type: application/json

{
    "userId": "user_id",
    "amount": 5000,
    "source": "Salary",
    "description": "Monthly Salary"
}
```

## Project Structure
```
simple-rest-api/
├── config/
│   └── firebase.js
├── controllers/
│   ├── userController.js
│   ├── expenseController.js
│   └── incomeController.js
├── routes/
│   ├── userRoutes.js
│   ├── expenseRoutes.js
│   └── incomeRoutes.js
├── .env
└── app.js
```

## Technologies Used
- Node.js
- Express.js
- Firebase/Firestore
- JSON Web Tokens
- dotenv

## ✅ Testing
Use Postman:
1. Set the correct HTTP method
2. Use the correct endpoint URL
3. Include required headers (Content-Type: application/json)
4. Include appropriate request body for POST/PUT requests

## Response Formats

### Success Response
```json
{
    "success": true,
    "data": {
        "id": "mynqBYX3jSTzmN9xtAbM",
        "name": "Chisom Ilekuba",
        "email": "chisomilekuba@example.com"
    }
}
```

