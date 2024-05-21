# LinkScribe 📎

Effortlessly create, organize, and categorize web links using NLP (Natural Language Processing). Copy and paste links to extract content information, categorize, and search with custom keywords. The model is trained from scratch and used in the backend, connected by API.

## 🌟 Features

- **NLP-based Link Categorization**: Extract and categorize content from web links.
- **Custom Keywords Search**: Search your saved links with your custom keywords.
- **User-Friendly Interface**: Built with React and MUI for a smooth user experience.
- **Robust Backend**: Powered by a custom-trained ML model and served via REST API.

## 🚀 Technologies

- **Docker Compose**: Containerize and manage multi-container Docker applications.
- **Vagrant**: Manage development environments.
- **Kaggle**: Source and manage datasets.
- **Edge Impulse**: Develop machine learning models.
- **ML Flow**: Manage the ML lifecycle, including experimentation, reproducibility, and deployment.
- **API Rest**: Backend communication.
- **JavaScript**: Frontend development.
- **Python**: Backend development.
- **React**: Build user interfaces.
- **CSS & HTML**: Style and structure the web application.
- **MUI**: React components for faster and easier web development.

## 📦 Installation

### Prerequisites

- [Docker](https://www.docker.com/)
- [Vagrant](https://www.vagrantup.com/)

### Steps

1. **Clone the repository**
    ```sh
    git clone https://github.com/xlgabriel/linkscribe.git
    cd linkscribe
    ```

2. **Set up the environment**
    - Ensure Docker is running.
    - Start the Vagrant environment.
      ```sh
      vagrant up
      ```

3. **Build and run the Docker containers**
    ```sh
    docker-compose up --build
    ```

4. **Install frontend dependencies**
    ```sh
    cd frontend
    npm install
    ```

5. **Start the frontend application**
    ```sh
    npm start
    ```

## 🛠️ Usage

1. **Access the Application**
    - Open your browser and go to `http://localhost:3000`.

2. **Add Links**
    - Copy and paste links to extract content information automatically.

3. **Categorize and Search**
    - Use the search bar to find links with your custom keywords.

## 📊 Dataset

- The dataset used for training the NLP model can be found [here](dataset.csv).

## 🤝 Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

For any questions or feedback, please contact [gabriel.jeannot.personal@gmail.com](mailto:gabriel.jeannot.personal@gmail.com).
