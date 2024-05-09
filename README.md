# Portfolio Website

> This website application will enable the developer to showcase their skills in an easy and efficient way through its numerous features, such as:

- **Display an overview of different building projects with the ability to add feature descriptions, screenshots, videos, and useful links for planning, design, GitHub code, and deployed websites.

- **Display various competencies earned through professional experience or by building personal projects to continuously enhance the developer's expertise.

- **Generate a resume showcasing their skills, work history, and education, with the ability to display it online or download it as a PDF

## Project Links
- **Deployment Repository**: [https://github.com/allania7med11/deploy/](https://github.com/allania7med11/deploy/)
- **Deployment**: [https://about.effectivewebapp.com/](https://about.effectivewebapp.com/)


## Environment Configuration

This section provides information about the environment configuration for this project.

### Environment Variables

This project uses a `.env` file to configure its environment. You can create a `.env` file in the project root directory and set the following environment variables:

- `ENVIRONMENT`: Specifies the current environment (e.g., 'debug', 'dev', 'prod').
- `PORT`: Defines the port on which the application will listen.
- `COLLECTSTATIC`: Controls whether The container will generate a static folder upon instantiation.

Make sure to update these values to match your specific environment configuration. You can check `.env.example` for reference.

## Running the Project

To run the project using Docker Compose, follow these steps:

1. **Clone the Repository**: If you haven't already, clone the project repository to your local machine:

    ```shell
    git clone https://github.com/allania7med11/portfolio.git
    cd portfolio
    ```

2. **Environment Configuration**: Create a `.env` file with the necessary environment variables. You can use the provided `.env.example` as a template. Make sure to update the values to match your specific environment configuration.

    ```shell
    cp .env.example .env
    ```

3. **Build and Start Containers**: Run the following command to build and start the Docker containers using Docker Compose:

    ```shell
    docker-compose up -d
    ```

    The `-d` flag runs the containers in the background.

4. **Access the Application**: Once the containers are up and running, you can access the application in your web browser or by making API requests, depending on your project.

5. **Stopping the Containers**: To stop the containers when you're done, you can use the following command:

    ```shell
    docker-compose down
    ```

    This will stop and remove the containers.

Please note that these instructions assume you have Docker and Docker Compose installed on your machine. If not, make sure to install them before running the project.


---

## Contributors
- Allani Ahmed <allania7med11@gmail.com>

---
## License & copyright
© Allani Ahmed, Full Stack Web Developer


