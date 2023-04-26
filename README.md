# Roman Numeral Calculator API

This is a Node.js application that serves as an API for calculating the numeric value of a Roman numeral passed as a path parameter. It is deployed on Railway.

## Usage

To use the API, make a GET request to the following endpoint:
```
https://your-app-name.railway.app/roman-to-int/:numeral
```
Replace `your-app-name` with the name of your Railway application and `:numeral` with the Roman numeral you want to convert to its numeric value.

The API will respond with a JSON object containing the numeric value of the Roman numeral, like so:
```
{
"input": "XXI",
"output": 21
}
```

## Installation

To run the application locally, you'll need to have Node.js installed on your system. Then, follow these steps:

1. Clone the repository:
```
git clone https://github.com/your-username/roman-numeral-calculator-api.git
```
2. Install the dependencies:
```
cd roman-numeral-calculator-api
npm install
```
3. Start the server:
```
npm start
```

The server will start on `http://localhost:3000`.

## Development

To contribute to the project or make changes, follow the steps in the Installation section to set up the project on your local machine.

To run tests, use the following command:
```
npm test
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

This project was inspired by the need to convert Roman numerals to their numeric value in a simple and efficient way. It was made possible thanks to the power of Node.js and the convenience of Railway for hosting and deploying the application.
