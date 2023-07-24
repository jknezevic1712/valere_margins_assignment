# Valere Margins Frontend Assignment

## Running locally

### Production environment

1. npm install
2. npm run build
3. npm run start

### Development environment

1. npm install
2. npm run dev

## Docker

### Creating image and running image

1. Run `docker build -t val_mar_assignment_image --build-arg NEXT_PUBLIC_TMDB_API_KEY="fb923a8e0313d439ee9c7242bedf43c8" ./` command in command line inside of project directory
2. Run `docker run -p 3000:3000 val_mar_assignment_image` command to run the image inside of a container
