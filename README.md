# Maya Docs

This repository hosts documentation and guides for users looking to use and build on the Maya Protocol.

## Overview

Maya Protocol is the first authenticity layer, leveraging zero-knowledge technology to offer seamless and secure authenticity verification of digital media content. Our approach eliminates the need for third-party intermediaries, ensuring content credibility for creators of high-value media content and combating AI-deepfakes.

## Table of Contents

- [Installation](#installation)
- [Local Development](#local-development)
- [Build](#build)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Maya Docs site, clone the repository and install the dependencies:

```sh
$ git clone https://github.com/0xmayalabs/maya-docs.git
$ cd maya-docs
$ npm install
```

## Local Development

To start the local development server, run:

```sh
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

To build the static site for production, run:

```sh
$ npm run build
```

The static files will be generated in the `build` directory.

## Deployment

The site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. This is handled by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`.

If you need to manually deploy the site, you can run:

```sh
$ npm run deploy
```

## Contributing

We welcome contributions to improve the documentation. To contribute:

1. Fork the repository.
2. Create a new branch with your changes: `git checkout -b my-feature-branch`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-feature-branch`
5. Create a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
